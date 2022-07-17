// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
var o = 1;
switch (g) {
case 200:
case 1963:
case 2845:
case 1077:
case 711:
case 2444:
case 610:
case 2963:
case 1284:
case 3002:
case 37:
case 2433:
case 707:
case 585:
case 972:
case 1672:
case 3638:
case 1514:
case 3706:
case 1382:
case 307:
case 546:
case 553:
case 71:
case 2000:
case 3735:
case 214:
case 420:
case 2586:
case 3443:
case 1700:
case 2938:
case 3912:
case 929:
case 3134:
case 3159:
case 912:
case 3389:
case 169:
case 3321:
case 2796:
case 2170:
case 1844:
case 2340:
case 3766:
case 3878:
case 3888:
case 3004:
case 3371:
case 1954:
case 2495:
case 15:
case 3121:
case 424:
case 3412:
case 3193:
case 2212:
case 3305:
case 668:
case 3357:
case 1152:
case 2188:
case 1912:
case 3842:
case 652:
case 2405:
case 1016:
case 3392:
case 2509:
case 3368:
case 1789:
case 3376:
case 2091:
case 3658:
case 269:
case 1481:
case 2393:
case 1631:
case 1815:
case 4057:
case 778:
case 574:
case 4038:
case 1469:
case 1315:
case 29:
case 3025:
case 3299:
case 2413:
case 3917:
case 3654:
case 165:
case 3460:
case 3275:
case 3310:
case 1138:
case 51:
case 470:
case 44:
case 1090:
case 1516:
case 1158:
case 1191:
case 628:
case 2276:
case 3570:
case 2676:
case 2402:
case 3399:
case 1091:
case 3236:
case 2222:
case 1625:
case 1796:
case 1941:
case 613:
case 377:
case 3395:
case 136:
case 2874:
case 3676:
case 982:
case 3116:
case 3474:
case 3723:
case 380:
case 1797:
case 3000:
case 3239:
case 1856:
case 1430:
case 114:
case 618:
case 3104:
case 1652:
case 3981:
case 2508:
case 1165:
case 2410:
case 12:
case 3145:
case 1541:
case 891:
case 1271:
case 2761:
case 1539:
case 78:
case 2221:
case 3038:
case 834:
case 1206:
case 817:
case 476:
case 3133:
case 3564:
case 3428:
case 3461:
case 2905:
case 2941:
case 1306:
case 2082:
case 2746:
case 3437:
case 410:
case 4086:
case 1560:
case 659:
case 630:
case 2607:
case 1742:
case 1100:
case 2062:
case 1393:
case 1247:
case 1812:
case 1397:
case 3569:
case 2473:
case 3085:
case 2492:
case 52:
case 281:
case 2858:
case 1528:
case 3814:
case 1754:
case 1390:
case 3819:
case 987:
case 848:
case 680:
case 796:
case 3012:
case 2162:
case 396:
case 3585:
case 3350:
case 2708:
case 1860:
case 341:
case 2385:
case 1101:
case 2759:
case 4013:
case 3664:
case 2952:
case 2033:
case 3627:
case 3657:
case 2888:
case 1026:
case 3828:
case 226:
case 1305:
case 1095:
case 1507:
case 3691:
case 3219:
case 3288:
case 3948:
case 2709:
case 682:
case 3092:
case 3588:
case 305:
case 2541:
case 1969:
case 1545:
case 2809:
case 1069:
case 2167:
case 353:
case 1610:
case 1229:
case 1710:
case 2356:
case 343:
case 239:
case 3129:
case 3556:
case 220:
case 2754:
case 1230:
case 184:
case 291:
case 1568:
case 134:
case 1189:
case 3971:
case 223:
case 235:
case 451:
case 744:
case 860:
case 3750:
case 3688:
case 391:
case 1851:
case 438:
case 850:
case 3405:
case 3916:
case 339:
case 959:
case 958:
case 3463:
case 467:
case 1832:
case 74:
case 916:
case 2846:
case 683:
case 3210:
case 3307:
case 3586:
case 3521:
case 4072:
case 445:
case 3318:
case 3643:
case 308:
case 1045:
case 858:
case 3213:
case 650:
case 555:
case 2552:
case 3543:
case 2660:
case 2755:
case 1761:
case 4027:
case 3151:
case 2515:
case 1557:
case 485:
case 2795:
case 1124:
case 1226:
case 1460:
case 1699:
case 1356:
case 945:
case 17:
case 4052:
case 2722:
case 977:
case 975:
case 2073:
case 1848:
case 754:
case 1461:
case 2649:
case 2059:
case 903:
case 1916:
case 2260:
case 94:
case 2817:
case 3290:
case 1188:
case 3497:
case 3685:
case 371:
case 1347:
case 2464:
case 1025:
case 2223:
case 190:
case 3372:
case 2378:
case 1680:
case 2063:
case 3755:
case 290:
case 2074:
case 2837:
case 2290:
case 3335:
case 3062:
case 2186:
case 3559:
case 479:
case 3612:
case 93:
case 862:
case 2563:
case 2520:
case 883:
case 104:
case 2643:
case 925:
case 2555:
case 3508:
case 617:
case 2517:
case 3576:
case 1432:
case 3334:
case 1871:
case 4090:
case 2798:
case 3110:
case 373:
case 3319:
case 189:
case 490:
case 1604:
case 1768:
case 1627:
case 2095:
case 3404:
case 2637:
case 35:
case 868:
case 1937:
case 956:
case 172:
case 3269:
case 2366:
case 2125:
case 1054:
case 1681:
case 1819:
case 2583:
case 579:
case 2094:
case 2648:
case 2782:
case 1735:
case 1826:
case 57:
case 1968:
case 4074:
case 3899:
case 1097:
case 138:
case 886:
case 3921:
case 3223:
case 4060:
case 1814:
case 627:
case 1944:
case 562:
case 861:
case 4049:
case 266:
case 2372:
case 1200:
case 2477:
case 2054:
case 1298:
case 3488:
case 2741:
case 2609:
case 2787:
case 1231:
case 3222:
case 2184:
case 3247:
case 3195:
case 1267:
case 3147:
case 842:
case 3289:
case 4055:
case 3459:
case 508:
case 894:
case 3672:
case 665:
case 548:
case 602:
case 1150:
case 4051:
case 2596:
case 623:
case 1999:
case 91:
case 1075:
case 1730:
case 163:
case 557:
case 349:
case 832:
case 1500:
case 1575:
case 2068:
case 714:
case 586:
case 1612:
case 2737:
case 2530:
case 2943:
case 2099:
case 1957:
case 2672:
case 1737:
case 1715:
case 143:
case 3692:
case 561:
case 4061:
case 569:
case 1303:
case 1176:
case 3194:
case 3462:
case 1319:
case 2614:
case 141:
case 2698:
case 2791:
case 1378:
case 1118:
case 800:
case 3603:
case 3783:
case 648:
case 661:
case 2967:
case 2233:
case 2587:
case 3617:
case 2142:
case 1439:
case 2786:
case 3958:
case 3716:
case 3967:
case 127:
case 1687:
case 2511:
case 645:
case 3234:
case 3784:
case 1043:
case 881:
case 3255:
case 324:
case 1155:
case 2453:
case 1601:
case 3542:
case 1931:
case 3745:
case 3338:
case 3908:
case 3418:
case 1423:
case 137:
case 1889:
case 2121:
case 2901:
case 2370:
case 2315:
case 554:
case 2071:
case 974:
case 4062:
case 20:
case 854:
case 2097:
case 1767:
case 2434:
case 3438:
case 3918:
case 430:
case 2026:
case 3550:
case 3690:
case 30:
case 1998:
case 1816:
case 1011:
case 696:
case 3880:
case 3291:
case 3105:
case 3547:
case 2050:
case 3953:
case 996:
case 1711:
case 3466:
case 919:
case 2735:
case 2411:
case 3906:
case 2958:
case 3515:
case 2122:
case 2916:
case 474:
case 2917:
case 1458:
case 633:
case 2319:
case 3253:
case 42:
case 997:
case 1128:
case 2781:
case 3518:
case 1490:
case 1752:
case 2700:
case 3164:
case 3500:
case 3355:
case 3525:
case 760:
case 953:
case 3093:
case 355:
case 1140:
case 2159:
case 3345:
case 3571:
case 3266:
case 463:
case 3663:
case 2166:
case 3287:
case 249:
case 3792:
case 402:
case 716:
case 656:
case 3263:
case 3465:
case 1660:
case 535:
case 1714:
case 3245:
case 2808:
case 1900:
case 564:
case 3347:
case 1782:
case 1343:
case 1650:
case 2904:
case 1607:
case 1891:
case 875:
case 3579:
case 2084:
case 1202:
case 820:
case 3200:
case 4014:
case 947:
case 2626:
case 3786:
case 1135:
case 2955:
case 1719:
case 1881:
case 3208:
case 205:
case 766:
case 374:
case 1621:
case 949:
case 3387:
case 4073:
case 1586:
case 2318:
case 2561:
case 1348:
case 2994:
case 3527:
case 1310:
case 2732:
case 3331:
case 2388:
case 286:
case 3175:
case 2031:
case 2714:
case 1455:
case 16:
case 2652:
case 1119:
case 658:
case 3495:
case 3687:
case 11:
case 1240:
case 1875:
case 2602:
case 763:
case 2360:
case 2546:
case 1582:
case 434:
case 2723:
case 2414:
case 2854:
case 2451:
case 3986:
case 119:
case 3029:
case 3169:
case 3279:
case 75:
case 2185:
case 3189:
case 3774:
case 1286:
case 3273:
case 3516:
case 1037:
case 1398:
case 2287:
case 776:
case 2857:
case 3117:
case 720:
case 2989:
case 1935:
case 1665:
case 2784:
case 72:
case 3737:
case 1565:
case 914:
case 3680:
case 1877:
case 1326:
case 1358:
case 3221:
case 1773:
case 1080:
case 1157:
case 3782:
case 3364:
case 816:
case 3955:
case 2435:
case 1702:
case 2999:
case 822:
case 407:
case 1248:
case 2767:
case 601:
case 196:
case 1161:
case 1228:
case 3677:
case 2966:
case 3082:
case 3010:
case 584:
case 2924:
case 1121:
case 1769:
case 454:
case 3578:
case 3390:
case 1403:
case 3722:
case 1335:
case 3429:
case 3184:
case 3451:
case 1798:
case 3143:
case 1683:
case 2100:
case 1416:
case 3420:
case 1402:
case 1141:
case 2852:
case 126:
case 543:
case 3940:
case 1427:
case 3379:
case 3356:
case 2882:
case 1632:
case 258:
case 2855:
case 251:
case 1915:
case 1476:
case 3401:
case 647:
case 1966:
case 1840:
case 1434:
case 3302:
case 3482:
case 2581:
case 2625:
case 2547:
case 3187:
case 908:
case 322:
case 1696:
case 3022:
case 3113:
case 964:
case 2078:
case 1928:
case 1529:
case 2075:
case 2298:
case 3308:
case 4089:
case 1843:
case 1691:
case 2740:
case 1772:
case 851:
case 1113:
case 2942:
case 3988:
case 1285:
case 1938:
case 3257:
case 2814:
case 2196:
case 3344:
case 2027:
case 3932:
case 3747:
case 1098:
case 2861:
case 2702:
case 1259:
case 2471:
case 399:
case 3563:
case 2475:
case 237:
case 1619:
case 2331:
case 466:
case 3081:
case 1801:
case 2694:
case 1917:
case 1985:
case 231:
case 2959:
case 3225:
case 2760:
case 1962:
case 524:
case 2153:
case 1115:
case 3341:
case 2204:
case 303:
case 667:
case 461:
case 187:
case 3548:
case 2836:
case 3304:
case 2536:
case 2422:
case 3522:
case 358:
case 3064:
case 3337:
case 3991:
case 1834:
case 3483:
case 2314:
case 3729:
case 3754:
case 2725:
case 2148:
case 185:
case 819:
case 2146:
case 3886:
case 2189:
case 2913:
case 3259:
case 3827:
case 1412:
case 3501:
case 2164:
case 993:
case 1023:
case 1781:
case 1608:
case 3770:
case 1020:
case 2556:
case 3558:
case 3141:
case 2620:
case 578:
case 2103:
case 3352:
case 2710:
case 2407:
case 1179:
case 1599:
case 2051:
case 459:
case 1600:
case 3818:
case 167:
case 1300:
case 2792:
case 252:
case 1613:
case 3855:
case 1736:
case 3999:
case 2079:
case 2497:
case 3510:
case 2147:
case 2657:
case 2597:
case 3682:
case 1317:
case 793:
case 3506:
case 3645:
case 2488:
case 2418:
case 1734:
case 246:
case 556:
case 177:
case 1039:
case 4032:
case 2374:
case 3704:
case 1244:
case 2986:
case 1646:
case 2389:
case 2140:
case 1211:
case 2423:
case 2234:
case 1686:
case 1869:
case 1067:
case 202:
case 2549:
case 443:
case 122:
case 1323:
case 1581:
case 3013:
case 1148:
case 1261:
case 701:
case 946:
case 3502:
case 1905:
case 3070:
case 2592:
case 825:
case 3928:
case 2713:
case 3097:
case 421:
case 3230:
case 3393:
case 53:
case 3144:
case 3642:
case 635:
case 2529:
case 3023:
case 2681:
case 3641:
case 614:
case 368:
case 3158:
case 4068:
case 719:
case 18:
case 36:
case 917:
case 3258:
case 984:
case 2601:
case 3244:
case 158:
case 3197:
case 2476:
case 540:
case 3554:
case 330:
case 1177:
case 1273:
case 1849:
case 1563:
case 1579:
case 3416:
case 105:
case 46:
case 619:
case 3353:
case 2757:
case 1949:
case 2840:
case 2998:
case 493:
case 3220:
case 3606:
case 1956:
case 2871:
case 2895:
case 1349:
case 1694:
case 4088:
case 3668:
case 3633:
case 2176:
case 1147:
case 1959:
case 3901:
case 1010:
case 1277:
case 3568:
case 769:
case 3796:
case 3910:
case 2001:
case 3727:
case 2502:
case 193:
case 4004:
case 2391:
case 2914:
case 2670:
case 426:
case 2712:
case 1482:
case 1651:
case 2921:
case 2028:
case 1370:
case 637:
case 4015:
case 195:
case 1573:
case 3791:
case 3238:
case 422:
case 2951:
case 3320:
case 2316:
case 1422:
case 2249:
case 1589:
case 1450:
case 1120:
case 931:
case 3837:
case 942:
case 890:
case 3102:
case 3354:
case 2810:
case 2574:
case 1089:
case 1093:
case 1182:
case 2869:
case 758:
case 1964:
case 1859:
case 1365:
case 1603:
case 2297:
case 1509:
case 2003:
case 4095:
case 162:
case 678:
case 302:
case 2794:
case 1517:
case 979:
case 944:
case 526:
case 3182:
case 2661:
case 3112:
case 2853:
case 2934:
case 32:
case 1190:
case 712:
case 3297:
case 3615:
case 2570:
case 4087:
case 2083:
case 3840:
case 283:
case 649:
case 849:
case 1556:
case 3915:
case 1361:
case 3270:
case 3484:
case 1506:
case 3430:
case 2832:
case 1825:
case 2937:
case 3434:
case 641:
case 499:
case 3863:
case 3171:
case 2522:
case 1993:
case 745:
case 2650:
case 1282:
case 3582:
case 2847:
case 2606:
case 600:
case 492:
case 3240:
case 3943:
case 885:
case 3487:
case 2216:
case 1973:
case 2769:
case 2640:
case 1749:
case 2430:
case 2863:
case 3599:
case 1811:
case 874:
case 651:
case 2022:
case 2598:
case 1280:
case 2169:
case 273:
case 1345:
case 2200:
case 1595:
case 3781:
case 2466:
case 1793:
case 1217:
case 3929:
case 2965:
case 2616:
case 1559:
case 3479:
case 1392:
case 735:
case 2278:
case 2203:
case 3015:
case 121:
case 3199:
case 3191:
case 797:
case 4081:
case 2931:
case 1732:
case 2426:
case 2202:
case 3212:
case 333:
case 1018:
case 870:
case 1470:
case 2343:
case 3881:
case 1706:
case 3348:
case 2311:
case 2004:
case 688:
case 802:
case 219:
case 2833:
case 130:
case 2032:
case 4048:
case 1440:
case 3206:
case 746:
case 1638:
case 3852:
case 1697:
case 1463:
case 1783:
case 2883:
case 3788:
case 2048:
case 2281:
case 1615:
case 3511:
case 3708:
case 2406:
case 1257:
case 2160:
case 2642:
case 270:
case 1266:
case 3839:
case 1479:
case 3772:
case 3715:
case 2573:
case 1667:
case 2788:
case 3879:
case 3942:
case 2542:
case 708:
case 1012:
case 198:
case 1690:
case 1639:
case 1989:
case 3408:
case 742:
case 1453:
case 1902:
case 2447:
case 691:
case 48:
case 419:
case 3018:
case 2804:
case 509:
case 3780:
case 973:
case 3914:
case 1137:
case 3909:
case 3431:
case 242:
case 1753:
case 2470:
case 2114:
case 3764:
case 3342:
case 737:
case 2042:
case 2197:
case 1721:
case 2047:
case 2554:
case 1388:
case 1477:
case 1775:
case 2745:
case 2019:
case 2310:
case 1139:
case 186:
case 4006:
case 2498:
case 3203:
case 1395:
case 3214:
case 3382:
case 2816:
case 930:
case 2839:
case 3039:
case 113:
case 2856:
case 1130:
case 1676:
case 2246:
case 1293:
case 2018:
case 1462:
case 120:
case 2734:
case 2678:
case 813:
case 2269:
case 1508:
case 920:
case 1112:
case 542:
case 519:
case 1746:
case 806:
case 880:
case 2835:
case 852:
case 2440:
case 433:
case 592:
case 3448:
case 4045:
case 803:
case 2339:
case 3346:
case 1958:
case 3049:
case 503:
case 1046:
case 3467:
case 1933:
case 818:
case 761:
case 1585:
case 2834:
case 1000:
case 4046:
case 1386:
case 3183:
case 771:
case 320:
case 1424:
case 521:
case 2518:
case 1350:
case 2088:
case 2424:
case 3621:
case 392:
case 81:
case 3261:
case 1893:
case 179:
case 2505:
case 1501:
case 3115:
case 1836:
case 1183:
case 2171:
case 3811:
case 2950:
case 325:
case 2677:
case 918:
case 913:
case 2060:
case 582:
case 1987:
case 3635:
case 1078:
case 1536:
case 2776:
case 1056:
case 2615:
case 3911:
case 39:
case 510:
case 1606:
case 2982:
case 3056:
case 926:
case 565:
case 534:
case 3492:
case 3607:
case 378:
case 2458:
case 1197:
case 2789:
case 156:
case 2191:
case 3087:
case 108:
case 1301:
case 3882:
case 13:
case 2053:
case 2302:
case 2534:
case 1104:
case 1854:
case 2157:
case 1143:
case 176:
case 3694:
case 2143:
case 686:
case 2151:
case 1344:
case 1252:
case 3033:
case 717:
case 155:
case 1129:
case 830:
case 3248:
case 1353:
case 3541:
case 2922:
case 3941:
case 411:
case 755:
case 3523:
case 3712:
case 1898:
case 3011:
case 2213:
case 2481:
case 824:
case 1874:
case 55:
case 2841:
case 3089:
case 197:
case 3977:
case 1340:
case 1321:
case 2727:
case 657:
case 1580:
case 3303:
case 1413:
case 2005:
case 458:
case 1216:
case 160:
case 3931:
case 2618:
case 538:
case 3127:
case 2693:
case 2268:
case 2935:
case 2528:
case 2651:
case 2724:
case 486:
case 3109:
case 3107:
case 2743:
case 2301:
case 306:
case 2818:
case 3069:
case 68:
case 2628:
case 1991:
case 2303:
case 3313:
case 2730:
case 171:
case 1733:
case 3457:
case 3027:
case 3744:
case 2211:
case 3450:
case 1017:
case 1201:
case 1214:
case 3851:
case 3075:
case 1492:
case 615:
case 882:
case 2503:
case 107:
case 998:
case 4078:
case 700:
case 3262:
case 298:
case 932:
case 3227:
case 1034:
case 573:
case 1748:
case 2558:
case 2104:
case 3533:
case 1885:
case 3277:
case 2864:
case 1861:
case 2395:
case 2610:
case 3477:
case 3415:
case 2699:
case 1527:
case 4017:
case 1258:
case 1376:
case 718:
case 2279:
case 2006:
case 4082:
case 3190:
case 3136:
case 3122:
case 431:
case 3138:
case 1755:
case 544:
case 1760:
case 3887:
case 1151:
case 2513:
case 2002:
case 2207:
case 933:
case 753:
case 2881:
case 1061:
case 3282:
case 1268:
case 3984:
case 2560:
case 2993:
case 3765:
case 1945:
case 2454:
case 3681:
case 381:
case 1360:
case 1787:
case 2261:
case 328:
case 1496:
case 221:
case 3618:
case 448:
case 523:
case 1276:
case 3997:
case 922:
case 2717:
case 1906:
case 3061:
case 698:
case 1329:
case 2801:
case 2567:
case 1488:
case 2962:
case 2987:
case 595:
case 28:
case 3594:
case 1116:
case 629:
case 2131:
case 429:
case 2120:
case 3067:
case 2344:
case 3749:
case 2572:
case 3768:
case 3996:
case 632:
case 2109:
case 2780:
case 2771:
case 3256:
case 3125:
case 3938:
case 1487:
case 3103:
case 1758:
case 3514:
case 1232:
case 1163:
case 902:
case 1918:
case 1731:
case 2683:
case 369:
case 1408:
case 512:
case 1486:
case 3562:
case 2064:
case 3604:
case 2275:
case 2790:
case 4034:
case 3059:
case 389:
case 1195:
case 583:
case 3769:
case 1471:
case 2822:
case 2025:
case 257:
case 1289:
case 2116:
case 192:
case 1253:
case 1320:
case 3646:
case 855:
case 1269:
case 26:
case 1640:
case 1391:
case 2168:
case 2819:
case 3973:
case 594:
case 3366:
case 2538:
case 4092:
case 1924:
case 2336:
case 3224:
case 752:
case 655:
case 1013:
case 4070:
case 2821:
case 1888:
case 1243:
case 2150:
case 1908:
case 360:
case 2175:
case 2384:
case 1648:
case 2236:
case 3844:
case 1645:
case 84:
case 889:
case 596:
case 1729:
case 2868:
case 2294:
case 741:
case 807:
case 2636:
case 3246:
case 2666:
case 756:
case 1830:
case 2686:
case 2080:
case 309:
case 2030:
case 3907:
case 1021:
case 482:
case 1062:
case 1839:
case 3436:
case 209:
case 1371:
case 991:
case 1396:
case 733:
case 2264:
case 3575:
case 3825:
case 1109:
case 2531:
case 3028:
case 1505:
case 1633:
case 157:
case 504:
case 2644:
case 907:
case 1951:
case 1537:
case 2715:
case 3619:
case 2850:
case 911:
case 2704:
case 893:
case 3037:
case 2425:
case 3885:
case 1747:
case 166:
case 3734:
case 2679:
case 2266:
case 1549:
case 3598:
case 3779:
case 3377:
case 498:
case 3226:
case 2226:
case 229:
case 345:
case 1965:
case 952:
case 827:
case 3648:
case 3439:
case 3976:
case 3065:
case 1024:
case 2897:
case 4044:
case 3278:
case 1778:
case 230:
case 3322:
case 413:
case 1464:
case 2127:
case 3424:
case 326:
case 978:
case 2613:
case 3613:
case 3659:
case 3276:
case 1792:
case 1919:
case 927:
case 423:
case 2328:
case 723:
case 2501:
case 102:
case 2136:
case 3934:
case 274:
case 739:
case 1764:
case 2285:
case 1978:
case 2014:
case 1304:
case 1042:
case 2898:
case 2521:
case 495:
case 1480:
case 1467:
case 2417:
case 1628:
case 1994:
case 1662:
case 681:
case 3150:
case 626:
case 338:
case 804:
case 3623:
case 3628:
case 530:
case 3546:
case 3775:
case 3705:
case 1145:
case 774:
case 1810:
case 1127:
case 401:
case 2929:
case 123:
case 2135:
case 1092:
case 3178:
case 2577:
case 1538:
case 1656:
case 3120:
case 1311:
case 943:
case 954:
case 2198:
case 3086:
case 245:
case 2779:
case 1355:
case 2419:
case 1484:
case 139:
case 3949:
case 207:
case 2199:
case 3095:
case 267:
case 3787:
case 462:
case 1786:
case 2338:
case 1270:
case 3232:
case 3630:
case 3661:
case 2954:
case 3960:
case 2519:
case 1431:
case 2842:
case 2390:
case 782:
case 1548:
case 2953:
case 2968:
case 1133:
case 348:
case 106:
case 2590:
case 3651:
case 3847:
case 2877:
case 1723:
case 2933:
case 261:
case 1673:
case 3895:
case 1428:
case 3149:
case 3815:
case 3553:
case 1205:
case 2437:
case 2800:
case 2242:
case 1207:
case 1909:
case 3489:
case 86:
case 863:
case 2813:
case 3609:
case 3951:
case 2604:
case 3653:
case 3649:
case 1984:
case 2910:
case 3795:
case 1922:
case 3209:
case 3701:
case 76:
case 871:
case 2526:
case 575:
case 383:
case 337:
case 417:
case 442:
case 465:
case 1920:
case 971:
case 3468:
case 3130:
case 3043:
case 928:
case 73:
case 642:
case 3923:
case 2342:
case 1082:
case 354:
case 164:
case 4016:
case 529:
case 2667:
case 1327:
case 135:
case 3140:
case 2973:
case 1041:
case 259:
case 2487:
case 2046:
case 844:
case 2015:
case 2469:
case 2658:
case 2595:
case 2663:
case 3066:
case 1081:
case 2611:
case 218:
case 2949:
case 727:
case 1707:
case 876:
case 559:
case 2381:
case 2240:
case 2494:
case 1899:
case 2467:
case 3036:
case 794:
case 3260:
case 1636:
case 3156:
case 2265:
case 859:
case 2472:
case 2659:
case 2886:
case 3410:
case 1911:
case 1503:
case 1997:
case 2386:
case 507:
case 3173:
case 1535:
case 2155:
case 1364:
case 2009:
case 3549:
case 4033:
case 576:
case 2825:
case 3384:
case 898:
case 1203:
case 1096:
case 3228:
case 367:
case 1520:
case 1368:
case 58:
case 2752:
case 212:
case 2772:
case 2274:
case 1051:
case 1802:
case 3697:
case 1346:
case 1032:
case 705:
case 3513:
case 3944:
case 3639:
case 3370:
case 1111:
case 2058:
case 1478:
case 2617:
case 3673:
case 1971:
case 845:
case 2021:
case 3798:
case 340:
case 2976:
case 3386:
case 878:
case 2482:
case 1053:
case 315:
case 3312:
case 487:
case 3137:
case 1524:
case 1436:
case 616:
case 3820:
case 3051:
case 471:
case 622:
case 3555:
case 3684:
case 3126:
case 1980:
case 484:
case 2527:
case 2925:
case 1426:
case 1035:
case 2946:
case 393:
case 2984:
case 1063:
case 2851:
case 2838:
case 1050:
case 2443:
case 3823:
case 609:
case 608:
case 2815:
case 2689:
case 4011:
case 3374:
case 4076:
case 1074:
case 3296:
case 3242:
case 2474:
case 1784:
case 976:
case 795:
case 1213:
case 901:
case 1086:
case 3806:
case 428:
case 3020:
case 1406:
case 2820:
case 3019:
case 1272:
case 2380:
case 3947:
case 1740:
case 1234:
case 439:
case 33:
case 1369:
case 2697:
case 1255:
case 2600:
case 1377:
case 9:
case 2165:
case 342:
case 570:
case 2514:
case 3168:
case 1903:
case 2363:
case 1593:
case 899:
case 3822:
case 1489:
case 2486:
case 275:
case 3644:
case 787:
case 3294:
case 321:
case 1886:
case 1419:
case 3452:
case 2638:
case 1765:
case 533:
case 3469:
case 3873:
case 736:
case 781:
case 77:
case 690:
case 2237:
case 2247:
case 2455:
case 1596:
case 2691:
case 3034:
case 2764:
case 549:
case 4039:
case 1967:
case 3858:
case 780:
case 1076:
case 1653:
case 2037:
case 3861:
case 577:
case 222:
case 1008:
case 146:
case 2919:
case 1445:
case 3833:
case 1533:
case 4002:
case 1474:
case 2258:
case 2806:
case 1302:
case 385:
case 3068:
case 3329:
case 2271:
case 1414:
case 1974:
case 2875:
case 1684:
case 670:
case 3707:
case 520:
case 2144:
case 1198:
case 395:
case 3728:
case 2392:
case 1385:
case 1534:
case 1894:
case 3674:
case 1173:
case 1724:
case 873:
case 1354:
case 3433:
case 488:
case 738:
case 238:
case 3808:
case 759:
case 940:
case 3848:
case 2957:
case 786:
case 2812:
case 809:
case 2783:
case 1404:
case 3700:
case 3403:
case 2762:
case 1728:
case 3162:
case 1669:
case 2523:
case 1215:
case 4022:
case 791:
case 149:
case 2706:
case 2057:
case 3398:
case 148:
case 2655:
case 3629:
case 2243:
case 2630:
case 2872:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658055602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,];
var gg_b = "1658055602/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
