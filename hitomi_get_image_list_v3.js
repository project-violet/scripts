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
case 969:
case 1673:
case 1910:
case 93:
case 2488:
case 739:
case 1708:
case 371:
case 76:
case 131:
case 3308:
case 1309:
case 1080:
case 1424:
case 3879:
case 1383:
case 2907:
case 3783:
case 485:
case 1042:
case 1241:
case 1315:
case 2169:
case 3715:
case 3263:
case 458:
case 1991:
case 3896:
case 3148:
case 1149:
case 603:
case 2062:
case 3660:
case 3831:
case 3547:
case 1274:
case 1084:
case 2833:
case 3803:
case 2478:
case 1764:
case 3364:
case 2771:
case 1242:
case 3608:
case 73:
case 1041:
case 65:
case 2566:
case 939:
case 3889:
case 1888:
case 1402:
case 1280:
case 1433:
case 2061:
case 1505:
case 1760:
case 3117:
case 2228:
case 3360:
case 3:
case 457:
case 3063:
case 752:
case 3965:
case 1519:
case 1284:
case 3832:
case 13:
case 1044:
case 761:
case 1468:
case 3628:
case 1629:
case 895:
case 931:
case 1039:
case 1422:
case 2060:
case 1695:
case 2363:
case 454:
case 4020:
case 2804:
case 3743:
case 1343:
case 1040:
case 152:
case 3598:
case 1599:
case 630:
case 1817:
case 3952:
case 1082:
case 3857:
case 1912:
case 3197:
case 1132:
case 2255:
case 2456:
case 2800:
case 1421:
case 3830:
case 3661:
case 411:
case 493:
case 1244:
case 775:
case 2663:
case 1179:
case 1762:
case 651:
case 3362:
case 1586:
case 16:
case 139:
case 2260:
case 379:
case 1728:
case 1196:
case 2742:
case 1282:
case 3951:
case 3834:
case 2953:
case 2417:
case 2055:
case 950:
case 836:
case 1131:
case 3816:
case 660:
case 1643:
case 3353:
case 3050:
case 2418:
case 1980:
case 1675:
case 138:
case 2351:
case 2459:
case 3713:
case 1313:
case 1847:
case 910:
case 3785:
case 1385:
case 3054:
case 1984:
case 1036:
case 3466:
case 1727:
case 2867:
case 2928:
case 3237:
case 1014:
case 2835:
case 1579:
case 3578:
case 326:
case 2962:
case 693:
case 934:
case 611:
case 2352:
case 377:
case 3846:
case 1970:
case 3250:
case 710:
case 3805:
case 1859:
case 112:
case 1199:
case 2207:
case 1532:
case 2712:
case 3653:
case 1818:
case 430:
case 1125:
case 654:
case 1236:
case 1435:
case 3254:
case 734:
case 1503:
case 1326:
case 3627:
case 1589:
case 3588:
case 1214:
case 3963:
case 768:
case 3517:
case 2792:
case 432:
case 1158:
case 3159:
case 382:
case 3899:
case 938:
case 236:
case 1290:
case 1105:
case 1944:
case 657:
case 110:
case 1119:
case 1939:
case 2650:
case 1012:
case 1211:
case 743:
case 1887:
case 2253:
case 1971:
case 1982:
case 134:
case 2477:
case 1549:
case 3548:
case 1090:
case 2665:
case 1393:
case 418:
case 1534:
case 4035:
case 767:
case 3556:
case 968:
case 462:
case 4067:
case 658:
case 2498:
case 2354:
case 2736:
case 403:
case 1011:
case 1094:
case 1530:
case 459:
case 2487:
case 3886:
case 1981:
case 3051:
case 295:
case 1707:
case 2053:
case 943:
case 804:
case 586:
case 3274:
case 1547:
case 22:
case 2095:
case 3084:
case 1831:
case 3936:
case 2639:
case 1148:
case 209:
case 3914:
case 4069:
case 3134:
case 2432:
case 2372:
case 375:
case 2381:
case 3241:
case 135:
case 3424:
case 1783:
case 2243:
case 3270:
case 3080:
case 3708:
case 2682:
case 481:
case 3309:
case 253:
case 97:
case 2489:
case 2640:
case 2567:
case 672:
case 3074:
case 2496:
case 2295:
case 840:
case 350:
case 2738:
case 824:
case 1965:
case 2339:
case 1063:
case 3546:
case 229:
case 1:
case 3505:
case 1559:
case 3558:
case 3280:
case 3402:
case 1889:
case 3373:
case 2121:
case 3242:
case 3609:
case 1608:
case 77:
case 3041:
case 2906:
case 3764:
case 1364:
case 899:
case 2479:
case 3615:
case 165:
case 3132:
case 2434:
case 2642:
case 1197:
case 221:
case 3525:
case 796:
case 687:
case 2680:
case 2449:
case 3817:
case 1952:
case 547:
case 297:
case 2215:
case 2120:
case 842:
case 1743:
case 3343:
case 2073:
case 1188:
case 1361:
case 3761:
case 3695:
case 2763:
case 1662:
case 2124:
case 3039:
case 3103:
case 1628:
case 3468:
case 3044:
case 33:
case 17:
case 1587:
case 201:
case 2985:
case 2083:
case 1849:
case 2273:
case 3240:
case 2380:
case 2015:
case 2457:
case 996:
case 1834:
case 3072:
case 2342:
case 548:
case 3400:
case 1328:
case 415:
case 489:
case 1729:
case 3586:
case 2674:
case 771:
case 2869:
case 3762:
case 1362:
case 735:
case 1795:
case 3244:
case 563:
case 2384:
case 3395:
case 1238:
case 3239:
case 2102:
case 828:
case 1661:
case 655:
case 2093:
case 974:
case 126:
case 3579:
case 1578:
case 455:
case 3014:
case 3186:
case 1466:
case 3036:
case 1177:
case 2995:
case 3984:
case 3531:
case 2446:
case 2394:
case 3847:
case 829:
case 3010:
case 2533:
case 2751:
case 338:
case 224:
case 2612:
case 3596:
case 590:
case 3980:
case 1353:
case 1037:
case 3214:
case 2866:
case 68:
case 853:
case 3589:
case 1588:
case 1726:
case 1627:
case 3326:
case 3467:
case 29:
case 3503:
case 774:
case 3236:
case 1187:
case 3435:
case 2501:
case 2690:
case 3210:
case 3125:
case 470:
case 3818:
case 1819:
case 2006:
case 180:
case 1653:
case 2312:
case 2045:
case 1597:
case 3859:
case 2943:
case 177:
case 337:
case 3941:
case 926:
case 3523:
case 484:
case 228:
case 3982:
case 334:
case 207:
case 1876:
case 3971:
case 1251:
case 2504:
case 2973:
case 3940:
case 2610:
case 3012:
case 3887:
case 2075:
case 1745:
case 1607:
case 3306:
case 1706:
case 2213:
case 3119:
case 3693:
case 898:
case 4066:
case 1159:
case 472:
case 3898:
case 1899:
case 2737:
case 2636:
case 3146:
case 2750:
case 3707:
case 3606:
case 681:
case 1886:
case 208:
case 1252:
case 3972:
case 227:
case 1051:
case 2915:
case 906:
case 3530:
case 2310:
case 2275:
case 213:
case 3877:
case 3212:
case 291:
case 3011:
case 2692:
case 1147:
case 980:
case 446:
case 3534:
case 2425:
case 2226:
case 1793:
case 3549:
case 3090:
case 2876:
case 107:
case 2052:
case 581:
case 3477:
case 4058:
case 999:
case 1973:
case 4019:
case 2706:
case 1213:
case 2607:
case 3650:
case 641:
case 2825:
case 2938:
case 3365:
case 1765:
case 1691:
case 692:
case 1500:
case 1026:
case 486:
case 336:
case 3654:
case 3337:
case 1737:
case 3053:
case 1750:
case 1915:
case 395:
case 3569:
case 3710:
case 1310:
case 1013:
case 191:
case 3908:
case 113:
case 1476:
case 1085:
case 799:
case 444:
case 1275:
case 1754:
case 3354:
case 1692:
case 3637:
case 2147:
case 3027:
case 366:
case 142:
case 1314:
case 2548:
case 2793:
case 3665:
case 1390:
case 928:
case 422:
case 907:
case 2237:
case 713:
case 3835:
case 791:
case 64:
case 1502:
case 3867:
case 2054:
case 433:
case 383:
case 2177:
case 1394:
case 1446:
case 896:
case 1245:
case 3459:
case 8:
case 124:
case 278:
case 3351:
case 1612:
case 3007:
case 2353:
case 742:
case 2050:
case 2963:
case 2037:
case 908:
case 1293:
case 2726:
case 402:
case 927:
case 649:
case 1866:
case 728:
case 589:
case 19:
case 515:
case 1690:
case 1501:
case 913:
case 2065:
case 835:
case 776:
case 2819:
case 1006:
case 2597:
case 1045:
case 2805:
case 2250:
case 3207:
case 2858:
case 2846:
case 104:
case 4076:
case 690:
case 277:
case 1611:
case 3447:
case 1434:
case 1209:
case 4003:
case 2857:
case 3800:
case 588:
case 3456:
case 1680:
case 3448:
case 1449:
case 490:
case 1416:
case 1120:
case 1215:
case 70:
case 1341:
case 197:
case 325:
case 1073:
case 909:
case 1283:
case 3770:
case 1370:
case 648:
case 2361:
case 1430:
case 3821:
case 3363:
case 663:
case 2038:
case 1101:
case 953:
case 449:
case 2587:
case 3774:
case 1374:
case 794:
case 2469:
case 602:
case 1133:
case 1670:
case 3055:
case 587:
case 3008:
case 101:
case 882:
case 647:
case 3780:
case 3953:
case 1273:
case 1083:
case 2849:
case 305:
case 1342:
case 198:
case 2834:
case 1015:
case 1674:
case 279:
case 753:
case 2729:
case 44:
case 3260:
case 2328:
case 994:
case 3822:
case 2178:
case 622:
case 3663:
case 1384:
case 2795:
case 2661:
case 1102:
case 874:
case 2238:
case 3927:
case 572:
case 4030:
case 877:
case 2831:
case 2660:
case 1095:
case 2954:
case 12:
case 997:
case 2148:
case 3062:
case 3261:
case 1432:
case 3497:
case 2263:
case 701:
case 109:
case 3028:
case 1029:
case 3781:
case 235:
case 1372:
case 1381:
case 620:
case 2715:
case 1168:
case 1403:
case 1243:
case 2783:
case 1122:
case 806:
case 153:
case 2355:
case 584:
case 2308:
case 1671:
case 4016:
case 2709:
case 3802:
case 1489:
case 3488:
case 1640:
case 3744:
case 1295:
case 1496:
case 797:
case 1344:
case 3338:
case 878:
case 901:
case 2:
case 129:
case 3228:
case 2117:
case 2063:
case 1431:
case 721:
case 3820:
case 546:
case 2559:
case 3061:
case 998:
case 492:
case 2889:
case 1121:
case 3740:
case 1104:
case 1340:
case 194:
case 2608:
case 600:
case 3824:
case 1672:
case 4057:
case 2803:
case 265:
case 1945:
case 1337:
case 2146:
case 3392:
case 1792:
case 1654:
case 376:
case 3026:
case 3614:
case 2944:
case 2557:
case 558:
case 3500:
case 1365:
case 2939:
case 210:
case 1650:
case 983:
case 1964:
case 839:
case 2306:
case 2211:
case 2012:
case 3075:
case 3486:
case 3973:
case 1253:
case 3504:
case 3521:
case 645:
case 3610:
case 2940:
case 2982:
case 328:
case 2393:
case 2090:
case 2549:
case 1714:
case 3314:
case 1791:
case 3391:
case 3499:
case 1498:
case 557:
case 1637:
case 3336:
case 3692:
case 2516:
case 1354:
case 2094:
case 4047:
case 1908:
case 2212:
case 2877:
case 313:
case 264:
case 3013:
case 2530:
case 1569:
case 195:
case 2981:
case 2645:
case 1487:
case 3915:
case 3750:
case 1053:
case 2707:
case 869:
case 2980:
case 1418:
case 3419:
case 1007:
case 766:
case 2753:
case 1351:
case 238:
case 2942:
case 2675:
case 936:
case 2596:
case 2313:
case 3206:
case 1459:
case 2010:
case 3394:
case 2385:
case 3245:
case 1794:
case 3311:
case 2847:
case 267:
case 554:
case 473:
case 2036:
case 795:
case 3502:
case 861:
case 2727:
case 2014:
case 2292:
case 3929:
case 1928:
case 399:
case 2091:
case 3093:
case 3390:
case 1962:
case 1790:
case 1447:
case 3694:
case 2941:
case 3752:
case 237:
case 304:
case 3611:
case 1352:
case 3520:
case 3943:
case 2199:
case 212:
case 1207:
case 2613:
case 2859:
case 2970:
case 268:
case 1712:
case 3312:
case 4087:
case 656:
case 2532:
case 3006:
case 3690:
case 3501:
case 2503:
case 39:
case 2435:
case 2236:
case 2589:
case 1961:
case 3866:
case 2326:
case 2467:
case 831:
case 3293:
case 2176:
case 2291:
case 593:
case 269:
case 23:
case 3374:
case 3124:
case 2422:
case 3763:
case 2576:
case 2695:
case 1060:
case 3430:
case 1821:
case 3926:
case 864:
case 1804:
case 2599:
case 3370:
case 2040:
case 3283:
case 4088:
case 125:
case 2082:
case 2071:
case 2281:
case 3416:
case 3120:
case 3215:
case 1064:
case 1456:
case 616:
case 3975:
case 321:
case 3642:
case 1208:
case 3209:
case 2912:
case 3102:
case 1927:
case 3423:
case 1663:
case 514:
case 1784:
case 2990:
case 2728:
case 1260:
case 3869:
case 26:
case 1868:
case 3015:
case 2856:
case 810:
case 2282:
case 2400:
case 2081:
case 3342:
case 398:
case 4078:
case 3273:
case 1953:
case 2848:
case 530:
case 3380:
case 301:
case 2911:
case 2131:
case 3641:
case 1055:
case 3670:
case 3913:
case 2643:
case 843:
case 1488:
case 3567:
case 2673:
case 2309:
case 3682:
case 3671:
case 2755:
case 4048:
case 2878:
case 2383:
case 2080:
case 1169:
case 3168:
case 2315:
case 1781:
case 4056:
case 3372:
case 2991:
case 1028:
case 523:
case 1497:
case 3432:
case 2134:
case 2914:
case 1062:
case 1261:
case 1638:
case 3639:
case 925:
case 3095:
case 705:
case 2274:
case 812:
case 532:
case 2615:
case 3681:
case 1801:
case 2764:
case 3906:
case 3479:
case 1478:
case 1824:
case 3382:
case 394:
case 2041:
case 4017:
case 261:
case 1771:
case 2609:
case 1782:
case 2242:
case 2402:
case 2070:
case 3340:
case 3121:
case 2373:
case 867:
case 2505:
case 905:
case 1262:
case 562:
case 2433:
case 1061:
case 1820:
case 2992:
case 1228:
case 329:
case 2519:
case 838:
case 1739:
case 3738:
case 2284:
case 30:
case 3496:
case 3344:
case 2880:
case 1748:
case 2842:
case 1756:
case 0:
case 3734:
case 1470:
case 1201:
case 758:
case 3617:
case 1316:
case 2947:
case 3716:
case 2297:
case 193:
case 1623:
case 719:
case 3155:
case 1967:
case 1330:
case 3730:
case 2461:
case 1033:
case 1935:
case 1115:
case 2768:
case 46:
case 389:
case 2722:
case 1183:
case 1862:
case 2841:
case 3160:
case 1616:
case 2088:
case 3843:
case 668:
case 256:
case 2959:
case 2278:
case 958:
case 4040:
case 2870:
case 3757:
case 1357:
case 637:
case 1649:
case 2138:
case 3648:
case 2918:
case 4039:
case 643:
case 2874:
case 2428:
case 469:
case 1545:
case 1630:
case 3966:
case 1173:
case 919:
case 2721:
case 985:
case 71:
case 1484:
case 154:
case 157:
case 2720:
case 3269:
case 1004:
case 2998:
case 1222:
case 1696:
case 1332:
case 1797:
case 3732:
case 2839:
case 2724:
case 1864:
case 2701:
case 3678:
case 911:
case 2987:
case 754:
case 1000:
case 595:
case 1389:
case 3789:
case 873:
case 2163:
case 2871:
case 2882:
case 461:
case 2256:
case 4041:
case 1221:
case 1022:
case 3553:
case 3069:
case 2551:
case 1396:
case 1632:
case 1444:
case 536:
case 2460:
case 1471:
case 1482:
case 1195:
case 1855:
case 3809:
case 381:
case 2977:
case 431:
case 2702:
case 1689:
case 3527:
case 4042:
case 2056:
case 1603:
case 2217:
case 119:
case 1129:
case 793:
case 3815:
case 2464:
case 3162:
case 4080:
case 954:
case 1778:
case 3779:
case 3883:
case 3378:
case 1379:
case 2048:
case 675:
case 464:
case 1595:
case 4011:
case 1807:
case 631:
case 2978:
case 3786:
case 3687:
case 751:
case 2151:
case 1035:
case 2814:
case 3465:
case 3266:
case 3893:
case 1185:
case 1492:
case 930:
case 2836:
case 103:
case 1113:
case 1933:
case 162:
case 760:
case 714:
case 4012:
case 1901:
case 661:
case 1924:
case 1376:
case 2563:
case 3776:
case 2988:
case 1126:
case 2059:
case 3398:
case 372:
case 3066:
case 1235:
case 1436:
case 1920:
case 650:
case 3454:
case 123:
case 1414:
case 1175:
case 443:
case 75:
case 1921:
case 2098:
case 3826:
case 959:
case 2427:
case 2366:
case 63:
case 1305:
case 216:
case 3705:
case 918:
case 3758:
case 3359:
case 1358:
case 412:
case 2137:
case 1411:
case 3560:
case 2165:
case 903:
case 1718:
case 3719:
case 1319:
case 130:
case 2538:
case 2453:
case 732:
case 652:
case 3451:
case 505:
case 3875:
case 639:
case 2666:
case 66:
case 3508:
case 3555:
case 2150:
case 845:
case 1583:
case 3107:
case 2298:
case 1922:
case 1515:
case 1968:
case 4014:
case 1412:
case 932:
case 388:
case 3618:
case 1619:
case 160:
case 917:
case 467:
case 2287:
case 1646:
case 2154:
case 4010:
case 1658:
case 923:
case 1507:
case 115:
case 800:
case 24:
case 3474:
case 1829:
case 2096:
case 189:
case 3935:
case 3220:
case 2621:
case 3033:
case 2510:
case 3330:
case 1155:
case 626:
case 3623:
case 3316:
case 1617:
case 2203:
case 3441:
case 504:
case 2536:
case 3224:
case 3201:
case 1356:
case 2514:
case 3756:
case 3748:
case 1749:
case 2079:
case 3349:
case 3593:
case 354:
case 3020:
case 3323:
case 3484:
case 820:
case 1723:
case 2321:
case 3173:
case 2140:
case 2231:
case 606:
case 3506:
case 1164:
case 4038:
case 981:
case 3202:
case 1648:
case 540:
case 3480:
case 3001:
case 677:
case 290:
case 3024:
case 2300:
case 3442:
case 1656:
case 3357:
case 2905:
case 2958:
case 3616:
case 2592:
case 2976:
case 513:
case 2234:
case 989:
case 1873:
case 2249:
case 1789:
case 3788:
case 527:
case 3472:
case 2174:
case 2216:
case 3303:
case 2415:
case 2057:
case 3679:
case 3864:
case 2301:
case 674:
case 2483:
case 2838:
case 1397:
case 3332:
case 2633:
case 292:
case 3222:
case 1269:
case 3268:
case 357:
case 3860:
case 2023:
case 2141:
case 2590:
case 3778:
case 3379:
case 2034:
case 385:
case 3603:
case 435:
case 1128:
case 319:
case 2473:
case 1527:
case 2302:
case 3440:
case 3689:
case 2016:
case 181:
case 3808:
case 471:
case 802:
case 2257:
case 789:
case 3200:
case 507:
case 715:
case 3855:
case 1731:
case 2594:
case 1796:
case 1697:
case 3396:
case 3444:
case 2142:
case 1069:
case 3439:
case 1553:
case 1438:
case 848:
case 2180:
case 3022:
case 3067:
case 1698:
case 3933:
case 146:
case 2111:
case 970:
case 529:
case 788:
case 3185:
case 2854:
case 1153:
case 987:
case 1465:
case 1266:
case 3035:
case 2542:
case 50:
case 890:
case 1786:
case 2246:
case 2445:
case 3386:
case 3529:
case 1528:
case 2190:
case 849:
case 2205:
case 2406:
case 2850:
case 3807:
case 2258:
case 671:
case 3777:
case 1377:
case 3676:
case 635:
case 1127:
case 509:
case 696:
case 787:
case 2932:
case 3414:
case 6:
case 1725:
case 3267:
case 3325:
case 2493:
case 2837:
case 317:
case 52:
case 2541:
case 1398:
case 3399:
case 2570:
case 3798:
case 3126:
case 665:
case 3410:
case 2005:
case 474:
case 1677:
case 553:
case 2046:
case 3924:
case 84:
case 200:
case 1806:
case 3901:
case 3686:
case 2903:
case 946:
case 2957:
case 598:
case 248:
case 1875:
case 480:
case 3718:
case 170:
case 1318:
case 3319:
case 1560:
case 501:
case 1647:
case 3494:
case 2192:
case 187:
case 1746:
case 1758:
case 3305:
case 1705:
case 3573:
case 3904:
case 202:
case 3921:
case 314:
case 2923:
case 2582:
case 3490:
case 4065:
case 3106:
case 1659:
case 3605:
case 247:
case 1885:
case 3747:
case 2916:
case 3646:
case 4050:
case 360:
case 1618:
case 972:
case 2086:
case 188:
case 478:
case 2191:
case 2934:
case 2114:
case 3412:
case 3968:
case 2581:
case 2572:
case 2299:
case 3922:
case 4054:
case 3509:
case 1508:
case 2367:
case 2930:
case 841:
case 679:
case 3827:
case 2875:
case 4045:
case 2451:
case 3812:
case 3277:
case 3087:
case 2318:
case 697:
case 3165:
case 4006:
case 2746:
case 3917:
case 1286:
case 404:
case 2647:
case 3137:
case 1076:
case 1485:
case 1192:
case 2560:
case 316:
case 2359:
case 2758:
case 621:
case 881:
case 1540:
case 102:
case 2826:
case 3098:
case 1667:
case 1766:
case 1582:
case 1571:
case 1923:
case 163:
case 2564:
case 920:
case 1635:
case 579:
case 49:
case 698:
case 2659:
case 3077:
case 3811:
case 3287:
case 2452:
case 2885:
case 147:
case 3894:
case 3948:
case 601:
case 2618:
case 440:
case 1934:
case 1086:
case 424:
case 1851:
case 3956:
case 1276:
case 57:
case 255:
case 2969:
case 3150:
case 720:
case 3298:
case 2555:
case 1110:
case 3767:
case 1367:
case 2698:
case 246:
case 442:
case 3836:
case 1111:
case 62:
case 2266:
case 2893:
case 1580:
case 3891:
case 3151:
case 2528:
case 733:
case 1445:
case 2687:
case 902:
case 408:
case 2786:
case 2562:
case 1850:
case 88:
case 1205:
case 3047:
case 2377:
case 1584:
case 4085:
case 144:
case 3810:
case 4013:
case 120:
case 1219:
case 3997:
case 1493:
case 2725:
case 1865:
case 1541:
case 1837:
case 748:
case 272:
case 476:
case 60:
case 186:
case 2066:
case 1005:
case 1058:
case 3059:
case 2561:
case 3988:
case 407:
case 2677:
case 428:
case 1046:
case 571:
case 815:
case 3018:
case 2450:
case 933:
case 889:
case 3407:
case 535:
case 1574:
case 2387:
case 1409:
case 494:
case 3017:
case 1976:
case 749:
case 3882:
case 2789:
case 1249:
case 94:
case 2873:
case 2161:
case 1415:
case 2703:
case 1324:
case 1483:
case 3724:
case 1301:
case 2678:
case 3839:
case 1230:
case 1512:
case 676:
case 790:
case 1999:
case 3998:
case 192:
case 1141:
case 3552:
case 1320:
case 2269:
case 3720:
case 2883:
case 3048:
case 1049:
case 613:
case 1590:
case 691:
case 2779:
case 3872:
case 3217:
case 2128:
case 1986:
case 2815:
case 608:
case 3702:
case 627:
case 2527:
case 1184:
case 1016:
case 2809:
case 2731:
case 1594:
case 4095:
case 42:
case 1620:
case 582:
case 1030:
case 1333:
case 887:
case 3551:
case 642:
case 2697:
case 870:
case 1142:
case 2796:
case 2438:
case 3722:
case 1769:
case 3369:
case 14:
case 1181:
case 289:
case 2829:
case 1604:
case 2463:
case 1031:
case 3297:
case 2108:
case 2155:
case 3884:
case 2895:
case 1536:
case 577:
case 1443:
case 992:
case 3842:
case 2356:
case 498:
case 2734:
case 1591:
case 1600:
case 4015:
case 3880:
case 580:
case 2348:
case 4083:
case 3288:
case 2749:
case 1495:
case 2966:
case 1140:
case 3704:
case 69:
case 1304:
case 3721:
case 1321:
case 1668:
case 1429:
case 1231:
case 741:
case 1032:
case 1622:
case 2164:
case 3462:
case 792:
case 190:
case 3138:
case 1139:
case 2648:
case 604:
case 1003:
case 2656:
case 1144:
case 1279:
case 3959:
case 4073:
case 3088:
case 2843:
case 1089:
case 3870:
case 3537:
case 2317:
case 2160:
case 539:
case 56:
case 885:
case 819:
case 2490:
case 3025:
case 363:
case 3923:
case 1366:
case 2904:
case 2573:
case 302:
case 1098:
case 2358:
case 2759:
case 2411:
case 1917:
case 3485:
case 2346:
case 2494:
case 3192:
case 1137:
case 1453:
case 1538:
case 3539:
case 858:
case 2319:
case 230:
case 1165:
case 3544:
case 3110:
case 3930:
case 1666:
case 3426:
case 3367:
case 483:
case 251:
case 2922:
case 322:
case 1298:
case 1890:
case 81:
case 1735:
case 3572:
case 2968:
case 3191:
case 3086:
case 1956:
case 2412:
case 3114:
case 3949:
case 2193:
case 2619:
case 2853:
case 347:
case 1077:
case 1287:
case 2747:
case 552:
case 2658:
case 857:
case 320:
case 1810:
case 561:
case 1047:
case 2777:
case 3406:
case 1978:
case 1259:
case 3979:
case 3258:
case 2386:
case 3246:
case 2529:
case 1814:
case 916:
case 1151:
case 1836:
case 3854:
case 2185:
case 2067:
case 2933:
case 3903:
case 2787:
case 25:
case 2686:
case 575:
case 1407:
case 3019:
case 1018:
case 300:
case 3046:
case 1059:
case 2410:
case 811:
case 3989:
case 386:
case 3570:
case 232:
case 2399:
case 1152:
case 1892:
case 3837:
case 2235:
case 2325:
case 2267:
case 223:
case 3112:
case 2414:
case 3320:
case 1552:
case 257:
case 3141:
case 2631:
case 2860:
case 2222:
case 1998:
case 2021:
case 3170:
case 4061:
case 2004:
case 2797:
case 2696:
case 636:
case 3512:
case 3925:
case 3230:
case 3838:
case 3483:
case 1724:
case 2000:
case 145:
case 3415:
case 2303:
case 3216:
case 851:
case 1840:
case 2526:
case 1248:
case 2788:
case 1455:
case 1017:
case 1256:
case 1882:
case 1163:
case 3234:
case 1408:
case 4062:
case 3180:
case 2439:
case 2022:
case 2632:
case 3223:
case 830:
case 666:
case 1551:
case 3030:
case 2513:
case 2808:
case 3016:
case 534:
case 2471:
case 3184:
case 2482:
case 3473:
case 814:
case 2440:
case 695:
case 3302:
case 3986:
case 219:
case 2129:
case 1881:
case 285:
case 1056:
case 3049:
case 2379:
case 1048:
case 3590:
case 1464:
case 2349:
case 3079:
case 823:
case 3289:
case 2593:
case 568:
case 2756:
case 1842:
case 3514:
case 405:
case 2657:
case 2470:
case 1947:
case 832:
case 3203:
case 2316:
case 3536:
case 537:
case 2441:
case 3031:
case 2109:
case 3232:
case 1297:
case 3510:
case 1461:
case 2967:
case 2330:
case 2828:
case 3096:
case 2474:
case 34:
case 1768:
case 2220:
case 2935:
case 3368:
case 2862:
case 683:
case 2183:
case 1722:
case 85:
case 425:
case 1841:
case 862:
case 3592:
case 3905:
case 3958:
case 3089:
case 1088:
case 3144:
case 1700:
case 3300:
case 2357:
case 3919:
case 3139:
case 1138:
case 2202:
case 818:
case 2506:
case 859:
case 2233:
case 3032:
case 1097:
case 1428:
case 3429:
case 1874:
case 1669:
case 3668:
case 1721:
case 3321:
case 1704:
case 2861:
case 2630:
case 3140:
case 3304:
case 3863:
case 2020:
case 745:
case 3296:
case 4060:
case 3171:
case 2484:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742864402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,];
var gg_b = "1742864402/";

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
