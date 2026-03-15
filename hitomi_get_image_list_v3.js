// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 524:
case 1815:
case 352:
case 3511:
case 2198:
case 2536:
case 2811:
case 838:
case 1954:
case 3657:
case 282:
case 2457:
case 2978:
case 3613:
case 2455:
case 473:
case 3869:
case 51:
case 3060:
case 2889:
case 39:
case 1878:
case 1911:
case 2448:
case 3554:
case 2953:
case 2307:
case 2498:
case 2157:
case 3589:
case 2569:
case 2305:
case 2155:
case 2113:
case 1083:
case 674:
case 3765:
case 2076:
case 3767:
case 2429:
case 2787:
case 1992:
case 1796:
case 400:
case 822:
case 596:
case 218:
case 679:
case 3064:
case 2200:
case 2084:
case 3406:
case 2129:
case 2606:
case 904:
case 4039:
case 1719:
case 870:
case 6:
case 2334:
case 467:
case 2892:
case 3542:
case 2235:
case 368:
case 2237:
case 248:
case 3942:
case 2299:
case 3110:
case 635:
case 43:
case 980:
case 2063:
case 3083:
case 3172:
case 2322:
case 2002:
case 849:
case 1106:
case 1767:
case 3333:
case 2249:
case 2216:
case 1550:
case 484:
case 3410:
case 489:
case 3472:
case 1064:
case 2038:
case 1379:
case 1592:
case 1406:
case 819:
case 3368:
case 2388:
case 1657:
case 3114:
case 28:
case 127:
case 683:
case 2517:
case 741:
case 3989:
case 3262:
case 913:
case 2282:
case 3203:
case 1511:
case 152:
case 3853:
case 3815:
case 1554:
case 2614:
case 1589:
case 2578:
case 711:
case 3021:
case 3301:
case 301:
case 505:
case 2228:
case 392:
case 512:
case 1648:
case 1912:
case 2056:
case 3376:
case 2609:
case 3409:
case 1302:
case 3737:
case 1190:
case 671:
case 593:
case 1799:
case 3359:
case 3034:
case 3626:
case 3512:
case 1261:
case 3220:
case 1338:
case 4069:
case 1452:
case 1490:
case 2267:
case 66:
case 901:
case 263:
case 1749:
case 2812:
case 3570:
case 1895:
case 1232:
case 1897:
case 1144:
case 2958:
case 325:
case 3704:
case 2566:
case 3675:
case 1847:
case 2891:
case 1728:
case 3541:
case 1845:
case 698:
case 2874:
case 1991:
case 476:
case 1444:
case 2143:
case 3224:
case 2193:
case 1986:
case 2175:
case 3005:
case 3325:
case 2997:
case 1941:
case 2539:
case 3327:
case 3007:
case 1586:
case 3194:
case 2595:
case 3728:
case 2939:
case 3845:
case 3974:
case 1591:
case 2545:
case 3873:
case 72:
case 3897:
case 3471:
case 1866:
case 2547:
case 744:
case 304:
case 2762:
case 3782:
case 2966:
case 2558:
case 1574:
case 3941:
case 1618:
case 1327:
case 968:
case 1030:
case 2644:
case 3444:
case 1224:
case 2321:
case 1380:
case 637:
case 2731:
case 927:
case 3912:
case 841:
case 1409:
case 1735:
case 4015:
case 2033:
case 1376:
case 3363:
case 3152:
case 1737:
case 2383:
case 3490:
case 1285:
case 2690:
case 553:
case 143:
case 2296:
case 99:
case 2068:
case 811:
case 1626:
case 1512:
case 481:
case 1384:
case 895:
case 2281:
case 1220:
case 3261:
case 4078:
case 3452:
case 3440:
case 1488:
case 3434:
case 2634:
case 2479:
case 713:
case 1122:
case 2916:
case 1849:
case 2712:
case 236:
case 1090:
case 338:
case 2770:
case 303:
case 437:
case 2456:
case 3656:
case 89:
case 681:
case 743:
case 2537:
case 1633:
case 3009:
case 2535:
case 2949:
case 1816:
case 3292:
case 995:
case 1531:
case 911:
case 462:
case 3837:
case 3348:
case 1882:
case 3430:
case 1044:
case 559:
case 725:
case 1601:
case 554:
case 1094:
case 2605:
case 486:
case 3405:
case 816:
case 12:
case 2607:
case 2018:
case 3398:
case 2269:
case 3804:
case 197:
case 1747:
case 2791:
case 1828:
case 370:
case 1071:
case 114:
case 1795:
case 4067:
case 2093:
case 3313:
case 3355:
case 1773:
case 4065:
case 3903:
case 3107:
case 2077:
case 344:
case 1405:
case 122:
case 3094:
case 2314:
case 32:
case 2582:
case 1407:
case 3758:
case 2862:
case 157:
case 2803:
case 1430:
case 906:
case 2217:
case 3044:
case 2215:
case 1313:
case 314:
case 3795:
case 3773:
case 1105:
case 1107:
case 1962:
case 4081:
case 1130:
case 3747:
case 397:
case 170:
case 498:
case 3828:
case 3071:
case 3745:
case 319:
case 704:
case 138:
case 3090:
case 1931:
case 3899:
case 2549:
case 2900:
case 1434:
case 1679:
case 2599:
case 3849:
case 3040:
case 3052:
case 3816:
case 46:
case 665:
case 1835:
case 3188:
case 1134:
case 2168:
case 1009:
case 801:
case 526:
case 3633:
case 3422:
case 892:
case 1250:
case 1242:
case 1421:
case 3460:
case 2660:
case 727:
case 3241:
case 355:
case 3286:
case 483:
case 1924:
case 2789:
case 1778:
case 1014:
case 3291:
case 3908:
case 2754:
case 50:
case 111:
case 2239:
case 195:
case 2824:
case 1717:
case 2923:
case 2125:
case 3736:
case 3375:
case 79:
case 843:
case 1715:
case 1753:
case 3393:
case 716:
case 92:
case 2792:
case 1638:
case 1987:
case 3326:
case 944:
case 3659:
case 410:
case 949:
case 233:
case 3961:
case 2750:
case 880:
case 1010:
case 3587:
case 768:
case 746:
case 2567:
case 1663:
case 1602:
case 3270:
case 914:
case 3676:
case 2820:
case 2565:
case 2309:
case 689:
case 440:
case 684:
case 3865:
case 2885:
case 3867:
case 997:
case 1896:
case 1961:
case 957:
case 632:
case 2390:
case 106:
case 2352:
case 2340:
case 2967:
case 2519:
case 1684:
case 3638:
case 2965:
case 3985:
case 970:
case 804:
case 667:
case 1867:
case 1212:
case 2463:
case 4028:
case 3663:
case 3846:
case 3483:
case 523:
case 1270:
case 3602:
case 3881:
case 809:
case 1676:
case 2861:
case 2523:
case 1627:
case 1318:
case 1769:
case 3924:
case 3014:
case 3532:
case 2245:
case 628:
case 2621:
case 1460:
case 3421:
case 2295:
case 2273:
case 938:
case 545:
case 2297:
case 3823:
case 1375:
case 4016:
case 1736:
case 3508:
case 701:
case 1393:
case 3753:
case 311:
case 2808:
case 515:
case 673:
case 502:
case 2258:
case 530:
case 412:
case 203:
case 1549:
case 1599:
case 1935:
case 3479:
case 3306:
case 3634:
case 1468:
case 2434:
case 3500:
case 442:
case 651:
case 2835:
case 3949:
case 3535:
case 2250:
case 1516:
case 2009:
case 2329:
case 1433:
case 763:
case 3456:
case 1168:
case 2398:
case 750:
case 3607:
case 1904:
case 1582:
case 3605:
case 589:
case 1314:
case 3774:
case 1253:
case 1215:
case 456:
case 3236:
case 3630:
case 1862:
case 2766:
case 2107:
case 2962:
case 2903:
case 2357:
case 4085:
case 3504:
case 3741:
case 3075:
case 2105:
case 777:
case 2355:
case 1528:
case 4087:
case 1101:
case 53:
case 1351:
case 2254:
case 2130:
case 3269:
case 3215:
case 369:
case 933:
case 1236:
case 1630:
case 3217:
case 908:
case 567:
case 3862:
case 3904:
case 1018:
case 2562:
case 3582:
case 364:
case 3101:
case 1043:
case 219:
case 2071:
case 2745:
case 3351:
case 3278:
case 297:
case 532:
case 500:
case 4061:
case 1077:
case 1982:
case 2797:
case 1741:
case 3528:
case 2052:
case 1916:
case 2040:
case 1712:
case 4032:
case 985:
case 3599:
case 1479:
case 3937:
case 3468:
case 920:
case 1634:
case 691:
case 88:
case 630:
case 1770:
case 3549:
case 1535:
case 3831:
case 1999:
case 4008:
case 528:
case 3433:
case 1537:
case 839:
case 3168:
case 2188:
case 972:
case 424:
case 44:
case 645:
case 2816:
case 1245:
case 3425:
case 1247:
case 1523:
case 2627:
case 2318:
case 3266:
case 2286:
case 1297:
case 1344:
case 1832:
case 3660:
case 2680:
case 1295:
case 2393:
case 3013:
case 863:
case 2375:
case 2932:
case 2736:
case 3057:
case 3824:
case 1258:
case 17:
case 3711:
case 1808:
case 2343:
case 2160:
case 3946:
case 3742:
case 2961:
case 333:
case 3459:
case 3176:
case 2006:
case 3484:
case 1102:
case 850:
case 2684:
case 3664:
case 718:
case 3996:
case 2867:
case 659:
case 1581:
case 3159:
case 3309:
case 654:
case 2676:
case 3476:
case 3919:
case 748:
case 694:
case 4062:
case 1176:
case 2072:
case 3519:
case 3102:
case 3967:
case 1996:
case 1792:
case 987:
case 1742:
case 2819:
case 3390:
case 133:
case 2920:
case 1476:
case 3861:
case 1820:
case 1565:
case 2881:
case 3596:
case 3402:
case 1184:
case 3683:
case 2483:
case 2846:
case 1567:
case 2663:
case 1919:
case 3463:
case 2896:
case 647:
case 3581:
case 1885:
case 1266:
case 2823:
case 78:
case 3344:
case 1480:
case 2421:
case 626:
case 3245:
case 1425:
case 1754:
case 2778:
case 3247:
case 1427:
case 1098:
case 1789:
case 3523:
case 185:
case 1824:
case 172:
case 2051:
case 734:
case 1180:
case 211:
case 2715:
case 2753:
case 1055:
case 1013:
case 1125:
case 1923:
case 1057:
case 1969:
case 3455:
case 3413:
case 1517:
case 18:
case 227:
case 1553:
case 426:
case 1708:
case 3198:
case 252:
case 1578:
case 134:
case 3113:
case 3025:
case 772:
case 1614:
case 2589:
case 1936:
case 3157:
case 4012:
case 3915:
case 3027:
case 3953:
case 3448:
case 3330:
case 1228:
case 29:
case 375:
case 2060:
case 2869:
case 139:
case 216:
case 887:
case 3720:
case 1761:
case 4091:
case 417:
case 1299:
case 2356:
case 3787:
case 733:
case 3076:
case 4086:
case 494:
case 1322:
case 2765:
case 348:
case 3237:
case 268:
case 366:
case 3235:
case 2542:
case 931:
case 447:
case 3059:
case 3334:
case 3606:
case 3129:
case 2406:
case 3084:
case 3200:
case 2992:
case 3249:
case 1076:
case 869:
case 3063:
case 1785:
case 2110:
case 118:
case 607:
case 950:
case 1720:
case 2781:
case 2746:
case 2950:
case 2942:
case 1842:
case 3388:
case 2719:
case 2231:
case 1606:
case 1084:
case 586:
case 454:
case 459:
case 2410:
case 1237:
case 148:
case 660:
case 1235:
case 0:
case 977:
case 3216:
case 562:
case 2853:
case 3651:
case 2262:
case 3969:
case 1455:
case 761:
case 1978:
case 38:
case 3708:
case 2954:
case 1811:
case 3553:
case 1457:
case 1536:
case 1448:
case 537:
case 3228:
case 1330:
case 2911:
case 1854:
case 2878:
case 2151:
case 339:
case 1080:
case 963:
case 1204:
case 1155:
case 1113:
case 1569:
case 77:
case 1157:
case 1953:
case 1498:
case 1731:
case 402:
case 430:
case 820:
case 415:
case 61:
case 491:
case 2737:
case 1033:
case 98:
case 3056:
case 2570:
case 363:
case 243:
case 2287:
case 445:
case 939:
case 3267:
case 2285:
case 624:
case 1652:
case 2220:
case 3426:
case 2359:
case 1246:
case 280:
case 808:
case 2675:
case 3566:
case 5:
case 2693:
case 225:
case 423:
case 2866:
case 1547:
case 3443:
case 3886:
case 1223:
case 3841:
case 787:
case 350:
case 4092:
case 1558:
case 2325:
case 2005:
case 1703:
case 3175:
case 2224:
case 3143:
case 2380:
case 1644:
case 3947:
case 190:
case 2471:
case 2144:
case 656:
case 1841:
case 150:
case 2895:
case 540:
case 688:
case 2974:
case 3573:
case 1477:
case 1891:
case 3939:
case 1958:
case 1493:
case 2858:
case 3321:
case 1360:
case 3001:
case 1143:
case 2444:
case 3644:
case 390:
case 535:
case 966:
case 2208:
case 948:
case 1945:
case 1874:
case 510:
case 1539:
case 1177:
case 1995:
case 2941:
case 3694:
case 1175:
case 1997:
case 1193:
case 3966:
case 2782:
case 2152:
case 982:
case 2363:
case 2140:
case 2022:
case 2302:
case 3033:
case 861:
case 1609:
case 1126:
case 1056:
case 2912:
case 2970:
case 2190:
case 605:
case 1364:
case 3281:
case 1870:
case 1426:
case 1079:
case 2799:
case 2749:
case 975:
case 163:
case 451:
case 3690:
case 3646:
case 3681:
case 999:
case 3461:
case 3240:
case 3252:
case 3290:
case 1485:
case 3583:
case 1487:
case 2563:
case 687:
case 2984:
case 3696:
case 2502:
case 2119:
case 821:
case 1120:
case 2710:
case 1859:
case 1185:
case 2772:
case 1983:
case 1366:
case 71:
case 2017:
case 3373:
case 1424:
case 4033:
case 1755:
case 2053:
case 2015:
case 3395:
case 3345:
case 115:
case 102:
case 130:
case 3347:
case 191:
case 3358:
case 3108:
case 3432:
case 2632:
case 1339:
case 2423:
case 4068:
case 2714:
case 1124:
case 1827:
case 555:
case 729:
case 145:
case 351:
case 3521:
case 1345:
case 1294:
case 511:
case 3921:
case 391:
case 1408:
case 853:
case 3757:
case 1244:
case 4056:
case 2341:
case 1395:
case 3755:
case 3424:
case 463:
case 2293:
case 265:
case 2275:
case 3560:
case 1521:
case 3825:
case 151:
case 3748:
case 2277:
case 2525:
case 3880:
case 2069:
case 1623:
case 3054:
case 3339:
case 4079:
case 1271:
case 2465:
case 3665:
case 2576:
case 2467:
case 756:
case 3487:
case 1583:
case 2687:
case 807:
case 1696:
case 788:
case 1863:
case 1802:
case 3420:
case 1461:
case 3876:
case 1681:
case 3185:
case 954:
case 3092:
case 3187:
case 2167:
case 860:
case 1619:
case 3983:
case 3564:
case 477:
case 1838:
case 3050:
case 3859:
case 923:
case 2182:
case 3315:
case 3162:
case 3353:
case 3907:
case 1775:
case 1041:
case 3103:
case 2073:
case 1336:
case 3628:
case 3317:
case 2428:
case 194:
case 1086:
case 199:
case 570:
case 23:
case 2047:
case 3930:
case 117:
case 608:
case 3682:
case 2482:
case 3251:
case 2794:
case 1507:
case 896:
case 3403:
case 354:
case 4038:
case 3801:
case 1505:
case 2058:
case 522:
case 2744:
case 557:
case 1856:
case 1600:
case 2822:
case 915:
case 1206:
case 3431:
case 902:
case 2631:
case 2149:
case 2416:
case 3616:
case 620:
case 2979:
case 81:
case 1988:
case 2533:
case 126:
case 3934:
case 2888:
case 1879:
case 439:
case 3649:
case 3131:
case 434:
case 1726:
case 793:
case 3588:
case 1534:
case 84:
case 2740:
case 1616:
case 3635:
case 2709:
case 1934:
case 753:
case 3856:
case 661:
case 1833:
case 1272:
case 3206:
case 1431:
case 3726:
case 3922:
case 4027:
case 3534:
case 2579:
case 2392:
case 2350:
case 2834:
case 3070:
case 4080:
case 2229:
case 399:
case 519:
case 3091:
case 317:
case 1214:
case 1930:
case 232:
case 200:
case 597:
case 1353:
case 1315:
case 2404:
case 3793:
case 707:
case 3336:
case 3041:
case 3775:
case 514:
case 394:
case 2248:
case 3777:
case 2805:
case 549:
case 2257:
case 3530:
case 2255:
case 2213:
case 1462:
case 3074:
case 2830:
case 760:
case 4059:
case 1251:
case 154:
case 1378:
case 4084:
case 3718:
case 274:
case 1474:
case 2082:
case 1639:
case 2173:
case 3003:
case 2844:
case 2975:
case 3544:
case 1818:
case 956:
case 3701:
case 279:
case 2145:
case 1260:
case 1174:
case 580:
case 1994:
case 525:
case 759:
case 3697:
case 2:
case 1843:
case 3647:
case 1944:
case 3571:
case 1491:
case 2445:
case 3645:
case 666:
case 648:
case 2202:
case 1826:
case 3590:
case 2840:
case 912:
case 3768:
case 2788:
case 3319:
case 3540:
case 3552:
case 3909:
case 1412:
case 513:
case 47:
case 675:
case 1170:
case 3381:
case 2238:
case 3346:
case 1952:
case 2016:
case 1940:
case 1367:
case 851:
case 1509:
case 1112:
case 802:
case 1768:
case 3779:
case 815:
case 1552:
case 485:
case 283:
case 3412:
case 2612:
case 353:
case 726:
case 3826:
case 2670:
case 3470:
case 1590:
case 3756:
case 3940:
case 3952:
case 1396:
case 3367:
case 929:
case 2035:
case 3365:
case 3112:
case 634:
case 4057:
case 2037:
case 2385:
case 193:
case 1381:
case 3990:
case 1031:
case 2259:
case 2730:
case 408:
case 509:
case 210:
case 235:
case 3474:
case 2674:
case 2518:
case 717:
case 1658:
case 2166:
case 1594:
case 3893:
case 1571:
case 2543:
case 3491:
case 240:
case 360:
case 1645:
case 1695:
case 4029:
case 3174:
case 121:
case 1221:
case 2324:
case 2139:
case 2577:
case 2593:
case 878:
case 2686:
case 3843:
case 3486:
case 2575:
case 3666:
case 907:
case 156:
case 469:
case 3510:
case 2233:
case 3222:
case 1442:
case 1450:
case 1784:
case 2929:
case 3738:
case 960:
case 1234:
case 3288:
case 1829:
case 1020:
case 677:
case 1150:
case 1142:
case 1085:
case 1337:
case 3763:
case 1192:
case 1087:
case 1972:
case 3316:
case 2096:
case 3514:
case 1489:
case 2117:
case 70:
case 3678:
case 1725:
case 1454:
case 2023:
case 2303:
case 2115:
case 2362:
case 105:
case 1951:
case 2814:
case 527:
case 1189:
case 3328:
case 2417:
case 751:
case 2201:
case 1024:
case 3615:
case 2453:
case 329:
case 324:
case 1205:
case 1857:
case 663:
case 1207:
case 1813:
case 3551:
case 3780:
case 312:
case 3111:
case 11:
case 2469:
case 791:
case 3489:
case 3727:
case 1032:
case 1678:
case 2598:
case 3725:
case 4026:
case 2611:
case 262:
case 3857:
case 993:
case 1551:
case 3855:
case 3813:
case 1328:
case 3230:
case 3914:
case 129:
case 3024:
case 2692:
case 3492:
case 899:
case 3784:
case 286:
case 1399:
case 817:
case 3759:
case 1572:
case 1349:
case 258:
case 356:
case 1222:
case 2642:
case 2529:
case 2065:
case 3192:
case 1702:
case 3776:
case 3972:
case 3335:
case 847:
case 4075:
case 1288:
case 4043:
case 3300:
case 3020:
case 3829:
case 3142:
case 3150:
case 958:
case 616:
case 135:
case 2701:
case 4010:
case 577:
case 3943:
case 2658:
case 1166:
case 3458:
case 2594:
case 1707:
case 3975:
case 73:
case 1518:
case 2323:
case 3173:
case 1705:
case 1439:
case 1674:
case 2062:
case 2645:
case 646:
case 1691:
case 140:
case 550:
case 2571:
case 2647:
case 789:
case 1227:
case 1686:
case 1575:
case 3158:
case 3:
case 2697:
case 3308:
case 3497:
case 3473:
case 1641:
case 2695:
case 1280:
case 3918:
case 2221:
case 1004:
case 1526:
case 627:
case 2552:
case 2768:
case 3840:
case 3049:
case 652:
case 1276:
case 2590:
case 441:
case 563:
case 3926:
case 1035:
case 1387:
case 3016:
case 2396:
case 2346:
case 4051:
case 2031:
case 1259:
case 411:
case 1320:
case 3361:
case 495:
case 881:
case 1840:
case 1852:
case 3276:
case 2826:
case 455:
case 1263:
case 3526:
case 383:
case 2779:
case 1788:
case 3259:
case 2990:
case 2170:
case 3809:
case 2264:
case 1238:
case 1361:
case 3000:
case 96:
case 3385:
case 2365:
case 1722:
case 865:
case 2367:
case 773:
case 2952:
case 2940:
case 2756:
case 2186:
case 1993:
case 1458:
case 3166:
case 1844:
case 1197:
case 1332:
case 1975:
case 3439:
case 3705:
case 1173:
case 2141:
case 700:
case 174:
case 1195:
case 3674:
case 4006:
case 1977:
case 2818:
case 590:
case 179:
case 310:
case 1147:
case 3730:
case 3466:
case 1:
case 2666:
case 2843:
case 3575:
case 2486:
case 3686:
case 1028:
case 1308:
case 2441:
case 3577:
case 3139:
case 1473:
case 767:
case 2260:
case 1918:
case 2174:
case 3280:
case 2491:
case 3691:
case 2875:
case 2944:
case 186:
case 2399:
case 3019:
case 4094:
case 3810:
case 2572:
case 680:
case 2738:
case 42:
case 625:
case 83:
case 1650:
case 1806:
case 3872:
case 935:
case 566:
case 4044:
case 414:
case 2702:
case 2906:
case 1529:
case 497:
case 2061:
case 3081:
case 419:
case 518:
case 1279:
case 2288:
case 398:
case 3046:
case 3268:
case 296:
case 3331:
case 21:
case 1548:
case 371:
case 1760:
case 2382:
case 3362:
case 3153:
case 3303:
case 1136:
case 3478:
case 3117:
case 4040:
case 3955:
case 983:
case 1689:
case 781:
case 36:
case 24:
case 3453:
case 3998:
case 3415:
case 2653:
case 582:
case 1436:
case 2328:
case 3417:
case 2008:
case 1513:
case 3851:
case 1153:
case 1362:
case 1115:
case 3136:
case 3598:
case 1023:
case 534:
case 2727:
case 2489:
case 2669:
case 1913:
case 438:
case 1814:
case 3548:
case 337:
case 212:
case 205:
case 1721:
case 3760:
case 2898:
case 1201:
case 2304:
case 4009:
case 3557:
case 873:
case 765:
case 1453:
case 2636:
case 3436:
case 2914:
case 1851:
case 3513:
case 3555:
case 2207:
case 2813:
case 16:
case 2205:
case 2857:
case 3611:
case 3806:
case 256:
case 358:
case 1872:
case 1233:
case 3256:
case 1810:
case 288:
case 1019:
case 800:
case 422:
case 386:
case 1929:
case 3692:
case 609:
case 2142:
case 2829:
case 1081:
case 3279:
case 1046:
case 198:
case 470:
case 1096:
case 2087:
case 2972:
case 2776:
case 9:
case 2337:
case 2192:
case 3065:
case 604:
case 1783:
case 3496:
case 1467:
case 2583:
case 879:
case 1465:
case 1576:
case 1685:
case 2240:
case 3661:
case 2681:
case 2802:
case 1226:
case 657:
case 900:
case 1584:
case 3538:
case 404:
case 1902:
case 3772:
case 3976:
case 1312:
case 3710:
case 8:
case 1864:
case 967:
case 2960:
case 603:
case 20:
case 1391:
case 3751:
case 638:
case 3927:
case 3053:
case 771:
case 2373:
case 1341:
case 3608:
case 1386:
case 1277:
case 2521:
case 251:
case 1275:
case 973:
case 1374:
case 3714:
case 1527:
case 4088:
case 3078:
case 76:
case 2108:
case 1525:
case 381:
case 2358:
case 1069:
case 1860:
case 3821:
case 3624:
case 2755:
case 1927:
case 1123:
case 2757:
case 1017:
case 1608:
case 883:
case 230:
case 413:
case 3243:
case 2339:
case 762:
case 1423:
case 3527:
case 1714:
case 1632:
case 1078:
case 3860:
case 181:
case 3525:
case 561:
case 2825:
case 365:
case 3293:
case 443:
case 649:
case 1481:
case 2420:
case 3226:
case 1119:
case 1496:
case 2729:
case 2487:
case 758:
case 3938:
case 223:
case 425:
case 3467:
case 3685:
case 3576:
case 2485:
case 3465:
case 2859:
case 2042:
case 619:
case 2120:
case 697:
case 2209:
case 2884:
case 3963:
case 1196:
case 1419:
case 3902:
case 3706:
case 2187:
case 1976:
case 3559:
case 3771:
case 3045:
case 1311:
case 2930:
case 132:
case 33:
case 1248:
case 3097:
case 2317:
case 3073:
case 2907:
case 2353:
case 3182:
case 1404:
case 1807:
case 1255:
case 1213:
case 3744:
case 3501:
case 1805:
case 384:
case 3058:
case 1389:
case 2801:
case 254:
case 3128:
case 2403:
case 1354:
case 2251:
case 3482:
case 2462:
case 3662:
case 1437:
case 1556:
case 1709:
case 1435:
case 2522:
case 3416:
case 3199:
case 3149:
case 3631:
case 2431:
case 2833:
case 2272:
case 3752:
case 86:
case 1137:
case 3956:
case 3568:
case 1933:
case 1135:
case 2699:
case 2649:
case 4021:
case 1229:
case 965:
case 173:
case 492:
case 2868:
case 1631:
case 1149:
case 452:
case 2988:
case 3556:
case 1979:
case 3435:
case 3709:
case 1416:
case 427:
case 49:
case 695:
case 373:
case 3100:
case 3834:
case 611:
case 3350:
case 1888:
case 3137:
case 1740:
case 1752:
case 981:
case 1568:
case 3135:
case 2726:
case 1116:
case 710:
case 2604:
case 3404:
case 735:
case 1095:
case 1771:
case 2743:
case 300:
case 217:
case 3311:
case 1047:
case 3298:
case 3901:
case 2718:
case 4064:
case 3389:
case 189:
case 2505:
case 1058:
case 1794:
case 740:
case 2507:
case 3830:
case 2074:
case 1662:
case 3104:
case 1482:
case 2530:
case 3255:
case 3807:
case 367:
case 1744:
case 247:
case 3257:
case 569:
case 1501:
case 468:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1773554401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,];
var gg_b = "1773554401/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
