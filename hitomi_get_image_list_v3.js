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
case 2401:
case 604:
case 1802:
case 3343:
case 3790:
case 3620:
case 1022:
case 3442:
case 2405:
case 3711:
case 2170:
case 3577:
case 20:
case 2302:
case 2463:
case 2403:
case 2362:
case 3341:
case 1780:
case 3536:
case 3824:
case 3558:
case 1127:
case 2319:
case 556:
case 3004:
case 464:
case 2875:
case 3967:
case 1371:
case 789:
case 353:
case 1375:
case 993:
case 1209:
case 3832:
case 2587:
case 2606:
case 1257:
case 2666:
case 197:
case 1111:
case 3230:
case 3629:
case 3799:
case 1113:
case 1789:
case 2179:
case 1055:
case 1614:
case 806:
case 1895:
case 2168:
case 1506:
case 954:
case 1566:
case 3950:
case 2492:
case 737:
case 1891:
case 1034:
case 800:
case 1278:
case 1212:
case 2756:
case 1893:
case 77:
case 3697:
case 150:
case 739:
case 1871:
case 2127:
case 3288:
case 3520:
case 301:
case 3156:
case 2373:
case 1749:
case 3016:
case 3708:
case 2371:
case 315:
case 3677:
case 2547:
case 3140:
case 3986:
case 1401:
case 1465:
case 560:
case 199:
case 85:
case 2260:
case 566:
case 3841:
case 10:
case 2199:
case 958:
case 1403:
case 1362:
case 1647:
case 1996:
case 1393:
case 3381:
case 2937:
case 1168:
case 1108:
case 3385:
case 2566:
case 2034:
case 3529:
case 1492:
case 1310:
case 2212:
case 256:
case 4074:
case 1738:
case 1756:
case 3149:
case 2810:
case 250:
case 3454:
case 2209:
case 3431:
case 2257:
case 1606:
case 2111:
case 50:
case 2269:
case 493:
case 2113:
case 468:
case 746:
case 2055:
case 740:
case 2614:
case 3433:
case 2190:
case 629:
case 1476:
case 2887:
case 3532:
case 2695:
case 2721:
case 2693:
case 2723:
case 1387:
case 147:
case 767:
case 2194:
case 852:
case 1026:
case 3446:
case 2030:
case 1866:
case 230:
case 3583:
case 1593:
case 102:
case 4070:
case 3581:
case 2306:
case 814:
case 3585:
case 2048:
case 547:
case 1671:
case 2264:
case 1502:
case 121:
case 1675:
case 2204:
case 938:
case 2903:
case 3877:
case 1174:
case 471:
case 610:
case 2784:
case 3098:
case 2961:
case 434:
case 1673:
case 2717:
case 3645:
case 3836:
case 3524:
case 2039:
case 2575:
case 943:
case 3641:
case 586:
case 1972:
case 1918:
case 3643:
case 32:
case 3320:
case 4079:
case 3467:
case 383:
case 3144:
case 3632:
case 438:
case 3057:
case 2595:
case 3829:
case 2591:
case 2314:
case 3069:
case 3253:
case 202:
case 1306:
case 934:
case 3251:
case 1992:
case 757:
case 1048:
case 971:
case 879:
case 862:
case 443:
case 2476:
case 1887:
case 4027:
case 1691:
case 1721:
case 3234:
case 3152:
case 3683:
case 549:
case 1723:
case 3012:
case 3681:
case 3931:
case 247:
case 3685:
case 1194:
case 3897:
case 3820:
case 4015:
case 1602:
case 3060:
case 1039:
case 3000:
case 1662:
case 1575:
case 4011:
case 2918:
case 2972:
case 3358:
case 4013:
case 2519:
case 4090:
case 2847:
case 88:
case 2088:
case 1264:
case 3794:
case 1963:
case 1903:
case 3541:
case 823:
case 2675:
case 484:
case 1496:
case 1965:
case 769:
case 3543:
case 1901:
case 3121:
case 1752:
case 149:
case 91:
case 988:
case 3125:
case 295:
case 3750:
case 2277:
case 4035:
case 1737:
case 2075:
case 552:
case 3024:
case 929:
case 4033:
case 2071:
case 3316:
case 1167:
case 2938:
case 3864:
case 1444:
case 3598:
case 3999:
case 2322:
case 1822:
case 785:
case 3600:
case 684:
case 1220:
case 1989:
case 1776:
case 13:
case 2258:
case 2425:
case 2548:
case 1010:
case 1297:
case 3707:
case 3081:
case 3678:
case 3612:
case 1146:
case 2530:
case 3083:
case 3137:
case 114:
case 1834:
case 3287:
case 2128:
case 1648:
case 3214:
case 53:
case 1855:
case 279:
case 3669:
case 1630:
case 1853:
case 2355:
case 2626:
case 3915:
case 317:
case 2351:
case 3657:
case 3032:
case 3970:
case 277:
case 735:
case 671:
case 1322:
case 416:
case 3043:
case 3196:
case 2822:
case 1186:
case 3041:
case 579:
case 2776:
case 2002:
case 2220:
case 1425:
case 2588:
case 1073:
case 3304:
case 195:
case 3364:
case 3816:
case 1277:
case 2019:
case 381:
case 1075:
case 2444:
case 1938:
case 2167:
case 1484:
case 1353:
case 2648:
case 3786:
case 179:
case 3512:
case 3578:
case 326:
case 378:
case 429:
case 518:
case 1626:
case 58:
case 1796:
case 1355:
case 3206:
case 707:
case 1334:
case 830:
case 2010:
case 2297:
case 688:
case 4042:
case 836:
case 3569:
case 1530:
case 3968:
case 927:
case 2150:
case 7:
case 2014:
case 625:
case 2848:
case 2655:
case 2651:
case 106:
case 3309:
case 1348:
case 1826:
case 4086:
case 2830:
case 1066:
case 904:
case 1006:
case 1718:
case 2232:
case 856:
case 232:
case 1480:
case 693:
case 2703:
case 2285:
case 897:
case 1551:
case 2135:
case 3411:
case 1553:
case 2634:
case 3413:
case 2087:
case 2765:
case 2952:
case 2133:
case 3118:
case 303:
case 1047:
case 1339:
case 74:
case 2456:
case 1243:
case 582:
case 2792:
case 2622:
case 245:
case 1245:
case 3564:
case 2839:
case 3898:
case 1489:
case 3077:
case 2925:
case 2388:
case 755:
case 3499:
case 3275:
case 1522:
case 1888:
case 2224:
case 4028:
case 1703:
case 2480:
case 2555:
case 1131:
case 1285:
case 1281:
case 3878:
case 1135:
case 3994:
case 1763:
case 1283:
case 860:
case 55:
case 2553:
case 1984:
case 4007:
case 1761:
case 1705:
case 1765:
case 792:
case 1133:
case 866:
case 1014:
case 2330:
case 658:
case 875:
case 1326:
case 3468:
case 3408:
case 3192:
case 3029:
case 2826:
case 2534:
case 2348:
case 1449:
case 1830:
case 2772:
case 2718:
case 3857:
case 132:
case 1154:
case 3101:
case 15:
case 4046:
case 3105:
case 776:
case 404:
case 2522:
case 3163:
case 4050:
case 2888:
case 3731:
case 2047:
case 26:
case 3782:
case 2243:
case 3800:
case 765:
case 2241:
case 351:
case 3262:
case 3202:
case 2245:
case 1440:
case 1239:
case 1620:
case 1790:
case 467:
case 2845:
case 2636:
case 1343:
case 1442:
case 1189:
case 1713:
case 3022:
case 1345:
case 2843:
case 1711:
case 1715:
case 861:
case 3780:
case 1064:
case 1824:
case 1536:
case 3418:
case 1907:
case 3472:
case 1558:
case 3127:
case 71:
case 3373:
case 2156:
case 1967:
case 3371:
case 2016:
case 2708:
case 3819:
case 594:
case 1832:
case 2431:
case 1180:
case 3209:
case 3269:
case 3053:
case 1230:
case 1799:
case 2770:
case 3111:
case 397:
case 3976:
case 222:
case 3789:
case 1248:
case 3190:
case 3614:
case 553:
case 4023:
case 459:
case 3034:
case 2529:
case 3566:
case 2928:
case 1883:
case 4021:
case 2482:
case 3212:
case 996:
case 1881:
case 350:
case 1727:
case 4025:
case 2064:
case 1520:
case 2959:
case 3871:
case 457:
case 3749:
case 1138:
case 101:
case 1708:
case 1016:
case 738:
case 1140:
case 3873:
case 253:
case 851:
case 399:
case 2239:
case 1658:
case 1986:
case 1779:
case 1845:
case 3461:
case 1841:
case 2189:
case 30:
case 2577:
case 3170:
case 3996:
case 743:
case 496:
case 198:
case 3403:
case 163:
case 3740:
case 3393:
case 609:
case 2950:
case 3108:
case 1928:
case 1385:
case 1149:
case 3756:
case 3395:
case 2881:
case 1482:
case 501:
case 1383:
case 2946:
case 3514:
case 2885:
case 1454:
case 3606:
case 2180:
case 2629:
case 469:
case 1770:
case 1435:
case 784:
case 366:
case 360:
case 2248:
case 4044:
case 685:
case 3179:
case 2933:
case 411:
case 2683:
case 1397:
case 4038:
case 4056:
case 2012:
case 2078:
case 613:
case 405:
case 2897:
case 4040:
case 2685:
case 347:
case 3595:
case 583:
case 946:
case 2009:
case 2982:
case 3806:
case 2069:
case 2253:
case 52:
case 3314:
case 1583:
case 2954:
case 3437:
case 144:
case 386:
case 3510:
case 1329:
case 665:
case 1585:
case 2117:
case 380:
case 2794:
case 2377:
case 3502:
case 3671:
case 3675:
case 2541:
case 3216:
case 3174:
case 2125:
case 2820:
case 874:
case 544:
case 758:
case 233:
case 2000:
case 1641:
case 1320:
case 12:
case 3972:
case 1643:
case 2358:
case 183:
case 1467:
case 1144:
case 1009:
case 1632:
case 336:
case 330:
case 2583:
case 2581:
case 3306:
case 1251:
case 533:
case 3992:
case 439:
case 3048:
case 3366:
case 2585:
case 3725:
case 3695:
case 1184:
case 2532:
case 1683:
case 1152:
case 3721:
case 3691:
case 712:
case 1681:
case 1931:
case 3693:
case 754:
case 3723:
case 548:
case 655:
case 1935:
case 1685:
case 2858:
case 3602:
case 487:
case 2836:
case 1060:
case 624:
case 6:
case 2641:
case 1222:
case 3662:
case 3347:
case 2459:
case 2320:
case 2407:
case 1336:
case 440:
case 3963:
case 1794:
case 768:
case 793:
case 148:
case 3204:
case 1123:
case 446:
case 3752:
case 3619:
case 3901:
case 3965:
case 1125:
case 3905:
case 3961:
case 3784:
case 1750:
case 2304:
case 2728:
case 3737:
case 2816:
case 1746:
case 1804:
case 1927:
case 3107:
case 1316:
case 3444:
case 4:
case 2560:
case 2247:
case 965:
case 1999:
case 517:
case 791:
case 1598:
case 377:
case 4092:
case 3062:
case 1474:
case 2045:
case 1660:
case 3639:
case 646:
case 33:
case 3220:
case 4065:
case 3297:
case 3010:
case 639:
case 3146:
case 992:
case 1707:
case 4061:
case 1081:
case 314:
case 3834:
case 2968:
case 574:
case 3526:
case 2569:
case 1083:
case 4063:
case 4003:
case 3150:
case 2509:
case 3648:
case 220:
case 3855:
case 2578:
case 455:
case 2786:
case 2266:
case 3853:
case 3630:
case 3229:
case 2494:
case 117:
case 1657:
case 3322:
case 848:
case 2598:
case 1196:
case 578:
case 2600:
case 1041:
case 2474:
case 3186:
case 3258:
case 520:
case 1304:
case 395:
case 833:
case 231:
case 3940:
case 1364:
case 1816:
case 2746:
case 1500:
case 181:
case 2927:
case 2316:
case 1560:
case 3539:
case 4072:
case 4018:
case 120:
case 605:
case 2913:
case 2990:
case 704:
case 126:
case 3355:
case 1266:
case 9:
case 476:
case 2609:
case 2032:
case 1206:
case 2657:
case 924:
case 2911:
case 2767:
case 3334:
case 3548:
case 2612:
case 2137:
case 2083:
case 1509:
case 2287:
case 1908:
case 3417:
case 3330:
case 306:
case 382:
case 2408:
case 1357:
case 3066:
case 2869:
case 409:
case 2029:
case 503:
case 942:
case 2857:
case 3718:
case 3006:
case 3480:
case 2210:
case 2994:
case 561:
case 2293:
case 1742:
case 2291:
case 3553:
case 1413:
case 669:
case 2479:
case 1300:
case 2754:
case 1118:
case 2516:
case 1360:
case 36:
case 2262:
case 935:
case 251:
case 1504:
case 3241:
case 2800:
case 2860:
case 1036:
case 1564:
case 690:
case 2165:
case 2101:
case 1974:
case 3142:
case 2161:
case 2105:
case 696:
case 161:
case 1499:
case 3522:
case 2163:
case 2398:
case 2470:
case 2731:
case 2103:
case 3888:
case 773:
case 3703:
case 1293:
case 3763:
case 3281:
case 1812:
case 1291:
case 3705:
case 3761:
case 3634:
case 2413:
case 3984:
case 435:
case 2312:
case 2490:
case 3952:
case 3701:
case 710:
case 3087:
case 3848:
case 3014:
case 2309:
case 1192:
case 2357:
case 1408:
case 3651:
case 3653:
case 3232:
case 3154:
case 659:
case 2898:
case 2273:
case 1165:
case 729:
case 1105:
case 1161:
case 2616:
case 99:
case 1219:
case 2077:
case 1163:
case 442:
case 898:
case 2275:
case 1735:
case 667:
case 2271:
case 1664:
case 3923:
case 1103:
case 3224:
case 2300:
case 801:
case 2118:
case 2172:
case 3456:
case 1516:
case 2360:
case 3792:
case 345:
case 2504:
case 1262:
case 1800:
case 3440:
case 2036:
case 3839:
case 1020:
case 2564:
case 1729:
case 2670:
case 3540:
case 2464:
case 3714:
case 1900:
case 3120:
case 1416:
case 3538:
case 3556:
case 3344:
case 3689:
case 3821:
case 452:
case 923:
case 4093:
case 2042:
case 3005:
case 3001:
case 4010:
case 3825:
case 918:
case 81:
case 4095:
case 888:
case 3267:
case 1797:
case 1374:
case 1627:
case 3823:
case 3207:
case 3063:
case 34:
case 1720:
case 3817:
case 1276:
case 1114:
case 210:
case 477:
case 1615:
case 2106:
case 3930:
case 871:
case 43:
case 1909:
case 834:
case 1611:
case 1035:
case 3246:
case 2590:
case 979:
case 3197:
case 1579:
case 1894:
case 2515:
case 3884:
case 3250:
case 2394:
case 2777:
case 1237:
case 2511:
case 3422:
case 1874:
case 2570:
case 977:
case 686:
case 3640:
case 3321:
case 3325:
case 3638:
case 3589:
case 462:
case 241:
case 2699:
case 843:
case 647:
case 1670:
case 3706:
case 3844:
case 313:
case 1147:
case 510:
case 3158:
case 1527:
case 3136:
case 3286:
case 376:
case 516:
case 3649:
case 2035:
case 1513:
case 3384:
case 3453:
case 2912:
case 1590:
case 495:
case 2894:
case 2031:
case 2579:
case 3228:
case 3455:
case 2187:
case 4071:
case 2033:
case 3580:
case 1511:
case 2237:
case 418:
case 529:
case 423:
case 2690:
case 2276:
case 952:
case 1736:
case 1679:
case 1758:
case 914:
case 2615:
case 3747:
case 2969:
case 621:
case 2054:
case 2508:
case 2957:
case 3317:
case 2368:
case 3849:
case 1469:
case 2046:
case 2193:
case 2110:
case 3771:
case 2724:
case 591:
case 60:
case 3517:
case 1457:
case 2308:
case 3773:
case 2195:
case 1868:
case 932:
case 1808:
case 1315:
case 1741:
case 3380:
case 4047:
case 3584:
case 1313:
case 1390:
case 3552:
case 2811:
case 1743:
case 3242:
case 2265:
case 1916:
case 666:
case 2203:
case 945:
case 191:
case 2904:
case 2067:
case 2785:
case 2781:
case 2007:
case 2964:
case 2059:
case 2263:
case 3856:
case 108:
case 1870:
case 3096:
case 3521:
case 3644:
case 39:
case 400:
case 858:
case 1399:
case 3145:
case 2370:
case 731:
case 3523:
case 309:
case 774:
case 2162:
case 1813:
case 2315:
case 1292:
case 2745:
case 2879:
case 3951:
case 2311:
case 307:
case 2313:
case 3132:
case 3254:
case 1811:
case 2412:
case 1379:
case 3181:
case 778:
case 3235:
case 45:
case 1046:
case 1724:
case 2409:
case 906:
case 2457:
case 854:
case 3349:
case 1195:
case 3233:
case 812:
case 3684:
case 2868:
case 3934:
case 342:
case 3719:
case 104:
case 650:
case 208:
case 1899:
case 1732:
case 656:
case 1498:
case 3889:
case 2086:
case 1162:
case 2400:
case 2674:
case 2173:
case 3338:
case 1201:
case 2171:
case 1904:
case 3710:
case 335:
case 1203:
case 3124:
case 1785:
case 4087:
case 1007:
case 1059:
case 1263:
case 3623:
case 999:
case 3023:
case 4034:
case 1712:
case 72:
case 3863:
case 2256:
case 1607:
case 1443:
case 2188:
case 1667:
case 808:
case 783:
case 1445:
case 3801:
case 2977:
case 2240:
case 3025:
case 3021:
case 1441:
case 3861:
case 1289:
case 3100:
case 2559:
case 3318:
case 2958:
case 2507:
case 2567:
case 3473:
case 3160:
case 1709:
case 3471:
case 4051:
case 268:
case 3475:
case 891:
case 3730:
case 293:
case 3637:
case 1650:
case 645:
case 966:
case 1835:
case 3112:
case 2249:
case 1997:
case 2126:
case 1280:
case 1929:
case 1854:
case 1528:
case 3290:
case 1148:
case 3739:
case 2546:
case 2483:
case 3213:
case 212:
case 3892:
case 3419:
case 372:
case 369:
case 2920:
case 1507:
case 1958:
case 2139:
case 460:
case 3872:
case 1424:
case 3044:
case 2757:
case 3696:
case 193:
case 3947:
case 466:
case 168:
case 2659:
case 2607:
case 1238:
case 3361:
case 1188:
case 2667:
case 606:
case 682:
case 1240:
case 1074:
case 600:
case 125:
case 2441:
case 258:
case 154:
case 2882:
case 2130:
case 3392:
case 3410:
case 2528:
case 1485:
case 2760:
case 396:
case 2148:
case 1382:
case 1483:
case 390:
case 2700:
case 3491:
case 1331:
case 3208:
case 264:
case 1628:
case 3268:
case 357:
case 1335:
case 66:
case 1432:
case 1333:
case 2646:
case 2997:
case 1249:
case 37:
case 51:
case 2654:
case 1079:
case 2217:
case 2155:
case 794:
case 695:
case 2013:
case 1535:
case 2151:
case 1716:
case 284:
case 2134:
case 2252:
case 936:
case 1346:
case 2983:
case 1554:
case 1828:
case 1068:
case 3337:
case 2764:
case 618:
case 623:
case 3049:
case 827:
case 2985:
case 2122:
case 1945:
case 3563:
case 389:
case 4026:
case 753:
case 3503:
case 238:
case 1941:
case 949:
case 1943:
case 2386:
case 3501:
case 486:
case 2542:
case 1070:
case 3505:
case 3896:
case 3971:
case 2223:
case 2807:
case 571:
case 2924:
case 2859:
case 3056:
case 2027:
case 2867:
case 3975:
case 1420:
case 662:
case 3040:
case 3973:
case 3116:
case 1134:
case 1252:
case 63:
case 2582:
case 184:
case 340:
case 2346:
case 816:
case 2068:
case 986:
case 234:
case 902:
case 1764:
case 2350:
case 449:
case 1985:
case 1635:
case 1011:
case 1153:
case 2533:
case 1654:
case 3080:
case 2497:
case 1217:
case 3876:
case 2079:
case 538:
case 3692:
case 3722:
case 3104:
case 1223:
case 1859:
case 763:
case 1027:
case 3164:
case 1867:
case 143:
case 3603:
case 3447:
case 2359:
case 3919:
case 2307:
case 1458:
case 1225:
case 3601:
case 3665:
case 3518:
case 3572:
case 3605:
case 1221:
case 430:
case 2886:
case 1477:
case 3902:
case 3755:
case 921:
case 436:
case 652:
case 2244:
case 2943:
case 701:
case 3753:
case 228:
case 3699:
case 155:
case 2844:
case 2072:
case 1540:
case 1714:
case 1939:
case 1538:
case 1344:
case 1556:
case 3570:
case 265:
case 2323:
case 1825:
case 1065:
case 4085:
case 1787:
case 1267:
case 3374:
case 1003:
case 14:
case 4083:
case 1063:
case 2638:
case 1207:
case 2434:
case 1549:
case 3690:
case 3720:
case 1680:
case 648:
case 2747:
case 3615:
case 3082:
case 1129:
case 1246:
case 2453:
case 2384:
case 2649:
case 3579:
case 1197:
case 3031:
case 431:
case 3912:
case 926:
case 2580:
case 4024:
case 3033:
case 1250:
case 837:
case 700:
case 1884:
case 2455:
case 3237:
case 124:
case 2451:
case 706:
case 2061:
case 745:
case 3042:
case 3874:
case 1422:
case 2821:
case 3599:
case 1177:
case 2825:
case 1323:
case 2787:
case 2065:
case 1321:
case 24:
case 839:
case 1988:
case 1766:
case 3670:
case 931:
case 255:
case 3404:
case 426:
case 128:
case 1158:
case 1136:
case 2120:
case 2714:
case 176:
case 478:
case 2939:
case 2556:
case 1286:
case 75:
case 2538:
case 3513:
case 2197:
case 3590:
case 2250:
case 1580:
case 1455:
case 1228:
case 3608:
case 2852:
case 1451:
case 481:
case 565:
case 2948:
case 316:
case 4043:
case 3758:
case 846:
case 2930:
case 1747:
case 2680:
case 2129:
case 3469:
case 663:
case 1430:
case 1849:
case 2185:
case 1517:
case 3409:
case 2934:
case 3868:
case 1448:
case 2684:
case 1773:
case 2037:
case 585:
case 461:
case 242:
case 2719:
case 2652:
case 3741:
case 714:
case 3315:
case 2617:
case 3311:
case 403:
case 2076:
case 2702:
case 615:
case 601:
case 59:
case 2132:
case 3313:
case 1584:
case 2953:
case 4036:
case 752:
case 3390:
case 2282:
case 3412:
case 1552:
case 2621:
case 3674:
case 3327:
case 3460:
case 3916:
case 2356:
case 3173:
case 2124:
case 3171:
case 951:
case 391:
case 1838:
case 2623:
case 1856:
case 2340:
case 308:
case 859:
case 3272:
case 1525:
case 1145:
case 2922:
case 1141:
case 3086:
case 1762:
case 857:
case 1951:
case 3890:
case 2584:
case 1132:
case 1254:
case 1880:
case 1282:
case 3193:
case 1181:
case 1235:
case 1231:
case 2517:
case 2771:
case 2448:
case 890:
case 2773:
case 1037:
case 304:
case 779:
case 762:
case 1183:
case 3574:
case 2096:
case 3732:
case 2389:
case 2525:
case 795:
case 3370:
case 1922:
case 2145:
case 4029:
case 2141:
case 1791:
case 1621:
case 2242:
case 3783:
case 2439:
case 1356:
case 3201:
case 1338:
case 3067:
case 3827:
case 3904:
case 1710:
case 3203:
case 3059:
case 3263:
case 1623:
case 1793:
case 78:
case 3007:
case 718:
case 3781:
case 1340:
case 2301:
case 2365:
case 3607:
case 1023:
case 3778:
case 3712:
case 3342:
case 2305:
case 1227:
case 494:
case 809:
case 1801:
case 998:
case 2303:
case 2462:
case 358:
case 1861:
case 963:
case 1021:
case 1318:
case 3920:
case 269:
case 1100:
case 1160:
case 1473:
case 3757:
case 567:
case 2818:
case 915:
case 2947:
case 3769:
case 2270:
case 721:
case 1052:
case 1637:
case 364:
case 2208:
case 2268:
case 780:
case 651:
case 1084:
case 4064:
case 922:
case 453:
case 2576:
case 3831:
case 1112:
case 3646:
case 3835:
case 1211:
case 1215:
case 3854:
case 3528:
case 1157:
case 3280:
case 1109:
case 1290:
case 3760:
case 296:
case 1017:
case 2495:
case 2279:
case 3936:
case 3507:
case 2372:
case 2318:
case 3686:
case 2100:
case 169:
case 596:
case 2748:
case 1044:
case 2471:
case 1818:
case 393:
case 1947:
case 1270:
case 1696:
case 3256:
case 2023:
case 2227:
case 1361:
case 1305:
case 3188:
case 557:
case 1198:
case 3977:
case 2801:
case 325:
case 2805:
case 2861:
case 2021:
case 2596:
case 1493:
case 2169:
case 3126:
case 2211:
case 3481:
case 994:
case 1906:
case 354:
case 1966:
case 2157:
case 3550:
case 2739:
case 463:
case 2676:
case 2290:
case 3382:
case 1279:
case 2892:
case 3483:
case 2213:
case 312:
case 190:
case 569:
case 3354:
case 2052:
case 3331:
case 3798:
case 3628:
case 1268:
case 1576:
case 1788:
case 3249:
case 807:
case 415:
case 603:
case 17:
case 756:
case 750:
case 3497:
case 681:
case 2080:
case 3533:
case 1487:
case 3531:
case 3535:
case 8:
case 2692:
case 2722:
case 2837:
case 505:
case 3716:
case 2995:
case 3008:
case 2991:
case 619:
case 1414:
case 2993:
case 2294:
case 2466:
case 2910:
case 3429:
case 189:
case 537:
case 2751:
case 3886:
case 3945:
case 1563:
case 1618:
case 3943:
case 3244:
case 84:
case 57:
case 1896:
case 388:
case 3070:
case 1038:
case 1971:
case 2104:
case 111:
case 2663:
case 2603:
case 2447:
case 855:
case 1975:
case 933:
case 2572:
case 3359:
case 2919:
case 2734:
case 105:
case 3367:
case 3642:
case 1274:
case 3134:
case 1837:
case 448:
case 892:
case 146:
case 766:
case 1995:
case 1991:
case 140:
case 3284:
case 3983:
case 3764:
case 3631:
case 1406:
case 944:
case 2337:
case 3985:
case 3328:
case 3635:
case 3704:
case 2592:
case 3932:
case 27:
case 2376:
case 3153:
case 4060:
case 3654:
case 674:
case 3155:
case 3217:
case 1876:
case 2487:
case 631:
case 3859:
case 2056:
case 617:
case 70:
case 3807:
case 1663:
case 3924:
case 211:
case 2971:
case 1104:
case 3223:
case 1603:
case 343:
case 3867:
case 3458:
case 799:
case 1518:
case 2040:
case 540:
case 92:
case 546:
case 4078:
case 1734:
case 3221:
case 2116:
case 289:
case 3122:
case 4069:
case 1089:
case 865:
case 2503:
case 1396:
case 1755:
case 3386:
case 139:
case 3099:
case 2561:
case 2505:
case 3542:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746244802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,];
var gg_b = "1746244802/";

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
