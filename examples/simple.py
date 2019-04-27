import glasto as gl

s = gl.Service(gl.DRIVER_PATH)
print("Service URL: ", s.url())
c = gl.Client(s, timeout=0.01)

if c.establishconnection('https://google.com'):
    print("success")
    print(c.attempts)
    print(c.timeout)

c.close()
