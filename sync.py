# This source code is a part of Project Violet.
# Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.

def syncv1():
    f = open('hitomi_get_image_list_v1_model.js', 'r')
    gg = open('gg.js', 'r')
    gv = open('gv.js', 'r')

    r = f.read().replace("%%1%", gg.read())
    r = r.replace("%%2%", gv.read())

    f.close()
    f = open('hitomi_get_image_list.js', 'w+')
    f.write(r)
    f.close()

def syncv2():
    f = open('hitomi_get_image_list_v2_model.js', 'r')
    gg = open('gg.js', 'r')
    gv = open('gv.js', 'r')

    r = f.read().replace("%%1%", gg.read())
    r = r.replace("%%2%", gv.read())

    f.close()
    f = open('hitomi_get_image_list_v2.js', 'w+')
    f.write(r)
    f.close()

def syncv3():
    f = open('hitomi_get_image_list_v3_model.js', 'r')
    gg = open('gg.js', 'r')
    gv = open('gv.js', 'r')

    r = f.read().replace("%%1%", gg.read())
    r = r.replace("%%2%", gv.read())

    f.close()
    f = open('hitomi_get_image_list_v3.js', 'w+')
    f.write(r)
    f.close()

syncv1()
syncv2()
syncv3()