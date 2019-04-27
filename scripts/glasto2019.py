import glasto as gl

DEPOSIT_19_URL = "https://glastonbury.seetickets.com/event/glastonbury-2019-deposits/worthy-farm/1300000"
PHRASES_TO_CHECK = ["maximum possible number of transactions per second",
                    "we couldn't find the event you were looking for",
                    "This page will automatically check for a space every",
                    "anticipated demand for tickets",
                    "registration"]

s = gl.Service(gl.DRIVER_PATH)
print("Service URL: ", s.url())
c = gl.Twenty19(s, timeout=2, refreshrate=0.01)

if c.establishconnection(DEPOSIT_19_URL, phrases_to_check=PHRASES_TO_CHECK):
    print("success")
    print(c.attempts)
    print(c.timeout)

# c.close()
