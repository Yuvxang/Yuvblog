# 湖北工业大学校园网自动登录脚本
from selenium.webdriver.common.by import By  # 解决browser.find_element_By_
from time import sleep
# 打开浏览器
from selenium.webdriver.chrome.options import Options  # 解决不打开浏览器问题
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService


# 校园网ip
login_ip = "http://10.168.6.10/"  # 湖工大校园网ip
# 配置
username = "542307090122"  # 账号
password = "9893494264Ywx!"  # 密码
yys = "@cmcc"  # 运营商（通过下方对应关系来确定符号）
# 联通-> "@cucc"
# 移动-> "@cmcc"
# 电信-> "@ctcc"
# 校园网->""

def login():
    # 配置浏览器
    options = Options()
    options.add_argument('headless')  # 隐藏浏览器
    # 获取驱动
    service = ChromeService(executable_path=r"D:\chrome-win64\chrome-win64\chrome.exe") # 具体地址为下载的浏览器驱动所在位置
    driver = webdriver.Chrome(service=service, options=options)
    # 启动浏览器
    driver.get(login_ip)

    # 设置定位等待时间(因网速原因需要等待网页加载好)
    driver.implicitly_wait(3)

    # 判断是否已经登录,已经登录则直接退出
    try:
        driver.find_element(By.ID, "logout")
        print("already login")
        driver.quit()
        return
    # 通过捕获"找不到登出元素异常"来判断未登录
    except Exception as e:
        print("no login")

    # 设置定位等待时间
    driver.implicitly_wait(1)

    # 定位输入账号处并输入账号
    driver.find_element(By.ID, "username").send_keys(username + yys)

    # 定位密码并输入密码
    driver.find_element(By.ID, "password").send_keys(password)

    # 定位登录并点击登录
    driver.find_element(By.ID, "login-account").click()

    # 设置定位等待时间
    sleep(1)

    # 关闭浏览器
    driver.quit()


if __name__ == '__main__':
    login()
