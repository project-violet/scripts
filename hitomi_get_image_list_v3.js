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
case 2568:
case 1286:
case 2848:
case 2571:
case 1939:
case 1454:
case 1951:
case 2158:
case 2412:
case 4011:
case 1118:
case 179:
case 3511:
case 2485:
case 3880:
case 1001:
case 288:
case 571:
case 3105:
case 3472:
case 1089:
case 1469:
case 855:
case 1363:
case 3968:
case 1486:
case 47:
case 1190:
case 4016:
case 1209:
case 2916:
case 3628:
case 3577:
case 6:
case 1761:
case 3423:
case 1778:
case 1281:
case 1915:
case 1349:
case 1032:
case 2955:
case 1982:
case 1243:
case 4077:
case 1061:
case 1167:
case 2977:
case 1734:
case 989:
case 3223:
case 1984:
case 1481:
case 29:
case 3165:
case 40:
case 2517:
case 83:
case 3908:
case 301:
case 2010:
case 4042:
case 3198:
case 3635:
case 2283:
case 2942:
case 4044:
case 150:
case 2441:
case 661:
case 728:
case 967:
case 776:
case 899:
case 277:
case 3770:
case 3070:
case 2301:
case 207:
case 748:
case 3103:
case 1522:
case 3367:
case 1591:
case 904:
case 2063:
case 3862:
case 1524:
case 2389:
case 2483:
case 3542:
case 382:
case 2953:
case 62:
case 3318:
case 3425:
case 156:
case 1430:
case 1913:
case 2332:
case 770:
case 1997:
case 3110:
case 211:
case 863:
case 795:
case 3619:
case 55:
case 2334:
case 3447:
case 1888:
case 2378:
case 3247:
case 1227:
case 2798:
case 2749:
case 1596:
case 3225:
case 2306:
case 3307:
case 317:
case 1960:
case 2003:
case 3553:
case 1849:
case 845:
case 4038:
case 3829:
case 2271:
case 3574:
case 1159:
case 361:
case 2610:
case 1020:
case 2119:
case 3912:
case 274:
case 3740:
case 3985:
case 3211:
case 2514:
case 2663:
case 1720:
case 1803:
case 1552:
case 2468:
case 4074:
case 939:
case 1737:
case 3670:
case 267:
case 2974:
case 4072:
case 2972:
case 3179:
case 825:
case 766:
case 977:
case 32:
case 2417:
case 2208:
case 314:
case 2140:
case 1136:
case 2276:
case 3277:
case 2399:
case 2348:
case 2923:
case 2476:
case 1543:
case 2079:
case 187:
case 2408:
case 1102:
case 1475:
case 898:
case 2217:
case 3216:
case 1422:
case 1992:
case 3033:
case 1491:
case 441:
case 1921:
case 1424:
case 3442:
case 134:
case 332:
case 2806:
case 852:
case 3304:
case 1666:
case 1224:
case 3983:
case 140:
case 1222:
case 2541:
case 2861:
case 2925:
case 126:
case 1634:
case 2495:
case 178:
case 3359:
case 713:
case 65:
case 3890:
case 289:
case 1632:
case 3:
case 1099:
case 3331:
case 52:
case 3028:
case 46:
case 1527:
case 2889:
case 1473:
case 1748:
case 1799:
case 2546:
case 54:
case 1865:
case 1545:
case 1661:
case 146:
case 1530:
case 1678:
case 2801:
case 108:
case 880:
case 587:
case 1547:
case 721:
case 1364:
case 919:
case 668:
case 3865:
case 1253:
case 3545:
case 3530:
case 346:
case 2460:
case 253:
case 1525:
case 2260:
case 3634:
case 393:
case 2319:
case 458:
case 1453:
case 2945:
case 3632:
case 4045:
case 3048:
case 1:
case 1658:
case 512:
case 4027:
case 2927:
case 3926:
case 3273:
case 1028:
case 2497:
case 679:
case 886:
case 1302:
case 3689:
case 3180:
case 931:
case 3666:
case 1304:
case 2594:
case 3291:
case 1242:
case 1983:
case 2521:
case 2400:
case 3388:
case 76:
case 2592:
case 1941:
case 2199:
case 3422:
case 320:
case 2200:
case 1033:
case 3491:
case 3994:
case 369:
case 3921:
case 2340:
case 2335:
case 132:
case 1477:
case 466:
case 2484:
case 2215:
case 1523:
case 508:
case 943:
case 546:
case 2062:
case 1380:
case 2256:
case 3475:
case 2759:
case 3275:
case 312:
case 2120:
case 794:
case 1416:
case 3509:
case 2456:
case 1019:
case 114:
case 684:
case 923:
case 2282:
case 2943:
case 578:
case 2762:
case 1455:
case 3810:
case 593:
case 1277:
case 2031:
case 2415:
case 3581:
case 2284:
case 2251:
case 1740:
case 460:
case 1985:
case 905:
case 429:
case 2002:
case 1735:
case 3803:
case 3987:
case 4086:
case 1538:
case 2736:
case 3162:
case 2969:
case 1179:
case 2239:
case 3849:
case 3898:
case 2587:
case 3131:
case 1829:
case 733:
case 1914:
case 827:
case 3020:
case 202:
case 520:
case 2954:
case 569:
case 2729:
case 3888:
case 1247:
case 1163:
case 4073:
case 3960:
case 223:
case 2664:
case 296:
case 1225:
case 687:
case 406:
case 981:
case 1804:
case 797:
case 568:
case 3245:
case 2835:
case 182:
case 3445:
case 476:
case 2631:
case 1425:
case 428:
case 2358:
case 2426:
case 1836:
case 2029:
case 1619:
case 81:
case 1070:
case 1367:
case 400:
case 1544:
case 3900:
case 902:
case 1864:
case 1862:
case 2294:
case 1542:
case 2602:
case 3524:
case 537:
case 2221:
case 4091:
case 1198:
case 4024:
case 1635:
case 4022:
case 205:
case 3050:
case 2500:
case 2922:
case 1831:
case 509:
case 1859:
case 844:
case 2636:
case 3982:
case 3243:
case 3734:
case 2166:
case 3167:
case 3061:
case 3481:
case 2515:
case 3984:
case 368:
case 2975:
case 1165:
case 4075:
case 1516:
case 646:
case 1758:
case 2007:
case 3006:
case 3557:
case 2556:
case 2101:
case 693:
case 3699:
case 2707:
case 678:
case 4057:
case 3575:
case 783:
case 1628:
case 219:
case 3761:
case 1993:
case 3034:
case 3281:
case 1423:
case 953:
case 3443:
case 2582:
case 3349:
case 2833:
case 556:
case 379:
case 2790:
case 3252:
case 3254:
case 337:
case 2370:
case 1880:
case 3363:
case 2539:
case 3469:
case 2487:
case 1968:
case 1238:
case 2161:
case 1971:
case 620:
case 135:
case 2134:
case 2767:
case 1272:
case 3789:
case 231:
case 3951:
case 3454:
case 3701:
case 1633:
case 857:
case 3118:
case 2773:
case 764:
case 2096:
case 3191:
case 1142:
case 3124:
case 2499:
case 1144:
case 3122:
case 2393:
case 2929:
case 2448:
case 4029:
case 2814:
case 563:
case 1852:
case 966:
case 3316:
case 1503:
case 1854:
case 1095:
case 3280:
case 85:
case 1357:
case 3760:
case 276:
case 443:
case 3013:
case 2681:
case 1795:
case 3713:
case 496:
case 3060:
case 2885:
case 1375:
case 33:
case 707:
case 2376:
case 3377:
case 2100:
case 3529:
case 2248:
case 2073:
case 1549:
case 1598:
case 3311:
case 157:
case 2024:
case 2652:
case 462:
case 835:
case 1563:
case 3196:
case 2197:
case 3950:
case 2022:
case 295:
case 929:
case 405:
case 3700:
case 2368:
case 992:
case 1881:
case 355:
case 200:
case 490:
case 1685:
case 1510:
case 2160:
case 2686:
case 3687:
case 2669:
case 3784:
case 1776:
case 2630:
case 1093:
case 3431:
case 3932:
case 1505:
case 2151:
case 882:
case 3056:
case 603:
case 1958:
case 3459:
case 4018:
case 3626:
case 1717:
case 817:
case 3518:
case 136:
case 4007:
case 2757:
case 673:
case 2883:
case 1373:
case 3082:
case 1479:
case 3978:
case 2534:
case 53:
case 3464:
case 1076:
case 1793:
case 3825:
case 1641:
case 2156:
case 3204:
case 2420:
case 3621:
case 342:
case 3202:
case 399:
case 2990:
case 1771:
case 2437:
case 3344:
case 3567:
case 2566:
case 1322:
case 1288:
case 1768:
case 1391:
case 1827:
case 1155:
case 1324:
case 2589:
case 2182:
case 3739:
case 871:
case 2967:
case 3966:
case 3236:
case 2237:
case 625:
case 68:
case 11:
case 555:
case 2220:
case 3751:
case 3404:
case 2657:
case 3429:
case 3948:
case 1617:
case 1928:
case 1498:
case 2027:
case 3026:
case 2121:
case 3580:
case 1693:
case 2045:
case 814:
case 1403:
case 2980:
case 84:
case 1676:
case 2730:
case 373:
case 1249:
case 2727:
case 3130:
case 1857:
case 642:
case 3639:
case 3816:
case 699:
case 3092:
case 2893:
case 345:
case 1147:
case 959:
case 1041:
case 1783:
case 3021:
case 3127:
case 3094:
case 1410:
case 3855:
case 1933:
case 1263:
case 3794:
case 1369:
case 2876:
case 1741:
case 325:
case 1875:
case 2385:
case 147:
case 1671:
case 418:
case 3562:
case 8:
case 1327:
case 1891:
case 2043:
case 906:
case 2278:
case 1138:
case 3347:
case 2346:
case 4059:
case 2709:
case 3152:
case 3418:
case 1330:
case 2206:
case 3325:
case 2406:
case 2673:
case 63:
case 2009:
case 3218:
case 610:
case 2187:
case 180:
case 2478:
case 266:
case 2234:
case 2461:
case 1172:
case 928:
case 1405:
case 573:
case 1935:
case 2624:
case 292:
case 3502:
case 3920:
case 2052:
case 249:
case 1012:
case 1940:
case 465:
case 2622:
case 2201:
case 2895:
case 3504:
case 3143:
case 2769:
case 1896:
case 2289:
case 3937:
case 2341:
case 4036:
case 1588:
case 3467:
case 3536:
case 3181:
case 2086:
case 2069:
case 186:
case 3600:
case 260:
case 2752:
case 1465:
case 4002:
case 352:
case 525:
case 2902:
case 995:
case 3109:
case 1714:
case 1085:
case 2074:
case 1536:
case 4088:
case 1467:
case 2738:
case 1181:
case 3873:
case 2860:
case 1600:
case 354:
case 474:
case 2535:
case 3085:
case 3714:
case 1502:
case 2642:
case 3265:
case 3935:
case 3785:
case 834:
case 657:
case 404:
case 1504:
case 2394:
case 820:
case 527:
case 2897:
case 3896:
case 2772:
case 869:
case 3588:
case 1267:
case 2774:
case 3123:
case 781:
case 2038:
case 1787:
case 1407:
case 2519:
case 772:
case 2723:
case 380:
case 1186:
case 1660:
case 3174:
case 1531:
case 3327:
case 2326:
case 3579:
case 2653:
case 3822:
case 3695:
case 2023:
case 1844:
case 1564:
case 826:
case 2114:
case 765:
case 3345:
case 3330:
case 702:
case 3083:
case 554:
case 1372:
case 1794:
case 3369:
case 2533:
case 3210:
case 221:
case 1877:
case 125:
case 2884:
case 18:
case 347:
case 624:
case 1130:
case 644:
case 3857:
case 1338:
case 1092:
case 2815:
case 1127:
case 3933:
case 241:
case 2611:
case 3410:
case 3403:
case 580:
case 3309:
case 198:
case 173:
case 26:
case 2183:
case 97:
case 3381:
case 2047:
case 2141:
case 1656:
case 1323:
case 1948:
case 3449:
case 3617:
case 3928:
case 3343:
case 3498:
case 3693:
case 103:
case 489:
case 1811:
case 2655:
case 3203:
case 1739:
case 1989:
case 3071:
case 3488:
case 3177:
case 1966:
case 1236:
case 3068:
case 4065:
case 1175:
case 1590:
case 2108:
case 1404:
case 488:
case 2240:
case 941:
case 591:
case 627:
case 719:
case 1157:
case 2440:
case 921:
case 1202:
case 142:
case 1621:
case 2435:
case 2011:
case 3845:
case 2117:
case 3288:
case 1344:
case 1567:
case 3771:
case 1436:
case 1847:
case 3391:
case 3827:
case 850:
case 1039:
case 557:
case 1342:
case 3155:
case 3717:
case 1756:
case 336:
case 2558:
case 2905:
case 1462:
case 3479:
case 1082:
case 1084:
case 1464:
case 1231:
case 2171:
case 1784:
case 2625:
case 2777:
case 3776:
case 3093:
case 1934:
case 163:
case 1264:
case 731:
case 2894:
case 1932:
case 1262:
case 1782:
case 815:
case 1507:
case 1056:
case 2313:
case 2647:
case 3017:
case 1459:
case 1353:
case 1626:
case 27:
case 3881:
case 51:
case 524:
case 2963:
case 3685:
case 994:
case 251:
case 879:
case 2674:
case 723:
case 796:
case 530:
case 3153:
case 743:
case 357:
case 477:
case 2570:
case 2195:
case 544:
case 2339:
case 2910:
case 3563:
case 3612:
case 1700:
case 464:
case 3795:
case 1480:
case 1060:
case 3375:
case 2753:
case 4003:
case 110:
case 2887:
case 3886:
case 1529:
case 1874:
case 2228:
case 933:
case 2382:
case 775:
case 536:
case 3869:
case 868:
case 705:
case 2949:
case 1097:
case 4049:
case 2428:
case 1124:
case 1355:
case 1122:
case 3144:
case 2315:
case 3503:
case 1316:
case 1280:
case 3854:
case 3095:
case 1760:
case 2356:
case 3357:
case 1800:
case 3187:
case 366:
case 2660:
case 3232:
case 648:
case 606:
case 1185:
case 3696:
case 1114:
case 3709:
case 412:
case 2207:
case 2325:
case 628:
case 761:
case 133:
case 1458:
case 1112:
case 1326:
case 3432:
case 2842:
case 1653:
case 93:
case 2844:
case 1023:
case 2564:
case 3346:
case 3261:
case 2347:
case 3931:
case 1860:
case 3401:
case 360:
case 3754:
case 1540:
case 3902:
case 1535:
case 3752:
case 2290:
case 1074:
case 1738:
case 600:
case 1072:
case 3769:
case 2143:
case 513:
case 1321:
case 1897:
case 785:
case 4037:
case 1774:
case 3266:
case 3936:
case 2267:
case 3786:
case 1038:
case 3624:
case 392:
case 2920:
case 3052:
case 1642:
case 2853:
case 4020:
case 3691:
case 714:
case 72:
case 3895:
case 2504:
case 1747:
case 3548:
case 3871:
case 3745:
case 408:
case 2684:
case 3980:
case 3730:
case 273:
case 446:
case 478:
case 203:
case 3030:
case 1025:
case 426:
case 3045:
case 2656:
case 2323:
case 3192:
case 1839:
case 3385:
case 874:
case 3808:
case 2721:
case 2794:
case 121:
case 1533:
case 3876:
case 440:
case 999:
case 3250:
case 225:
case 1884:
case 2092:
case 549:
case 3450:
case 2651:
case 2127:
case 3126:
case 2021:
case 1611:
case 2094:
case 141:
case 434:
case 804:
case 3314:
case 2816:
case 3817:
case 2145:
case 3532:
case 2462:
case 506:
case 548:
case 2082:
case 903:
case 2978:
case 1168:
case 2084:
case 2715:
case 1077:
case 2464:
case 1716:
case 10:
case 2906:
case 4006:
case 2756:
case 3757:
case 1558:
case 1419:
case 3057:
case 3151:
case 1313:
case 2353:
case 17:
case 3627:
case 2015:
case 3578:
case 1625:
case 2934:
case 2264:
case 3561:
case 1777:
case 4032:
case 576:
case 1894:
case 2262:
case 2932:
case 528:
case 1821:
case 2782:
case 222:
case 3220:
case 2175:
case 1235:
case 359:
case 2590:
case 945:
case 2404:
case 2901:
case 2751:
case 2739:
case 2989:
case 1300:
case 3967:
case 2236:
case 3846:
case 3115:
case 864:
case 2692:
case 613:
case 183:
case 3501:
case 839:
case 2051:
case 2204:
case 2157:
case 3420:
case 2621:
case 242:
case 570:
case 1011:
case 2694:
case 925:
case 1117:
case 409:
case 877:
case 2377:
case 771:
case 666:
case 2874:
case 2529:
case 2872:
case 1382:
case 3609:
case 1228:
case 2480:
case 3308:
case 348:
case 306:
case 23:
case 3885:
case 1903:
case 3814:
case 1053:
case 3317:
case 2316:
case 1623:
case 2280:
case 2013:
case 2760:
case 3773:
case 2124:
case 701:
case 3393:
case 3160:
case 197:
case 2687:
case 888:
case 1672:
case 3722:
case 3550:
case 2000:
case 255:
case 3371:
case 1742:
case 151:
case 2173:
case 1042:
case 3652:
case 3197:
case 1339:
case 1433:
case 2823:
case 370:
case 4050:
case 450:
case 3022:
case 3654:
case 2311:
case 649:
case 782:
case 3113:
case 1570:
case 1195:
case 3042:
case 2563:
case 715:
case 3433:
case 291:
case 401:
case 1197:
case 2612:
case 831:
case 170:
case 2153:
case 756:
case 784:
case 3351:
case 257:
case 3570:
case 397:
case 1686:
case 2809:
case 2881:
case 3742:
case 1724:
case 2510:
case 2685:
case 1791:
case 1814:
case 980:
case 1643:
case 3053:
case 176:
case 3356:
case 3949:
case 57:
case 1499:
case 2144:
case 1929:
case 3315:
case 1248:
case 3382:
case 1073:
case 2598:
case 1681:
case 1308:
case 2795:
case 435:
case 2771:
case 1437:
case 2288:
case 2391:
case 805:
case 2155:
case 641:
case 383:
case 2830:
case 1156:
case 3440:
case 244:
case 2565:
case 1990:
case 3965:
case 159:
case 551:
case 224:
case 1182:
case 927:
case 890:
case 621:
case 1237:
case 3176:
case 1967:
case 230:
case 2071:
case 3300:
case 2068:
case 2646:
case 3647:
case 2708:
case 4058:
case 2958:
case 2017:
case 1775:
case 45:
case 1918:
case 1841:
case 2776:
case 1561:
case 3892:
case 1645:
case 2505:
case 3894:
case 3055:
case 3755:
case 3905:
case 66:
case 1883:
case 2373:
case 2479:
case 2793:
case 896:
case 823:
case 2717:
case 30:
case 1075:
case 1757:
case 3360:
case 236:
case 3219:
case 2008:
case 3558:
case 1450:
case 2041:
case 1126:
case 2933:
case 3611:
case 113:
case 3270:
case 683:
case 802:
case 3856:
case 1312:
case 793:
case 930:
case 778:
case 1817:
case 432:
case 1385:
case 708:
case 3470:
case 247:
case 2668:
case 872:
case 3882:
case 2210:
case 2463:
case 1876:
case 158:
case 3025:
case 1030:
case 734:
case 67:
case 3141:
case 1192:
case 4:
case 2617:
case 936:
case 2343:
case 4028:
case 720:
case 1194:
case 2449:
case 1027:
case 2498:
case 1121:
case 533:
case 740:
case 2249:
case 2298:
case 1599:
case 2746:
case 3747:
case 2608:
case 2381:
case 2403:
case 1980:
case 3677:
case 3725:
case 3394:
case 1289:
case 2896:
case 1936:
case 3392:
case 3642:
case 2935:
case 1624:
case 192:
case 4035:
case 461:
case 149:
case 1691:
case 3813:
case 541:
case 2012:
case 2940:
case 1054:
case 4040:
case 2712:
case 3860:
case 521:
case 991:
case 254:
case 1904:
case 1752:
case 1902:
case 2714:
case 2085:
case 129:
case 1466:
case 3074:
case 1086:
case 3738:
case 957:
case 651:
case 3114:
case 1709:
case 1959:
case 4019:
case 1206:
case 1432:
case 2891:
case 3653:
case 2824:
case 1043:
case 2579:
case 3023:
case 485:
case 1278:
case 2695:
case 1434:
case 1261:
case 1187:
case 3800:
case 280:
case 2174:
case 1964:
case 1234:
case 166:
case 2172:
case 1232:
case 1743:
case 56:
case 1406:
case 3185:
case 1009:
case 44:
case 2733:
case 2983:
case 2242:
case 4083:
case 3541:
case 3878:
case 3861:
case 798:
case 567:
case 935:
case 773:
case 3806:
case 1667:
case 2304:
case 829:
case 892:
case 1340:
case 427:
case 1858:
case 1335:
case 703:
case 2444:
case 1199:
case 4041:
case 3128:
case 3832:
case 3583:
case 153:
case 2525:
case 3801:
case 1080:
case 866:
case 725:
case 1297:
case 2364:
case 1607:
case 2331:
case 1927:
case 2028:
case 1780:
case 3495:
case 2890:
case 389:
case 2538:
case 3471:
case 2670:
case 1736:
case 367:
case 3974:
case 1969:
case 2179:
case 374:
case 2740:
case 901:
case 486:
case 2211:
case 2985:
case 3514:
case 1002:
case 3585:
case 2411:
case 3610:
case 1952:
case 1702:
case 1451:
case 971:
case 3119:
case 1704:
case 304:
case 2572:
case 1333:
case 1439:
case 1587:
case 3268:
case 3938:
case 3271:
case 1036:
case 3408:
case 1870:
case 752:
case 1256:
case 2719:
case 24:
case 1909:
case 2216:
case 3476:
case 1731:
case 982:
case 1064:
case 480:
case 2523:
case 3079:
case 1482:
case 3603:
case 3779:
case 2455:
case 181:
case 2277:
case 3276:
case 589:
case 1764:
case 3493:
case 1031:
case 1415:
case 3850:
case 3923:
case 3135:
case 3698:
case 2416:
case 3649:
case 214:
case 2019:
case 175:
case 2367:
case 3241:
case 2544:
case 1604:
case 667:
case 3710:
case 2862:
case 1294:
case 710:
case 3063:
case 1602:
case 2070:
case 307:
case 3301:
case 2859:
case 339:
case 2390:
case 1819:
case 377:
case 457:
case 1636:
case 3763:
case 1991:
case 2149:
case 3010:
case 3942:
case 162:
case 1924:
case 1421:
case 3441:
case 2640:
case 364:
case 1922:
case 1500:
case 1492:
case 217:
case 196:
case 1513:
case 638:
case 3306:
case 2307:
case 2804:
case 3003:
case 716:
case 2802:
case 3679:
case 92:
case 59:
case 3246:
case 3798:
case 1226:
case 2163:
case 1973:
case 3332:
case 1426:
case 1996:
case 1835:
case 1358:
case 2472:
case 2105:
case 800:
case 1178:
case 430:
case 4071:
case 1370:
case 1106:
case 3212:
case 444:
case 3412:
case 3158:
case 3911:
case 3414:
case 3765:
case 564:
case 3899:
case 539:
case 2438:
case 3568:
case 3571:
case 2274:
case 235:
case 3848:
case 1828:
case 1132:
case 577:
case 895:
case 131:
case 848:
case 1975:
case 2165:
case 9:
case 39:
case 3517:
case 2516:
case 2908:
case 722:
case 436:
case 1101:
case 3977:
case 2976:
case 2223:
case 2577:
case 3576:
case 4093:
case 2993:
case 1582:
case 3705:
case 511:
case 2917:
case 3916:
case 2628:
case 1576:
case 463:
case 2778:
case 2349:
case 908:
case 1705:
case 543:
case 2398:
case 3833:
case 2648:
case 1508:
case 2706:
case 3707:
case 2956:
case 2575:
case 3018:
case 319:
case 1916:
case 2209:
case 3975:
case 2303:
case 724:
case 2409:
case 653:
case 71:
case 3101:
case 2006:
case 3007:
case 3556:
case 926:
case 993:
case 523:
case 1593:
case 2734:
case 3166:
case 2481:
case 2984:
case 268:
case 2701:
case 562:
case 2951:
case 499:
case 0:
case 3090:
case 209:
case 1911:
case 1285:
case 2118:
case 2452:
case 1568:
case 3287:
case 2286:
case 1899:
case 3767:
case 2766:
case 3132:
case 3828:
case 2939:
case 2269:
case 331:
case 2089:
case 3178:
case 3487:
case 2486:
case 851:
case 897:
case 575:
case 422:
case 2252:
case 2107:
case 237:
case 3551:
case 1212:
case 1098:
case 2427:
case 1332:
case 681:
case 1049:
case 1837:
case 3150:
case 791:
case 215:
case 1703:
case 757:
case 2445:
case 343:
case 3560:
case 2430:
case 256:
case 3358:
case 284:
case 2230:
case 2960:
case 3513:
case 3664:
case 1595:
case 1679:
case 2888:
case 912:
case 1378:
case 1361:
case 2305:
case 2227:
case 3226:
case 2596:
case 3597:
case 883:
case 3819:
case 2637:
case 177:
case 3494:
case 3991:
case 1763:
case 2620:
case 3421:
case 3924:
case 1942:
case 305:
case 250:
case 2050:
case 3500:
case 3922:
case 1441:
case 3604:
case 1241:
case 2750:
case 455:
case 4000:
case 375:
case 2591:
case 1710:
case 3602:
case 2524:
case 1483:
case 1688:
case 416:
case 672:
case 1779:
case 3943:
case 3282:
case 381:
case 2810:
case 1493:
case 3764:
case 1276:
case 3137:
case 1923:
case 1348:
case 3415:
case 2581:
case 212:
case 2275:
case 3059:
case 3629:
case 1208:
case 1140:
case 2457:
case 696:
case 623:
case 138:
case 2104:
case 3256:
case 2102:
case 786:
case 3759:
case 754:
case 3909:
case 1293:
case 3064:
case 3731:
case 86:
case 3484:
case 3981:
case 3482:
case 1079:
case 553:
case 3062:
case 2159:
case 2020:
case 3952:
case 302:
case 1119:
case 365:
case 3954:
case 2569:
case 3439:
case 3333:
case 2898:
case 1268:
case 605:
case 2586:
case 1788:
case 841:
case 4087:
case 675:
case 2987:
case 1088:
case 167:
case 821:
case 3736:
case 2737:
case 780:
case 2162:
case 1972:
case 3969:
case 3239:
case 518:
case 3004:
case 1663:
case 372:
case 2720:
case 1947:
case 3618:
case 4026:
case 3497:
case 2273:
case 3260:
case 293:
case 3413:
case 2634:
case 1495:
case 833:
case 968:
case 619:
case 2632:
case 747:
case 2545:
case 2530:
case 2678:
case 208:
case 498:
case 2296:
case 2379:
case 1889:
case 2748:
case 1866:
case 3607:
case 2799:
case 234:
case 3340:
case 1320:
case 3335:
case 2422:
case 220:
case 979:
case 445:
case 2992:
case 4092:
case 2491:
case 269:
case 2994:
case 1128:
case 565:
case 2921:
case 4021:
case 3594:
case 2805:
case 2224:
case 1665:
case 2601:
case 3400:
case 2388:
case 240:
case 1541:
case 909:
case 425:
case 1861:
case 48:
case 318:
case 2666:
case 3667:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761454804/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,];
var gg_b = "1761454804/";

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
