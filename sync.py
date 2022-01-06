# This source code is a part of Project Violet.
# Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.

def replace(gg):
    gg = gg.replace('"use strict";', '')
    gg = gg.replace("'use strict';", '')
    gg = gg.replace('return 4;', 'return o;')
    return gg

def syncv3():
    f = open('hitomi_get_image_list_v3_model.js', 'r')
    gg = open('gg.js', 'r')
    gv = open('gv.js', 'r')
    gg_m = open('0.txt', 'r')
    gg_b = open('1.txt', 'r')

    r = f.read().replace("%%1%", replace(gg.read()))
    r = r.replace("%%2%", gv.read())
    r = r.replace("%%gg.m%", gg_m.read())
    r = r.replace("%%gg.b%", gg_b.read())

    f.close()
    f = open('hitomi_get_image_list_v3.js', 'w+')
    f.write(r)
    f.close()

syncv3()
