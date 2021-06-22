from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os

# Create your views here.


#上传图片
def uploadpic(request):
    # 获取 上传的 图片信息
    img = request.FILES.get('file')

    # 获取上传图片的名称
    img_name = img.name

    # 获取后缀
    ext = os.path.splitext(img_name)[1]
    # 重新规定图片名称，图片类型
    img_name = f'avatar-{ext}'

    # 图片保存路径
    img_path = os.path.join(os.path.join(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'static'), 'bannerpic'),img_name)
    print(img_path)
    # img_path = os.path.join(settings.Banner_UPLOAD, img_name)

    # 写入 上传图片的 内容/Users/lcve/PycharmProjects/eshoping/static/bannerpic
    with open(img_path, 'wb') as fp:
        # 如果上传的图片非常大， 那么通过 img对象的 chunks() 方法 分割成多个片段来上传
        for chunk in img.chunks():
            fp.write(chunk)
    return HttpResponse("nice")


def getHome(request):
    return render(request,'../templates/home.html',{})

def test(request):
    return render(request, '../templates/uploadpic.html', {})

def news(request):
    return render(request,'../templates/news.html',{})

def contact(request):
    return render(request,'../templates/contact.html',{})

def about(request):
    return render(request,'../templates/about.html',{})

def product(request):
    return render(request,'../templates/products.html',{})

