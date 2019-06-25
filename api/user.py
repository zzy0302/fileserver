import requests
url='http://pc.washingpatrick.cn:23455'
if __name__ == '__main__':
    #user test
    r = requests.post(url+'/users/test',data={1:2333})
    print(r.json())
    #user create test
    r = requests.post(url+'/users/create',data={'sid':10010,'name':'zzy','password':'123456'})
    print(r.json())
    #user login test
    r = requests.post(url+'/users/login',data={'sid':10010,'password':'123456'})
    print(r.json())