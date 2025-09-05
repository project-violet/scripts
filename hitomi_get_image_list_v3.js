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
case 2787:
case 2692:
case 80:
case 1038:
case 4039:
case 3018:
case 280:
case 3077:
case 159:
case 2644:
case 2249:
case 2642:
case 442:
case 1685:
case 2587:
case 2423:
case 154:
case 3956:
case 1916:
case 4090:
case 3936:
case 4012:
case 907:
case 3965:
case 2529:
case 1109:
case 548:
case 1058:
case 1920:
case 4059:
case 3368:
case 539:
case 956:
case 323:
case 3093:
case 723:
case 121:
case 1910:
case 2554:
case 2091:
case 3475:
case 2236:
case 1926:
case 976:
case 865:
case 2041:
case 1942:
case 2876:
case 4022:
case 2174:
case 3411:
case 585:
case 441:
case 2413:
case 163:
case 3767:
case 3950:
case 2620:
case 3028:
case 2256:
case 3567:
case 1498:
case 1230:
case 3244:
case 3292:
case 3372:
case 3699:
case 3210:
case 2109:
case 2058:
case 1529:
case 2920:
case 3242:
case 3188:
case 4067:
case 3746:
case 1299:
case 3524:
case 1787:
case 3722:
case 2881:
case 259:
case 274:
case 3883:
case 180:
case 3630:
case 2685:
case 1405:
case 1423:
case 195:
case 643:
case 1249:
case 279:
case 895:
case 1413:
case 1532:
case 2863:
case 486:
case 2431:
case 3179:
case 2304:
case 1616:
case 3512:
case 1734:
case 3433:
case 688:
case 3514:
case 1534:
case 3559:
case 3712:
case 3665:
case 3790:
case 1172:
case 1519:
case 3216:
case 1554:
case 1091:
case 2992:
case 2910:
case 221:
case 1719:
case 3656:
case 1388:
case 2926:
case 1007:
case 2168:
case 1174:
case 2451:
case 2942:
case 392:
case 265:
case 1041:
case 1985:
case 3220:
case 2680:
case 2009:
case 2833:
case 483:
case 3666:
case 3831:
case 3341:
case 1811:
case 266:
case 697:
case 3391:
case 3271:
case 1615:
case 2517:
case 427:
case 439:
case 994:
case 3635:
case 1564:
case 1986:
case 1875:
case 3901:
case 2925:
case 3569:
case 2853:
case 485:
case 3997:
case 3769:
case 147:
case 3215:
case 2247:
case 828:
case 2589:
case 1260:
case 896:
case 3508:
case 3203:
case 3225:
case 2297:
case 2318:
case 3079:
case 2915:
case 3708:
case 448:
case 2483:
case 2527:
case 3481:
case 3660:
case 3545:
case 646:
case 1821:
case 3595:
case 1191:
case 1328:
case 2875:
case 3960:
case 798:
case 1903:
case 3557:
case 3280:
case 2266:
case 3002:
case 726:
case 81:
case 1138:
case 2235:
case 4095:
case 3177:
case 3118:
case 2671:
case 619:
case 2562:
case 975:
case 1833:
case 1461:
case 4008:
case 1393:
case 2615:
case 2762:
case 1517:
case 614:
case 1068:
case 3601:
case 2107:
case 2603:
case 3955:
case 1483:
case 3582:
case 740:
case 2141:
case 4069:
case 3358:
case 2074:
case 3143:
case 3584:
case 681:
case 1971:
case 3193:
case 2191:
case 2260:
case 296:
case 667:
case 2980:
case 228:
case 3898:
case 1201:
case 1297:
case 1318:
case 33:
case 73:
case 1915:
case 3470:
case 1332:
case 1842:
case 2976:
case 1497:
case 2504:
case 3270:
case 397:
case 1196:
case 1894:
case 3312:
case 593:
case 1810:
case 860:
case 2057:
case 1892:
case 4068:
case 1401:
case 3359:
case 160:
case 248:
case 3683:
case 918:
case 580:
case 3064:
case 2037:
case 1319:
case 3339:
case 1354:
case 3850:
case 3900:
case 1588:
case 3129:
case 720:
case 595:
case 3899:
case 1095:
case 3856:
case 41:
case 3774:
case 1473:
case 2084:
case 1676:
case 2200:
case 2455:
case 3574:
case 1045:
case 3152:
case 1820:
case 668:
case 3132:
case 239:
case 2970:
case 1159:
case 3661:
case 1779:
case 2663:
case 1140:
case 3836:
case 3346:
case 1114:
case 234:
case 283:
case 1037:
case 2319:
case 559:
case 574:
case 2670:
case 936:
case 3709:
case 698:
case 3078:
case 2354:
case 3017:
case 3281:
case 2588:
case 2283:
case 554:
case 782:
case 4072:
case 719:
case 2196:
case 1057:
case 3606:
case 1460:
case 4074:
case 2122:
case 314:
case 2810:
case 3403:
case 1704:
case 260:
case 2844:
case 2401:
case 3367:
case 714:
case 827:
case 2112:
case 2820:
case 902:
case 2190:
case 1970:
case 139:
case 2779:
case 2159:
case 834:
case 2387:
case 134:
case 183:
case 1466:
case 781:
case 447:
case 2473:
case 367:
case 563:
case 2139:
case 1084:
case 767:
case 92:
case 63:
case 190:
case 3983:
case 3568:
case 890:
case 3027:
case 2815:
case 3420:
case 3382:
case 2251:
case 3558:
case 662:
case 1633:
case 3613:
case 3117:
case 3178:
case 186:
case 304:
case 566:
case 1921:
case 2169:
case 1157:
case 1718:
case 1777:
case 3738:
case 704:
case 3873:
case 1518:
case 35:
case 2024:
case 75:
case 2096:
case 2231:
case 1449:
case 1528:
case 2108:
case 1450:
case 1223:
case 1067:
case 2014:
case 1911:
case 989:
case 687:
case 1499:
case 3698:
case 493:
case 2933:
case 3931:
case 2362:
case 3426:
case 1182:
case 2145:
case 1793:
case 3442:
case 242:
case 495:
case 2953:
case 3951:
case 3897:
case 3127:
case 3444:
case 1743:
case 935:
case 1317:
case 2039:
case 2825:
case 3847:
case 2364:
case 1184:
case 1886:
case 3492:
case 3923:
case 3651:
case 2921:
case 1022:
case 1169:
case 2456:
case 1046:
case 2213:
case 2577:
case 3211:
case 1815:
case 3948:
case 2465:
case 1251:
case 3835:
case 3345:
case 841:
case 2880:
case 908:
case 343:
case 2137:
case 3631:
case 286:
case 3395:
case 1611:
case 479:
case 454:
case 2793:
case 1362:
case 596:
case 1621:
case 3507:
case 3485:
case 1953:
case 1803:
case 1039:
case 3054:
case 3741:
case 3591:
case 2298:
case 2378:
case 1195:
case 474:
case 459:
case 40:
case 2886:
case 1364:
case 4038:
case 422:
case 2450:
case 1108:
case 970:
case 1059:
case 1040:
case 2528:
case 2449:
case 4058:
case 3369:
case 1090:
case 2499:
case 2728:
case 3913:
case 2911:
case 1012:
case 692:
case 951:
case 1002:
case 3903:
case 2655:
case 1557:
case 1280:
case 1960:
case 126:
case 3328:
case 31:
case 1673:
case 2769:
case 1118:
case 971:
case 3138:
case 1004:
case 71:
case 2851:
case 446:
case 366:
case 1737:
case 2088:
case 1813:
case 3833:
case 3158:
case 3717:
case 2831:
case 3778:
case 509:
case 1537:
case 55:
case 2391:
case 2271:
case 3393:
case 3273:
case 2660:
case 3686:
case 1358:
case 639:
case 627:
case 840:
case 1647:
case 929:
case 937:
case 3483:
case 2481:
case 3068:
case 634:
case 924:
case 2595:
case 1193:
case 1805:
case 1823:
case 497:
case 2973:
case 1584:
case 3727:
case 2508:
case 3201:
case 685:
case 1966:
case 972:
case 1128:
case 2225:
case 420:
case 3247:
case 1470:
case 1338:
case 952:
case 3915:
case 2708:
case 3789:
case 13:
case 3318:
case 3377:
case 3297:
case 2813:
case 545:
case 2737:
case 3764:
case 1463:
case 3562:
case 3255:
case 3564:
case 1635:
case 3615:
case 1271:
case 3266:
case 298:
case 1569:
case 2280:
case 1901:
case 3875:
case 226:
case 2960:
case 4027:
case 1947:
case 2177:
case 1769:
case 2757:
case 1851:
case 1997:
case 2476:
case 2004:
case 2966:
case 1225:
case 2128:
case 328:
case 796:
case 1508:
case 2286:
case 2470:
case 2338:
case 2935:
case 23:
case 3141:
case 3406:
case 2358:
case 3107:
case 1481:
case 3603:
case 2955:
case 240:
case 419:
case 2805:
case 1745:
case 2697:
case 2782:
case 1973:
case 3072:
case 793:
case 1372:
case 597:
case 1244:
case 393:
case 3498:
case 2368:
case 1242:
case 1188:
case 2285:
case 1650:
case 3870:
case 2965:
case 1226:
case 1374:
case 2077:
case 380:
case 2018:
case 1722:
case 2806:
case 3299:
case 1596:
case 780:
case 520:
case 1522:
case 2956:
case 3249:
case 2421:
case 1546:
case 1796:
case 3642:
case 395:
case 262:
case 3423:
case 3250:
case 1433:
case 1512:
case 1759:
case 2767:
case 900:
case 2411:
case 1636:
case 3532:
case 261:
case 1714:
case 1861:
case 1540:
case 1712:
case 1559:
case 3534:
case 3256:
case 1514:
case 3732:
case 3620:
case 225:
case 409:
case 45:
case 3236:
case 3091:
case 1216:
case 3752:
case 2930:
case 223:
case 3172:
case 3876:
case 3754:
case 3985:
case 1453:
case 47:
case 546:
case 2043:
case 287:
case 3007:
case 1656:
case 892:
case 3719:
case 30:
case 3881:
case 2722:
case 4054:
case 488:
case 1104:
case 4019:
case 774:
case 70:
case 2524:
case 862:
case 2522:
case 379:
case 754:
case 779:
case 162:
case 2546:
case 2796:
case 4052:
case 291:
case 519:
case 4032:
case 2244:
case 2649:
case 1368:
case 1285:
case 3920:
case 2242:
case 3058:
case 722:
case 3109:
case 2374:
case 1965:
case 2226:
case 1475:
case 2539:
case 3910:
case 321:
case 123:
case 1930:
case 3944:
case 1043:
case 1309:
case 3451:
case 3942:
case 581:
case 292:
case 2453:
case 2220:
case 3168:
case 3926:
case 2656:
case 4087:
case 3431:
case 2179:
case 3304:
case 98:
case 567:
case 2512:
case 2759:
case 443:
case 2433:
case 1800:
case 2861:
case 161:
case 2636:
case 3863:
case 2712:
case 2790:
case 2540:
case 4029:
case 1950:
case 2514:
case 3871:
case 3046:
case 2738:
case 1087:
case 1308:
case 3169:
case 27:
case 1651:
case 1923:
case 145:
case 423:
case 2233:
case 3231:
case 2538:
case 1211:
case 4093:
case 1835:
case 425:
case 1162:
case 4028:
case 3815:
case 2758:
case 461:
case 2178:
case 1395:
case 2384:
case 1164:
case 1866:
case 1485:
case 2605:
case 3953:
case 2127:
case 3621:
case 2897:
case 1052:
case 3145:
case 2426:
case 1791:
case 742:
case 2337:
case 1019:
case 3364:
case 1860:
case 1707:
case 2492:
case 2801:
case 2444:
case 3195:
case 4077:
case 188:
case 1054:
case 4018:
case 3803:
case 3039:
case 1369:
case 3014:
case 568:
case 2189:
case 1034:
case 2931:
case 3012:
case 1913:
case 3090:
case 2029:
case 2835:
case 2162:
case 60:
case 1420:
case 659:
case 1253:
case 3327:
case 3465:
case 2275:
case 386:
case 3436:
case 1178:
case 654:
case 1117:
case 2998:
case 3633:
case 2631:
case 786:
case 3137:
case 2164:
case 1873:
case 804:
case 2308:
case 2087:
case 3777:
case 245:
case 2923:
case 2651:
case 1538:
case 622:
case 85:
case 1233:
case 809:
case 2855:
case 109:
case 15:
case 3518:
case 1648:
case 540:
case 1189:
case 2034:
case 3450:
case 3223:
case 3205:
case 3528:
case 3449:
case 2032:
case 1931:
case 1698:
case 3499:
case 2913:
case 3911:
case 663:
case 1127:
case 2052:
case 1951:
case 2507:
case 2485:
case 1623:
case 1605:
case 1442:
case 2541:
case 2791:
case 3975:
case 1492:
case 1410:
case 53:
case 1337:
case 1847:
case 2019:
case 3430:
case 3378:
case 3317:
case 288:
case 1444:
case 3743:
case 3593:
case 1017:
case 1078:
case 2850:
case 2064:
case 3037:
case 4079:
case 1509:
case 1961:
case 2062:
case 562:
case 220:
case 2900:
case 1281:
case 2390:
case 2270:
case 3504:
case 819:
case 2312:
case 119:
case 3885:
case 3702:
case 2187:
case 1367:
case 3681:
case 348:
case 468:
case 2683:
case 748:
case 114:
case 1606:
case 2486:
case 2314:
case 3057:
case 339:
case 2865:
case 327:
case 1415:
case 523:
case 2396:
case 2276:
case 2324:
case 727:
case 587:
case 96:
case 334:
case 383:
case 181:
case 734:
case 4088:
case 2134:
case 2836:
case 2572:
case 867:
case 916:
case 2119:
case 385:
case 561:
case 2154:
case 1471:
case 785:
case 2774:
case 2856:
case 1263:
case 1027:
case 2772:
case 1568:
case 390:
case 3196:
case 1270:
case 3826:
case 282:
case 591:
case 3332:
case 3842:
case 1340:
case 1830:
case 2403:
case 2425:
case 1683:
case 3334:
case 3844:
case 3401:
case 3122:
case 3069:
case 2606:
case 1314:
case 3810:
case 43:
case 2709:
case 3354:
case 944:
case 1064:
case 1062:
case 647:
case 2961:
case 949:
case 3588:
case 99:
case 1900:
case 3283:
case 3676:
case 4004:
case 938:
case 2768:
case 628:
case 267:
case 1154:
case 696:
case 2471:
case 3095:
case 3261:
case 426:
case 2263:
case 1906:
case 1574:
case 2415:
case 3190:
case 1396:
case 1276:
case 3579:
case 2600:
case 1480:
case 3779:
case 1661:
case 3008:
case 281:
case 592:
case 3159:
case 751:
case 2516:
case 853:
case 351:
case 2632:
case 3163:
case 230:
case 4049:
case 4050:
case 2161:
case 173:
case 771:
case 1381:
case 873:
case 371:
case 1100:
case 3306:
case 3868:
case 24:
case 175:
case 2619:
case 511:
case 817:
case 155:
case 3946:
case 1267:
case 2259:
case 294:
case 2652:
case 3922:
case 855:
case 603:
case 2376:
case 1932:
case 729:
case 3809:
case 3990:
case 329:
case 337:
case 1013:
case 4036:
case 584:
case 512:
case 1934:
case 2222:
case 2726:
case 2794:
case 169:
case 1919:
case 372:
case 2592:
case 1785:
case 1954:
case 164:
case 752:
case 2744:
case 1106:
case 1441:
case 1804:
case 1363:
case 2710:
case 2183:
case 4056:
case 1407:
case 352:
case 535:
case 275:
case 3639:
case 3418:
case 3232:
case 84:
case 1290:
case 1438:
case 199:
case 3176:
case 1619:
case 3872:
case 2987:
case 3021:
case 2267:
case 1259:
case 3234:
case 3690:
case 3219:
case 1516:
case 253:
case 3612:
case 42:
case 644:
case 3254:
case 1161:
case 273:
case 2929:
case 3640:
case 130:
case 1716:
case 3383:
case 2048:
case 947:
case 1458:
case 2919:
case 3493:
case 1544:
case 1726:
case 3075:
case 3696:
case 2802:
case 2954:
case 1742:
case 1592:
case 928:
case 2804:
case 2441:
case 710:
case 3730:
case 3443:
case 1051:
case 1594:
case 1744:
case 1542:
case 2407:
case 2585:
case 436:
case 2363:
case 3646:
case 3750:
case 1296:
case 3170:
case 1031:
case 3749:
case 3599:
case 570:
case 3428:
case 3287:
case 3550:
case 1222:
case 550:
case 3967:
case 1629:
case 993:
case 3957:
case 2627:
case 1503:
case 3121:
case 489:
case 2893:
case 1208:
case 3695:
case 1311:
case 3807:
case 4073:
case 3760:
case 484:
case 2333:
case 378:
case 3331:
case 3841:
case 3404:
case 1703:
case 3076:
case 3608:
case 1061:
case 1245:
case 435:
case 2353:
case 518:
case 2964:
case 2198:
case 2828:
case 4047:
case 3262:
case 3669:
case 2474:
case 4001:
case 3982:
case 2818:
case 1083:
case 2877:
case 6:
case 3175:
case 1571:
case 3264:
case 2237:
case 3735:
case 2580:
case 1269:
case 3070:
case 276:
case 3535:
case 2617:
case 1515:
case 2780:
case 2113:
case 411:
case 3766:
case 3227:
case 1962:
case 1000:
case 2409:
case 90:
case 1148:
case 959:
case 974:
case 657:
case 1353:
case 979:
case 2295:
case 3547:
case 3682:
case 4055:
case 3289:
case 3501:
case 1893:
case 1123:
case 2208:
case 450:
case 3969:
case 3313:
case 2311:
case 3597:
case 470:
case 2703:
case 3684:
case 2725:
case 922:
case 632:
case 1843:
case 2989:
case 156:
case 631:
case 2662:
case 1580:
case 1257:
case 2269:
case 3479:
case 176:
case 3133:
case 1678:
case 876:
case 3657:
case 2927:
case 3773:
case 4060:
case 3348:
case 408:
case 963:
case 2468:
case 3081:
case 3945:
case 3398:
case 3278:
case 2571:
case 3217:
case 3573:
case 3995:
case 606:
case 211:
case 3330:
case 3840:
case 1136:
case 3417:
case 3116:
case 1679:
case 54:
case 1437:
case 1392:
case 1272:
case 3814:
case 3761:
case 3890:
case 1326:
case 594:
case 3812:
case 1394:
case 1274:
case 678:
case 2268:
case 2385:
case 1342:
case 2563:
case 3909:
case 456:
case 3399:
case 1576:
case 2097:
case 108:
case 3003:
case 3025:
case 3350:
case 1156:
case 530:
case 2469:
case 3674:
case 808:
case 2979:
case 942:
case 1829:
case 1570:
case 3489:
case 1770:
case 2408:
case 3356:
case 1688:
case 1150:
case 3110:
case 3783:
case 3822:
case 2781:
case 3192:
case 1887:
case 2073:
case 3336:
case 870:
case 289:
case 212:
case 3288:
case 3583:
case 150:
case 2602:
case 1482:
case 2445:
case 850:
case 1320:
case 1055:
case 3194:
case 1097:
case 2902:
case 1001:
case 2156:
case 2854:
case 4083:
case 2776:
case 573:
case 1047:
case 986:
case 2060:
case 377:
case 2136:
case 2834:
case 2344:
case 811:
case 2272:
case 2310:
case 2437:
case 517:
case 3464:
case 1988:
case 2326:
case 1563:
case 2165:
case 555:
case 2342:
case 332:
case 1781:
case 731:
case 2484:
case 270:
case 1495:
case 331:
case 3706:
case 2887:
case 1073:
case 1581:
case 3185:
case 812:
case 3506:
case 2055:
case 889:
case 1445:
case 1602:
case 2482:
case 1979:
case 68:
case 2199:
case 2570:
case 2035:
case 3202:
case 135:
case 3080:
case 3609:
case 1408:
case 4061:
case 835:
case 306:
case 3523:
case 2056:
case 1446:
case 2521:
case 218:
case 3228:
case 305:
case 651:
case 1422:
case 2160:
case 1643:
case 3882:
case 3705:
case 3723:
case 1424:
case 2918:
case 2977:
case 1693:
case 2315:
case 2241:
case 3429:
case 3798:
case 3548:
case 2207:
case 2065:
case 3598:
case 3293:
case 703:
case 948:
case 1889:
case 303:
case 507:
case 2943:
case 494:
case 102:
case 3085:
case 629:
case 1553:
case 3907:
case 637:
case 939:
case 927:
case 2775:
case 76:
case 2993:
case 499:
case 3638:
case 1753:
case 1618:
case 1677:
case 983:
case 2030:
case 1173:
case 36:
case 2711:
case 3347:
case 3713:
case 3658:
case 2928:
case 985:
case 1733:
case 3434:
case 1459:
case 1440:
case 672:
case 2303:
case 2049:
case 12:
case 3513:
case 990:
case 3277:
case 3397:
case 2511:
case 2135:
case 652:
case 1238:
case 2099:
case 82:
case 1412:
case 1533:
case 1241:
case 3020:
case 1207:
case 1371:
case 960:
case 2889:
case 2446:
case 236:
case 3125:
case 2101:
case 1160:
case 2643:
case 464:
case 344:
case 3366:
case 2380:
case 818:
case 3641:
case 2147:
case 1918:
case 749:
case 3845:
case 1721:
case 79:
case 1315:
case 2827:
case 2197:
case 349:
case 2693:
case 469:
case 1166:
case 2414:
case 2386:
case 1928:
case 4048:
case 738:
case 1864:
case 3731:
case 1049:
case 1303:
case 2817:
case 22:
case 2412:
case 2490:
case 1135:
case 3531:
case 202:
case 2553:
case 455:
case 3026:
case 3094:
case 3551:
case 3010:
case 3092:
case 3869:
case 3044:
case 417:
case 3171:
case 475:
case 2618:
case 1030:
case 4:
case 3282:
case 2351:
case 2608:
case 505:
case 1063:
case 1227:
case 2937:
case 3964:
case 4015:
case 3198:
case 2121:
case 2957:
case 3627:
case 3893:
case 3586:
case 611:
case 2402:
case 2645:
case 707:
case 3843:
case 2076:
case 278:
case 2331:
case 2404:
case 1684:
case 4071:
case 1597:
case 3786:
case 1313:
case 3580:
case 3257:
case 756:
case 356:
case 2735:
case 633:
case 1305:
case 776:
case 2111:
case 2766:
case 3113:
case 1858:
case 987:
case 56:
case 2535:
case 1479:
case 689:
case 1945:
case 1081:
case 18:
case 2982:
case 3877:
case 200:
case 3818:
case 4025:
case 1838:
case 1348:
case 1773:
case 3006:
case 1657:
case 2669:
case 2555:
case 635:
case 925:
case 1398:
case 2175:
case 2501:
case 1121:
case 1891:
case 2797:
case 2547:
case 1645:
case 1402:
case 3703:
case 1841:
case 431:
case 2313:
case 878:
case 2597:
case 3409:
case 4080:
case 544:
case 2227:
case 3061:
case 1608:
case 2488:
case 3295:
case 1937:
case 3917:
case 3978:
case 100:
case 2945:
case 2773:
case 3927:
case 4086:
case 1262:
case 415:
case 1264:
case 1175:
case 2398:
case 457:
case 1755:
case 2908:
case 3662:
case 3715:
case 1566:
case 432:
case 2305:
case 670:
case 3989:
case 1735:
case 992:
case 1535:
case 1070:
case 3131:
case 1176:
case 399:
case 3619:
case 3212:
case 1874:
case 74:
case 1232:
case 46:
case 34:
case 1477:
case 1639:
case 3259:
case 1556:
case 4085:
case 3240:
case 394:
case 2922:
case 3652:
case 794:
case 1872:
case 2946:
case 1536:
case 1254:
case 618:
case 3516:
case 271:
case 2306:
case 3458:
case 1614:
case 1736:
case 3520:
case 330:
case 2163:
case 416:
case 3634:
case 272:
case 2939:
case 1624:
case 1075:
case 3726:
case 3794:
case 110:
case 3183:
case 1646:
case 2181:
case 252:
case 3792:
case 3542:
case 2300:
case 1622:
case 1443:
case 3051:
case 3594:
case 3744:
case 1229:
case 1730:
case 405:
case 3526:
case 810:
case 3888:
case 2990:
case 1011:
case 1599:
case 1749:
case 1170:
case 403:
case 2033:
case 2809:
case 968:
case 1967:
case 224:
case 3222:
case 2914:
case 753:
case 3098:
case 2254:
case 2690:
case 557:
case 2219:
case 353:
case 2765:
case 2612:
case 851:
case 636:
case 1306:
case 171:
case 3100:
case 1667:
case 373:
case 3929:
case 2565:
case 3381:
case 2383:
case 2640:
case 2874:
case 2756:
case 4010:
case 2176:
case 2639:
case 2232:
case 1996:
case 317:
case 1922:
case 2021:
case 2234:
case 4042:
case 3005:
case 2872:
case 532:
case 1912:
case 3013:
case 1990:
case 1033:
case 829:
case 2750:
case 4016:
case 2599:
case 531:
case 2749:
case 2170:
case 602:
case 1940:
case 124:
case 1959:
case 4020:
case 2549:
case 2799:
case 2428:
case 824:
case 49:
case 3802:
case 2624:
case 3785:
case 3954:
case 1939:
case 769:
case 872:
case 369:
case 3491:
case 1181:
case 152:
case 2229:
case 62:
case 3441:
case 1053:
case 1300:
case 852:
case 364:
case 506:
case 3065:
case 997:
case 1355:
case 2243:
case 2429:
case 2798:
case 3241:
case 64:
case 2598:
case 2748:
case 3036:
case 3291:
case 1808:
case 578:
case 2293:
case 429:
case 2373:
case 718:
case 1641:
case 4053:
case 2884:
case 205:
case 2186:
case 3160:
case 844:
case 2505:
case 2487:
case 3056:
case 1125:
case 3521:
case 3315:
case 1691:
case 2882:
case 19:
case 849:
case 630:
case 2705:
case 472:
case 3467:
case 2301:
case 3050:
case 3303:
case 3325:
case 1731:
case 138:
case 3864:
case 2347:
case 2837:
case 838:
case 2180:
case 500:
case 2713:
case 3928:
case 2658:
case 471:
case 1531:
case 3862:
case 3099:
case 3135:
case 451:
case 2432:
case 2397:
case 3511:
case 3155:
case 1094:
case 1551:
case 3775:
case 1026:
case 2907:
case 2452:
case 2941:
case 3030:
case 1171:
case 2454:
case 26:
case 946:
case 2991:
case 1869:
case 1010:
case 2419:
case 2638:
case 3380:
case 244:
case 736:
case 105:
case 410:
case 2103:
case 805:
case 653:
case 1228:
case 2895:
case 1505:
case 1487:
case 2607:
case 3827:
case 249:
case 1723:
case 673:
case 2845:
case 29:
case 2958:
case 1429:
case 982:
case 617:
case 2355:
case 3889:
case 2808:
case 301:
case 803:
case 1293:
case 1373:
case 4011:
case 1748:
case 1598:
case 914:
case 2026:
case 2551:
case 2094:
case 4021:
case 1452:
case 2044:
case 3173:
case 2751:
case 16:
case 3439:
case 3753:
case 2171:
case 3618:
case 1454:
case 981:
case 1638:
case 1419:
case 2869:
case 2092:
case 1857:
case 116:
case 1301:
case 3459:
case 3733:
case 1713:
case 1658:
case 3414:
case 1180:
case 1347:
case 816:
case 669:
case 3533:
case 3412:
case 3490:
case 3238:
case 1397:
case 2115:
case 664:
case 1432:
case 2279:
case 177:
case 3469:
case 3047:
case 571:
case 2349:
case 2003:
case 400:
case 2350:
case 3763:
case 1464:
case 2814:
case 113:
case 711:
case 2859:
case 1867:
case 2417:
case 2330:
case 2561:
case 3268:
case 2909:
case 3988:
case 1462:
case 95:
case 909:
case 2812:
case 3073:
case 2071:
case 529:
case 3604:
case 2783:
case 478:
case 3781:
case 2822:
case 333:
case 3602:
case 2968:
case 2896:
case 3445:
case 3209:
case 2194:
case 2824:
case 1506:
case 2288:
case 676:
case 2365:
case 389:
case 1974:
case 2583:
case 1204:
case 3979:
case 735:
case 3408:
case 1609:
case 2:
case 1202:
case 806:
case 213:
case 3437:
case 2464:
case 1116:
case 3679:
case 1840:
case 1478:
case 2867:
case 945:
case 3832:
case 3342:
case 232:
case 1561:
case 3274:
case 2500:
case 1120:
case 1890:
case 3852:
case 1399:
case 1672:
case 215:
case 708:
case 3819:
case 3060:
case 277:
case 3457:
case 2086:
case 3902:
case 2668:
case 3776:
case 1839:
case 1025:
case 1003:
case 308:
case 3829:
case 2204:
case 4063:
case 206:
case 3149:
case 1:
case 2202:
case 2609:
case 510:
case 2080:
case 2972:
case 1071:
case 770:
case 1336:
case 1144:
case 2706:
case 3887:
case 1192:
case 3484:
case 1110:
case 370:
case 1194:
case 1824:
case 3055:
case 3320:
case 1126:
case 1896:
case 750:
case 1968:
case 1583:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757041202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,];
var gg_b = "1757041202/";

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
