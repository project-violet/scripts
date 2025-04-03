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
case 2112:
case 855:
case 2860:
case 3408:
case 902:
case 4025:
case 2478:
case 2436:
case 2215:
case 2706:
case 1480:
case 323:
case 421:
case 945:
case 1167:
case 3629:
case 2888:
case 806:
case 202:
case 2492:
case 1468:
case 3261:
case 3199:
case 3724:
case 3185:
case 709:
case 632:
case 1937:
case 3060:
case 1891:
case 3494:
case 775:
case 382:
case 1534:
case 1327:
case 3088:
case 3637:
case 549:
case 3360:
case 1565:
case 1457:
case 916:
case 1990:
case 572:
case 1795:
case 812:
case 1027:
case 2982:
case 511:
case 2147:
case 1300:
case 3746:
case 2575:
case 1055:
case 2448:
case 869:
case 1816:
case 3984:
case 993:
case 1684:
case 751:
case 724:
case 836:
case 1039:
case 1190:
case 2353:
case 2321:
case 197:
case 833:
case 1069:
case 2214:
case 1958:
case 2931:
case 2285:
case 1410:
case 2897:
case 2182:
case 2947:
case 260:
case 710:
case 213:
case 2349:
case 3184:
case 3920:
case 3495:
case 2161:
case 73:
case 3757:
case 1620:
case 550:
case 3879:
case 3115:
case 913:
case 1424:
case 3667:
case 2977:
case 2912:
case 660:
case 1719:
case 2613:
case 189:
case 2220:
case 3504:
case 3030:
case 4010:
case 3849:
case 1614:
case 3517:
case 1369:
case 803:
case 3247:
case 3780:
case 2021:
case 3985:
case 1141:
case 2053:
case 3999:
case 3231:
case 1708:
case 1438:
case 613:
case 1886:
case 2451:
case 2830:
case 2379:
case 2466:
case 3598:
case 2793:
case 1699:
case 3768:
case 3205:
case 3716:
case 2117:
case 4052:
case 368:
case 3163:
case 409:
case 2198:
case 1162:
case 198:
case 3126:
case 1306:
case 3895:
case 3889:
case 2628:
case 58:
case 3740:
case 3945:
case 3366:
case 3174:
case 1322:
case 3632:
case 1846:
case 1645:
case 3351:
case 1633:
case 2739:
case 3479:
case 3323:
case 1452:
case 3791:
case 3453:
case 3421:
case 451:
case 1824:
case 111:
case 3556:
case 424:
case 2584:
case 3023:
case 2245:
case 3051:
case 1501:
case 2233:
case 2987:
case 37:
case 2142:
case 1876:
case 466:
case 2389:
case 3144:
case 490:
case 3611:
case 2866:
case 1:
case 3770:
case 2700:
case 1911:
case 1583:
case 191:
case 3808:
case 4040:
case 2274:
case 2520:
case 285:
case 1880:
case 2643:
case 1749:
case 2187:
case 597:
case 1868:
case 985:
case 3786:
case 1470:
case 2754:
case 2263:
case 3752:
case 3894:
case 3036:
case 3944:
case 305:
case 1721:
case 2008:
case 2659:
case 3078:
case 3531:
case 342:
case 3175:
case 2105:
case 1093:
case 3272:
case 356:
case 3217:
case 3547:
case 2202:
case 379:
case 1644:
case 3819:
case 2917:
case 335:
case 1626:
case 3902:
case 3336:
case 594:
case 1440:
case 589:
case 1825:
case 2599:
case 1903:
case 3926:
case 2244:
case 2514:
case 685:
case 1393:
case 2673:
case 2998:
case 1235:
case 2394:
case 1981:
case 3133:
case 1674:
case 3512:
case 4091:
case 3577:
case 2507:
case 3681:
case 40:
case 1196:
case 2904:
case 2319:
case 1608:
case 587:
case 2326:
case 3680:
case 2842:
case 1373:
case 1429:
case 4090:
case 548:
case 2302:
case 295:
case 3372:
case 3908:
case 1799:
case 2978:
case 3919:
case 1043:
case 643:
case 3597:
case 4071:
case 2123:
case 1035:
case 374:
case 1441:
case 3248:
case 1707:
case 1437:
case 3625:
case 2482:
case 3863:
case 1343:
case 3657:
case 3342:
case 1110:
case 3826:
case 2074:
case 3530:
case 4029:
case 2872:
case 1490:
case 2817:
case 584:
case 2549:
case 1957:
case 2219:
case 2026:
case 87:
case 970:
case 2063:
case 708:
case 2461:
case 2344:
case 853:
case 243:
case 51:
case 2456:
case 377:
case 2553:
case 1073:
case 1028:
case 1715:
case 404:
case 3387:
case 188:
case 2431:
case 879:
case 731:
case 615:
case 842:
case 246:
case 3266:
case 805:
case 946:
case 3610:
case 1458:
case 952:
case 3251:
case 519:
case 3305:
case 2375:
case 1896:
case 1695:
case 3050:
case 3588:
case 3845:
case 759:
case 1365:
case 437:
case 1832:
case 3790:
case 2295:
case 1168:
case 1334:
case 3624:
case 915:
case 1467:
case 1555:
case 2192:
case 1924:
case 2178:
case 2136:
case 1065:
case 3407:
case 646:
case 429:
case 2951:
case 2805:
case 2606:
case 3638:
case 1328:
case 3194:
case 2333:
case 3729:
case 1938:
case 3485:
case 1976:
case 2622:
case 835:
case 2249:
case 581:
case 286:
case 2847:
case 2997:
case 2450:
case 2831:
case 3312:
case 3377:
case 187:
case 3781:
case 986:
case 2253:
case 1726:
case 3031:
case 2909:
case 3047:
case 2669:
case 2399:
case 2385:
case 3445:
case 355:
case 2508:
case 1679:
case 3578:
case 3433:
case 3703:
case 3652:
case 2487:
case 2759:
case 3331:
case 199:
case 2812:
case 2877:
case 2160:
case 1952:
case 2279:
case 369:
case 2085:
case 1744:
case 3953:
case 2099:
case 45:
case 2743:
case 3814:
case 1649:
case 1986:
case 3475:
case 2405:
case 371:
case 3885:
case 3297:
case 1191:
case 3949:
case 3012:
case 459:
case 622:
case 3382:
case 3153:
case 4003:
case 3121:
case 141:
case 1255:
case 2960:
case 3670:
case 588:
case 2600:
case 1227:
case 1186:
case 867:
case 3691:
case 3149:
case 162:
case 3356:
case 2384:
case 1991:
case 333:
case 431:
case 1837:
case 4081:
case 36:
case 3444:
case 2728:
case 1001:
case 922:
case 3551:
case 3426:
case 3796:
case 3463:
case 780:
case 2472:
case 2417:
case 3402:
case 3061:
case 1403:
case 734:
case 2118:
case 222:
case 1745:
case 303:
case 1506:
case 707:
case 3616:
case 3082:
case 2109:
case 2734:
case 729:
case 378:
case 1083:
case 3884:
case 3288:
case 1200:
case 1916:
case 2975:
case 3700:
case 1788:
case 3665:
case 3866:
case 750:
case 1346:
case 1159:
case 2582:
case 2449:
case 1965:
case 1590:
case 1605:
case 563:
case 128:
case 3389:
case 2144:
case 1310:
case 2066:
case 668:
case 510:
case 1135:
case 3245:
case 1143:
case 3233:
case 1571:
case 2453:
case 1038:
case 2421:
case 97:
case 843:
case 2791:
case 2561:
case 3409:
case 2479:
case 3104:
case 4054:
case 1928:
case 494:
case 2366:
case 1010:
case 2696:
case 2740:
case 1469:
case 558:
case 895:
case 2895:
case 1529:
case 2889:
case 3755:
case 3950:
case 1934:
case 1046:
case 2126:
case 3727:
case 2102:
case 3089:
case 3634:
case 268:
case 1324:
case 3095:
case 1541:
case 1211:
case 50:
case 3275:
case 2048:
case 3664:
case 605:
case 3319:
case 3904:
case 154:
case 2974:
case 414:
case 575:
case 656:
case 1604:
case 2512:
case 2577:
case 1057:
case 1964:
case 509:
case 2133:
case 3394:
case 3998:
case 3673:
case 1709:
case 48:
case 2963:
case 2926:
case 3150:
case 3514:
case 3585:
case 3599:
case 1698:
case 1973:
case 2378:
case 3308:
case 1380:
case 2336:
case 2217:
case 256:
case 524:
case 3202:
case 2547:
case 279:
case 852:
case 4027:
case 2819:
case 2175:
case 846:
case 4055:
case 2944:
case 1262:
case 157:
case 942:
case 1558:
case 2078:
case 3659:
case 3226:
case 3263:
case 2752:
case 1943:
case 1400:
case 2786:
case 3892:
case 3019:
case 566:
case 261:
case 1325:
case 3635:
case 772:
case 3643:
case 2808:
case 1357:
case 749:
case 3274:
case 3836:
case 1642:
case 1229:
case 163:
case 528:
case 2915:
case 2710:
case 13:
case 1901:
case 1855:
case 682:
case 1040:
case 2984:
case 3956:
case 2671:
case 3601:
case 2746:
case 2505:
case 2690:
case 1241:
case 3448:
case 1983:
case 1511:
case 797:
case 1839:
case 44:
case 3147:
case 3683:
case 1682:
case 1016:
case 110:
case 158:
case 2114:
case 2637:
case 2282:
case 2060:
case 2185:
case 3722:
case 1493:
case 223:
case 3888:
case 1751:
case 2408:
case 3478:
case 1113:
case 789:
case 3533:
case 3706:
case 3436:
case 3215:
case 3545:
case 3112:
case 3177:
case 2107:
case 794:
case 3466:
case 2598:
case 2768:
case 3563:
case 109:
case 1422:
case 1792:
case 1258:
case 3830:
case 498:
case 1562:
case 127:
case 3379:
case 175:
case 2780:
case 78:
case 2985:
case 1406:
case 1736:
case 2999:
case 1778:
case 3053:
case 226:
case 2517:
case 521:
case 1052:
case 3220:
case 1677:
case 1086:
case 2504:
case 3574:
case 2030:
case 2318:
case 714:
case 2667:
case 667:
case 2853:
case 1581:
case 2115:
case 557:
case 1386:
case 626:
case 4022:
case 2879:
case 411:
case 313:
case 1267:
case 2184:
case 2920:
case 2725:
case 1869:
case 2018:
case 664:
case 396:
case 2009:
case 3182:
case 2658:
case 3947:
case 717:
case 139:
case 3299:
case 3931:
case 1183:
case 3897:
case 1352:
case 190:
case 1631:
case 606:
case 3654:
case 3320:
case 1465:
case 447:
case 271:
case 912:
case 2885:
case 79:
case 762:
case 2218:
case 2814:
case 212:
case 3743:
case 655:
case 971:
case 1954:
case 2475:
case 816:
case 3405:
case 936:
case 3085:
case 719:
case 3877:
case 1358:
case 2807:
case 2209:
case 893:
case 3160:
case 137:
case 3279:
case 741:
case 2652:
case 3188:
case 832:
case 236:
case 3014:
case 2536:
case 612:
case 3773:
case 2578:
case 3399:
case 906:
case 1717:
case 1772:
case 3314:
case 501:
case 206:
case 2979:
case 2047:
case 802:
case 1568:
case 1127:
case 3253:
case 2592:
case 2031:
case 955:
case 444:
case 3594:
case 1697:
case 3307:
case 2230:
case 565:
case 3918:
case 636:
case 3997:
case 3450:
case 1434:
case 1139:
case 3519:
case 1367:
case 386:
case 3861:
case 1090:
case 481:
case 978:
case 1337:
case 692:
case 1169:
case 3404:
case 3734:
case 1955:
case 2474:
case 278:
case 2815:
case 2616:
case 322:
case 1576:
case 538:
case 3472:
case 12:
case 3417:
case 748:
case 2061:
case 2796:
case 3882:
case 2463:
case 2566:
case 3498:
case 787:
case 1939:
case 4035:
case 2523:
case 3728:
case 903:
case 2551:
case 4043:
case 2426:
case 992:
case 26:
case 2356:
case 3384:
case 508:
case 233:
case 1029:
case 1787:
case 1154:
case 1240:
case 2691:
case 860:
case 784:
case 3960:
case 2670:
case 3600:
case 4073:
case 1390:
case 799:
case 1216:
case 1435:
case 1705:
case 1900:
case 1660:
case 2711:
case 730:
case 3988:
case 3442:
case 540:
case 3521:
case 441:
case 343:
case 277:
case 2484:
case 3553:
case 1003:
case 674:
case 1268:
case 1864:
case 3461:
case 2017:
case 3002:
case 2098:
case 176:
case 159:
case 3063:
case 3208:
case 1401:
case 977:
case 2236:
case 1062:
case 1280:
case 3872:
case 2802:
case 3549:
case 462:
case 1081:
case 3948:
case 2657:
case 2342:
case 1586:
case 2004:
case 537:
case 3482:
case 2863:
case 747:
case 3898:
case 2994:
case 1777:
case 1712:
case 974:
case 2844:
case 2518:
case 4001:
case 1225:
case 677:
case 274:
case 3374:
case 3166:
case 2919:
case 1257:
case 1122:
case 534:
case 3302:
case 3936:
case 2668:
case 2317:
case 3693:
case 744:
case 1303:
case 1692:
case 1678:
case 1993:
case 1362:
case 165:
case 3326:
case 580:
case 1636:
case 1835:
case 3363:
case 4083:
case 1843:
case 2485:
case 3622:
case 1906:
case 1651:
case 1865:
case 2194:
case 3606:
case 2676:
case 3966:
case 2638:
case 2087:
case 1396:
case 3805:
case 2737:
case 2108:
case 1413:
case 3178:
case 2741:
case 1246:
case 315:
case 400:
case 52:
case 2005:
case 3887:
case 3295:
case 1193:
case 781:
case 138:
case 2624:
case 430:
case 2989:
case 2845:
case 108:
case 2050:
case 1570:
case 1828:
case 2588:
case 1311:
case 3375:
case 3045:
case 140:
case 1032:
case 1591:
case 2610:
case 1761:
case 1096:
case 41:
case 3447:
case 2387:
case 2771:
case 3850:
case 3148:
case 352:
case 3431:
case 1834:
case 3614:
case 1849:
case 909:
case 1780:
case 3476:
case 2406:
case 2736:
case 927:
case 2503:
case 2778:
case 1999:
case 2792:
case 651:
case 624:
case 227:
case 1309:
case 320:
case 1914:
case 1598:
case 1768:
case 3685:
case 1821:
case 2913:
case 3129:
case 164:
case 3852:
case 1667:
case 702:
case 389:
case 1397:
case 2677:
case 2086:
case 3967:
case 1030:
case 666:
case 2267:
case 251:
case 1184:
case 542:
case 841:
case 609:
case 1330:
case 505:
case 3620:
case 1542:
case 793:
case 1879:
case 819:
case 1097:
case 1115:
case 3446:
case 3190:
case 2631:
case 397:
case 3069:
case 3958:
case 561:
case 239:
case 966:
case 3410:
case 1009:
case 167:
case 4094:
case 3615:
case 3816:
case 485:
case 2040:
case 2391:
case 1984:
case 1915:
case 2661:
case 23:
case 2855:
case 2656:
case 713:
case 263:
case 1587:
case 796:
case 4008:
case 1360:
case 317:
case 57:
case 3789:
case 2370:
case 553:
case 1746:
case 1505:
case 1199:
case 3941:
case 3283:
case 958:
case 2316:
case 663:
case 1060:
case 887:
case 38:
case 2290:
case 848:
case 258:
case 3000:
case 182:
case 2070:
case 1088:
case 2532:
case 2091:
case 1107:
case 2340:
case 3929:
case 1738:
case 3201:
case 2113:
case 3480:
case 123:
case 3339:
case 3167:
case 568:
case 3468:
case 1261:
case 2596:
case 20:
case 3235:
case 3416:
case 954:
case 1145:
case 2718:
case 1133:
case 3674:
case 2604:
case 1512:
case 1577:
case 1242:
case 2964:
case 1681:
case 844:
case 3196:
case 1048:
case 2797:
case 402:
case 3626:
case 135:
case 3259:
case 1902:
case 3663:
case 3440:
case 3825:
case 3903:
case 2698:
case 2672:
case 318:
case 3962:
case 2134:
case 3779:
case 1603:
case 2439:
case 2709:
case 847:
case 350:
case 654:
case 1078:
case 2203:
case 3111:
case 1175:
case 957:
case 2959:
case 1547:
case 3644:
case 493:
case 391:
case 2325:
case 3868:
case 2893:
case 1348:
case 2943:
case 2400:
case 2730:
case 2935:
case 1786:
case 2806:
case 1250:
case 228:
case 1144:
case 3838:
case 3234:
case 1449:
case 2760:
case 2590:
case 2605:
case 3675:
case 460:
case 1582:
case 4079:
case 2822:
case 1770:
case 928:
case 3911:
case 2296:
case 2687:
case 1421:
case 153:
case 3824:
case 413:
case 2076:
case 3006:
case 1023:
case 1051:
case 349:
case 2310:
case 2232:
case 17:
case 785:
case 3932:
case 2164:
case 1895:
case 2338:
case 1945:
case 2469:
case 2928:
case 1174:
case 628:
case 3322:
case 3846:
case 1632:
case 3645:
case 3996:
case 1323:
case 3103:
case 2173:
case 2211:
case 4021:
case 1716:
case 523:
case 2650:
case 2324:
case 3265:
case 2046:
case 3810:
case 1126:
case 3811:
case 2396:
case 1875:
case 486:
case 2922:
case 1119:
case 818:
case 2651:
case 1194:
case 1729:
case 4020:
case 608:
case 3938:
case 2666:
case 1485:
case 2210:
case 2906:
case 795:
case 2193:
case 1624:
case 3467:
case 3555:
case 2011:
case 640:
case 673:
case 2413:
case 1741:
case 938:
case 3065:
case 1407:
case 65:
case 2311:
case 1305:
case 3500:
case 3034:
case 2570:
case 3946:
case 3689:
case 4085:
case 1560:
case 3832:
case 1646:
case 592:
case 3028:
case 940:
case 973:
case 1387:
case 3206:
case 3715:
case 84:
case 388:
case 25:
case 2591:
case 95:
case 1610:
case 3784:
case 347:
case 2731:
case 1874:
case 1278:
case 3471:
case 1236:
case 3359:
case 571:
case 276:
case 872:
case 2864:
case 976:
case 3293:
case 1072:
case 2552:
case 3881:
case 2003:
case 569:
case 3335:
case 1863:
case 3862:
case 1004:
case 3110:
case 3803:
case 2873:
case 746:
case 3720:
case 3925:
case 3490:
case 665:
case 752:
case 3957:
case 536:
case 1919:
case 2859:
case 2122:
case 3043:
case 2225:
case 3035:
case 4015:
case 901:
case 1767:
case 3364:
case 201:
case 506:
case 2106:
case 4084:
case 3441:
case 3619:
case 1248:
case 1518:
case 1994:
case 3437:
case 2777:
case 2712:
case 2835:
case 3714:
case 2678:
case 2993:
case 1680:
case 715:
case 631:
case 3373:
case 2303:
case 965:
case 2692:
case 3980:
case 3569:
case 1317:
case 3785:
case 3124:
case 1908:
case 483:
case 3799:
case 1616:
case 1179:
case 2801:
case 2955:
case 178:
case 2750:
case 1815:
case 3083:
case 3481:
case 1884:
case 3200:
case 3916:
case 495:
case 2169:
case 2090:
case 2341:
case 3462:
case 2883:
case 1551:
case 2071:
case 1426:
case 3522:
case 2291:
case 820:
case 2939:
case 1402:
case 1732:
case 3403:
case 2473:
case 786:
case 103:
case 3745:
case 3506:
case 1691:
case 192:
case 2371:
case 3301:
case 39:
case 362:
case 3239:
case 897:
case 3837:
case 2029:
case 3841:
case 1444:
case 4063:
case 319:
case 2435:
case 2900:
case 2546:
case 1382:
case 3970:
case 2443:
case 4026:
case 2041:
case 1121:
case 341:
case 443:
case 3255:
case 3829:
case 4002:
case 3152:
case 446:
case 2742:
case 577:
case 1548:
case 112:
case 1814:
case 3411:
case 3986:
case 2067:
case 2954:
case 1475:
case 204:
case 904:
case 171:
case 1885:
case 2525:
case 3013:
case 4033:
case 2630:
case 1686:
case 1077:
case 2465:
case 1949:
case 2557:
case 525:
case 384:
case 1347:
case 2100:
case 136:
case 3269:
case 937:
case 3653:
case 1331:
case 1209:
case 330:
case 169:
case 1953:
case 3726:
case 1031:
case 907:
case 1762:
case 783:
case 2252:
case 3432:
case 574:
case 2717:
case 3116:
case 2969:
case 300:
case 155:
case 2058:
case 1703:
case 1433:
case 2609:
case 234:
case 2618:
case 2139:
case 980:
case 3774:
case 2704:
case 3254:
case 3140:
case 3313:
case 934:
case 3281:
case 1488:
case 3730:
case 991:
case 2470:
case 1019:
case 2868:
case 2264:
case 753:
case 1635:
case 1460:
case 3357:
case 1878:
case 1274:
case 560:
case 1520:
case 77:
case 2880:
case 2093:
case 3959:
case 1202:
case 3068:
case 2644:
case 2111:
case 950:
case 85:
case 3262:
case 2721:
case 3558:
case 1008:
case 1226:
case 1659:
case 840:
case 3165:
case 1150:
case 2962:
case 1769:
case 2663:
case 2440:
case 918:
case 2825:
case 2903:
case 3973:
case 3698:
case 2857:
case 3380:
case 2626:
case 4060:
case 1664:
case 650:
case 423:
case 321:
case 3455:
case 3427:
case 3964:
case 1507:
case 2235:
case 2243:
case 2513:
case 1950:
case 3046:
case 611:
case 2810:
case 1198:
case 2265:
case 3537:
case 426:
case 649:
case 1089:
case 1634:
case 3650:
case 3324:
case 1095:
case 2103:
case 3173:
case 3211:
case 672:
case 2645:
case 2633:
case 1409:
case 1104:
case 865:
case 6:
case 3469:
case 2932:
case 3164:
case 464:
case 2022:
case 3310:
case 3232:
case 3135:
case 876:
case 1245:
case 911:
case 859:
case 2501:
case 1233:
case 972:
case 3076:
case 2228:
case 1584:
case 2006:
case 2:
case 3454:
case 1905:
case 1665:
case 3346:
case 3822:
case 3965:
case 3760:
case 2675:
case 1395:
case 3024:
case 756:
case 831:
case 1389:
case 328:
case 2559:
case 1182:
case 1947:
case 160:
case 1931:
case 1285:
case 1897:
case 1544:
case 390:
case 1818:
case 2958:
case 2190:
case 3631:
case 1321:
case 2543:
case 2213:
case 3748:
case 2171:
case 2535:
case 2354:
case 2620:
case 1809:
case 113:
case 3267:
case 1349:
case 620:
case 697:
case 2607:
case 3612:
case 3677:
case 2967:
case 3086:
case 2054:
case 1574:
case 294:
case 2719:
case 1613:
case 289:
case 2129:
case 2794:
case 989:
case 1977:
case 1049:
case 1912:
case 994:
case 1563:
case 2886:
case 1451:
case 1526:
case 1379:
case 1423:
case 82:
case 3503:
case 2141:
case 3778:
case 2573:
case 468:
case 2369:
case 1502:
case 3052:
case 30:
case 2528:
case 2167:
case 1888:
case 617:
case 102:
case 2201:
case 829:
case 1478:
case 3113:
case 1533:
case 1545:
case 2480:
case 1112:
case 1177:
case 358:
case 2534:
case 3070:
case 2327:
case 3290:
case 2355:
case 3316:
case 880:
case 2891:
case 98:
case 2283:
case 1575:
case 2055:
case 1448:
case 3983:
case 2027:
case 804:
case 116:
case 2300:
case 1147:
case 2789:
case 1683:
case 2565:
case 2990:
case 2158:
case 2840:
case 2425:
case 614:
case 3016:
case 767:
case 405:
case 3656:
case 132:
case 2684:
case 461:
case 363:
case 3827:
case 3661:
case 3901:
case 2816:
case 837:
case 3391:
case 1956:
case 1601:
case 851:
case 1960:
case 1595:
case 2227:
case 1600:
case 736:
case 3041:
case 241:
case 2255:
case 477:
case 3435:
case 3900:
case 2970:
case 941:
case 3443:
case 769:
case 2383:
case 219:
case 262:
case 1384:
case 890:
case 99:
case 2837:
case 866:
case 2301:
case 962:
case 3787:
case 3154:
case 4004:
case 2186:
case 3240:
case 1130:
case 2733:
case 2403:
case 122:
case 3473:
case 3329:
case 1118:
case 3538:
case 2940:
case 3576:
case 1084:
case 2506:
case 1472:
case 1417:
case 2890:
case 32:
case 2522:
case 3291:
case 4042:
case 515:
case 3939:
case 2462:
case 474:
case 3883:
case 809:
case 3071:
case 69:
case 3524:
case 2481:
case 1627:
case 2916:
case 3169:
case 1734:
case 3955:
case 2871:
case 662:
case 1594:
case 699:
case 2858:
case 2254:
case 2140:
case 684:
case 1020:
case 287:
case 1918:
case 987:
case 1997:
case 248:
case 2774:
case 1831:
case 334:
case 595:
case 858:
case 186:
case 703:
case 1847:
case 3580:
case 1508:
case 1773:
case 61:
case 1399:
case 778:
case 1385:
case 1909:
case 3798:
case 1669:
case 2763:
case 3568:
case 3127:
case 2496:
case 2726:
case 3155:
case 4005:
case 1085:
case 984:
case 1099:
case 230:
case 1160:
case 337:
case 1759:
case 284:
case 1188:
case 687:
case 2170:
case 2269:
case 1654:
case 1320:
case 810:
case 2191:
case 3465:
case 792:
case 91:
case 3525:
case 2013:
case 2411:
case 3954:
case 1930:
case 1735:
case 1405:
case 543:
case 21:
case 2458:
case 2784:
case 3756:
case 471:
case 373:
case 3591:
case 3032:
case 4077:
case 857:
case 3761:
case 146:
case 2028:
case 2206:
case 2715:
case 947:
case 2910:
case 1850:
case 1148:
case 1431:
case 725:
case 2365:
case 2500:
case 2695:
case 308:
case 2946:
case 2034:
case 2689:
case 1783:
case 3224:
case 3311:
case 3782:
case 1375:
case 2896:
case 944:
case 1136:
case 115:
case 2180:
case 1075:
case 2467:
case 4031:
case 1887:
case 1295:
case 406:
case 2334:
case 854:
case 821:
case 2938:
case 2976:
case 1622:
case 3540:
case 3906:
case 3332:
case 774:
case 3865:
case 3623:
case 583:
case 3922:
case 1966:
case 2811:
case 1951:
case 1805:
case 1302:
case 1936:
case 1044:
case 2980:
case 195:
case 586:
case 281:
case 1978:
case 2799:
case 2429:
case 3303:
case 4082:
case 3362:
case 2608:
case 1992:
case 2714:
case 3843:
case 478:
case 4061:
case 301:
case 2364:
case 2176:
case 2441:
case 1374:
case 1166:
case 3257:
case 1817:
case 2064:
case 3648:
case 1219:
case 3873:
case 2925:
case 2862:
case 3483:
case 2110:
case 1074:
case 1898:
case 1294:
case 2343:
case 1456:
case 3864:
case 1461:
case 3747:
case 1208:
case 1804:
case 2471:
case 3280:
case 2146:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743706802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,];
var gg_b = "1743706802/";

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
