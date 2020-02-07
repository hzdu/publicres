#将当前目录生成JSDELIVR的CDN路径

import os,sys,getopt

# 提示字符串
egstr = 'Eg:python cdn.py -v <Github release version,默认版本号1.3>'

def createJsDeliverCDN(ver="1.3"):
   # github上的用户名、工程名、版本号
   github = "hzdu/publicres@v"+ver
   # jsdelivrCDN使用Github资源的路径
   jsdelivr = "https://cdn.jsdelivr.net/gh/"

   # 需要使用CDN链接的文件后缀
   ext=['.png','.css','gif','js','jpg','bmp','ico','jpeg']
   for root,dirs,files in os.walk("."):
   	for name in files:
   		if os.path.splitext(name)[1] in ext:
   			file = os.path.join(root, name)
   			file = file.replace("./","/")
   			file = jsdelivr + github + file
   			print(file)

def main(argv):
   ver = ''
   try:
      opts, args = getopt.getopt(argv,"hv:",["ver="])
   except getopt.GetoptError:
      print(egstr)
      sys.exit(2)
   for opt, arg in opts:
      if opt in ("-h", "--version"):
         print(egstr)
         sys.exit()
      elif opt in ("-v", "--ver"):
         createJsDeliverCDN(arg)

if __name__ == "__main__":
   if(len(sys.argv)==1):
      createJsDeliverCDN()
   else:
      main(sys.argv[1:])