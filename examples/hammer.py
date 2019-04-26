import glasto as gl

s = gl.Service(gl.DRIVER_PATH)
print("Service URL: ", s.url())
c = gl.RefresherClient(s, timeout=2, refreshrate=0.1)

if c.establishconnection('https://google.com', phrases_to_check=["google"]):
    print("success")
    print(c.attempts)
    print(c.timeout)

c.close()