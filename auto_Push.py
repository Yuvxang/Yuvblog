from pywinauto import Application
import time

app = Application('uia').start("notepad.exe")

w = app['无标题 - Notepad']
time.sleep(30)
w.maximize()   # 最大化
time.sleep(30)
w.restore()     # 恢复
time.sleep(30)
w.close()     # 关闭