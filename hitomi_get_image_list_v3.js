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
case 110:
case 1526:
case 3298:
case 490:
case 3428:
case 562:
case 1119:
case 2416:
case 2808:
case 3270:
case 1038:
case 102:
case 3667:
case 629:
case 1377:
case 1516:
case 2237:
case 2426:
case 593:
case 473:
case 1333:
case 1009:
case 1854:
case 1044:
case 2281:
case 101:
case 3703:
case 3806:
case 636:
case 2404:
case 1216:
case 1392:
case 2573:
case 56:
case 3685:
case 2596:
case 2449:
case 2558:
case 2366:
case 2952:
case 209:
case 931:
case 1653:
case 2301:
case 3063:
case 10:
case 3824:
case 1769:
case 2581:
case 1968:
case 3368:
case 2199:
case 1549:
case 1496:
case 3598:
case 1437:
case 1458:
case 7:
case 1504:
case 882:
case 506:
case 2462:
case 3814:
case 1481:
case 384:
case 932:
case 3027:
case 1382:
case 1502:
case 403:
case 4028:
case 3812:
case 2110:
case 524:
case 1709:
case 3003:
case 171:
case 2361:
case 4045:
case 3994:
case 1141:
case 2591:
case 1629:
case 500:
case 3113:
case 2189:
case 4018:
case 3308:
case 2954:
case 160:
case 2120:
case 3822:
case 1619:
case 3982:
case 774:
case 1738:
case 3288:
case 2760:
case 467:
case 234:
case 116:
case 3607:
case 1521:
case 1852:
case 1042:
case 3727:
case 375:
case 726:
case 1178:
case 3801:
case 3866:
case 17:
case 1511:
case 554:
case 287:
case 1646:
case 3185:
case 3659:
case 1470:
case 2984:
case 1787:
case 309:
case 4011:
case 1115:
case 2063:
case 1072:
case 3301:
case 1456:
case 123:
case 2159:
case 3449:
case 2685:
case 1498:
case 3537:
case 3366:
case 3558:
case 3404:
case 1731:
case 840:
case 1693:
case 2570:
case 4021:
case 1352:
case 3199:
case 1650:
case 2107:
case 2368:
case 713:
case 1148:
case 2667:
case 527:
case 1894:
case 448:
case 3808:
case 1632:
case 2445:
case 1774:
case 3689:
case 2933:
case 1912:
case 3700:
case 1518:
case 625:
case 3416:
case 3620:
case 1765:
case 2428:
case 3839:
case 1882:
case 1545:
case 789:
case 2703:
case 3281:
case 2806:
case 378:
case 1922:
case 1097:
case 777:
case 4002:
case 3426:
case 3237:
case 3930:
case 3273:
case 449:
case 1884:
case 3335:
case 763:
case 2251:
case 1924:
case 1648:
case 3699:
case 1150:
case 334:
case 1193:
case 1705:
case 3314:
case 998:
case 2479:
case 3760:
case 1625:
case 1176:
case 387:
case 1892:
case 686:
case 2659:
case 2866:
case 414:
case 831:
case 1772:
case 2763:
case 1087:
case 3286:
case 2801:
case 1579:
case 1615:
case 1031:
case 1935:
case 4062:
case 1877:
case 2994:
case 2003:
case 451:
case 2812:
case 3110:
case 1833:
case 1797:
case 1279:
case 1354:
case 2695:
case 3586:
case 3464:
case 98:
case 2339:
case 2982:
case 79:
case 846:
case 3120:
case 2551:
case 2822:
case 1347:
case 735:
case 3402:
case 2588:
case 1961:
case 1132:
case 1065:
case 3189:
case 847:
case 1064:
case 1726:
case 538:
case 2682:
case 1983:
case 1112:
case 1661:
case 3051:
case 2133:
case 2177:
case 148:
case 2832:
case 3130:
case 706:
case 1400:
case 2694:
case 2319:
case 4036:
case 1269:
case 2995:
case 3503:
case 2091:
case 1762:
case 2773:
case 2876:
case 679:
case 762:
case 423:
case 687:
case 1635:
case 1011:
case 228:
case 3348:
case 2040:
case 3203:
case 2184:
case 520:
case 761:
case 2907:
case 3999:
case 3798:
case 3756:
case 4005:
case 3431:
case 1101:
case 2346:
case 3770:
case 3487:
case 3334:
case 2923:
case 1622:
case 3819:
case 3263:
case 3910:
case 2457:
case 3147:
case 12:
case 229:
case 3630:
case 3217:
case 2194:
case 151:
case 1389:
case 3989:
case 2913:
case 2260:
case 4065:
case 1932:
case 2967:
case 526:
case 2444:
case 241:
case 1538:
case 3497:
case 2409:
case 1106:
case 1557:
case 3880:
case 1895:
case 3436:
case 325:
case 2182:
case 1666:
case 2560:
case 1976:
case 1993:
case 1004:
case 556:
case 2692:
case 3743:
case 539:
case 2378:
case 711:
case 149:
case 1601:
case 3472:
case 1238:
case 1257:
case 122:
case 724:
case 3405:
case 1135:
case 609:
case 3652:
case 1062:
case 1460:
case 700:
case 2037:
case 3350:
case 3393:
case 494:
case 259:
case 574:
case 1114:
case 236:
case 1711:
case 1209:
case 15:
case 2985:
case 3376:
case 1244:
case 1168:
case 2348:
case 2203:
case 3781:
case 727:
case 2152:
case 40:
case 3959:
case 1946:
case 3737:
case 3796:
case 3773:
case 3192:
case 2890:
case 117:
case 577:
case 2487:
case 3469:
case 2043:
case 3200:
case 2878:
case 2798:
case 818:
case 3177:
case 2955:
case 2051:
case 1810:
case 1919:
case 1718:
case 410:
case 190:
case 2088:
case 2654:
case 1565:
case 3995:
case 1980:
case 2474:
case 4009:
case 1287:
case 3319:
case 1728:
case 1929:
case 915:
case 3832:
case 1231:
case 3353:
case 2527:
case 255:
case 1463:
case 2472:
case 2070:
case 1417:
case 167:
case 416:
case 2743:
case 2056:
case 3560:
case 3834:
case 684:
case 1385:
case 3390:
case 3081:
case 2376:
case 2517:
case 883:
case 3985:
case 359:
case 47:
case 637:
case 336:
case 3825:
case 3684:
case 3096:
case 3058:
case 2405:
case 3848:
case 3073:
case 965:
case 3194:
case 471:
case 591:
case 1045:
case 1313:
case 1941:
case 2332:
case 3438:
case 1597:
case 3457:
case 1367:
case 1536:
case 2630:
case 3871:
case 3786:
case 103:
case 1028:
case 3923:
case 280:
case 1323:
case 1139:
case 472:
case 2880:
case 3182:
case 643:
case 2920:
case 588:
case 2829:
case 947:
case 3260:
case 2989:
case 3011:
case 1152:
case 870:
case 409:
case 3915:
case 2307:
case 3399:
case 862:
case 1203:
case 3569:
case 1348:
case 2531:
case 3762:
case 3934:
case 364:
case 2946:
case 2079:
case 3925:
case 2359:
case 58:
case 3021:
case 3542:
case 1890:
case 3885:
case 1487:
case 1798:
case 1999:
case 4060:
case 3948:
case 3101:
case 1878:
case 2810:
case 3075:
case 1051:
case 3661:
case 3242:
case 747:
case 2395:
case 2565:
case 2639:
case 3983:
case 2820:
case 1383:
case 1503:
case 582:
case 3269:
case 2980:
case 2745:
case 2889:
case 2608:
case 3716:
case 765:
case 2929:
case 1371:
case 3002:
case 1465:
case 3721:
case 3124:
case 3601:
case 1527:
case 349:
case 3257:
case 3238:
case 824:
case 1056:
case 3666:
case 3976:
case 434:
case 296:
case 2236:
case 314:
case 245:
case 1393:
case 479:
case 3209:
case 2572:
case 3114:
case 321:
case 2990:
case 623:
case 1405:
case 3062:
case 2978:
case 927:
case 812:
case 715:
case 1910:
case 2272:
case 1263:
case 1630:
case 2855:
case 408:
case 3544:
case 1217:
case 653:
case 2313:
case 3016:
case 180:
case 957:
case 1819:
case 2028:
case 3702:
case 3320:
case 203:
case 3775:
case 1920:
case 2323:
case 3538:
case 3895:
case 3026:
case 3764:
case 1788:
case 2018:
case 3310:
case 4000:
case 2205:
case 3639:
case 2983:
case 769:
case 390:
case 3565:
case 954:
case 2242:
case 248:
case 3403:
case 1133:
case 3810:
case 2661:
case 3574:
case 2867:
case 2002:
case 671:
case 1694:
case 540:
case 1832:
case 2716:
case 2269:
case 976:
case 3745:
case 2122:
case 3820:
case 1319:
case 1737:
case 1758:
case 1796:
case 827:
case 1876:
case 3531:
case 2762:
case 2614:
case 2934:
case 437:
case 67:
case 3168:
case 2569:
case 1781:
case 1040:
case 1442:
case 2011:
case 128:
case 2635:
case 1850:
case 3587:
case 911:
case 2101:
case 1907:
case 3265:
case 924:
case 2948:
case 2749:
case 616:
case 2542:
case 4027:
case 3359:
case 2925:
case 1469:
case 484:
case 2166:
case 1883:
case 2320:
case 2702:
case 3028:
case 303:
case 2622:
case 532:
case 3045:
case 4003:
case 1194:
case 1791:
case 3313:
case 1457:
case 142:
case 22:
case 744:
case 3272:
case 1438:
case 129:
case 2310:
case 1967:
case 531:
case 2026:
case 1341:
case 2932:
case 3323:
case 1182:
case 3139:
case 1444:
case 2775:
case 610:
case 768:
case 3505:
case 2859:
case 666:
case 1692:
case 1834:
case 2666:
case 1560:
case 1390:
case 3385:
case 2601:
case 14:
case 222:
case 595:
case 475:
case 2124:
case 1815:
case 3417:
case 3779:
case 3978:
case 1684:
case 2460:
case 3668:
case 1848:
case 60:
case 783:
case 1740:
case 962:
case 3990:
case 3427:
case 214:
case 3297:
case 2711:
case 1824:
case 850:
case 2072:
case 3968:
case 3769:
case 3216:
case 137:
case 2731:
case 3690:
case 1159:
case 2228:
case 1685:
case 223:
case 992:
case 2125:
case 1570:
case 184:
case 2966:
case 366:
case 105:
case 696:
case 3496:
case 3549:
case 1835:
case 1368:
case 2148:
case 3226:
case 991:
case 963:
case 533:
case 2632:
case 3847:
case 1667:
case 3057:
case 302:
case 3038:
case 2330:
case 1977:
case 1298:
case 3526:
case 310:
case 3249:
case 1428:
case 804:
case 143:
case 2518:
case 3119:
case 3009:
case 820:
case 3854:
case 430:
case 4091:
case 1703:
case 3262:
case 1861:
case 253:
case 3275:
case 2924:
case 3852:
case 3440:
case 2884:
case 3042:
case 515:
case 1727:
case 175:
case 3264:
case 1543:
case 617:
case 316:
case 37:
case 2634:
case 294:
case 436:
case 1717:
case 3069:
case 3190:
case 2892:
case 2031:
case 2615:
case 2935:
case 4073:
case 4037:
case 3202:
case 442:
case 2736:
case 3908:
case 1003:
case 371:
case 3629:
case 673:
case 3141:
case 989:
case 2488:
case 3502:
case 2354:
case 1695:
case 3680:
case 977:
case 3491:
case 1822:
case 1551:
case 3575:
case 799:
case 2906:
case 1982:
case 372:
case 1588:
case 2961:
case 874:
case 3564:
case 3830:
case 2671:
case 1113:
case 3486:
case 1308:
case 1167:
case 3518:
case 1322:
case 1416:
case 652:
case 2204:
case 3183:
case 210:
case 2526:
case 2057:
case 202:
case 3894:
case 1689:
case 3774:
case 3171:
case 1808:
case 3912:
case 4051:
case 2129:
case 651:
case 1237:
case 2641:
case 1296:
case 877:
case 1312:
case 1273:
case 1930:
case 2377:
case 62:
case 2044:
case 1839:
case 1281:
case 201:
case 518:
case 3922:
case 3097:
case 2854:
case 1596:
case 1449:
case 486:
case 2146:
case 3456:
case 3498:
case 2216:
case 65:
case 1404:
case 2562:
case 3134:
case 3731:
case 3470:
case 926:
case 1301:
case 622:
case 3352:
case 4043:
case 1462:
case 2473:
case 2549:
case 740:
case 1060:
case 3650:
case 1199:
case 2458:
case 266:
case 3693:
case 297:
case 2742:
case 3676:
case 3125:
case 3966:
case 3354:
case 2502:
case 1464:
case 1306:
case 73:
case 480:
case 3877:
case 1591:
case 2629:
case 2141:
case 3833:
case 1110:
case 1947:
case 3736:
case 795:
case 2211:
case 648:
case 3347:
case 1000:
case 3961:
case 89:
case 1402:
case 2830:
case 904:
case 3906:
case 425:
case 2738:
case 272:
case 2757:
case 2491:
case 260:
case 3074:
case 2575:
case 1120:
case 835:
case 4056:
case 1411:
case 3884:
case 1335:
case 3648:
case 2275:
case 2521:
case 3150:
case 1699:
case 2440:
case 1324:
case 1286:
case 731:
case 892:
case 2202:
case 3031:
case 3443:
case 888:
case 1291:
case 187:
case 2190:
case 3892:
case 1540:
case 1421:
case 3772:
case 2511:
case 27:
case 950:
case 3970:
case 4024:
case 2468:
case 980:
case 3660:
case 1725:
case 1050:
case 1840:
case 3277:
case 157:
case 1949:
case 1748:
case 773:
case 3956:
case 420:
case 3998:
case 2707:
case 265:
case 2821:
case 3304:
case 1715:
case 404:
case 247:
case 1187:
case 3349:
case 2981:
case 485:
case 3584:
case 1398:
case 2663:
case 1734:
case 4035:
case 1962:
case 2973:
case 2230:
case 925:
case 2617:
case 790:
case 2958:
case 318:
case 2252:
case 3284:
case 3326:
case 2103:
case 3412:
case 1268:
case 2795:
case 2023:
case 4:
case 2530:
case 553:
case 3020:
case 1174:
case 233:
case 3533:
case 1891:
case 3577:
case 3316:
case 450:
case 4061:
case 1032:
case 828:
case 1430:
case 1783:
case 2067:
case 1208:
case 1343:
case 474:
case 1631:
case 2940:
case 841:
case 2804:
case 3321:
case 1025:
case 4066:
case 2379:
case 2127:
case 215:
case 3099:
case 2007:
case 1776:
case 1873:
case 2862:
case 703:
case 68:
case 842:
case 1837:
case 439:
case 456:
case 1896:
case 2554:
case 3055:
case 1665:
case 745:
case 2408:
case 1539:
case 3845:
case 2713:
case 859:
case 383:
case 3828:
case 681:
case 1197:
case 2547:
case 3406:
case 2439:
case 3710:
case 1136:
case 3594:
case 3364:
case 2991:
case 796:
case 2826:
case 84:
case 3818:
case 3375:
case 2603:
case 161:
case 94:
case 1729:
case 3023:
case 3864:
case 1609:
case 1888:
case 501:
case 1945:
case 2284:
case 1433:
case 1780:
case 3795:
case 1851:
case 632:
case 3252:
case 218:
case 1719:
case 1638:
case 764:
case 3345:
case 2089:
case 959:
case 2422:
case 2292:
case 4039:
case 2577:
case 1266:
case 631:
case 3328:
case 2020:
case 2755:
case 106:
case 365:
case 3627:
case 1501:
case 2956:
case 929:
case 942:
case 3707:
case 2799:
case 2998:
case 63:
case 597:
case 1373:
case 1212:
case 1484:
case 3811:
case 1078:
case 3759:
case 3958:
case 3937:
case 1053:
case 941:
case 2401:
case 2349:
case 2584:
case 1090:
case 1169:
case 3821:
case 2304:
case 347:
case 1222:
case 283:
case 2789:
case 100:
case 1391:
case 928:
case 572:
case 112:
case 1157:
case 714:
case 3408:
case 488:
case 2302:
case 2720:
case 3554:
case 1386:
case 1080:
case 3095:
case 1741:
case 640:
case 491:
case 1109:
case 749:
case 2406:
case 3547:
case 124:
case 1046:
case 825:
case 3059:
case 2321:
case 1979:
case 1898:
case 1856:
case 1535:
case 3785:
case 2424:
case 4068:
case 2294:
case 3117:
case 3940:
case 219:
case 154:
case 1514:
case 57:
case 11:
case 2311:
case 176:
case 516:
case 2435:
case 1642:
case 958:
case 2160:
case 3862:
case 315:
case 3127:
case 244:
case 72:
case 2414:
case 1206:
case 880:
case 751:
case 3254:
case 3379:
case 28:
case 189:
case 3255:
case 1271:
case 517:
case 1942:
case 177:
case 2643:
case 3792:
case 878:
case 753:
case 1548:
case 2434:
case 2387:
case 2752:
case 2425:
case 1768:
case 1969:
case 4090:
case 46:
case 1860:
case 3173:
case 1407:
case 3196:
case 2559:
case 3805:
case 3137:
case 2448:
case 3158:
case 1215:
case 3686:
case 3094:
case 2471:
case 2838:
case 4041:
case 1234:
case 2483:
case 3419:
case 3691:
case 975:
case 113:
case 573:
case 2259:
case 1128:
case 3733:
case 3480:
case 3555:
case 1571:
case 2688:
case 281:
case 3777:
case 3082:
case 723:
case 3429:
case 1248:
case 809:
case 470:
case 590:
case 1118:
case 2900:
case 1583:
case 462:
case 299:
case 454:
case 2052:
case 3673:
case 3210:
case 3963:
case 1068:
case 2585:
case 3084:
case 1327:
case 2493:
case 2223:
case 1179:
case 3681:
case 3220:
case 1550:
case 2656:
case 3490:
case 1485:
case 3927:
case 665:
case 107:
case 3478:
case 3289:
case 1317:
case 3453:
case 2143:
case 1593:
case 2267:
case 33:
case 2372:
case 937:
case 188:
case 3520:
case 2754:
case 3782:
case 192:
case 1957:
case 1739:
case 1938:
case 633:
case 1276:
case 1532:
case 1423:
case 2336:
case 1708:
case 2747:
case 424:
case 1944:
case 2285:
case 834:
case 191:
case 2523:
case 3865:
case 1467:
case 503:
case 4029:
case 905:
case 1645:
case 1413:
case 240:
case 1529:
case 2691:
case 1246:
case 805:
case 1:
case 884:
case 3730:
case 1116:
case 2094:
case 2903:
case 1580:
case 3471:
case 1602:
case 3857:
case 3047:
case 766:
case 1722:
case 1300:
case 398:
case 138:
case 3900:
case 1126:
case 979:
case 2429:
case 3207:
case 2299:
case 4032:
case 381:
case 427:
case 1006:
case 548:
case 3844:
case 70:
case 2082:
case 2480:
case 2733:
case 3809:
case 1974:
case 1104:
case 1219:
case 4093:
case 3387:
case 644:
case 2599:
case 2446:
case 3507:
case 120:
case 2369:
case 3198:
case 4076:
case 1817:
case 457:
case 3643:
case 3415:
case 2792:
case 1863:
case 2872:
case 1024:
case 3170:
case 701:
case 710:
case 2640:
case 2137:
case 2805:
case 2158:
case 3448:
case 1931:
case 564:
case 1035:
case 2173:
case 2784:
case 1280:
case 185:
case 843:
case 104:
case 3752:
case 1014:
case 3397:
case 3336:
case 3567:
case 3188:
case 1164:
case 2589:
case 1761:
case 3513:
case 2782:
case 1410:
case 1803:
case 1012:
case 1626:
case 2520:
case 3151:
case 875:
case 1278:
case 1489:
case 232:
case 618:
case 716:
case 551:
case 3285:
case 1290:
case 2510:
case 1997:
case 3747:
case 1936:
case 52:
case 1578:
case 2681:
case 3493:
case 3223:
case 4034:
case 246:
case 1241:
case 1360:
case 2658:
case 521:
case 3842:
case 3585:
case 1714:
case 3305:
case 399:
case 1111:
case 772:
case 1972:
case 2963:
case 514:
case 3267:
case 1905:
case 23:
case 1001:
case 3372:
case 2289:
case 3670:
case 2927:
case 2092:
case 3869:
case 1604:
case 549:
case 2220:
case 4025:
case 771:
case 1066:
case 1724:
case 2490:
case 624:
case 2:
case 2116:
case 611:
case 2246:
case 558:
case 2300:
case 2455:
case 1094:
case 1903:
case 1686:
case 530:
case 3248:
case 3303:
case 250:
case 1299:
case 3583:
case 3571:
case 1836:
case 1480:
case 3225:
case 600:
case 2006:
case 1082:
case 3039:
case 2149:
case 1599:
case 1446:
case 3548:
case 1369:
case 3283:
case 2701:
case 2219:
case 2024:
case 3525:
case 1872:
case 1255:
case 389:
case 377:
case 2817:
case 676:
case 61:
case 1342:
case 654:
case 1173:
case 2162:
case 3534:
case 972:
case 3407:
case 2499:
case 2229:
case 1137:
case 1805:
case 204:
case 528:
case 2987:
case 2827:
case 3276:
case 1344:
case 2164:
case 131:
case 894:
case 1309:
case 3293:
case 3250:
case 1520:
case 1441:
case 3938:
case 662:
case 2410:
case 392:
case 2803:
case 1077:
case 2706:
case 3618:
case 734:
case 132:
case 3467:
case 3800:
case 997:
case 3413:
case 2489:
case 3645:
case 1186:
case 1510:
case 2997:
case 1874:
case 542:
case 2936:
case 4095:
case 1191:
case 2541:
case 2735:
case 2553:
case 3327:
case 146:
case 1681:
case 3179:
case 2662:
case 1673:
case 1963:
case 910:
case 66:
case 274:
case 39:
case 2360:
case 1658:
case 2241:
case 1696:
case 2590:
case 1478:
case 4007:
case 3317:
case 901:
case 2905:
case 2001:
case 256:
case 1887:
case 2066:
case 2121:
case 606:
case 54:
case 195:
case 1092:
case 708:
case 2604:
case 277:
case 2942:
case 1331:
case 3817:
case 1415:
case 3024:
case 3766:
case 289:
case 3104:
case 801:
case 1387:
case 2459:
case 3149:
case 1156:
case 1198:
case 1425:
case 2679:
case 3827:
case 1295:
case 2969:
case 3280:
case 2515:
case 2407:
case 586:
case 3229:
case 802:
case 743:
case 3931:
case 3611:
case 2534:
case 469:
case 3580:
case 1857:
case 3300:
case 3722:
case 3529:
case 2128:
case 213:
case 3246:
case 3:
case 2234:
case 3116:
case 181:
case 3712:
case 3664:
case 1054:
case 2571:
case 2225:
case 3974:
case 4020:
case 2118:
case 1900:
case 3519:
case 338:
case 2583:
case 1651:
case 3675:
case 4089:
case 994:
case 1842:
case 1450:
case 199:
case 1305:
case 3662:
case 419:
case 29:
case 872:
case 2179:
case 3735:
case 3553:
case 235:
case 2327:
case 1223:
case 444:
case 953:
case 3121:
case 2550:
case 1656:
case 2593:
case 657:
case 1143:
case 1372:
case 2317:
case 1670:
case 2938:
case 3803:
case 923:
case 2618:
case 3706:
case 288:
case 4055:
case 2250:
case 1151:
case 3175:
case 1754:
case 3626:
case 483:
case 2423:
case 1567:
case 1188:
case 2276:
case 2628:
case 816:
case 2944:
case 263:
case 291:
case 3420:
case 3541:
case 3022:
case 2800:
case 2645:
case 2413:
case 3278:
case 1432:
case 1030:
case 580:
case 2467:
case 3253:
case 3636:
case 2888:
case 3697:
case 2609:
case 922:
case 2729:
case 2522:
case 1010:
case 118:
case 2945:
case 2780:
case 1412:
case 2041:
case 3926:
case 3165:
case 914:
case 3783:
case 2201:
case 3886:
case 2657:
case 262:
case 1100:
case 1533:
case 1020:
case 728:
case 1422:
case 3891:
case 327:
case 481:
case 1292:
case 2381:
case 3748:
case 3949:
case 3076:
case 1799:
case 3904:
case 3093:
case 1879:
case 2501:
case 1233:
case 2212:
case 2337:
case 2358:
case 3050:
case 656:
case 1592:
case 873:
case 758:
case 3605:
case 2373:
case 3672:
case 2053:
case 3962:
case 2746:
case 2843:
case 3715:
case 2222:
case 890:
case 3187:
case 1349:
case 3398:
case 2090:
case 1789:
case 200:
case 3964:
case 2391:
case 3083:
case 3071:
case 1720:
case 2386:
case 1951:
case 650:
case 2157:
case 212:
case 2506:
case 759:
case 1582:
case 1845:
case 736:
case 3539:
case 4030:
case 168:
case 3902:
case 1461:
case 3351:
case 1406:
case 3197:
case 3136:
case 2482:
case 74:
case 3508:
case 1710:
case 2144:
case 2080:
case 3388:
case 1594:
case 867:
case 211:
case 3687:
case 2753:
case 3034:
case 2535:
case 2046:
case 2979:
case 3343:
case 579:
case 119:
case 3208:
case 3911:
case 21:
case 2870:
case 3172:
case 2514:
case 1424:
case 741:
case 587:
case 3776:
case 3048:
case 1943:
case 1435:
case 3750:
case 3921:
case 144:
case 1282:
case 742:
case 3239:
case 2206:
case 1414:
case 903:
case 2840:
case 505:
case 584:
case 3396:
case 3212:
case 3337:
case 3484:
case 2050:
case 3358:
case 2093:
case 2904:
case 3501:
case 3381:
case 2748:
case 2076:
case 1707:
case 2356:
case 3169:
case 3090:
case 2715:
case 3078:
case 1617:
case 2370:
case 3746:
case 1958:
case 1759:
case 3843:
case 2131:
case 36:
case 1973:
case 1103:
case 4094:
case 3945:
case 2268:
case 3780:
case 967:
case 3433:
case 1318:
case 1875:
case 1252:
case 3477:
case 691:
case 393:
case 3644:
case 3928:
case 663:
case 1864:
case 2636:
case 1530:
case 1023:
case 2916:
case 227:
case 4082:
case 864:
case 3266:
case 3512:
case 2771:
case 3201:
case 2430:
case 2783:
case 3918:
case 2886:
case 362:
case 1067:
case 1802:
case 786:
case 2165:
case 688:
case 1013:
case 945:
case 3790:
case 1785:
case 1117:
case 2343:
case 2911:
case 2208:
case 2631:
case 31:
case 1247:
case 2172:
case 990:
case 1804:
case 2687:
case 3898:
case 1849:
case 3535:
case 3856:
case 115:
case 575:
case 4092:
case 3206:
case 2881:
case 973:
case 3524:
case 2921:
case 1379:
case 2858:
case 851:
case 376:
case 2837:
case 677:
case 2896:
case 780:
case 2793:
case 1862:
case 3340:
case 82:
case 312:
case 3138:
case 2539:
case 2665:
case 3494:
case 1767:
case 3019:
case 85:
case 1816:
case 431:
case 814:
case 2964:
case 3391:
case 3144:
case 2454:
case 613:
case 2388:
case 3080:
case 311:
case 1547:
case 755:
case 324:
case 3029:
case 917:
case 2351:
case 432:
case 1826:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756270801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,];
var gg_b = "1756270801/";

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
