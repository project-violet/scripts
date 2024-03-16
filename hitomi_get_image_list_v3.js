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
case 1374:
case 3285:
case 3105:
case 3213:
case 1084:
case 2642:
case 924:
case 2451:
case 1205:
case 2135:
case 115:
case 3057:
case 909:
case 584:
case 3011:
case 2754:
case 3973:
case 1947:
case 3094:
case 190:
case 664:
case 2436:
case 2671:
case 1324:
case 1493:
case 3690:
case 3917:
case 1304:
case 3225:
case 2720:
case 2044:
case 3369:
case 1293:
case 2543:
case 1521:
case 2354:
case 1963:
case 595:
case 1852:
case 2905:
case 3175:
case 2372:
case 3531:
case 3427:
case 3314:
case 1370:
case 304:
case 3036:
case 3736:
case 1994:
case 2744:
case 3361:
case 2632:
case 2338:
case 1093:
case 4053:
case 1760:
case 1048:
case 258:
case 2384:
case 1833:
case 1763:
case 3055:
case 1601:
case 562:
case 3945:
case 832:
case 3022:
case 16:
case 3998:
case 762:
case 290:
case 837:
case 1829:
case 1130:
case 1538:
case 2705:
case 2046:
case 73:
case 2721:
case 1893:
case 1182:
case 972:
case 2940:
case 2128:
case 2302:
case 587:
case 675:
case 2992:
case 3497:
case 1680:
case 3191:
case 1543:
case 61:
case 2500:
case 3963:
case 1028:
case 1842:
case 2926:
case 652:
case 2414:
case 2161:
case 424:
case 1179:
case 1435:
case 1619:
case 3061:
case 3756:
case 648:
case 2138:
case 3965:
case 1099:
case 739:
case 4021:
case 870:
case 2589:
case 3954:
case 367:
case 702:
case 2347:
case 1602:
case 3387:
case 1532:
case 3614:
case 2749:
case 2888:
case 947:
case 2674:
case 1480:
case 3176:
case 1208:
case 1203:
case 3510:
case 2067:
case 3423:
case 2925:
case 792:
case 435:
case 1751:
case 1169:
case 3990:
case 1033:
case 3680:
case 4092:
case 781:
case 2278:
case 2467:
case 1818:
case 1875:
case 3650:
case 2619:
case 1027:
case 1717:
case 923:
case 1819:
case 3038:
case 1467:
case 3103:
case 1884:
case 3278:
case 3090:
case 989:
case 2125:
case 1776:
case 995:
case 1137:
case 4026:
case 2673:
case 2769:
case 3685:
case 3993:
case 335:
case 1799:
case 3266:
case 3020:
case 2496:
case 3977:
case 3484:
case 225:
case 1270:
case 2662:
case 2326:
case 1106:
case 543:
case 987:
case 1800:
case 3556:
case 3388:
case 640:
case 616:
case 1783:
case 1031:
case 1877:
case 545:
case 1964:
case 2363:
case 132:
case 3890:
case 1396:
case 2796:
case 953:
case 2388:
case 2507:
case 3161:
case 2203:
case 715:
case 2005:
case 2226:
case 180:
case 1866:
case 1474:
case 265:
case 3860:
case 416:
case 676:
case 672:
case 3647:
case 1289:
case 266:
case 1339:
case 3873:
case 3914:
case 3762:
case 327:
case 3611:
case 1501:
case 3390:
case 3406:
case 1663:
case 1329:
case 3471:
case 694:
case 575:
case 3485:
case 393:
case 1397:
case 3393:
case 1781:
case 3726:
case 3143:
case 338:
case 17:
case 3875:
case 582:
case 122:
case 1251:
case 3608:
case 1732:
case 1343:
case 945:
case 230:
case 1128:
case 2558:
case 3047:
case 2174:
case 3279:
case 745:
case 1606:
case 354:
case 3332:
case 2985:
case 970:
case 3456:
case 2818:
case 3152:
case 1317:
case 1410:
case 2555:
case 2664:
case 2263:
case 1726:
case 871:
case 1669:
case 2657:
case 1914:
case 3146:
case 2563:
case 4043:
case 1103:
case 2458:
case 388:
case 1627:
case 3257:
case 3717:
case 3063:
case 3789:
case 4018:
case 246:
case 1953:
case 3959:
case 1950:
case 477:
case 507:
case 1138:
case 3107:
case 1083:
case 3952:
case 314:
case 4008:
case 2887:
case 1651:
case 1755:
case 3188:
case 1457:
case 2735:
case 869:
case 3018:
case 1633:
case 717:
case 3110:
case 2983:
case 205:
case 3596:
case 1189:
case 1846:
case 1393:
case 764:
case 2633:
case 888:
case 3124:
case 2316:
case 1280:
case 3438:
case 4050:
case 2849:
case 2532:
case 1363:
case 2446:
case 1923:
case 706:
case 1897:
case 2286:
case 286:
case 941:
case 3227:
case 2734:
case 3658:
case 1483:
case 2313:
case 810:
case 3253:
case 1859:
case 3618:
case 1019:
case 1406:
case 2670:
case 3919:
case 3483:
case 2487:
case 1390:
case 1982:
case 352:
case 1220:
case 2600:
case 3996:
case 399:
case 198:
case 87:
case 1720:
case 596:
case 2609:
case 1724:
case 3116:
case 2275:
case 2230:
case 2547:
case 2291:
case 4084:
case 2095:
case 1361:
case 1009:
case 1426:
case 824:
case 2215:
case 3571:
case 3060:
case 8:
case 3530:
case 827:
case 2916:
case 255:
case 1924:
case 3653:
case 1254:
case 1163:
case 498:
case 3703:
case 3000:
case 4080:
case 181:
case 3271:
case 1215:
case 2065:
case 1340:
case 1508:
case 2056:
case 141:
case 1118:
case 738:
case 361:
case 1681:
case 324:
case 2331:
case 1025:
case 2915:
case 4077:
case 2232:
case 1470:
case 57:
case 1867:
case 704:
case 3203:
case 3864:
case 3283:
case 4004:
case 2382:
case 1716:
case 4045:
case 3632:
case 830:
case 2640:
case 2965:
case 536:
case 3901:
case 2193:
case 2374:
case 2920:
case 4025:
case 2494:
case 634:
case 3725:
case 3761:
case 85:
case 530:
case 1560:
case 3035:
case 3803:
case 1168:
case 2557:
case 2534:
case 1774:
case 3304:
case 4049:
case 2209:
case 737:
case 3412:
case 4035:
case 1735:
case 1131:
case 3552:
case 3640:
case 558:
case 921:
case 1672:
case 1573:
case 3669:
case 2098:
case 248:
case 3355:
case 2001:
case 1250:
case 1362:
case 683:
case 1529:
case 3845:
case 4024:
case 3121:
case 1925:
case 1056:
case 3696:
case 566:
case 417:
case 1946:
case 3852:
case 1120:
case 2690:
case 1269:
case 2746:
case 3153:
case 814:
case 1840:
case 3100:
case 3408:
case 1857:
case 3205:
case 1450:
case 3379:
case 801:
case 20:
case 3117:
case 1378:
case 2274:
case 2810:
case 2719:
case 2858:
case 861:
case 698:
case 2778:
case 635:
case 104:
case 463:
case 264:
case 766:
case 3801:
case 259:
case 1356:
case 3356:
case 1794:
case 1756:
case 173:
case 315:
case 3960:
case 2146:
case 2126:
case 3303:
case 189:
case 1411:
case 3892:
case 3192:
case 1252:
case 964:
case 2000:
case 3182:
case 418:
case 2518:
case 3425:
case 895:
case 3750:
case 721:
case 1464:
case 128:
case 3896:
case 523:
case 2856:
case 281:
case 2070:
case 2238:
case 1065:
case 642:
case 688:
case 86:
case 560:
case 1557:
case 49:
case 3481:
case 3505:
case 3742:
case 4020:
case 1344:
case 3580:
case 2783:
case 1461:
case 4071:
case 299:
case 2117:
case 2504:
case 2319:
case 2765:
case 3170:
case 292:
case 310:
case 1540:
case 1860:
case 4076:
case 3807:
case 2281:
case 816:
case 429:
case 1325:
case 1566:
case 1563:
case 1674:
case 492:
case 2702:
case 3980:
case 3007:
case 1981:
case 1466:
case 2228:
case 1673:
case 1505:
case 3077:
case 527:
case 3274:
case 97:
case 2482:
case 3002:
case 440:
case 1204:
case 1107:
case 1728:
case 2611:
case 2753:
case 485:
case 174:
case 2927:
case 1059:
case 2528:
case 2844:
case 818:
case 2243:
case 2988:
case 2986:
case 3772:
case 2054:
case 2764:
case 2010:
case 1701:
case 254:
case 2951:
case 1465:
case 1249:
case 3254:
case 2575:
case 2545:
case 3392:
case 111:
case 2669:
case 3991:
case 1032:
case 898:
case 2703:
case 56:
case 3407:
case 252:
case 3955:
case 2357:
case 1495:
case 2731:
case 68:
case 1650:
case 2743:
case 3838:
case 1612:
case 376:
case 3671:
case 2975:
case 1010:
case 340:
case 359:
case 3537:
case 2959:
case 3310:
case 100:
case 1824:
case 2297:
case 3831:
case 1087:
case 423:
case 2097:
case 1222:
case 2877:
case 925:
case 407:
case 1825:
case 421:
case 3621:
case 493:
case 1789:
case 2970:
case 1389:
case 3380:
case 1491:
case 886:
case 631:
case 2051:
case 1266:
case 2663:
case 2223:
case 2819:
case 1790:
case 937:
case 398:
case 2124:
case 2510:
case 3834:
case 1487:
case 1451:
case 1813:
case 1851:
case 3129:
case 208:
case 2034:
case 218:
case 294:
case 2084:
case 1183:
case 2399:
case 2123:
case 3885:
case 3755:
case 3693:
case 621:
case 2505:
case 2918:
case 2530:
case 2626:
case 4093:
case 451:
case 1014:
case 140:
case 1239:
case 3046:
case 430:
case 3249:
case 270:
case 384:
case 2691:
case 2272:
case 3826:
case 2556:
case 4058:
case 3305:
case 3909:
case 3300:
case 2310:
case 4075:
case 857:
case 52:
case 1002:
case 3883:
case 381:
case 3475:
case 564:
case 462:
case 1653:
case 2742:
case 697:
case 130:
case 222:
case 754:
case 633:
case 556:
case 3212:
case 75:
case 3800:
case 2024:
case 3918:
case 2636:
case 3174:
case 2262:
case 2062:
case 2776:
case 3602:
case 1246:
case 3507:
case 2859:
case 893:
case 1887:
case 3397:
case 1918:
case 3594:
case 1738:
case 478:
case 2434:
case 3384:
case 1524:
case 3452:
case 1771:
case 3858:
case 2418:
case 1371:
case 2902:
case 1313:
case 2745:
case 320:
case 1152:
case 151:
case 1283:
case 2288:
case 1905:
case 1068:
case 2934:
case 405:
case 2732:
case 2539:
case 858:
case 1338:
case 1574:
case 4085:
case 2733:
case 3995:
case 1497:
case 143:
case 3466:
case 685:
case 3287:
case 2665:
case 2370:
case 2938:
case 2367:
case 1731:
case 2198:
case 3308:
case 922:
case 3281:
case 2974:
case 992:
case 3371:
case 46:
case 3204:
case 1114:
case 1484:
case 1782:
case 1636:
case 1792:
case 3574:
case 2889:
case 1967:
case 1729:
case 1637:
case 201:
case 2639:
case 674:
case 2428:
case 3399:
case 3668:
case 59:
case 2541:
case 2030:
case 3414:
case 3644:
case 3141:
case 1907:
case 546:
case 4042:
case 1380:
case 1928:
case 2917:
case 3679:
case 1816:
case 390:
case 1073:
case 743:
case 2955:
case 2365:
case 2061:
case 1482:
case 3555:
case 3185:
case 1604:
case 3968:
case 653:
case 501:
case 1030:
case 1088:
case 3041:
case 426:
case 2578:
case 1945:
case 3362:
case 3573:
case 2617:
case 1502:
case 3042:
case 2730:
case 787:
case 185:
case 1011:
case 3039:
case 735:
case 2701:
case 3839:
case 3006:
case 377:
case 3044:
case 3272:
case 1439:
case 1177:
case 2540:
case 2806:
case 1785:
case 3277:
case 3015:
case 1871:
case 1620:
case 1202:
case 1075:
case 15:
case 1022:
case 2692:
case 3043:
case 244:
case 3942:
case 2521:
case 2594:
case 3330:
case 2333:
case 2470:
case 3311:
case 2088:
case 2237:
case 3899:
case 1308:
case 3498:
case 1190:
case 2009:
case 2292:
case 2714:
case 3267:
case 1455:
case 2866:
case 3416:
case 1332:
case 1136:
case 77:
case 380:
case 659:
case 3404:
case 812:
case 786:
case 3744:
case 2177:
case 1608:
case 337:
case 2854:
case 2595:
case 2413:
case 1214:
case 1494:
case 680:
case 3112:
case 448:
case 1445:
case 3586:
case 2259:
case 2449:
case 3033:
case 2004:
case 1184:
case 512:
case 460:
case 1952:
case 3508:
case 1057:
case 3244:
case 1989:
case 1086:
case 3857:
case 862:
case 2837:
case 2656:
case 728:
case 408:
case 3882:
case 2447:
case 2231:
case 1157:
case 2041:
case 9:
case 2697:
case 1547:
case 4030:
case 2077:
case 2937:
case 2459:
case 2211:
case 2667:
case 1381:
case 3214:
case 2655:
case 450:
case 1558:
case 1127:
case 3547:
case 1174:
case 606:
case 3502:
case 131:
case 3099:
case 2831:
case 654:
case 2283:
case 1937:
case 3087:
case 519:
case 1301:
case 3940:
case 2869:
case 1:
case 3003:
case 2678:
case 2402:
case 624:
case 1808:
case 2515:
case 2191:
case 3092:
case 1315:
case 3790:
case 212:
case 662:
case 2064:
case 849:
case 2519:
case 2427:
case 677:
case 1211:
case 2566:
case 1958:
case 2592:
case 1489:
case 1993:
case 2980:
case 734:
case 3778:
case 379:
case 4029:
case 358:
case 4002:
case 1889:
case 2797:
case 2524:
case 961:
case 657:
case 2954:
case 105:
case 1642:
case 3950:
case 3476:
case 1531:
case 2020:
case 142:
case 394:
case 2851:
case 806:
case 3612:
case 2471:
case 1441:
case 1072:
case 84:
case 2896:
case 3748:
case 1632:
case 1388:
case 2394:
case 2798:
case 316:
case 1714:
case 944:
case 3295:
case 3529:
case 3704:
case 3413:
case 3889:
case 414:
case 1217:
case 2207:
case 3773:
case 2953:
case 2219:
case 1721:
case 2480:
case 3127:
case 2638:
case 2813:
case 3701:
case 3004:
case 1085:
case 3681:
case 2008:
case 1475:
case 612:
case 3886:
case 2341:
case 2118:
case 3284:
case 3760:
case 2857:
case 2127:
case 3496:
case 3040:
case 1219:
case 24:
case 2454:
case 2651:
case 3160:
case 2871:
case 422:
case 1630:
case 4005:
case 3697:
case 2493:
case 3432:
case 3391:
case 2381:
case 3461:
case 279:
case 2265:
case 74:
case 1927:
case 1835:
case 1414:
case 2335:
case 178:
case 2307:
case 3575:
case 2217:
case 3052:
case 4036:
case 2204:
case 1159:
case 2078:
case 3774:
case 752:
case 1352:
case 1743:
case 3906:
case 2722:
case 88:
case 1187:
case 3444:
case 821:
case 1379:
case 3025:
case 1116:
case 990:
case 1485:
case 1140:
case 3898:
case 691:
case 2290:
case 154:
case 1879:
case 939:
case 3342:
case 3854:
case 3905:
case 1777:
case 459:
case 3243:
case 3265:
case 1144:
case 873:
case 569:
case 1476:
case 2162:
case 487:
case 3667:
case 1551:
case 3167:
case 229:
case 3128:
case 1896:
case 339:
case 2775:
case 768:
case 516:
case 588:
case 1629:
case 2666:
case 1351:
case 1530:
case 997:
case 2607:
case 191:
case 1969:
case 1242:
case 742:
case 4033:
case 2322:
case 2839:
case 3302:
case 2994:
case 3794:
case 3149:
case 2864:
case 2378:
case 483:
case 842:
case 2552:
case 3460:
case 2411:
case 988:
case 4007:
case 3357:
case 774:
case 1675:
case 598:
case 3381:
case 3643:
case 3928:
case 2075:
case 1261:
case 826:
case 1038:
case 1348:
case 813:
case 458:
case 2686:
case 3479:
case 1146:
case 549:
case 3579:
case 156:
case 83:
case 3908:
case 1459:
case 3078:
case 1605:
case 561:
case 1869:
case 345:
case 514:
case 3549:
case 237:
case 1798:
case 839:
case 2576:
case 864:
case 825:
case 2055:
case 355:
case 1812:
case 3758:
case 3528:
case 779:
case 1583:
case 3519:
case 3293:
case 2199:
case 3572:
case 2723:
case 3299:
case 1861:
case 3598:
case 3984:
case 330:
case 660:
case 3583:
case 1232:
case 1382:
case 3563:
case 3180:
case 2147:
case 2591:
case 2432:
case 2772:
case 3894:
case 3648:
case 1178:
case 232:
case 2932:
case 4072:
case 1360:
case 157:
case 1652:
case 2865:
case 3587:
case 1778:
case 2380:
case 3724:
case 3329:
case 3207:
case 3603:
case 2672:
case 1975:
case 238:
case 1868:
case 2194:
case 1537:
case 1703:
case 3319:
case 1490:
case 2900:
case 2111:
case 78:
case 108:
case 1519:
case 740:
case 2255:
case 2850:
case 1553:
case 769:
case 2210:
case 736:
case 3028:
case 3941:
case 2308:
case 3235:
case 2148:
case 2784:
case 2330:
case 2935:
case 1262:
case 2522:
case 2188:
case 1576:
case 3785:
case 2390:
case 2659:
case 489:
case 2700:
case 3240:
case 1299:
case 3646:
case 1412:
case 371:
case 3021:
case 1218:
case 2468:
case 2431:
case 2200:
case 3275:
case 570:
case 2079:
case 4000:
case 708:
case 3846:
case 1507:
case 1462:
case 1421:
case 949:
case 986:
case 896:
case 2979:
case 1125:
case 3389:
case 3814:
case 219:
case 908:
case 43:
case 3872:
case 2564:
case 3877:
case 2218:
case 1309:
case 639:
case 2241:
case 3173:
case 2351:
case 1255:
case 2777:
case 2352:
case 2872:
case 1546:
case 3183:
case 37:
case 325:
case 3465:
case 4003:
case 1702:
case 168:
case 3221:
case 455:
case 3868:
case 690:
case 3398:
case 2913:
case 272:
case 2793:
case 915:
case 757:
case 2999:
case 589:
case 3515:
case 3256:
case 3492:
case 2574:
case 3771:
case 1150:
case 3462:
case 69:
case 834:
case 2104:
case 2725:
case 2737:
case 3262:
case 4065:
case 3184:
case 2389:
case 3939:
case 243:
case 2080:
case 3513:
case 2652:
case 2:
case 3605:
case 3220:
case 2257:
case 859:
case 1481:
case 412:
case 2612:
case 3286:
case 2497:
case 1565:
case 2212:
case 351:
case 1115:
case 3655:
case 2417:
case 1618:
case 3780:
case 4037:
case 280:
case 1454:
case 2022:
case 127:
case 865:
case 2358:
case 2444:
case 1404:
case 2109:
case 1806:
case 3879:
case 1000:
case 2605:
case 456:
case 820:
case 2260:
case 7:
case 3731:
case 2368:
case 1225:
case 3489:
case 3802:
case 1697:
case 1671:
case 413:
case 1965:
case 1959:
case 3672:
case 1180:
case 3985:
case 2289:
case 1990:
case 406:
case 1570:
case 362:
case 1336:
case 1155:
case 1132:
case 2728:
case 2855:
case 2941:
case 3435:
case 3893:
case 3457:
case 221:
case 1649:
case 1100:
case 1904:
case 1659:
case 1555:
case 518:
case 2489:
case 2144:
case 3881:
case 2760:
case 2919:
case 3321:
case 192:
case 3913:
case 3430:
case 3902:
case 1582:
case 1248:
case 3163:
case 149:
case 1974:
case 3131:
case 643:
case 38:
case 387:
case 1311:
case 1628:
case 3339:
case 3730:
case 2789:
case 2503:
case 1828:
case 3334:
case 3798:
case 1046:
case 3260:
case 391:
case 217:
case 428:
case 283:
case 620:
case 1373:
case 328:
case 838:
case 3162:
case 600:
case 746:
case 135:
case 2875:
case 3597:
case 2514:
case 395:
case 900:
case 1909:
case 3548:
case 3738:
case 3065:
case 2182:
case 3788:
case 3482:
case 1742:
case 1752:
case 4091:
case 1611:
case 1643:
case 1320:
case 1588:
case 829:
case 1438:
case 1350:
case 3366:
case 2761:
case 3349:
case 2767:
case 3455:
case 363:
case 1006:
case 1594:
case 2359:
case 1936:
case 1821:
case 240:
case 1639:
case 1727:
case 1645:
case 1488:
case 1876:
case 974:
case 3931:
case 856:
case 1428:
case 4090:
case 434:
case 2596:
case 2439:
case 341:
case 1271:
case 1962:
case 3316:
case 3014:
case 2707:
case 2012:
case 332:
case 2631:
case 2002:
case 658:
case 3453:
case 3969:
case 3473:
case 58:
case 3062:
case 269:
case 2847:
case 3344:
case 3289:
case 650:
case 2648:
case 3588:
case 3929:
case 3086:
case 431:
case 984:
case 928:
case 1581:
case 1398:
case 307:
case 2803:
case 447:
case 441:
case 940:
case 3971:
case 1110:
case 2038:
case 1082:
case 1515:
case 1275:
case 2561:
case 1919:
case 874:
case 3766:
case 853:
case 1707:
case 3068:
case 1077:
case 1071:
case 2032:
case 3999:
case 1432:
case 1706:
case 4047:
case 2579:
case 137:
case 2567:
case 687:
case 3226:
case 2995:
case 2544:
case 2440:
case 1915:
case 630:
case 481:
case 822:
case 3487:
case 2580:
case 656:
case 1117:
case 3340:
case 1940:
case 2149:
case 2492:
case 3943:
case 200:
case 1815:
case 2021:
case 1383:
case 815:
case 3071:
case 911:
case 3298:
case 2695:
case 1761:
case 1053:
case 3791:
case 1181:
case 1175:
case 3237:
case 711:
case 263:
case 3622:
case 2892:
case 3625:
case 2535:
case 233:
case 1759:
case 559:
case 1067:
case 183:
case 1667:
case 3683:
case 1234:
case 3628:
case 3783:
case 3010:
case 2152:
case 3312:
case 3013:
case 1615:
case 48:
case 796:
case 1209:
case 3048:
case 1976:
case 3157:
case 2502:
case 929:
case 3469:
case 400:
case 2035:
case 3070:
case 490:
case 2115:
case 3664:
case 285:
case 2610:
case 502:
case 3154:
case 831:
case 3601:
case 3441:
case 2167:
case 980:
case 3629:
case 491:
case 4054:
case 1409:
case 1999:
case 2165:
case 3609:
case 1664:
case 2108:
case 1534:
case 2997:
case 3410:
case 4086:
case 1722:
case 1004:
case 4079:
case 297:
case 2187:
case 3927:
case 415:
case 1753:
case 629:
case 1595:
case 1016:
case 1369:
case 1422:
case 1042:
case 682:
case 2081:
case 2899:
case 2119:
case 2003:
case 2814:
case 1978:
case 2939:
case 253:
case 2430:
case 372:
case 118:
case 3986:
case 2982:
case 2598:
case 1882:
case 1477:
case 722:
case 778:
case 4044:
case 262:
case 2060:
case 495:
case 713:
case 3747:
case 2964:
case 1143:
case 3539:
case 2863:
case 3768:
case 1640:
case 3478:
case 3565:
case 322:
case 2235:
case 3561:
case 3288:
case 446:
case 3217:
case 2350:
case 64:
case 628:
case 164:
case 3715:
case 3751:
case 3186:
case 608:
case 112:
case 733:
case 541:
case 3853:
case 2949:
case 3495:
case 3500:
case 2450:
case 195:
case 2068:
case 1787:
case 1210:
case 1661:
case 3255:
case 3578:
case 1326:
case 3291:
case 1401:
case 3074:
case 506:
case 1844:
case 353:
case 3208:
case 817:
case 2751:
case 3792:
case 1355:
case 1307:
case 910:
case 1666:
case 1880:
case 3428:
case 2748:
case 2328:
case 723:
case 2184:
case 2696:
case 1453:
case 661:
case 4028:
case 1145:
case 1164:
case 794:
case 2015:
case 273:
case 2129:
case 2956:
case 789:
case 3232:
case 1039:
case 957:
case 3836:
case 3933:
case 432:
case 3451:
case 499:
case 3133:
case 3322:
case 1436:
case 2294:
case 3268:
case 419:
case 962:
case 840:
case 835:
case 1939:
case 2680:
case 1535:
case 3944:
case 3809:
case 2050:
case 3988:
case 1767:
case 2092:
case 716:
case 2808:
case 1403:
case 309:
case 1948:
case 2249:
case 457:
case 3956:
case 3822:
case 1346:
case 1679:
case 476:
case 3102:
case 3922:
case 701:
case 912:
case 1603:
case 2479:
case 202:
case 3665:
case 3231:
case 2517:
case 3027:
case 1556:
case 260:
case 1863:
case 3706:
case 1395:
case 2248:
case 1113:
case 194:
case 1995:
case 2377:
case 3331:
case 1811:
case 625:
case 2173:
case 3558:
case 1586:
case 1788:
case 3911:
case 2551:
case 2110:
case 991:
case 3806:
case 1387:
case 1700:
case 3741:
case 3066:
case 1452:
case 241:
case 875:
case 4088:
case 3446:
case 712:
case 3447:
case 1654:
case 3702:
case 3737:
case 2258:
case 525:
case 2586:
case 3064:
case 2410:
case 2768:
case 2921:
case 2787:
case 2201:
case 2091:
case 2222:
case 1626:
case 475:
case 3089:
case 1285:
case 583:
case 4062:
case 904:
case 3126:
case 2179:
case 2190:
case 1571:
case 2537:
case 2058:
case 1523:
case 257:
case 2529:
case 1941:
case 2180:
case 45:
case 1943:
case 3134:
case 3763:
case 1820:
case 471:
case 2625:
case 1772:
case 1081:
case 1376:
case 2206:
case 2878:
case 1235:
case 3827:
case 2253:
case 3619:
case 914:
case 66:
case 3097:
case 44:
case 3296:
case 719:
case 1094:
case 3815:
case 771:
case 3499:
case 196:
case 1347:
case 2013:
case 365:
case 2826:
case 1689:
case 392:
case 3026:
case 3926:
case 70:
case 1758:
case 1233:
case 718:
case 1917:
case 165:
case 2225:
case 2616:
case 2758:
case 3678:
case 2083:
case 2153:
case 544:
case 454:
case 2285:
case 2423:
case 1256:
case 25:
case 2886:
case 1142:
case 1609:
case 1141:
case 2042:
case 732:
case 2150:
case 1692:
case 1865:
case 1049:
case 2685:
case 3729:
case 1518:
case 963:
case 730:
case 3649:
case 1139:
case 1591:
case 2252:
case 3938:
case 480:
case 2906:
case 2048:
case 1286:
case 3745:
case 144:
case 2623:
case 1244:
case 3108:
case 1166:
case 891:
case 2429:
case 2630:
case 684:
case 2807:
case 3856:
case 2157:
case 2463:
case 3135:
case 3350:
case 883:
case 2398:
case 2828:
case 2506:
case 985:
case 2602:
case 2852:
case 2981:
case 284:
case 3198:
case 4014:
case 2229:
case 1161:
case 1886:
case 2361:
case 146:
case 999:
case 14:
case 464:
case 3335:
case 892:
case 2145:
case 3970:
case 3599:
case 101:
case 397:
case 2823:
case 655:
case 2344:
case 2627:
case 2520:
case 520:
case 1779:
case 288:
case 1986:
case 226:
case 2891:
case 2587:
case 3523:
case 62:
case 236:
case 1711:
case 579:
case 927:
case 1658:
case 1740:
case 2969:
case 2973:
case 3698:
case 847:
case 1805:
case 445:
case 609:
case 242:
case 3521:
case 3633:
case 3765:
case 3825:
case 1162:
case 1858:
case 976:
case 1944:
case 1171:
case 311:
case 2883:
case 3947:
case 1938:
case 3031:
case 2993:
case 3454:
case 348:
case 3132:
case 692:
case 3821:
case 3158:
case 1260:
case 1078:
case 1160:
case 3623:
case 1678:
case 2282:
case 4:
case 3113:
case 2821:
case 3409:
case 2650:
case 3385:
case 3949:
case 532:
case 2304:
case 3863:
case 2944:
case 3189:
case 3333:
case 3169:
case 805:
case 155:
case 2898:
case 981:
case 171:
case 2120:
case 30:
case 2597:
case 1687:
case 2729:
case 2752:
case 349:
case 2473:
case 3419:
case 3560:
case 4041:
case 3386:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1710590402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,];
var gg_b = "1710590402/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
