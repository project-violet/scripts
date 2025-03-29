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
var o = 1;
switch (g) {
case 251:
case 1091:
case 2931:
case 3927:
case 3968:
case 3120:
case 1205:
case 3964:
case 1874:
case 2222:
case 1105:
case 3602:
case 2716:
case 1770:
case 530:
case 3986:
case 1255:
case 2529:
case 324:
case 1344:
case 1530:
case 2124:
case 638:
case 3658:
case 3816:
case 1060:
case 3323:
case 2960:
case 3403:
case 2167:
case 825:
case 1768:
case 3277:
case 2421:
case 3654:
case 1626:
case 2267:
case 3608:
case 3177:
case 3453:
case 820:
case 3970:
case 14:
case 4087:
case 438:
case 2972:
case 3446:
case 3068:
case 94:
case 1815:
case 3598:
case 2155:
case 3538:
case 332:
case 898:
case 1991:
case 2561:
case 3064:
case 1122:
case 2205:
case 2762:
case 2342:
case 3760:
case 3340:
case 4017:
case 3086:
case 3772:
case 3864:
case 753:
case 958:
case 1974:
case 4000:
case 1445:
case 2255:
case 3868:
case 2915:
case 1015:
case 2831:
case 447:
case 1301:
case 3143:
case 1960:
case 2590:
case 3870:
case 2060:
case 429:
case 2764:
case 1124:
case 3791:
case 258:
case 2626:
case 844:
case 1128:
case 1167:
case 3731:
case 3239:
case 2348:
case 3479:
case 2768:
case 1267:
case 1228:
case 3778:
case 3139:
case 2469:
case 503:
case 509:
case 3106:
case 556:
case 881:
case 3256:
case 419:
case 3862:
case 2687:
case 623:
case 413:
case 1115:
case 2739:
case 2633:
case 2178:
case 255:
case 2231:
case 1777:
case 3612:
case 2471:
case 2693:
case 3264:
case 716:
case 250:
case 2657:
case 2743:
case 3920:
case 3286:
case 1022:
case 2434:
case 2805:
case 2274:
case 1955:
case 2055:
case 2498:
case 1381:
case 394:
case 2191:
case 839:
case 1215:
case 3461:
case 833:
case 2131:
case 3168:
case 3127:
case 169:
case 403:
case 456:
case 1824:
case 3705:
case 35:
case 163:
case 1680:
case 1335:
case 519:
case 3099:
case 3039:
case 950:
case 895:
case 3614:
case 1395:
case 1867:
case 513:
case 1597:
case 348:
case 2285:
case 523:
case 2311:
case 3806:
case 1503:
case 136:
case 3490:
case 2272:
case 3413:
case 3056:
case 2924:
case 4065:
case 3043:
case 3270:
case 609:
case 1720:
case 890:
case 3430:
case 1706:
case 4007:
case 4033:
case 384:
case 1855:
case 1291:
case 1693:
case 1799:
case 1610:
case 2676:
case 1607:
case 1178:
case 1633:
case 3429:
case 3545:
case 3309:
case 3820:
case 3336:
case 3688:
case 1005:
case 1174:
case 974:
case 936:
case 2822:
case 1434:
case 4057:
case 3483:
case 1805:
case 1649:
case 3020:
case 1363:
case 435:
case 341:
case 2955:
case 963:
case 768:
case 2381:
case 818:
case 2824:
case 87:
case 2553:
case 3116:
case 493:
case 2546:
case 880:
case 1260:
case 805:
case 3939:
case 3682:
case 2867:
case 2828:
case 1185:
case 2335:
case 2680:
case 236:
case 2537:
case 3877:
case 2067:
case 2597:
case 1285:
case 2720:
case 699:
case 3943:
case 3216:
case 1492:
case 1160:
case 3722:
case 3956:
case 1272:
case 2024:
case 693:
case 1999:
case 2099:
case 2006:
case 4082:
case 137:
case 546:
case 1077:
case 2977:
case 3185:
case 1939:
case 2039:
case 657:
case 2170:
case 1116:
case 994:
case 2618:
case 2856:
case 1675:
case 2262:
case 2705:
case 3172:
case 457:
case 2413:
case 1956:
case 3160:
case 3492:
case 1216:
case 2270:
case 3285:
case 1877:
case 248:
case 3928:
case 2806:
case 3579:
case 3311:
case 2755:
case 749:
case 1688:
case 2264:
case 479:
case 948:
case 743:
case 2227:
case 1684:
case 1429:
case 2612:
case 1545:
case 3607:
case 355:
case 3739:
case 3291:
case 3799:
case 3693:
case 3610:
case 184:
case 3191:
case 294:
case 3498:
case 3055:
case 141:
case 3438:
case 2168:
case 2127:
case 464:
case 3278:
case 1728:
case 4066:
case 1767:
case 2920:
case 3657:
case 3363:
case 673:
case 3274:
case 2164:
case 1977:
case 2077:
case 3867:
case 1039:
case 2682:
case 2939:
case 1614:
case 2999:
case 4014:
case 3335:
case 2906:
case 2675:
case 1262:
case 904:
case 1856:
case 1618:
case 3553:
case 1705:
case 702:
case 3546:
case 1843:
case 2116:
case 1170:
case 1043:
case 3720:
case 1162:
case 3665:
case 2956:
case 1413:
case 3503:
case 3537:
case 336:
case 374:
case 2521:
case 1899:
case 2877:
case 2820:
case 1186:
case 2396:
case 3822:
case 1264:
case 3905:
case 2336:
case 80:
case 3676:
case 284:
case 1612:
case 2684:
case 1268:
case 875:
case 1127:
case 1168:
case 241:
case 2767:
case 2347:
case 1461:
case 2724:
case 3022:
case 1286:
case 1920:
case 870:
case 3421:
case 2277:
case 3167:
case 2437:
case 3128:
case 1731:
case 2497:
case 1791:
case 1299:
case 1206:
case 53:
case 3124:
case 1062:
case 924:
case 722:
case 2816:
case 2658:
case 1532:
case 862:
case 712:
case 2970:
case 1916:
case 1641:
case 1070:
case 1243:
case 3224:
case 1774:
case 1862:
case 1199:
case 1106:
case 3267:
case 2715:
case 1778:
case 1139:
case 797:
case 1340:
case 2120:
case 3583:
case 140:
case 1625:
case 82:
case 1594:
case 3122:
case 2964:
case 2652:
case 214:
case 132:
case 3650:
case 1027:
case 1598:
case 1785:
case 1868:
case 1827:
case 3978:
case 3529:
case 3445:
case 1864:
case 452:
case 3617:
case 76:
case 81:
case 1772:
case 2986:
case 3600:
case 3626:
case 2791:
case 2206:
case 3768:
case 1277:
case 4054:
case 2239:
case 2731:
case 3872:
case 2062:
case 945:
case 646:
case 1962:
case 3344:
case 2774:
case 3687:
case 1604:
case 1446:
case 3786:
case 2243:
case 1453:
case 1016:
case 4004:
case 1608:
case 2139:
case 2778:
case 1715:
case 1389:
case 2106:
case 2625:
case 3342:
case 3762:
case 240:
case 2594:
case 2064:
case 2534:
case 2760:
case 2886:
case 1120:
case 1968:
case 2598:
case 3878:
case 2027:
case 4052:
case 3031:
case 114:
case 3561:
case 3091:
case 232:
case 245:
case 2571:
case 2319:
case 2785:
case 3831:
case 2827:
case 3078:
case 2086:
case 1986:
case 787:
case 1220:
case 3770:
case 2864:
case 3105:
case 2772:
case 1921:
case 3037:
case 3003:
case 339:
case 894:
case 3097:
case 3846:
case 1132:
case 267:
case 66:
case 3695:
case 1460:
case 2382:
case 1314:
case 18:
case 29:
case 10:
case 3416:
case 1292:
case 3053:
case 366:
case 46:
case 1232:
case 3046:
case 752:
case 697:
case 1472:
case 3897:
case 3365:
case 2577:
case 3803:
case 1506:
case 7:
case 1485:
case 2821:
case 2969:
case 1069:
case 1194:
case 422:
case 3376:
case 1134:
case 848:
case 1198:
case 582:
case 311:
case 99:
case 1138:
case 1271:
case 2696:
case 3721:
case 2737:
case 2703:
case 2609:
case 321:
case 1171:
case 1238:
case 3129:
case 1478:
case 0:
case 395:
case 2045:
case 3283:
case 2366:
case 1234:
case 622:
case 1294:
case 2753:
case 412:
case 841:
case 3079:
case 2869:
case 3903:
case 517:
case 318:
case 3130:
case 2556:
case 2314:
case 407:
case 1382:
case 270:
case 687:
case 3462:
case 3190:
case 3113:
case 3290:
case 3946:
case 3230:
case 3470:
case 2292:
case 2485:
case 2069:
case 3879:
case 1821:
case 1577:
case 3393:
case 634:
case 676:
case 3464:
case 2134:
case 1384:
case 2194:
case 2312:
case 90:
case 2271:
case 3427:
case 3468:
case 2673:
case 1609:
case 1737:
case 4036:
case 154:
case 3161:
case 2491:
case 385:
case 970:
case 305:
case 1045:
case 2298:
case 2238:
case 98:
case 3349:
case 1415:
case 592:
case 3663:
case 3357:
case 476:
case 3486:
case 2294:
case 434:
case 1659:
case 2474:
case 4047:
case 1746:
case 380:
case 2234:
case 1623:
case 1729:
case 1358:
case 388:
case 1221:
case 3771:
case 824:
case 2169:
case 3572:
case 3648:
case 2892:
case 773:
case 427:
case 3813:
case 2570:
case 3326:
case 2832:
case 1424:
case 643:
case 627:
case 3794:
case 4089:
case 2562:
case 1992:
case 417:
case 3443:
case 814:
case 308:
case 962:
case 2586:
case 534:
case 3929:
case 3861:
case 2640:
case 576:
case 1971:
case 2898:
case 3642:
case 3578:
case 1302:
case 3531:
case 1245:
case 2568:
case 1998:
case 2038:
case 91:
case 3061:
case 278:
case 2730:
case 2094:
case 2564:
case 1994:
case 3732:
case 310:
case 2034:
case 692:
case 757:
case 1422:
case 1934:
case 3477:
case 2221:
case 2729:
case 1169:
case 3601:
case 3237:
case 56:
case 2516:
case 1832:
case 2354:
case 3146:
case 12:
case 3930:
case 1092:
case 2783:
case 1032:
case 2424:
case 3913:
case 3246:
case 2304:
case 271:
case 1269:
case 597:
case 1341:
case 2428:
case 2467:
case 3350:
case 971:
case 1894:
case 1834:
case 1405:
case 162:
case 1586:
case 4040:
case 3515:
case 2145:
case 1071:
case 1838:
case 2938:
case 178:
case 522:
case 1871:
case 2998:
case 1527:
case 3317:
case 73:
case 2245:
case 1455:
case 1098:
case 602:
case 2934:
case 1034:
case 1564:
case 4019:
case 181:
case 3838:
case 661:
case 1029:
case 3640:
case 2929:
case 1515:
case 2642:
case 3405:
case 362:
case 1883:
case 3586:
case 709:
case 3834:
case 908:
case 1350:
case 1420:
case 3564:
case 3094:
case 3730:
case 2983:
case 2732:
case 3527:
case 1317:
case 3455:
case 3098:
case 2531:
case 144:
case 461:
case 577:
case 378:
case 1961:
case 2061:
case 291:
case 3038:
case 1153:
case 2830:
case 2648:
case 991:
case 31:
case 2572:
case 416:
case 626:
case 2813:
case 2644:
case 553:
case 2406:
case 2585:
case 4001:
case 1297:
case 910:
case 3169:
case 2439:
case 1237:
case 2771:
case 2279:
case 1477:
case 288:
case 586:
case 208:
case 1137:
case 2738:
case 2387:
case 1197:
case 920:
case 2090:
case 1913:
case 1990:
case 3032:
case 915:
case 2443:
case 3092:
case 3562:
case 2794:
case 426:
case 1642:
case 115:
case 4042:
case 1861:
case 3971:
case 1574:
case 2350:
case 84:
case 2883:
case 799:
case 3352:
case 3934:
case 3422:
case 1732:
case 110:
case 2083:
case 1792:
case 858:
case 2829:
case 560:
case 2300:
case 3938:
case 2317:
case 3998:
case 125:
case 1531:
case 1813:
case 1326:
case 944:
case 4048:
case 1830:
case 2153:
case 472:
case 901:
case 1648:
case 2601:
case 668:
case 4044:
case 3358:
case 3221:
case 1279:
case 1585:
case 1406:
case 1798:
case 3304:
case 2197:
case 1387:
case 3467:
case 108:
case 2137:
case 298:
case 3121:
case 1179:
case 371:
case 3992:
case 981:
case 2253:
case 2930:
case 1030:
case 3308:
case 2246:
case 1560:
case 1013:
case 1090:
case 1734:
case 3424:
case 3689:
case 665:
case 3845:
case 3737:
case 354:
case 2721:
case 3696:
case 2229:
case 1468:
case 1307:
case 3384:
case 2522:
case 460:
case 1393:
case 290:
case 2183:
case 3520:
case 3746:
case 3366:
case 933:
case 660:
case 2283:
case 2681:
case 738:
case 939:
case 1486:
case 3415:
case 1663:
case 465:
case 105:
case 295:
case 1190:
case 2380:
case 568:
case 1462:
case 696:
case 3382:
case 1130:
case 2695:
case 2853:
case 921:
case 1937:
case 239:
case 2003:
case 2037:
case 1079:
case 3021:
case 3375:
case 3577:
case 2897:
case 990:
case 855:
case 128:
case 2837:
case 2053:
case 1470:
case 2416:
case 1953:
case 4011:
case 39:
case 911:
case 1946:
case 1213:
case 2046:
case 266:
case 3431:
case 836:
case 3138:
case 1229:
case 2555:
case 3198:
case 2464:
case 3134:
case 200:
case 561:
case 2310:
case 928:
case 723:
case 2333:
case 3312:
case 3194:
case 1522:
case 747:
case 918:
case 713:
case 863:
case 4081:
case 27:
case 2505:
case 280:
case 1681:
case 1283:
case 869:
case 719:
case 3298:
case 205:
case 2261:
case 2357:
case 2663:
case 1129:
case 486:
case 1524:
case 3192:
case 3314:
case 38:
case 1853:
case 3556:
case 1380:
case 2113:
case 659:
case 1846:
case 3132:
case 905:
case 606:
case 370:
case 980:
case 1567:
case 2997:
case 1528:
case 133:
case 3318:
case 218:
case 139:
case 526:
case 2079:
case 3921:
case 3599:
case 3069:
case 3506:
case 516:
case 3485:
case 1365:
case 900:
case 375:
case 3539:
case 731:
case 453:
case 2946:
case 3472:
case 2290:
case 166:
case 2953:
case 2470:
case 1053:
case 406:
case 1606:
case 2254:
case 2776:
case 1710:
case 1793:
case 2401:
case 1982:
case 1014:
case 2082:
case 1639:
case 2914:
case 3784:
case 309:
case 1141:
case 3303:
case 762:
case 1018:
case 3397:
case 3865:
case 2918:
case 2204:
case 383:
case 3595:
case 65:
case 3065:
case 2875:
case 3489:
case 4056:
case 1757:
case 1241:
case 1643:
case 3535:
case 3353:
case 979:
case 13:
case 3766:
case 3346:
case 2154:
case 3880:
case 973:
case 3117:
case 2088:
case 1988:
case 3775:
case 1225:
case 2559:
case 545:
case 3100:
case 3933:
case 2912:
case 957:
case 2780:
case 2252:
case 1442:
case 3910:
case 694:
case 3076:
case 1966:
case 2066:
case 1573:
case 2152:
case 2509:
case 494:
case 2536:
case 532:
case 3949:
case 3200:
case 72:
case 2765:
case 3622:
case 2888:
case 1125:
case 1914:
case 437:
case 2639:
case 2707:
case 2982:
case 1401:
case 1677:
case 2793:
case 3226:
case 1918:
case 393:
case 2975:
case 834:
case 2141:
case 876:
case 1258:
case 2448:
case 3511:
case 3379:
case 2749:
case 2241:
case 2369:
case 1158:
case 157:
case 1875:
case 1204:
case 2818:
case 3287:
case 1208:
case 524:
case 3849:
case 342:
case 1559:
case 3718:
case 1547:
case 3010:
case 1866:
case 604:
case 3714:
case 3033:
case 3007:
case 641:
case 1084:
case 3440:
case 1912:
case 1884:
case 404:
case 1536:
case 1066:
case 684:
case 3893:
case 164:
case 4020:
case 1765:
case 1202:
case 1888:
case 335:
case 3057:
case 3049:
case 807:
case 514:
case 1808:
case 1750:
case 2954:
case 3026:
case 3725:
case 1804:
case 2218:
case 1275:
case 2662:
case 3660:
case 1058:
case 1941:
case 2670:
case 1700:
case 892:
case 2411:
case 1717:
case 4016:
case 3672:
case 146:
case 2118:
case 2392:
case 3330:
case 2908:
case 3685:
case 3149:
case 3157:
case 504:
case 817:
case 767:
case 2664:
case 1925:
case 1166:
case 624:
case 2952:
case 3210:
case 3233:
case 2668:
case 2627:
case 414:
case 3950:
case 3678:
case 3133:
case 2463:
case 3542:
case 2394:
case 3193:
case 1188:
case 3917:
case 2825:
case 3674:
case 2787:
case 1002:
case 2338:
case 252:
case 3752:
case 3926:
case 2282:
case 2750:
case 882:
case 2058:
case 4062:
case 347:
case 548:
case 2275:
case 1662:
case 1218:
case 2804:
case 3551:
case 323:
case 3265:
case 2717:
case 2175:
case 3987:
case 1118:
case 246:
case 1041:
case 2616:
case 2858:
case 2941:
case 2700:
case 2182:
case 1392:
case 2008:
case 3501:
case 3817:
case 78:
case 3800:
case 4064:
case 1371:
case 1519:
case 432:
case 1212:
case 1668:
case 1627:
case 2166:
case 1952:
case 4027:
case 4068:
case 2052:
case 2852:
case 1:
case 3383:
case 3615:
case 1463:
case 3708:
case 1394:
case 445:
case 3447:
case 3000:
case 1686:
case 3704:
case 2188:
case 70:
case 3017:
case 1787:
case 2481:
case 3952:
case 3726:
case 2293:
case 2950:
case 1496:
case 3627:
case 2631:
case 2207:
case 3371:
case 3519:
case 1758:
case 1800:
case 3025:
case 1817:
case 3787:
case 1704:
case 352:
case 1000:
case 131:
case 816:
case 2361:
case 766:
case 1459:
case 3394:
case 3112:
case 1615:
case 2542:
case 2133:
case 1850:
case 2678:
case 2110:
case 1383:
case 2193:
case 4015:
case 3:
case 3662:
case 3218:
case 1551:
case 2725:
case 123:
case 147:
case 2887:
case 536:
case 129:
case 3214:
case 2026:
case 1752:
case 1926:
case 861:
case 3954:
case 1180:
case 2313:
case 2390:
case 3908:
case 563:
case 3114:
case 3670:
case 3041:
case 238:
case 119:
case 1987:
case 3118:
case 2087:
case 113:
case 1702:
case 3904:
case 2672:
case 2548:
case 1473:
case 2050:
case 2496:
case 1631:
case 913:
case 1691:
case 3052:
case 1293:
case 868:
case 1210:
case 2276:
case 4031:
case 2754:
case 2436:
case 550:
case 3166:
case 3925:
case 2817:
case 3288:
case 2329:
case 2800:
case 1157:
case 4074:
case 872:
case 1249:
case 1361:
case 1674:
case 3002:
case 555:
case 3188:
case 923:
case 1193:
case 728:
case 2383:
case 4078:
case 3852:
case 3184:
case 2615:
case 64:
case 3495:
case 3058:
case 229:
case 3589:
case 1725:
case 3275:
case 2165:
case 3435:
case 2926:
case 1026:
case 2280:
case 785:
case 931:
case 3750:
case 3282:
case 1544:
case 1685:
case 3182:
case 658:
case 2501:
case 3523:
case 1826:
case 2180:
case 1313:
case 2702:
case 213:
case 346:
case 1087:
case 2987:
case 3175:
case 44:
case 1548:
case 77:
case 2265:
case 3700:
case 219:
case 3941:
case 3858:
case 3616:
case 3084:
case 989:
case 1440:
case 1033:
case 2782:
case 2076:
case 3866:
case 130:
case 2910:
case 1093:
case 3252:
case 788:
case 983:
case 3102:
case 3547:
case 3088:
case 142:
case 1857:
case 2100:
case 1849:
case 4005:
case 379:
case 650:
case 1049:
case 3202:
case 2217:
case 708:
case 3509:
case 903:
case 3152:
case 3066:
case 2876:
case 1893:
case 3596:
case 3536:
case 956:
case 655:
case 4055:
case 909:
case 3258:
case 2303:
case 256:
case 193:
case 3075:
case 203:
case 1187:
case 2788:
case 3104:
case 54:
case 3776:
case 2080:
case 2423:
case 1712:
case 3401:
case 865:
case 715:
case 2353:
case 2628:
case 2880:
case 3154:
case 791:
case 2624:
case 3875:
case 2065:
case 1965:
case 357:
case 558:
case 2535:
case 3451:
case 710:
case 3442:
case 1910:
case 2563:
case 2440:
case 1250:
case 3012:
case 3984:
case 2033:
case 1907:
case 2714:
case 1581:
case 806:
case 853:
case 1775:
case 2718:
case 1117:
case 2605:
case 3988:
case 235:
case 2419:
case 1622:
case 886:
case 2049:
case 2833:
case 1150:
case 3812:
case 798:
case 3966:
case 3573:
case 2187:
case 3975:
case 3018:
case 1865:
case 469:
case 463:
case 3448:
case 109:
case 156:
case 299:
case 1337:
case 1303:
case 2712:
case 1423:
case 3707:
case 3639:
case 3733:
case 636:
case 935:
case 3710:
case 781:
case 2226:
case 2980:
case 3606:
case 1080:
case 2126:
case 4028:
case 1766:
case 942:
case 474:
case 3814:
case 744:
case 1628:
case 1353:
case 1535:
case 3369:
case 669:
case 3643:
case 1624:
case 930:
case 663:
case 1489:
case 3656:
case 183:
case 2965:
case 1065:
case 3296:
case 2629:
case 2484:
case 691:
case 1163:
case 580:
case 3476:
case 2942:
case 625:
case 57:
case 3236:
case 610:
case 1391:
case 2181:
case 2517:
case 420:
case 3159:
case 410:
case 585:
case 1378:
case 3247:
case 2315:
case 2789:
case 2683:
case 3919:
case 491:
case 2466:
case 261:
case 3109:
case 3552:
case 1263:
case 2851:
case 1048:
case 2295:
case 349:
case 2475:
case 343:
case 2235:
case 528:
case 755:
case 3480:
case 2944:
case 1360:
case 608:
case 1414:
case 2001:
case 688:
case 3823:
case 168:
case 3316:
case 1844:
case 4030:
case 3089:
case 226:
case 750:
case 2135:
case 317:
case 518:
case 1211:
case 2195:
case 1630:
case 1385:
case 2051:
case 1951:
case 644:
case 3493:
case 4029:
case 481:
case 3744:
case 3364:
case 3671:
case 1484:
case 601:
case 2412:
case 3407:
case 3433:
case 3748:
case 1517:
case 3327:
case 3368:
case 813:
case 2331:
case 763:
case 521:
case 819:
case 2391:
case 769:
case 3819:
case 1488:
case 1500:
case 511:
case 1281:
case 1683:
case 3019:
case 3694:
case 3525:
case 3449:
case 1315:
case 3457:
case 823:
case 3638:
case 590:
case 2661:
case 736:
case 2263:
case 774:
case 681:
case 2842:
case 1466:
case 972:
case 1550:
case 116:
case 2111:
case 272:
case 1948:
case 1851:
case 2048:
case 2587:
case 2360:
case 3923:
case 698:
case 2414:
case 2901:
case 3742:
case 1801:
case 3370:
case 2385:
case 533:
case 2630:
case 1195:
case 2951:
case 1051:
case 3989:
case 3632:
case 695:
case 996:
case 1452:
case 2242:
case 411:
case 2305:
case 3936:
case 621:
case 2863:
case 3073:
case 3909:
case 883:
case 544:
case 260:
case 3119:
case 322:
case 1881:
case 2981:
case 3711:
case 312:
case 3947:
case 611:
case 3873:
case 2063:
case 1576:
case 2533:
case 2507:
case 421:
case 1322:
case 3512:
case 666:
case 965:
case 3399:
case 397:
case 598:
case 2935:
case 3306:
case 2248:
case 1565:
case 2995:
case 1151:
case 3339:
case 2679:
case 751:
case 1709:
case 1603:
case 1201:
case 1637:
case 1697:
case 1454:
case 3514:
case 633:
case 960:
case 1408:
case 3763:
case 3343:
case 1101:
case 639:
case 36:
case 1759:
case 3518:
case 1251:
case 2441:
case 1367:
case 4046:
case 1835:
case 296:
case 159:
case 3487:
case 4053:
case 1404:
case 2011:
case 3566:
case 3096:
case 758:
case 485:
case 2452:
case 605:
case 906:
case 959:
case 1305:
case 160:
case 1557:
case 3735:
case 277:
case 3859:
case 3795:
case 67:
case 525:
case 3400:
case 3588:
case 893:
case 3059:
case 480:
case 47:
case 1981:
case 2402:
case 3417:
case 74:
case 1355:
case 165:
case 1533:
case 3836:
case 2322:
case 3584:
case 3320:
case 1063:
case 1510:
case 2963:
case 1593:
case 1995:
case 3377:
case 2095:
case 1248:
case 835:
case 2151:
case 508:
case 286:
case 307:
case 2035:
case 2736:
case 1244:
case 2796:
case 2201:
case 2637:
case 2709:
case 628:
case 2101:
case 3582:
case 428:
case 2835:
case 259:
case 3781:
case 196:
case 2911:
case 2747:
case 1441:
case 2895:
case 253:
case 1223:
case 1621:
case 4021:
case 2426:
case 2306:
case 3935:
case 3811:
case 1189:
case 467:
case 3995:
case 69:
case 3248:
case 873:
case 1575:
case 2518:
case 667:
case 879:
case 49:
case 1289:
case 2514:
case 2343:
case 2669:
case 1859:
case 1795:
case 1735:
case 2119:
case 3557:
case 3549:
case 454:
case 2936:
case 3305:
case 1036:
case 3242:
case 2909:
case 2073:
case 2240:
case 1450:
case 1096:
case 3063:
case 4045:
case 3510:
case 654:
case 1809:
case 2512:
case 1645:
case 997:
case 365:
case 212:
case 2711:
case 176:
case 3981:
case 1059:
case 2959:
case 1400:
case 3454:
case 52:
case 976:
case 3697:
case 934:
case 3709:
case 732:
case 2223:
case 3796:
case 3151:
case 740:
case 3458:
case 3095:
case 470:
case 3565:
case 3035:
case 197:
case 386:
case 1399:
case 3911:
case 3404:
case 3646:
case 359:
case 3835:
case 2781:
case 306:
case 287:
case 3759:
case 1518:
case 353:
case 3895:
case 3367:
case 3251:
case 3747:
case 16:
case 1669:
case 745:
case 4069:
case 1356:
case 3324:
case 2582:
case 122:
case 2847:
case 2859:
case 2009:
case 2096:
case 2450:
case 1240:
case 1073:
case 2584:
case 3322:
case 1512:
case 3963:
case 2896:
case 2320:
case 1140:
case 1959:
case 2047:
case 1947:
case 1219:
case 1711:
case 2417:
case 3402:
case 276:
case 2508:
case 3001:
case 3482:
case 1923:
case 8:
case 249:
case 3948:
case 3295:
case 2504:
case 3851:
case 227:
case 2889:
case 3235:
case 243:
case 316:
case 1541:
case 3475:
case 3135:
case 42:
case 2089:
case 1692:
case 4032:
case 2316:
case 794:
case 2554:
case 570:
case 3488:
case 102:
case 292:
case 3181:
case 1819:
case 2159:
case 462:
case 2147:
case 1748:
case 75:
case 3517:
case 1368:
case 1407:
case 1433:
case 2209:
case 1273:
case 1040:
case 3484:
case 3723:
case 3629:
case 2940:
case 917:
case 1744:
case 1364:
case 1493:
case 1410:
case 2136:
case 3466:
case 478:
case 3550:
case 1840:
case 949:
case 2552:
case 2109:
case 2196:
case 1525:
case 3315:
case 4034:
case 1634:
case 662:
case 4094:
case 3901:
case 784:
case 3360:
case 1023:
case 671:
case 1508:
case 3044:
case 59:
case 1889:
case 127:
case 3111:
case 3418:
case 2541:
case 143:
case 1504:
case 3630:
case 3385:
case 3613:
case 1089:
case 741:
case 3372:
case 902:
case 3844:
case 471:
case 1823:
case 1316:
case 1554:
case 1147:
case 3331:
case 1502:
case 2327:
case 2368:
case 202:
case 3391:
case 2364:
case 2744:
case 2410:
case 2493:
case 1701:
case 2433:
case 3163:
case 3412:
case 2671:
case 737:
case 2040:
case 2273:
case 1109:
case 3661:
case 2638:
case 2173:
case 2386:
case 1136:
case 2698:
case 2019:
case 282:
case 2457:
case 1259:
case 1751:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743289201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,];
var gg_b = "1743289201/";

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
