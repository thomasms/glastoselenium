import multiprocessing as mp

import glasto as gl

DEPOSIT_19_URL = [
        "https://glastonbury.seetickets.com/event/glastonbury-2019-deposits/worthy-farm/1300000",
        # "https://glastonbury.seetickets.com/",
        "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-wednesday/worthy-farm/1300007",
        # "https://glastonbury.seetickets.com/event/addregistrations",
        "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-deposits/worthy-farm/1300002"
]
PHRASES_TO_CHECK = ["maximum possible number of transactions per second",
                    "we couldn't find the event you were looking for",
                    "This page will automatically check for a space every",
                    "anticipated demand for tickets",
                    "registration"]
INSTANCES = 3

def run(i):
    s = gl.Service(gl.DRIVER_PATH)
    c = gl.Twenty19(s, timeout=2, refreshrate=i*0.2)
    if c.establishconnection(DEPOSIT_19_URL[min(i, len(DEPOSIT_19_URL)-1)], phrases_to_check=PHRASES_TO_CHECK):
        print("success")
        print(c.attempts)
        print(c.timeout)

processes = []
for i in range(INSTANCES):
    p = mp.Process(target=run, args=(i,))
    processes.append(p)
    p.start()

for p in processes:
    p.join()