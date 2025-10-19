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
case 1246:
case 1012:
case 1136:
case 3645:
case 1385:
case 2921:
case 2121:
case 524:
case 2024:
case 1484:
case 513:
case 3211:
case 904:
case 2689:
case 3093:
case 1208:
case 2672:
case 2780:
case 3545:
case 1466:
case 2589:
case 249:
case 351:
case 2540:
case 2333:
case 1337:
case 2988:
case 3696:
case 1036:
case 994:
case 1112:
case 1850:
case 2867:
case 2924:
case 2537:
case 3054:
case 3151:
case 3772:
case 2685:
case 3951:
case 176:
case 2124:
case 1481:
case 475:
case 733:
case 914:
case 1876:
case 1633:
case 336:
case 462:
case 1707:
case 2637:
case 2745:
case 2162:
case 3238:
case 3789:
case 619:
case 587:
case 3148:
case 271:
case 1372:
case 943:
case 3414:
case 385:
case 168:
case 334:
case 499:
case 3791:
case 1281:
case 3569:
case 3082:
case 2156:
case 3168:
case 3315:
case 2847:
case 2694:
case 772:
case 3669:
case 3175:
case 1499:
case 996:
case 3079:
case 1353:
case 3438:
case 2357:
case 2970:
case 1805:
case 2901:
case 2170:
case 675:
case 916:
case 1391:
case 2216:
case 3835:
case 460:
case 1273:
case 3565:
case 1284:
case 544:
case 3982:
case 2591:
case 2560:
case 1610:
case 3678:
case 3319:
case 282:
case 1446:
case 2553:
case 1557:
case 56:
case 3075:
case 1719:
case 450:
case 2904:
case 3665:
case 229:
case 906:
case 2104:
case 55:
case 1657:
case 1510:
case 526:
case 4016:
case 3578:
case 367:
case 2828:
case 1524:
case 2476:
case 2243:
case 1137:
case 787:
case 1072:
case 140:
case 2133:
case 1754:
case 3736:
case 1662:
case 1624:
case 2463:
case 800:
case 3844:
case 1089:
case 1336:
case 2429:
case 3697:
case 4043:
case 1832:
case 533:
case 2321:
case 2362:
case 3283:
case 1521:
case 2209:
case 396:
case 1688:
case 3858:
case 3712:
case 3348:
case 2866:
case 3351:
case 1085:
case 3907:
case 1140:
case 1621:
case 1748:
case 793:
case 1189:
case 277:
case 713:
case 1877:
case 3459:
case 3393:
case 47:
case 343:
case 2324:
case 3107:
case 2884:
case 3531:
case 1768:
case 2157:
case 4025:
case 802:
case 3861:
case 3375:
case 428:
case 2409:
case 1094:
case 936:
case 3890:
case 3483:
case 2301:
case 67:
case 323:
case 2718:
case 38:
case 2808:
case 744:
case 3915:
case 3368:
case 3115:
case 2846:
case 208:
case 648:
case 1775:
case 2910:
case 2356:
case 1430:
case 439:
case 394:
case 3019:
case 951:
case 1053:
case 3927:
case 3864:
case 3534:
case 1670:
case 4063:
case 2057:
case 1994:
case 1060:
case 1782:
case 3292:
case 4029:
case 120:
case 1091:
case 2276:
case 2304:
case 1542:
case 555:
case 3127:
case 304:
case 2010:
case 2498:
case 3326:
case 3255:
case 4076:
case 298:
case 1501:
case 3634:
case 1570:
case 218:
case 3015:
case 3822:
case 2263:
case 1267:
case 3904:
case 2665:
case 178:
case 1515:
case 752:
case 775:
case 2327:
case 3070:
case 1323:
case 1490:
case 2887:
case 2126:
case 2982:
case 3591:
case 3042:
case 2411:
case 1615:
case 2068:
case 665:
case 3553:
case 1034:
case 3560:
case 2182:
case 3830:
case 2926:
case 2319:
case 481:
case 1918:
case 2079:
case 3357:
case 1464:
case 3901:
case 2175:
case 1871:
case 3004:
case 835:
case 1365:
case 1118:
case 3594:
case 2839:
case 3956:
case 2026:
case 2791:
case 1378:
case 2968:
case 1527:
case 1934:
case 3942:
case 1134:
case 1757:
case 548:
case 1244:
case 3156:
case 760:
case 2106:
case 2580:
case 197:
case 3162:
case 2549:
case 1396:
case 3813:
case 3703:
case 371:
case 1892:
case 2740:
case 3585:
case 117:
case 3962:
case 1264:
case 2148:
case 539:
case 131:
case 3537:
case 2054:
case 681:
case 2151:
case 1222:
case 1997:
case 1444:
case 2993:
case 2214:
case 1197:
case 853:
case 1855:
case 3062:
case 3188:
case 4011:
case 3749:
case 2785:
case 3333:
case 3988:
case 2696:
case 2048:
case 1261:
case 107:
case 1607:
case 2051:
case 2737:
case 3921:
case 2603:
case 1441:
case 1820:
case 1859:
case 3689:
case 1097:
case 1380:
case 2093:
case 3121:
case 633:
case 998:
case 183:
case 2518:
case 1814:
case 1704:
case 145:
case 644:
case 204:
case 2886:
case 1078:
case 2255:
case 2919:
case 2822:
case 1331:
case 3250:
case 4092:
case 2015:
case 66:
case 2292:
case 2379:
case 3731:
case 1568:
case 2618:
case 3405:
case 2927:
case 2864:
case 3899:
case 1838:
case 493:
case 3057:
case 413:
case 805:
case 4055:
case 2127:
case 424:
case 1169:
case 1675:
case 2471:
case 3217:
case 2400:
case 3808:
case 3342:
case 1701:
case 2915:
case 2259:
case 1770:
case 1178:
case 3110:
case 3225:
case 3356:
case 294:
case 2019:
case 1626:
case 1978:
case 1579:
case 1334:
case 1756:
case 1582:
case 895:
case 980:
case 2531:
case 3157:
case 1965:
case 2027:
case 1318:
case 1742:
case 2890:
case 1487:
case 403:
case 815:
case 83:
case 1526:
case 377:
case 1903:
case 4083:
case 1103:
case 243:
case 603:
case 3324:
case 2107:
case 1654:
case 1145:
case 3636:
case 2459:
case 2393:
case 2274:
case 216:
case 3362:
case 3797:
case 2283:
case 3536:
case 2802:
case 879:
case 137:
case 3209:
case 1996:
case 2844:
case 3429:
case 2697:
case 1980:
case 1693:
case 728:
case 101:
case 938:
case 2354:
case 45:
case 1651:
case 1149:
case 2455:
case 1788:
case 613:
case 125:
case 3612:
case 1180:
case 4071:
case 1506:
case 3933:
case 646:
case 3476:
case 1096:
case 2200:
case 1721:
case 1648:
case 2597:
case 1593:
case 3512:
case 3205:
case 1606:
case 739:
case 46:
case 929:
case 3133:
case 3394:
case 3510:
case 254:
case 2369:
case 2883:
case 2018:
case 2323:
case 3657:
case 2490:
case 1887:
case 865:
case 940:
case 278:
case 2202:
case 627:
case 2258:
case 1075:
case 3809:
case 3719:
case 4041:
case 2241:
case 2131:
case 872:
case 447:
case 4002:
case 1182:
case 3610:
case 3284:
case 1126:
case 1794:
case 3452:
case 855:
case 3408:
case 24:
case 592:
case 3273:
case 1975:
case 2800:
case 2871:
case 3391:
case 3228:
case 2365:
case 2118:
case 2627:
case 2918:
case 1438:
case 3353:
case 2464:
case 1623:
case 3360:
case 989:
case 3843:
case 2031:
case 502:
case 732:
case 922:
case 788:
case 1839:
case 3898:
case 1791:
case 2619:
case 1026:
case 2486:
case 2378:
case 486:
case 635:
case 61:
case 2527:
case 49:
case 510:
case 881:
case 217:
case 3299:
case 1789:
case 1148:
case 2264:
case 1106:
case 1948:
case 484:
case 297:
case 653:
case 3707:
case 1549:
case 3428:
case 686:
case 435:
case 41:
case 1307:
case 2286:
case 2303:
case 3481:
case 3340:
case 663:
case 2222:
case 1054:
case 1649:
case 2997:
case 3036:
case 1993:
case 3112:
case 1680:
case 151:
case 2458:
case 3295:
case 3337:
case 500:
case 2261:
case 647:
case 2290:
case 1545:
case 569:
case 40:
case 1503:
case 2859:
case 2820:
case 1211:
case 2097:
case 2380:
case 22:
case 3208:
case 256:
case 3252:
case 283:
case 2607:
case 427:
case 3385:
case 2733:
case 4061:
case 1737:
case 3825:
case 3246:
case 1645:
case 559:
case 3136:
case 702:
case 1382:
case 3642:
case 2331:
case 245:
case 2814:
case 605:
case 3570:
case 1634:
case 826:
case 1886:
case 3656:
case 2078:
case 2123:
case 2065:
case 1127:
case 844:
case 3213:
case 3194:
case 3726:
case 3994:
case 3060:
case 2969:
case 2568:
case 3053:
case 1379:
case 1618:
case 1927:
case 2923:
case 1534:
case 194:
case 3430:
case 2626:
case 2978:
case 2579:
case 342:
case 976:
case 18:
case 2811:
case 1220:
case 2701:
case 2682:
case 2679:
case 3953:
case 2487:
case 1483:
case 2023:
case 1474:
case 3960:
case 3094:
case 2756:
case 479:
case 3991:
case 3604:
case 3768:
case 2965:
case 3940:
case 3588:
case 1107:
case 2654:
case 2049:
case 2397:
case 2145:
case 1420:
case 1393:
case 2235:
case 2080:
case 3312:
case 887:
case 1841:
case 3189:
case 322:
case 3085:
case 3230:
case 1351:
case 759:
case 3621:
case 211:
case 1348:
case 237:
case 3172:
case 958:
case 2996:
case 530:
case 1858:
case 3688:
case 3037:
case 415:
case 43:
case 803:
case 4035:
case 2196:
case 974:
case 1306:
case 1283:
case 846:
case 2788:
case 1455:
case 2239:
case 3562:
case 3832:
case 2506:
case 2045:
case 3336:
case 1844:
case 1697:
case 3040:
case 201:
case 641:
case 2949:
case 1354:
case 1736:
case 2606:
case 2551:
case 3137:
case 3072:
case 1492:
case 3413:
case 573:
case 3524:
case 813:
case 2096:
case 1200:
case 1597:
case 2648:
case 4039:
case 167:
case 1024:
case 1121:
case 2484:
case 945:
case 2473:
case 32:
case 3733:
case 2825:
case 1572:
case 1589:
case 307:
case 149:
case 3458:
case 2295:
case 1540:
case 488:
case 2337:
case 1988:
case 850:
case 4046:
case 3507:
case 1188:
case 4008:
case 4052:
case 1124:
case 3286:
case 1796:
case 2481:
case 2912:
case 899:
case 819:
case 3444:
case 2850:
case 331:
case 2863:
case 2299:
case 180:
case 747:
case 3892:
case 1585:
case 2876:
case 2817:
case 2707:
case 1703:
case 2428:
case 1637:
case 397:
case 3422:
case 1156:
case 595:
case 852:
case 875:
case 3527:
case 3934:
case 268:
case 1310:
case 70:
case 1594:
case 2281:
case 3619:
case 1101:
case 1170:
case 862:
case 3710:
case 2228:
case 2360:
case 727:
case 1694:
case 2353:
case 1901:
case 2715:
case 2805:
case 364:
case 1056:
case 521:
case 79:
case 1830:
case 2446:
case 182:
case 688:
case 1553:
case 2557:
case 3034:
case 1042:
case 784:
case 3615:
case 2408:
case 1723:
case 473:
case 925:
case 2452:
case 1769:
case 1653:
case 3018:
case 3323:
case 4084:
case 1104:
case 2394:
case 1660:
case 354:
case 3369:
case 1691:
case 2809:
case 3202:
case 1243:
case 3551:
case 240:
case 1133:
case 600:
case 1205:
case 3606:
case 547:
case 954:
case 492:
case 2413:
case 1476:
case 1388:
case 1417:
case 2562:
case 325:
case 3180:
case 3506:
case 3149:
case 1881:
case 3651:
case 94:
case 1298:
case 3003:
case 2040:
case 779:
case 301:
case 2185:
case 3949:
case 964:
case 2336:
case 1450:
case 4047:
case 1429:
case 3693:
case 1033:
case 2172:
case 1209:
case 3554:
case 2688:
case 289:
case 4030:
case 828:
case 2793:
case 3196:
case 3724:
case 3762:
case 3397:
case 1873:
case 1636:
case 2877:
case 2816:
case 1324:
case 3049:
case 2085:
case 563:
case 311:
case 2312:
case 177:
case 741:
case 222:
case 2960:
case 2191:
case 3526:
case 3165:
case 3679:
case 3487:
case 3742:
case 1301:
case 2604:
case 1734:
case 2153:
case 1409:
case 1895:
case 3582:
case 2991:
case 2160:
case 9:
case 602:
case 242:
case 721:
case 410:
case 2430:
case 705:
case 1852:
case 584:
case 2504:
case 535:
case 51:
case 3770:
case 3701:
case 1276:
case 3123:
case 1304:
case 3065:
case 3568:
case 1731:
case 966:
case 1405:
case 2670:
case 2994:
case 2556:
case 2447:
case 3969:
case 220:
case 612:
case 1229:
case 2779:
case 1250:
case 2642:
case 3331:
case 118:
case 1263:
case 2267:
case 92:
case 345:
case 3668:
case 3704:
case 3814:
case 2570:
case 983:
case 50:
case 1842:
case 585:
case 3311:
case 1352:
case 534:
case 3686:
case 1856:
case 3419:
case 2998:
case 1285:
case 248:
case 102:
case 2599:
case 3834:
case 2761:
case 3900:
case 2143:
case 3971:
case 2009:
case 1395:
case 2105:
case 3708:
case 27:
case 3083:
case 3427:
case 1870:
case 3074:
case 2943:
case 3590:
case 698:
case 3314:
case 933:
case 78:
case 1130:
case 1240:
case 2595:
case 794:
case 3831:
case 2764:
case 36:
case 3799:
case 112:
case 2722:
case 1272:
case 1460:
case 2043:
case 2457:
case 2508:
case 1714:
case 1804:
case 3000:
case 2786:
case 3174:
case 3071:
case 326:
case 2695:
case 3215:
case 3959:
case 2836:
case 159:
case 2029:
case 2566:
case 1489:
case 965:
case 393:
case 4057:
case 3558:
case 3055:
case 3407:
case 2925:
case 1821:
case 3159:
case 3641:
case 2332:
case 2017:
case 1328:
case 1291:
case 2076:
case 1888:
case 346:
case 955:
case 169:
case 4010:
case 2666:
case 716:
case 2744:
case 2257:
case 1472:
case 2150:
case 2129:
case 228:
case 889:
case 3766:
case 3955:
case 2163:
case 757:
case 2025:
case 1967:
case 2963:
case 303:
case 1384:
case 3059:
case 2377:
case 2316:
case 2950:
case 2929:
case 1113:
case 767:
case 2176:
case 1294:
case 1862:
case 3227:
case 822:
case 239:
case 2741:
case 1366:
case 2628:
case 3192:
case 1913:
case 408:
case 2433:
case 1857:
case 3687:
case 3038:
case 3479:
case 2530:
case 2343:
case 2739:
case 3300:
case 3371:
case 2288:
case 1609:
case 2891:
case 3535:
case 868:
case 4021:
case 3865:
case 1810:
case 1771:
case 1152:
case 2221:
case 1700:
case 874:
case 523:
case 3878:
case 903:
case 3587:
case 1108:
case 480:
case 858:
case 3482:
case 3254:
case 3248:
case 3475:
case 3730:
case 2309:
case 3539:
case 1598:
case 2647:
case 4024:
case 946:
case 1999:
case 2262:
case 3938:
case 4062:
case 1052:
case 2224:
case 734:
case 1783:
case 924:
case 132:
case 3914:
case 188:
case 1046:
case 1212:
case 3639:
case 449:
case 1330:
case 1720:
case 1759:
case 3406:
case 736:
case 2462:
case 4042:
case 260:
case 482:
case 1928:
case 1833:
case 2567:
case 438:
case 2613:
case 3275:
case 0:
case 4056:
case 1066:
case 3448:
case 1529:
case 2885:
case 1981:
case 557:
case 3268:
case 2932:
case 3359:
case 1073:
case 2132:
case 3493:
case 1629:
case 2016:
case 1650:
case 3880:
case 944:
case 1576:
case 2667:
case 1517:
case 2513:
case 3849:
case 1084:
case 1663:
case 299:
case 2204:
case 1755:
case 2376:
case 2488:
case 2317:
case 1028:
case 1313:
case 3896:
case 596:
case 1525:
case 1166:
case 751:
case 219:
case 381:
case 3454:
case 370:
case 3282:
case 1792:
case 2363:
case 1984:
case 1973:
case 2889:
case 2977:
case 761:
case 1173:
case 2032:
case 3845:
case 3226:
case 1184:
case 2421:
case 3713:
case 3803:
case 423:
case 1223:
case 2227:
case 414:
case 616:
case 48:
case 3581:
case 2992:
case 2784:
case 975:
case 952:
case 811:
case 3976:
case 3917:
case 3628:
case 571:
case 580:
case 2192:
case 696:
case 1302:
case 3681:
case 1851:
case 2219:
case 3025:
case 3150:
case 3812:
case 837:
case 3129:
case 3702:
case 179:
case 1341:
case 2766:
case 1480:
case 2897:
case 2644:
case 2020:
case 3377:
case 3950:
case 1893:
case 3316:
case 4027:
case 962:
case 643:
case 3963:
case 2155:
case 667:
case 1732:
case 3017:
case 606:
case 246:
case 2092:
case 801:
case 549:
case 777:
case 3684:
case 2959:
case 2920:
case 3836:
case 2502:
case 657:
case 1344:
case 3050:
case 3029:
case 2159:
case 1278:
case 1403:
case 213:
case 2055:
case 3925:
case 529:
case 1364:
case 3005:
case 2338:
case 1987:
case 3109:
case 909:
case 457:
case 2174:
case 2000:
case 3909:
case 226:
case 3552:
case 3695:
case 3508:
case 25:
case 1465:
case 2661:
case 845:
case 3098:
case 1203:
case 1039:
case 1478:
case 2207:
case 244:
case 604:
case 1826:
case 406:
case 1935:
case 950:
case 26:
case 3764:
case 2799:
case 582:
case 1611:
case 2561:
case 3595:
case 2522:
case 3009:
case 3233:
case 999:
case 1469:
case 2100:
case 2752:
case 1423:
case 2818:
case 37:
case 2664:
case 1514:
case 2083:
case 1087:
case 3699:
case 3905:
case 1249:
case 3198:
case 1139:
case 115:
case 3790:
case 1280:
case 2311:
case 416:
case 68:
case 1614:
case 1868:
case 2564:
case 1538:
case 195:
case 718:
case 2419:
case 3998:
case 694:
case 2795:
case 1044:
case 577:
case 1659:
case 3977:
case 1231:
case 3916:
case 3840:
case 1776:
case 2355:
case 3421:
case 2713:
case 2803:
case 3116:
case 1941:
case 97:
case 1958:
case 1520:
case 1559:
case 399:
case 4026:
case 3204:
case 319:
case 4082:
case 2279:
case 1750:
case 1158:
case 2767:
case 1763:
case 807:
case 4075:
case 1234:
case 2268:
case 1144:
case 350:
case 1655:
case 2451:
case 3325:
case 3424:
case 233:
case 3132:
case 2320:
case 1944:
case 2493:
case 3016:
case 3242:
case 1555:
case 1218:
case 771:
case 2448:
case 3567:
case 4068:
case 1058:
case 1725:
case 2011:
case 3442:
case 1571:
case 1922:
case 854:
case 3547:
case 2639:
case 3456:
case 1819:
case 1122:
case 1434:
case 451:
case 265:
case 518:
case 1671:
case 1600:
case 2475:
case 2730:
case 864:
case 2138:
case 4051:
case 1164:
case 1061:
case 2383:
case 1090:
case 3735:
case 461:
case 3401:
case 84:
case 3470:
case 1827:
case 2823:
case 1418:
case 3262:
case 2938:
case 255:
case 1387:
case 3647:
case 2374:
case 4093:
case 2869:
case 362:
case 11:
case 2587:
case 135:
case 1339:
case 2426:
case 3630:
case 1574:
case 2747:
case 2254:
case 928:
case 782:
case 1022:
case 2635:
case 2911:
case 1815:
case 939:
case 3530:
case 1674:
case 1161:
case 3853:
case 2687:
case 2038:
case 4054:
case 2535:
case 1190:
case 1961:
case 375:
case 3739:
case 3288:
case 3891:
case 3437:
case 3913:
case 1192:
case 310:
case 2302:
case 1544:
case 3366:
case 740:
case 3862:
case 1773:
case 2223:
case 2777:
case 2716:
case 2806:
case 390:
case 843:
case 2480:
case 1644:
case 816:
case 3967:
case 3824:
case 103:
case 576:
case 691:
case 4023:
case 3384:
case 611:
case 1219:
case 2851:
case 279:
case 3632:
case 2341:
case 1766:
case 789:
case 3472:
case 3253:
case 3577:
case 2732:
case 2496:
case 445:
case 3291:
case 867:
case 1641:
case 1120:
case 1159:
case 2403:
case 113:
case 1055:
case 1407:
case 932:
case 988:
case 601:
case 241:
case 1502:
case 359:
case 3677:
case 3491:
case 2296:
case 1174:
case 15:
case 3714:
case 1661:
case 2511:
case 4003:
case 2879:
case 1690:
case 3399:
case 2987:
case 3272:
case 3047:
case 1974:
case 1831:
case 2935:
case 1415:
case 3289:
case 1561:
case 3738:
case 2322:
case 3240:
case 221:
case 2039:
case 1207:
case 3930:
case 2826:
case 144:
case 392:
case 1314:
case 1590:
case 205:
case 2135:
case 3494:
case 1752:
case 4080:
case 1100:
case 1664:
case 491:
case 2390:
case 2514:
case 2087:
case 2638:
case 3870:
case 3801:
case 1746:
case 411:
case 1900:
case 2875:
case 1522:
case 3237:
case 3395:
case 3147:
case 2868:
case 2614:
case 1564:
case 302:
case 1834:
case 3856:
case 1686:
case 3285:
case 3030:
case 437:
case 2249:
case 3352:
case 3308:
case 23:
case 3842:
case 1355:
case 3184:
case 3625:
case 1803:
case 2941:
case 522:
case 2659:
case 3436:
case 170:
case 1454:
case 3367:
case 902:
case 1282:
case 263:
case 631:
case 2102:
case 589:
case 2729:
case 2158:
case 330:
case 1392:
case 1767:
case 4031:
case 2763:
case 3525:
case 3755:
case 3028:
case 3313:
case 1896:
case 2958:
case 2559:
case 2902:
case 683:
case 3181:
case 3084:
case 656:
case 3663:
case 1320:
case 3073:
case 1359:
case 776:
case 3650:
case 2234:
case 2144:
case 3981:
case 2655:
case 1451:
case 607:
case 3550:
case 3529:
case 3928:
case 3617:
case 540:
case 3833:
case 3676:
case 3563:
case 666:
case 2058:
case 1275:
case 2692:
case 861:
case 373:
case 3720:
case 3698:
case 959:
case 1251:
case 3330:
case 2709:
case 664:
case 3543:
case 2819:
case 1914:
case 165:
case 3505:
case 3783:
case 1011:
case 2297:
case 2922:
case 2571:
case 768:
case 456:
case 1206:
case 1383:
case 2964:
case 2418:
case 1938:
case 1539:
case 758:
case 172:
case 678:
case 3199:
case 1747:
case 1254:
case 3952:
case 29:
case 1911:
case 2705:
case 3236:
case 3108:
case 235:
case 1587:
case 2339:
case 3771:
case 1426:
case 497:
case 885:
case 1865:
case 1300:
case 834:
case 3609:
case 2161:
case 4:
case 431:
case 2683:
case 3099:
case 3939:
case 2856:
case 2030:
case 2285:
case 202:
case 642:
case 2346:
case 4037:
case 1761:
case 3538:
case 315:
case 2308:
case 3035:
case 1198:
case 2352:
case 986:
case 3423:
case 3390:
case 3638:
case 1905:
case 2711:
case 2801:
case 953:
case 3469:
case 2494:
case 1143:
case 2237:
case 1233:
case 1009:
case 422:
case 4085:
case 808:
case 1652:
case 2240:
case 1595:
case 3882:
case 1608:
case 3611:
case 440:
case 2289:
case 4072:
case 292:
case 54:
case 3245:
case 305:
case 1646:
case 3478:
case 1410:
case 3826:
case 2930:
case 3187:
case 1508:
case 2804:
case 2714:
case 3465:
case 3511:
case 1695:
case 1552:
case 1909:
case 1109:
case 4089:
case 947:
case 1043:
case 2460:
case 578:
case 3278:
case 583:
case 2821:
case 1210:
case 1925:
case 52:
case 1332:
case 4091:
case 3344:
case 1836:
case 4060:
case 259:
case 2616:
case 711:
case 1050:
case 420:
case 3854:
case 341:
case 2440:
case 507:
case 2253:
case 2472:
case 200:
case 737:
case 2260:
case 3496:
case 2291:
case 3265:
case 269:
case 1573:
case 1666:
case 2516:
case 3449:
case 1528:
case 2967:
case 2824:
case 1963:
case 2384:
case 935:
case 4094:
case 984:
case 1377:
case 1950:
case 1702:
case 1129:
case 1150:
case 701:
case 379:
case 3341:
case 2632:
case 99:
case 531:
case 2167:
case 1758:
case 877:
case 689:
case 1976:
case 1628:
case 1917:
case 442:
case 210:
case 1433:
case 1117:
case 597:
case 3716:
case 3806:
case 3798:
case 476:
case 3190:
case 3161:
case 3990:
case 2857:
case 2099:
case 1860:
case 2347:
case 2195:
case 3674:
case 1343:
case 1530:
case 39:
case 3815:
case 3705:
case 3022:
case 3086:
case 2810:
case 2152:
case 1398:
case 384:
case 1630:
case 668:
case 3583:
case 2946:
case 335:
case 31:
case 2108:
case 1647:
case 2643:
case 1735:
case 3827:
case 1401:
case 3964:
case 2999:
case 3418:
case 2605:
case 1262:
case 2199:
case 838:
case 3061:
case 882:
case 4012:
case 3600:
case 3434:
case 829:
case 288:
case 2212:
case 3709:
case 2330:
case 3122:
case 3819:
case 2543:
case 3500:
case 3571:
case 1224:
case 2052:
case 3335:
case 2676:
case 1567:
case 3058:
case 3725:
case 347:
case 2066:
case 2529:
case 1270:
case 1462:
case 797:
case 2128:
case 273:
case 1132:
case 2073:
case 2650:
case 3497:
case 1077:
case 2576:
case 2663:
case 1424:
case 150:
case 1885:
case 3592:
case 1256:
case 1325:
case 731:
case 7:
case 2412:
case 3144:
case 921:
case 1932:
case 766:
case 119:
case 3750:
case 3102:
case 3559:
case 3520:
case 3902:
case 1204:
case 1376:
case 2028:
case 2313:
case 468:
case 3958:
case 1032:
case 783:
case 2173:
case 2081:
case 2184:
case 93:
case 915:
case 1421:
case 3717:
case 3807:
case 2625:
case 591:
case 2367:
case 2792:
case 458:
case 2984:
case 871:
case 1889:
case 2973:
case 3231:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760900401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,];
var gg_b = "1760900401/";

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
