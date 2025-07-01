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
case 1179:
case 3325:
case 2725:
case 3953:
case 4039:
case 3557:
case 1934:
case 3025:
case 1433:
case 1808:
case 1286:
case 2638:
case 4005:
case 3880:
case 2733:
case 1054:
case 3315:
case 815:
case 2715:
case 3333:
case 3605:
case 965:
case 1168:
case 2144:
case 3015:
case 216:
case 2192:
case 758:
case 2550:
case 3252:
case 2246:
case 2836:
case 2095:
case 1237:
case 2141:
case 3112:
case 1316:
case 1351:
case 2395:
case 1170:
case 746:
case 821:
case 2637:
case 3426:
case 1016:
case 1893:
case 3874:
case 87:
case 1848:
case 1532:
case 2864:
case 284:
case 4045:
case 1167:
case 1884:
case 2187:
case 2675:
case 3350:
case 3945:
case 778:
case 4065:
case 1147:
case 2231:
case 286:
case 2525:
case 2844:
case 3757:
case 1868:
case 2801:
case 689:
case 2057:
case 729:
case 193:
case 1634:
case 1107:
case 2188:
case 118:
case 2804:
case 1732:
case 2234:
case 3653:
case 903:
case 3812:
case 3059:
case 847:
case 2358:
case 995:
case 4053:
case 3939:
case 214:
case 545:
case 2164:
case 740:
case 1148:
case 3189:
case 643:
case 3822:
case 2058:
case 1666:
case 3905:
case 1992:
case 3176:
case 2648:
case 196:
case 1502:
case 3010:
case 3098:
case 1420:
case 936:
case 1372:
case 2968:
case 1443:
case 1591:
case 977:
case 2264:
case 444:
case 3289:
case 179:
case 3398:
case 1783:
case 3600:
case 224:
case 2710:
case 2798:
case 1498:
case 2984:
case 2236:
case 3969:
case 2607:
case 2134:
case 2317:
case 1636:
case 3320:
case 881:
case 3343:
case 128:
case 3799:
case 1293:
case 2806:
case 2288:
case 2979:
case 1207:
case 3003:
case 2967:
case 36:
case 719:
case 2582:
case 3280:
case 4023:
case 2647:
case 4040:
case 2719:
case 542:
case 2797:
case 102:
case 2703:
case 2981:
case 3613:
case 2846:
case 2028:
case 3019:
case 3852:
case 2390:
case 1175:
case 1687:
case 3718:
case 1403:
case 1497:
case 1904:
case 1542:
case 440:
case 3029:
case 1661:
case 1419:
case 1886:
case 56:
case 3640:
case 342:
case 3935:
case 3414:
case 2866:
case 2681:
case 1267:
case 3517:
case 743:
case 1281:
case 2667:
case 2543:
case 3599:
case 2520:
case 63:
case 3876:
case 3909:
case 3527:
case 458:
case 3660:
case 1702:
case 3424:
case 1014:
case 3940:
case 3355:
case 2204:
case 1641:
case 2755:
case 1791:
case 957:
case 1987:
case 2908:
case 1137:
case 3055:
case 1314:
case 2670:
case 4077:
case 1604:
case 2598:
case 226:
case 4069:
case 904:
case 3678:
case 2529:
case 2831:
case 3590:
case 446:
case 1356:
case 1601:
case 2244:
case 1742:
case 2948:
case 1692:
case 934:
case 166:
case 1056:
case 1482:
case 1011:
case 3421:
case 2201:
case 2073:
case 1284:
case 2782:
case 3363:
case 2763:
case 527:
case 1186:
case 3528:
case 2519:
case 298:
case 4078:
case 3669:
case 1021:
case 7:
case 2907:
case 2494:
case 3949:
case 3063:
case 1988:
case 213:
case 2477:
case 1918:
case 3691:
case 3012:
case 3704:
case 1422:
case 2574:
case 2614:
case 1370:
case 2304:
case 2041:
case 3481:
case 920:
case 3564:
case 1151:
case 1760:
case 3467:
case 3312:
case 3741:
case 2004:
case 3602:
case 1214:
case 2624:
case 1081:
case 554:
case 1067:
case 3322:
case 1381:
case 1224:
case 62:
case 3588:
case 1549:
case 1513:
case 949:
case 1769:
case 3282:
case 2580:
case 4094:
case 599:
case 537:
case 968:
case 1917:
case 1079:
case 1084:
case 15:
case 818:
case 3468:
case 2273:
case 576:
case 451:
case 893:
case 1509:
case 507:
case 467:
case 3125:
case 1379:
case 805:
case 376:
case 2392:
case 3561:
case 1154:
case 236:
case 1927:
case 2344:
case 1211:
case 1540:
case 1368:
case 1256:
case 2972:
case 3744:
case 3133:
case 399:
case 3694:
case 3587:
case 835:
case 697:
case 3115:
case 3642:
case 2656:
case 639:
case 3484:
case 277:
case 2044:
case 350:
case 2469:
case 2336:
case 1699:
case 2921:
case 3736:
case 439:
case 1816:
case 3448:
case 497:
case 1973:
case 4062:
case 138:
case 1474:
case 409:
case 913:
case 2400:
case 1749:
case 1577:
case 3788:
case 1617:
case 3089:
case 1826:
case 3994:
case 2227:
case 3493:
case 651:
case 667:
case 3504:
case 926:
case 1272:
case 2956:
case 3942:
case 3764:
case 1560:
case 2789:
case 234:
case 3210:
case 374:
case 2672:
case 2158:
case 2361:
case 3592:
case 2087:
case 3071:
case 1723:
case 24:
case 121:
case 3902:
case 2061:
case 1618:
case 3787:
case 3991:
case 1308:
case 2387:
case 2914:
case 1480:
case 2435:
case 2771:
case 1569:
case 3380:
case 1735:
case 775:
case 2228:
case 3219:
case 3408:
case 3833:
case 2440:
case 262:
case 3080:
case 3297:
case 17:
case 1854:
case 1347:
case 2926:
case 353:
case 3197:
case 2257:
case 1811:
case 2031:
case 2128:
case 3882:
case 1765:
case 655:
case 1539:
case 2916:
case 111:
case 41:
case 2118:
case 2190:
case 3129:
case 2258:
case 3110:
case 125:
case 3076:
case 4032:
case 265:
case 3506:
case 72:
case 2453:
case 1545:
case 2034:
case 771:
case 3143:
case 3855:
case 3120:
case 2199:
case 2117:
case 2585:
case 475:
case 3696:
case 1565:
case 1958:
case 675:
case 3486:
case 2046:
case 2828:
case 3233:
case 2654:
case 914:
case 3215:
case 864:
case 1111:
case 1156:
case 1254:
case 1452:
case 3829:
case 233:
case 373:
case 3932:
case 1386:
case 203:
case 1038:
case 3182:
case 2445:
case 3085:
case 1226:
case 751:
case 2626:
case 1730:
case 2785:
case 3898:
case 1695:
case 3566:
case 1114:
case 910:
case 2430:
case 2006:
case 3820:
case 831:
case 3843:
case 3155:
case 1037:
case 2295:
case 3706:
case 2651:
case 3471:
case 20:
case 2335:
case 322:
case 2584:
case 240:
case 1219:
case 1408:
case 2009:
case 1833:
case 2487:
case 1080:
case 37:
case 2013:
case 1203:
case 521:
case 3854:
case 2747:
case 3347:
case 1825:
case 156:
case 1229:
case 3008:
case 3723:
case 2340:
case 321:
case 4028:
case 2323:
case 522:
case 3618:
case 3578:
case 2708:
case 3308:
case 2040:
case 3826:
case 169:
case 3048:
case 1407:
case 1493:
case 1662:
case 538:
case 951:
case 2610:
case 1504:
case 3700:
case 4017:
case 626:
case 1683:
case 786:
case 1764:
case 3348:
case 508:
case 229:
case 1541:
case 1210:
case 174:
case 3699:
case 2620:
case 2982:
case 1736:
case 424:
case 3816:
case 3093:
case 3851:
case 278:
case 1159:
case 2793:
case 2349:
case 698:
case 3749:
case 3393:
case 3154:
case 2294:
case 2078:
case 413:
case 2768:
case 3540:
case 3256:
case 1133:
case 199:
case 547:
case 1694:
case 1962:
case 1642:
case 1484:
case 150:
case 137:
case 3068:
case 649:
case 3513:
case 1282:
case 3535:
case 347:
case 2784:
case 3079:
case 2682:
case 2444:
case 35:
case 2492:
case 2663:
case 1125:
case 3412:
case 1022:
case 3367:
case 2767:
case 1536:
case 2441:
case 1322:
case 2404:
case 2997:
case 2593:
case 2377:
case 1588:
case 2507:
case 3777:
case 3126:
case 2929:
case 971:
case 1859:
case 1012:
case 1704:
case 3422:
case 2202:
case 1255:
case 1481:
case 2832:
case 2291:
case 1467:
case 1312:
case 154:
case 3214:
case 610:
case 2045:
case 3485:
case 2102:
case 713:
case 3037:
case 2345:
case 2950:
case 798:
case 2:
case 3553:
case 1085:
case 3226:
case 2406:
case 726:
case 3872:
case 289:
case 1534:
case 2862:
case 3086:
case 173:
case 3338:
case 416:
case 1932:
case 3386:
case 582:
case 1182:
case 2339:
case 3565:
case 1052:
case 614:
case 2039:
case 2142:
case 3705:
case 1352:
case 581:
case 2633:
case 3254:
case 3753:
case 1632:
case 2353:
case 1855:
case 1259:
case 623:
case 2802:
case 720:
case 414:
case 1734:
case 2232:
case 525:
case 2659:
case 2537:
case 1766:
case 827:
case 2183:
case 2915:
case 325:
case 219:
case 3658:
case 3172:
case 1996:
case 98:
case 1376:
case 3545:
case 1882:
case 3765:
case 2365:
case 955:
case 768:
case 512:
case 3075:
case 3995:
case 2065:
case 311:
case 3505:
case 2775:
case 1546:
case 2894:
case 1197:
case 89:
case 2538:
case 3811:
case 684:
case 2586:
case 410:
case 724:
case 1119:
case 3657:
case 3867:
case 1939:
case 1758:
case 2551:
case 335:
case 899:
case 1174:
case 1822:
case 3881:
case 1595:
case 3666:
case 807:
case 4034:
case 593:
case 876:
case 518:
case 305:
case 762:
case 1905:
case 2032:
case 2149:
case 700:
case 3107:
case 2526:
case 318:
case 3870:
case 465:
case 505:
case 761:
case 3732:
case 1653:
case 1059:
case 535:
case 704:
case 2109:
case 3868:
case 21:
case 2985:
case 1930:
case 2878:
case 2113:
case 1180:
case 2265:
case 4031:
case 2869:
case 1171:
case 854:
case 3108:
case 2123:
case 2140:
case 9:
case 1665:
case 3275:
case 2554:
case 3906:
case 3931:
case 588:
case 2800:
case 777:
case 3026:
case 3848:
case 1889:
case 1451:
case 1285:
case 3167:
case 870:
case 1965:
case 1112:
case 1558:
case 1645:
case 2751:
case 2160:
case 3606:
case 255:
case 3351:
case 1795:
case 3807:
case 2849:
case 3016:
case 3051:
case 3893:
case 2096:
case 1880:
case 3966:
case 2813:
case 919:
case 792:
case 2652:
case 1315:
case 3646:
case 1333:
case 1605:
case 2396:
case 1639:
case 3168:
case 3796:
case 1015:
case 3425:
case 869:
case 3354:
case 2205:
case 2754:
case 1033:
case 2809:
case 3847:
case 1252:
case 1454:
case 3179:
case 1325:
case 1557:
case 1025:
case 3934:
case 3286:
case 3184:
case 1382:
case 3936:
case 3284:
case 4092:
case 2865:
case 3321:
case 252:
case 594:
case 1528:
case 436:
case 1456:
case 3021:
case 1669:
case 3138:
case 1063:
case 3988:
case 3279:
case 2105:
case 3794:
case 1152:
case 2473:
case 3268:
case 3356:
case 2974:
case 267:
case 3463:
case 634:
case 3692:
case 3964:
case 127:
case 394:
case 2042:
case 929:
case 1421:
case 1660:
case 600:
case 2572:
case 2612:
case 733:
case 3641:
case 2302:
case 3562:
case 3791:
case 657:
case 661:
case 3137:
case 703:
case 1055:
case 3583:
case 3314:
case 2714:
case 2002:
case 390:
case 2980:
case 795:
case 1935:
case 559:
case 1517:
case 90:
case 1677:
case 2130:
case 1185:
case 940:
case 3455:
case 4041:
case 2277:
case 1909:
case 691:
case 1329:
case 3594:
case 1718:
case 502:
case 331:
case 2223:
case 360:
case 3904:
case 2240:
case 3542:
case 2428:
case 3661:
case 1029:
case 3419:
case 3886:
case 532:
case 1960:
case 2165:
case 1640:
case 301:
case 142:
case 1271:
case 1623:
case 3941:
case 1003:
case 2839:
case 332:
case 1097:
case 2235:
case 692:
case 141:
case 2680:
case 1635:
case 1613:
case 3247:
case 1977:
case 400:
case 560:
case 1852:
case 531:
case 2805:
case 44:
case 3498:
case 3410:
case 1020:
case 3837:
case 1043:
case 434:
case 3636:
case 596:
case 2524:
case 1472:
case 1343:
case 1799:
case 2153:
case 3293:
case 2427:
case 404:
case 564:
case 2249:
case 3992:
case 3664:
case 2772:
case 2200:
case 3944:
case 3372:
case 2083:
case 3443:
case 1885:
case 3762:
case 3591:
case 2417:
case 2362:
case 1978:
case 1289:
case 379:
case 3248:
case 3901:
case 3783:
case 2383:
case 606:
case 1600:
case 4088:
case 3715:
case 580:
case 2315:
case 3101:
case 1813:
case 625:
case 1096:
case 1835:
case 1809:
case 2252:
case 1976:
case 3246:
case 481:
case 316:
case 3144:
case 516:
case 1823:
case 878:
case 2557:
case 3496:
case 1840:
case 2454:
case 3686:
case 3861:
case 380:
case 3638:
case 2871:
case 844:
case 3887:
case 2025:
case 2122:
case 4037:
case 384:
case 2451:
case 3864:
case 2889:
case 2416:
case 1716:
case 584:
case 2645:
case 1751:
case 2965:
case 2558:
case 3095:
case 3141:
case 75:
case 3206:
case 2426:
case 1849:
case 3395:
case 11:
case 3844:
case 3525:
case 386:
case 3892:
case 3057:
case 287:
case 1113:
case 1878:
case 2930:
case 3515:
case 3533:
case 3187:
case 708:
case 1869:
case 310:
case 3750:
case 2350:
case 738:
case 2945:
case 1457:
case 1140:
case 2665:
case 1123:
case 1676:
case 722:
case 175:
case 3164:
case 3432:
case 682:
case 2758:
case 2276:
case 1952:
case 1877:
case 2595:
case 2822:
case 973:
case 3804:
case 3938:
case 1149:
case 1253:
case 3136:
case 2059:
case 2812:
case 1860:
case 3693:
case 2717:
case 524:
case 2649:
case 349:
case 3483:
case 2969:
case 415:
case 2020:
case 711:
case 1427:
case 3806:
case 65:
case 1153:
case 1845:
case 2472:
case 1524:
case 2343:
case 4048:
case 2320:
case 3743:
case 3555:
case 3968:
case 1083:
case 1200:
case 1499:
case 438:
case 907:
case 2727:
case 2176:
case 1689:
case 109:
case 1514:
case 2600:
case 324:
case 3798:
case 4007:
case 3710:
case 197:
case 1674:
case 2398:
case 3166:
case 1417:
case 937:
case 712:
case 2978:
case 1830:
case 139:
case 950:
case 1511:
case 1223:
case 3608:
case 2718:
case 2329:
case 3318:
case 3390:
case 47:
case 2623:
case 2640:
case 2960:
case 3287:
case 2029:
case 1428:
case 422:
case 3647:
case 2609:
case 2728:
case 889:
case 2097:
case 172:
case 725:
case 2280:
case 1235:
case 2003:
case 3967:
case 1839:
case 1805:
case 3131:
case 421:
case 2019:
case 583:
case 3981:
case 12:
case 2613:
case 2397:
case 3797:
case 1922:
case 4008:
case 2923:
case 3755:
case 1302:
case 1612:
case 3204:
case 2355:
case 956:
case 4067:
case 1853:
case 2527:
case 3106:
case 3510:
case 2212:
case 3241:
case 2055:
case 3908:
case 1260:
case 4081:
case 3491:
case 622:
case 4070:
case 1980:
case 2414:
case 2876:
case 1277:
case 3947:
case 2909:
case 2222:
case 3520:
case 29:
case 3763:
case 3519:
case 4068:
case 608:
case 2363:
case 3782:
case 3073:
case 3993:
case 313:
case 3907:
case 2773:
case 398:
case 3684:
case 3597:
case 3373:
case 167:
case 151:
case 1756:
case 1342:
case 969:
case 1711:
case 513:
case 598:
case 2678:
case 2152:
case 326:
case 1394:
case 615:
case 227:
case 4079:
case 974:
case 447:
case 1094:
case 1989:
case 3460:
case 96:
case 1919:
case 1441:
case 3858:
case 459:
case 392:
case 1507:
case 591:
case 4014:
case 602:
case 1377:
case 1997:
case 3722:
case 2470:
case 1781:
case 3195:
case 3304:
case 2255:
case 2481:
case 2012:
case 2859:
case 1770:
case 1202:
case 3614:
case 660:
case 2691:
case 631:
case 1929:
case 3004:
case 3341:
case 3712:
case 2312:
case 3589:
case 1360:
case 4024:
case 2564:
case 1832:
case 942:
case 1242:
case 3972:
case 3344:
case 3001:
case 4021:
case 2701:
case 237:
case 679:
case 2983:
case 3469:
case 3044:
case 377:
case 1910:
case 1998:
case 875:
case 306:
case 3092:
case 2133:
case 2587:
case 3478:
case 2263:
case 494:
case 4011:
case 1369:
case 2282:
case 1401:
case 2125:
case 146:
case 2850:
case 788:
case 1444:
case 2683:
case 1698:
case 304:
case 88:
case 2942:
case 2493:
case 2662:
case 1488:
case 2089:
case 3449:
case 2994:
case 2407:
case 2298:
case 274:
case 2074:
case 3158:
case 129:
case 2764:
case 927:
case 2389:
case 1132:
case 3088:
case 1049:
case 2448:
case 1567:
case 1643:
case 479:
case 1620:
case 504:
case 464:
case 1707:
case 2788:
case 1793:
case 3388:
case 1349:
case 3299:
case 3036:
case 1581:
case 561:
case 2219:
case 557:
case 1009:
case 2833:
case 3780:
case 1584:
case 1697:
case 1313:
case 140:
case 10:
case 2380:
case 1309:
case 1619:
case 1579:
case 3423:
case 2203:
case 1035:
case 3924:
case 3157:
case 2297:
case 1323:
case 1955:
case 1568:
case 2229:
case 2592:
case 402:
case 3218:
case 2761:
case 3290:
case 2447:
case 3409:
case 3087:
case 1023:
case 2501:
case 330:
case 3771:
case 1040:
case 361:
case 2371:
case 3387:
case 3061:
case 1708:
case 3951:
case 2863:
case 3916:
case 2882:
case 728:
case 1431:
case 3118:
case 2129:
case 3873:
case 2103:
case 2197:
case 1842:
case 3257:
case 2475:
case 3331:
case 253:
case 2731:
case 1894:
case 3465:
case 779:
case 2119:
case 3128:
case 1802:
case 2143:
case 2855:
case 1353:
case 1925:
case 3034:
case 2632:
case 663:
case 1891:
case 1232:
case 3117:
case 1933:
case 1915:
case 1162:
case 732:
case 3258:
case 3366:
case 2198:
case 2110:
case 1537:
case 1183:
case 3453:
case 3127:
case 365:
case 2506:
case 3066:
case 1738:
case 693:
case 1959:
case 3405:
case 273:
case 618:
case 2225:
case 3818:
case 2531:
case 2829:
case 595:
case 2163:
case 1786:
case 2932:
case 1625:
case 303:
case 839:
case 3654:
case 2696:
case 1339:
case 635:
case 2746:
case 3752:
case 1194:
case 1633:
case 1305:
case 1575:
case 809:
case 143:
case 3346:
case 2897:
case 605:
case 3817:
case 1191:
case 1045:
case 3651:
case 3616:
case 1950:
case 2706:
case 2843:
case 871:
case 2155:
case 1102:
case 2820:
case 3899:
case 488:
case 1406:
case 1030:
case 2085:
case 2437:
case 766:
case 2898:
case 2810:
case 2534:
case 3785:
case 221:
case 2723:
case 3340:
case 1409:
case 1087:
case 1361:
case 1771:
case 959:
case 3040:
case 1914:
case 1435:
case 745:
case 2480:
case 2308:
case 1387:
case 46:
case 4003:
case 3708:
case 540:
case 2047:
case 3009:
case 1780:
case 2735:
case 222:
case 3584:
case 2713:
case 2471:
case 884:
case 30:
case 2569:
case 3309:
case 2347:
case 3461:
case 69:
case 3013:
case 1440:
case 162:
case 1157:
case 3896:
case 2093:
case 3464:
case 2816:
case 1088:
case 3963:
case 1921:
case 880:
case 2699:
case 529:
case 3982:
case 3707:
case 2749:
case 4010:
case 823:
case 2617:
case 2393:
case 1388:
case 3349:
case 2307:
case 378:
case 1400:
case 2973:
case 3581:
case 3300:
case 1774:
case 3610:
case 3570:
case 2700:
case 2272:
case 1064:
case 1449:
case 2826:
case 966:
case 1158:
case 3000:
case 3283:
case 544:
case 3748:
case 1364:
case 2627:
case 215:
case 994:
case 3262:
case 627:
case 2917:
case 1478:
case 1580:
case 2535:
case 3401:
case 2769:
case 2673:
case 2379:
case 928:
case 346:
case 3663:
case 1273:
case 1621:
case 3682:
case 2084:
case 3444:
case 3242:
case 2540:
case 1972:
case 2256:
case 996:
case 1857:
case 3196:
case 2523:
case 1344:
case 3768:
case 1392:
case 964:
case 1571:
case 979:
case 1656:
case 177:
case 106:
case 2778:
case 2370:
case 2422:
case 191:
case 3770:
case 3202:
case 1614:
case 960:
case 0:
case 2990:
case 2918:
case 1341:
case 1004:
case 1712:
case 2070:
case 810:
case 2116:
case 901:
case 4055:
case 1460:
case 717:
case 3919:
case 3767:
case 1858:
case 2367:
case 2777:
case 3507:
case 2549:
case 886:
case 641:
case 902:
case 3404:
case 3997:
case 1722:
case 2381:
case 3781:
case 2957:
case 5:
case 3406:
case 1827:
case 1445:
case 3030:
case 3883:
case 1785:
case 3862:
case 389:
case 1817:
case 2251:
case 1430:
case 2485:
case 3737:
case 820:
case 2695:
case 3:
case 1651:
case 1616:
case 883:
case 1576:
case 1295:
case 3102:
case 1899:
case 3005:
case 1828:
case 1654:
case 195:
case 4025:
case 2565:
case 3339:
case 2958:
case 3633:
case 3305:
case 2254:
case 3575:
case 2705:
case 3615:
case 1346:
case 3296:
case 2156:
case 2111:
case 3039:
case 4015:
case 3738:
case 543:
case 2338:
case 281:
case 3959:
case 4033:
case 2452:
case 3446:
case 133:
case 868:
case 645:
case 3786:
case 417:
case 849:
case 2386:
case 103:
case 4059:
case 319:
case 617:
case 76:
case 3537:
case 2545:
case 1954:
case 1127:
case 741:
case 1776:
case 1066:
case 1199:
case 898:
case 3925:
case 1034:
case 2753:
case 963:
case 3659:
case 2814:
case 1585:
case 3232:
case 2530:
case 742:
case 1117:
case 2856:
case 3842:
case 1257:
case 1331:
case 1031:
case 1128:
case 1951:
case 3650:
case 1916:
case 3365:
case 2539:
case 2765:
case 1190:
case 3775:
case 2505:
case 988:
case 211:
case 2995:
case 673:
case 756:
case 1938:
case 3149:
case 1188:
case 3526:
case 3032:
case 2193:
case 293:
case 3253:
case 4076:
case 2732:
case 3860:
case 1986:
case 3332:
case 2148:
case 235:
case 1164:
case 1432:
case 1266:
case 2946:
case 3952:
case 2666:
case 1187:
case 2108:
case 2884:
case 3554:
case 2906:
case 1750:
case 3457:
case 2596:
case 2868:
case 1357:
case 186:
case 1525:
case 1057:
case 3135:
case 3113:
case 892:
case 1801:
case 3878:
case 2351:
case 3716:
case 3751:
case 3160:
case 1206:
case 2807:
case 3849:
case 4085:
case 1637:
case 1104:
case 653:
case 3800:
case 776:
case 2931:
case 2326:
case 799:
case 555:
case 184:
case 3230:
case 2848:
case 2026:
case 2238:
case 3823:
case 1496:
case 1725:
case 1686:
case 1861:
case 4052:
case 2184:
case 1638:
case 3169:
case 2433:
case 2808:
case 754:
case 2934:
case 263:
case 1715:
case 2054:
case 3178:
case 3652:
case 3813:
case 2966:
case 3096:
case 3754:
case 2847:
case 3976:
case 1550:
case 2425:
case 2354:
case 804:
case 367:
case 3974:
case 1244:
case 351:
case 3756:
case 2742:
case 3711:
case 2601:
case 1529:
case 3105:
case 648:
case 2011:
case 294:
case 2964:
case 674:
case 1948:
case 3278:
case 3989:
case 2692:
case 552:
case 1679:
case 908:
case 2284:
case 499:
case 3865:
case 3721:
case 113:
case 2875:
case 1907:
case 1494:
case 407:
case 567:
case 2988:
case 551:
case 2021:
case 476:
case 2138:
case 198:
case 1597:
case 1442:
case 922:
case 1491:
case 3130:
case 454:
case 1866:
case 1681:
case 3980:
case 97:
case 4012:
case 3724:
case 1520:
case 2324:
case 2641:
case 2702:
case 2270:
case 656:
case 3091:
case 3714:
case 1670:
case 3971:
case 2314:
case 2987:
case 3391:
case 1908:
case 4022:
case 3260:
case 1834:
case 470:
case 1647:
case 1328:
case 372:
case 1582:
case 985:
case 1131:
case 2247:
case 2429:
case 1028:
case 3490:
case 3418:
case 456:
case 1703:
case 1981:
case 32:
case 202:
case 3680:
case 2904:
case 260:
case 3240:
case 1970:
case 371:
case 3556:
case 231:
case 3511:
case 2838:
case 3671:
case 3223:
case 2594:
case 1729:
case 4080:
case 1318:
case 52:
case 2941:
case 3912:
case 201:
case 1287:
case 2886:
case 753:
case 1555:
case 1968:
case 3083:
case 2372:
case 2944:
case 264:
case 3062:
case 607:
case 296:
case 1327:
case 2992:
case 309:
case 1648:
case 3383:
case 3514:
case 124:
case 397:
case 3674:
case 2783:
case 3417:
case 637:
case 2248:
case 3830:
case 650:
case 2591:
case 339:
case 2762:
case 1264:
case 1462:
case 1134:
case 1317:
case 1693:
case 803:
case 2688:
case 149:
case 2837:
case 1483:
case 1099:
case 168:
case 1984:
case 3427:
case 1806:
case 3249:
case 3153:
case 833:
case 2293:
case 3524:
case 4089:
case 509:
case 469:
case 2636:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751342401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,];
var gg_b = "1751342401/";

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
