import requests
if __name__ == '__main__':
    # r = requests.post('http://pc.washingpatrick.cn:23455/users/test',data={1:2333})
    # print(r.json())
    # r = requests.post('http://pc.washingpatrick.cn:23455/users/create',data={'sid':10010,'name':'zzy','password':'123456'})
    # print(r.json())
    r = requests.post('http://pc.washingpatrick.cn:23455/users/login',data={'sid':10010,'password':'123456'})
    print(r.json())