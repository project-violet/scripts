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
case 2935:
case 2403:
case 207:
case 3264:
case 760:
case 2956:
case 3593:
case 2692:
case 63:
case 2978:
case 2082:
case 3545:
case 1140:
case 3468:
case 3008:
case 3342:
case 3997:
case 1480:
case 3118:
case 4010:
case 1307:
case 1755:
case 1516:
case 181:
case 3453:
case 1359:
case 2063:
case 632:
case 3247:
case 390:
case 2541:
case 3768:
case 1701:
case 2659:
case 2841:
case 993:
case 269:
case 2086:
case 2696:
case 647:
case 2988:
case 2607:
case 3190:
case 1719:
case 31:
case 1843:
case 1470:
case 3657:
case 3611:
case 1392:
case 1947:
case 3609:
case 1512:
case 312:
case 51:
case 1297:
case 1812:
case 3126:
case 1528:
case 143:
case 961:
case 2637:
case 1509:
case 1391:
case 1809:
case 2813:
case 2733:
case 627:
case 3628:
case 4094:
case 3901:
case 1066:
case 2345:
case 2125:
case 444:
case 702:
case 3639:
case 1270:
case 418:
case 2179:
case 2542:
case 1702:
case 1524:
case 3980:
case 2198:
case 863:
case 1236:
case 1219:
case 2110:
case 802:
case 2054:
case 593:
case 2974:
case 2000:
case 1062:
case 628:
case 912:
case 934:
case 763:
case 3029:
case 3075:
case 2189:
case 417:
case 1693:
case 1083:
case 393:
case 3050:
case 2846:
case 170:
case 3253:
case 284:
case 2691:
case 2027:
case 1960:
case 2753:
case 569:
case 3194:
case 724:
case 9:
case 1065:
case 799:
case 1613:
case 1751:
case 369:
case 3696:
case 1949:
case 1784:
case 2768:
case 1405:
case 3659:
case 696:
case 21:
case 1642:
case 3703:
case 125:
case 2931:
case 2624:
case 1299:
case 3607:
case 2190:
case 2122:
case 4087:
case 1451:
case 1324:
case 595:
case 2342:
case 2997:
case 2247:
case 290:
case 3260:
case 3615:
case 1591:
case 2264:
case 395:
case 1774:
case 3076:
case 1309:
case 1891:
case 824:
case 164:
case 3935:
case 1252:
case 3249:
case 2545:
case 1357:
case 2468:
case 2845:
case 1167:
case 899:
case 3233:
case 3978:
case 3058:
case 3030:
case 2893:
case 1251:
case 3189:
case 3460:
case 818:
case 3081:
case 3846:
case 2050:
case 354:
case 2004:
case 2114:
case 2253:
case 3546:
case 1735:
case 4018:
case 2464:
case 2121:
case 1488:
case 1452:
case 3054:
case 3974:
case 3000:
case 717:
case 1123:
case 554:
case 584:
case 2029:
case 1284:
case 2643:
case 995:
case 907:
case 744:
case 1507:
case 2639:
case 2747:
case 2695:
case 131:
case 1807:
case 3179:
case 3760:
case 1896:
case 1596:
case 682:
case 1641:
case 40:
case 2980:
case 2932:
case 652:
case 2628:
case 2901:
case 3749:
case 3637:
case 1478:
case 145:
case 402:
case 1520:
case 1456:
case 3393:
case 1752:
case 718:
case 1788:
case 2764:
case 1274:
case 2919:
case 1499:
case 3627:
case 819:
case 1967:
case 1876:
case 2638:
case 1710:
case 315:
case 1425:
case 3199:
case 3135:
case 1558:
case 2675:
case 3373:
case 2106:
case 2861:
case 1294:
case 3748:
case 1944:
case 426:
case 1789:
case 1563:
case 2922:
case 1498:
case 2918:
case 536:
case 2197:
case 671:
case 1886:
case 4080:
case 158:
case 4032:
case 188:
case 3671:
case 3188:
case 1041:
case 1149:
case 2240:
case 3267:
case 2685:
case 1329:
case 2039:
case 635:
case 2095:
case 4019:
case 3244:
case 3383:
case 462:
case 3448:
case 1338:
case 1350:
case 3565:
case 2269:
case 3037:
case 2012:
case 2119:
case 2009:
case 1013:
case 3467:
case 3223:
case 2440:
case 2057:
case 2977:
case 509:
case 2866:
case 3361:
case 1042:
case 2180:
case 1289:
case 3117:
case 3672:
case 3007:
case 1871:
case 915:
case 368:
case 2469:
case 1794:
case 3248:
case 3979:
case 3059:
case 2862:
case 797:
case 705:
case 2562:
case 400:
case 1554:
case 3105:
case 411:
case 3174:
case 2987:
case 2608:
case 680:
case 1948:
case 3682:
case 3630:
case 2914:
case 2583:
case 2883:
case 1279:
case 213:
case 1581:
case 3676:
case 1527:
case 1827:
case 367:
case 446:
case 2136:
case 1046:
case 2365:
case 3744:
case 2155:
case 104:
case 3989:
case 630:
case 392:
case 2383:
case 1414:
case 2037:
case 1381:
case 3012:
case 3028:
case 2448:
case 2865:
case 76:
case 3269:
case 2188:
case 3990:
case 4051:
case 1421:
case 1487:
case 1164:
case 4017:
case 1300:
case 39:
case 419:
case 762:
case 3240:
case 913:
case 1777:
case 2267:
case 2423:
case 3043:
case 694:
case 3861:
case 1834:
case 3561:
case 703:
case 3629:
case 2373:
case 310:
case 862:
case 122:
case 2654:
case 1371:
case 3918:
case 2600:
case 3197:
case 986:
case 629:
case 1662:
case 2723:
case 2178:
case 1477:
case 3604:
case 2681:
case 2091:
case 1940:
case 2135:
case 1093:
case 1787:
case 86:
case 1721:
case 2156:
case 2366:
case 2630:
case 1875:
case 3883:
case 3769:
case 3170:
case 1575:
case 2092:
case 99:
case 1426:
case 1850:
case 3365:
case 1722:
case 2744:
case 3155:
case 1538:
case 142:
case 405:
case 700:
case 267:
case 1718:
case 3136:
case 711:
case 992:
case 3740:
case 2105:
case 1277:
case 746:
case 2767:
case 2663:
case 3921:
case 3608:
case 3634:
case 1372:
case 685:
case 14:
case 1418:
case 3180:
case 3873:
case 2117:
case 1885:
case 679:
case 3573:
case 172:
case 2151:
case 1422:
case 2979:
case 633:
case 498:
case 586:
case 2096:
case 3469:
case 2248:
case 209:
case 2686:
case 1287:
case 3119:
case 3009:
case 1376:
case 1790:
case 3977:
case 3866:
case 2184:
case 811:
case 3440:
case 1358:
case 1382:
case 1980:
case 1932:
case 2896:
case 259:
case 2596:
case 3236:
case 721:
case 1639:
case 1747:
case 3073:
case 3270:
case 1085:
case 231:
case 3702:
case 3406:
case 3524:
case 2274:
case 523:
case 939:
case 3731:
case 2903:
case 850:
case 3811:
case 880:
case 2752:
case 3509:
case 1612:
case 2478:
case 973:
case 1038:
case 455:
case 1970:
case 3402:
case 4067:
case 780:
case 2148:
case 750:
case 3693:
case 3232:
case 1075:
case 3280:
case 3083:
case 3797:
case 3645:
case 449:
case 943:
case 161:
case 1268:
case 821:
case 2123:
case 2395:
case 2339:
case 2756:
case 1121:
case 1187:
case 4044:
case 2815:
case 2735:
case 2799:
case 3431:
case 920:
case 4023:
case 3396:
case 339:
case 1906:
case 3359:
case 190:
case 3169:
case 3770:
case 835:
case 3061:
case 373:
case 3432:
case 3736:
case 771:
case 351:
case 1122:
case 783:
case 3516:
case 2144:
case 2484:
case 1893:
case 2311:
case 4048:
case 3140:
case 2357:
case 539:
case 2167:
case 3401:
case 1468:
case 264:
case 2252:
case 2646:
case 573:
case 1264:
case 2591:
case 494:
case 2309:
case 2891:
case 2537:
case 3297:
case 3812:
case 1126:
case 2837:
case 3780:
case 3732:
case 343:
case 134:
case 1902:
case 1611:
case 320:
case 3392:
case 3539:
case 3595:
case 3895:
case 3839:
case 970:
case 543:
case 3719:
case 3543:
case 225:
case 3964:
case 1768:
case 871:
case 716:
case 520:
case 883:
case 3315:
case 3778:
case 3123:
case 1449:
case 3395:
case 3339:
case 1905:
case 4069:
case 1433:
case 755:
case 3799:
case 785:
case 3488:
case 1110:
case 1:
case 3756:
case 3452:
case 2219:
case 450:
case 1974:
case 833:
case 925:
case 3312:
case 1081:
case 270:
case 4040:
case 184:
case 2402:
case 600:
case 749:
case 3217:
case 2693:
case 345:
case 1125:
case 2811:
case 3788:
case 206:
case 3274:
case 559:
case 3435:
case 589:
case 1345:
case 2066:
case 676:
case 1733:
case 2968:
case 849:
case 2509:
case 1749:
case 1813:
case 3478:
case 2391:
case 3896:
case 359:
case 1071:
case 389:
case 3859:
case 1198:
case 2255:
case 2497:
case 3559:
case 2702:
case 2406:
case 1542:
case 2524:
case 240:
case 3316:
case 2073:
case 3507:
case 3807:
case 2270:
case 3256:
case 1703:
case 3642:
case 325:
case 2539:
case 1952:
case 3299:
case 1072:
case 2895:
case 894:
case 2839:
case 169:
case 1086:
case 2315:
case 2701:
case 441:
case 1541:
case 3405:
case 3065:
case 243:
case 435:
case 3613:
case 2512:
case 730:
case 3837:
case 3751:
case 220:
case 66:
case 2470:
case 2140:
case 989:
case 3357:
case 3167:
case 2401:
case 483:
case 1233:
case 2320:
case 3311:
case 1978:
case 830:
case 107:
case 3591:
case 195:
case 1076:
case 364:
case 1935:
case 1999:
case 3646:
case 3252:
case 1260:
case 2770:
case 2396:
case 1615:
case 239:
case 2816:
case 564:
case 2516:
case 273:
case 3324:
case 2480:
case 828:
case 168:
case 1096:
case 1248:
case 1686:
case 3571:
case 1979:
case 1059:
case 2214:
case 2153:
case 45:
case 957:
case 272:
case 3334:
case 1361:
case 3308:
case 2726:
case 3042:
case 987:
case 1151:
case 2418:
case 1007:
case 1672:
case 482:
case 2168:
case 60:
case 2382:
case 452:
case 4047:
case 1184:
case 2790:
case 3665:
case 1925:
case 2221:
case 27:
case 2376:
case 1676:
case 691:
case 3527:
case 2718:
case 3827:
case 167:
case 2426:
case 3046:
case 2538:
case 3298:
case 304:
case 1744:
case 988:
case 3494:
case 1630:
case 1658:
case 1092:
case 3279:
case 24:
case 2661:
case 1663:
case 1105:
case 3554:
case 3800:
case 2277:
case 3863:
case 3944:
case 2662:
case 3563:
case 2371:
case 3498:
case 2226:
case 1373:
case 2714:
case 2834:
case 878:
case 714:
case 2534:
case 1156:
case 748:
case 2721:
case 660:
case 115:
case 3582:
case 3530:
case 3558:
case 2290:
case 1199:
case 1135:
case 2093:
case 3858:
case 3882:
case 3576:
case 1681:
case 3876:
case 2477:
case 1723:
case 1178:
case 3304:
case 3338:
case 1865:
case 3779:
case 3160:
case 1994:
case 2381:
case 1037:
case 1383:
case 2666:
case 266:
case 83:
case 3489:
case 4053:
case 1423:
case 2777:
case 3133:
case 3572:
case 2673:
case 3886:
case 358:
case 2164:
case 832:
case 2300:
case 1671:
case 2354:
case 3725:
case 2421:
case 1634:
case 1921:
case 3490:
case 3372:
case 3529:
case 34:
case 3829:
case 542:
case 852:
case 3386:
case 338:
case 3277:
case 1862:
case 1562:
case 3804:
case 3850:
case 3426:
case 3538:
case 2298:
case 342:
case 3504:
case 1155:
case 2581:
case 2527:
case 113:
case 3718:
case 1136:
case 2827:
case 2881:
case 3875:
case 1914:
case 3575:
case 428:
case 1883:
case 85:
case 2948:
case 674:
case 88:
case 1057:
case 1977:
case 922:
case 156:
case 1866:
case 1101:
case 3168:
case 3330:
case 3358:
case 572:
case 2103:
case 3221:
case 37:
case 1119:
case 2013:
case 75:
case 618:
case 3214:
case 4033:
case 2871:
case 92:
case 3585:
case 3418:
case 1873:
case 782:
case 1573:
case 3885:
case 1024:
case 57:
case 372:
case 2334:
case 2308:
case 537:
case 2872:
case 1095:
case 2572:
case 3673:
case 2149:
case 1043:
case 3421:
case 288:
case 3300:
case 1102:
case 3414:
case 3381:
case 624:
case 2338:
case 94:
case 3147:
case 2350:
case 1028:
case 2779:
case 1926:
case 366:
case 2489:
case 2375:
case 3222:
case 2530:
case 2558:
case 432:
case 2830:
case 2882:
case 2710:
case 32:
case 1650:
case 2967:
case 2576:
case 287:
case 3940:
case 972:
case 896:
case 52:
case 2498:
case 3226:
case 477:
case 2863:
case 1922:
case 1861:
case 3834:
case 3808:
case 2479:
case 3508:
case 3534:
case 1629:
case 665:
case 3714:
case 1380:
case 3746:
case 2022:
case 517:
case 2134:
case 1407:
case 3163:
case 291:
case 1792:
case 2916:
case 3605:
case 642:
case 1237:
case 2636:
case 2303:
case 263:
case 2655:
case 3241:
case 1578:
case 493:
case 574:
case 4004:
case 4038:
case 4050:
case 64:
case 1715:
case 1556:
case 924:
case 7:
case 1835:
case 1301:
case 1599:
case 1535:
case 3182:
case 2601:
case 3684:
case 1492:
case 2847:
case 1165:
case 3560:
case 1707:
case 1355:
case 344:
case 202:
case 3446:
case 8:
case 1603:
case 2619:
case 2943:
case 2564:
case 318:
case 965:
case 1588:
case 1552:
case 2939:
case 884:
case 1720:
case 854:
case 1852:
case 20:
case 3651:
case 2245:
case 2090:
case 3172:
case 3617:
case 3533:
case 1737:
case 1817:
case 130:
case 1292:
case 3959:
case 1517:
case 2185:
case 1633:
case 1397:
case 3171:
case 807:
case 3652:
case 3098:
case 324:
case 1660:
case 2911:
case 974:
case 3920:
case 3803:
case 599:
case 2602:
case 2077:
case 3503:
case 2868:
case 769:
case 2445:
case 708:
case 524:
case 1913:
case 1584:
case 1884:
case 918:
case 365:
case 3089:
case 1207:
case 1946:
case 3635:
case 1296:
case 1302:
case 869:
case 129:
case 3127:
case 2150:
case 2138:
case 2360:
case 4008:
case 2793:
case 3010:
case 565:
case 1805:
case 3364:
case 1331:
case 3441:
case 3154:
case 2697:
case 2333:
case 795:
case 2606:
case 707:
case 260:
case 3915:
case 2349:
case 1791:
case 944:
case 3995:
case 1711:
case 3943:
case 2186:
case 3864:
case 3564:
case 4071:
case 2833:
case 2172:
case 2617:
case 3632:
case 502:
case 30:
case 2849:
case 1374:
case 893:
case 2549:
case 3245:
case 2684:
case 2094:
case 1216:
case 1668:
case 50:
case 1802:
case 302:
case 244:
case 3026:
case 2742:
case 1502:
case 2560:
case 2860:
case 1993:
case 1409:
case 2241:
case 1945:
case 3636:
case 217:
case 2176:
case 3670:
case 1457:
case 4027:
case 1239:
case 4081:
case 2182:
case 2130:
case 454:
case 2991:
case 1411:
case 484:
case 3108:
case 1161:
case 1351:
case 2674:
case 3018:
case 180:
case 2746:
case 2442:
case 4:
case 1424:
case 150:
case 1897:
case 1212:
case 1597:
case 1228:
case 3916:
case 1069:
case 2010:
case 2364:
case 3087:
case 3745:
case 2213:
case 1162:
case 834:
case 1352:
case 3793:
case 657:
case 1388:
case 2915:
case 3349:
case 3333:
case 1443:
case 495:
case 1570:
case 407:
case 3175:
case 2635:
case 1183:
case 1870:
case 1224:
case 790:
case 81:
case 1555:
case 2992:
case 3138:
case 2347:
case 3104:
case 171:
case 3014:
case 1428:
case 4030:
case 153:
case 2181:
case 2803:
case 1819:
case 3602:
case 1378:
case 658:
case 890:
case 2920:
case 71:
case 1795:
case 1647:
case 3493:
case 3909:
case 1801:
case 1399:
case 3445:
case 991:
case 2741:
case 1501:
case 1173:
case 1880:
case 712:
case 1728:
case 1832:
case 2959:
case 299:
case 141:
case 1416:
case 734:
case 2688:
case 2652:
case 2098:
case 224:
case 1664:
case 1485:
case 962:
case 856:
case 886:
case 3473:
case 2544:
case 3116:
case 1704:
case 1750:
case 1822:
case 1738:
case 1522:
case 1379:
case 3006:
case 1961:
case 3908:
case 3569:
case 546:
case 3783:
case 3869:
case 500:
case 2982:
case 2078:
case 675:
case 96:
case 2191:
case 1325:
case 346:
case 3840:
case 2976:
case 1145:
case 2867:
case 205:
case 297:
case 3540:
case 1208:
case 3483:
case 1234:
case 576:
case 631:
case 1389:
case 182:
case 1526:
case 1826:
case 4020:
case 926:
case 152:
case 3348:
case 1047:
case 3128:
case 3773:
case 689:
case 756:
case 3766:
case 3323:
case 1890:
case 409:
case 1590:
case 645:
case 1429:
case 4059:
case 298:
case 15:
case 2986:
case 3143:
case 903:
case 2017:
case 3080:
case 3690:
case 2107:
case 3461:
case 1434:
case 2051:
case 1250:
case 3985:
case 1204:
case 2369:
case 1973:
case 219:
case 3019:
case 196:
case 1877:
case 3262:
case 2084:
case 3001:
case 2192:
case 3904:
case 1285:
case 4091:
case 2927:
case 976:
case 436:
case 415:
case 3975:
case 1734:
case 526:
case 89:
case 701:
case 2465:
case 1887:
case 1821:
case 2115:
case 1587:
case 3929:
case 326:
case 503:
case 2954:
case 3266:
case 2823:
case 2523:
case 3622:
case 276:
case 2031:
case 867:
case 2462:
case 4024:
case 1141:
case 3088:
case 3052:
case 1049:
case 1033:
case 1258:
case 1230:
case 768:
case 709:
case 4009:
case 640:
case 3625:
case 1894:
case 1481:
case 1427:
case 4057:
case 2773:
case 456:
case 598:
case 2002:
case 2112:
case 4011:
case 3137:
case 1648:
case 1286:
case 3191:
case 868:
case 128:
case 3958:
case 2614:
case 3982:
case 2540:
case 3035:
case 246:
case 3544:
case 2006:
case 2473:
case 1727:
case 1781:
case 3265:
case 2569:
case 1471:
case 2783:
case 670:
case 2934:
case 505:
case 3610:
case 2908:
case 2621:
case 2687:
case 1758:
case 1782:
case 715:
case 1810:
case 410:
case 401:
case 1644:
case 3523:
case 3900:
case 3074:
case 1667:
case 651:
case 3927:
case 3981:
case 1889:
case 673:
case 2070:
case 2938:
case 2950:
case 2761:
case 132:
case 1271:
case 203:
case 2036:
case 114:
case 2055:
case 639:
case 2975:
case 1476:
case 1003:
case 2626:
case 1200:
case 2109:
case 262:
case 2001:
case 2111:
case 4012:
case 3120:
case 1786:
case 1482:
case 1458:
case 4028:
case 1430:
case 2157:
case 3084:
case 2367:
case 2124:
case 620:
case 1318:
case 3971:
case 2032:
case 2080:
case 2283:
case 905:
case 643:
case 1281:
case 1227:
case 3369:
case 4043:
case 2335:
case 2801:
case 2399:
case 949:
case 1741:
case 3913:
case 443:
case 3884:
case 235:
case 2378:
case 2795:
case 420:
case 2819:
case 1803:
case 3215:
case 2743:
case 2519:
case 3397:
case 3942:
case 1246:
case 1907:
case 1098:
case 124:
case 3551:
case 1996:
case 3737:
case 2416:
case 2712:
case 2173:
case 330:
case 2728:
case 692:
case 3517:
case 3306:
case 2532:
case 1959:
case 1079:
case 2580:
case 439:
case 2211:
case 2257:
case 2495:
case 764:
case 1915:
case 3574:
case 529:
case 594:
case 2162:
case 2388:
case 1441:
case 1010:
case 3805:
case 2209:
case 3505:
case 1213:
case 1100:
case 283:
case 3296:
case 3302:
case 1127:
case 3048:
case 2836:
case 1347:
case 2716:
case 2412:
case 3259:
case 3437:
case 1678:
case 165:
case 825:
case 610:
case 1242:
case 1089:
case 3946:
case 2183:
case 2870:
case 355:
case 3856:
case 1991:
case 3067:
case 3715:
case 2243:
case 3835:
case 3301:
case 549:
case 1130:
case 3599:
case 2945:
case 889:
case 859:
case 1176:
case 1413:
case 2993:
case 2409:
case 613:
case 2897:
case 3237:
case 1605:
case 585:
case 280:
case 3332:
case 3044:
case 250:
case 4062:
case 2161:
case 2351:
case 929:
case 1713:
case 1172:
case 1617:
case 1533:
case 2831:
case 2757:
case 1186:
case 745:
case 118:
case 2653:
case 3588:
case 3852:
case 440:
case 2711:
case 1560:
case 3165:
case 3355:
case 2724:
case 333:
case 731:
case 1742:
case 759:
case 221:
case 789:
case 3492:
case 3796:
case 1684:
case 1150:
case 773:
case 3412:
case 3555:
case 2437:
case 1360:
case 371:
case 3536:
case 2302:
case 3428:
case 3836:
case 353:
case 229:
case 1175:
case 294:
case 2946:
case 3183:
case 464:
case 3224:
case 3439:
case 553:
case 2791:
case 2023:
case 1333:
case 615:
case 2220:
case 571:
case 160:
case 1021:
case 2805:
case 3209:
case 1745:
case 843:
case 921:
case 1793:
case 1553:
case 516:
case 720:
case 2942:
case 1631:
case 1924:
case 3880:
case 230:
case 3832:
case 2292:
case 3532:
case 3580:
case 2551:
case 2737:
case 3416:
case 743:
case 4065:
case 3356:
case 2584:
case 316:
case 873:
case 2884:
case 881:
case 3399:
case 3501:
case 3819:
case 839:
case 1602:
case 3743:
case 950:
case 3739:
case 3647:
case 1619:
case 1847:
case 2165:
case 1547:
case 2707:
case 2355:
case 1912:
case 723:
case 1928:
case 321:
case 1601:
case 3668:
case 971:
case 459:
case 1632:
case 489:
case 1293:
case 10:
case 3374:
case 1245:
case 2588:
case 2720:
case 2852:
case 2888:
case 3711:
case 3305:
case 431:
case 1564:
case 935:
case 3597:
case 2459:
case 2237:
case 3212:
case 3228:
case 667:
case 1916:
case 2496:
case 1108:
case 3161:
case 1134:
case 3317:
case 2380:
case 3506:
case 2332:
case 475:
case 2835:
case 2301:
case 3457:
case 3239:
case 3295:
case 840:
case 3411:
case 255:
case 3040:
case 2420:
case 3384:
case 2556:
case 2715:
case 3243:
case 580:
case 1303:
case 1636:
case 941:
case 2482:
case 2458:
case 2430:
case 1367:
case 3229:
case 1111:
case 2525:
case 1019:
case 1626:
case 822:
case 1109:
case 162:
case 2254:
case 1262:
case 669:
case 247:
case 2598:
case 1985:
case 3204:
case 3053:
case 3973:
case 2898:
case 766:
case 2281:
case 2227:
case 458:
case 1032:
case 3275:
case 2579:
case 2322:
case 1461:
case 3434:
case 1344:
case 1690:
case 596:
case 277:
case 952:
case 2390:
case 2810:
case 3587:
case 695:
case 1929:
case 2782:
case 3983:
case 1055:
case 3814:
case 1975:
case 214:
case 103:
case 1761:
case 95:
case 3708:
case 1273:
case 722:
case 2763:
case 2889:
case 2589:
case 1938:
case 3285:
case 457:
case 3394:
case 1762:
case 3325:
case 146:
case 3193:
case 1840:
case 4046:
case 872:
case 1540:
case 1614:
case 6:
case 2648:
case 1097:
case 87:
case 1783:
case 2471:
case 3485:
case 2727:
case 3818:
case 1116:
case 3704:
case 3738:
case 100:
case 1006:
case 3522:
case 111:
case 77:
case 2033:
case 1323:
case 737:
case 2282:
case 3590:
case 2230:
case 1139:
case 1195:
case 3429:
case 2049:
case 38:
case 552:
case 1143:
case 2454:
case 2400:
case 4042:
case 227:
case 176:
case 1462:
case 1677:
case 838:
case 58:
case 55:
case 3450:
case 3438:
case 1112:
case 352:
case 1128:
case 1773:
case 772:
case 2427:
case 3047:
case 2314:
case 2771:
case 1261:
case 3234:
case 3475:
case 4013:
case 1548:
case 2734:
case 577:
case 3326:
case 4093:
case 858:
case 690:
case 1848:
case 42:
case 4045:
case 2814:
case 314:
case 1927:
case 2394:
case 2640:
case 3889:
case 3589:
case 2285:
case 1192:
case 787:
case 422:
case 2962:
case 1523:
case 757:
case 532:
case 1900:
case 1074:
case 2669:
case 348:
case 3758:
case 3486:
case 3782:
case 3810:
case 1005:
case 3510:
case 2521:
case 857:
case 887:
case 3281:
case 2238:
case 612:
case 1159:
case 2973:
case 1369:
case 3898:
case 928:
case 3142:
case 2275:
case 1017:
case 3322:
case 1765:
case 547:
case 2408:
case 3825:
case 61:
case 1120:
case 788:
case 2229:
case 3482:
case 3458:
case 3430:
case 1084:
case 3476:
case 466:
case 347:
case 3003:
case 2877:
case 3254:
case 296:
case 3481:
case 3427:
case 2047:
case 3060:
case 3314:
case 282:
case 2526:
case 2404:
case 437:
case 2389:
case 948:
case 3771:
case 2208:
case 3594:
case 2475:
case 2429:
case 198:
case 28:
case 1986:
case 932:
case 3033:
case 2890:
case 3258:
case 2590:
case 2064:
case 2310:
case 3400:
case 804:
case 1088:
case 1972:
case 3141:
case 2775:
case 978:
case 44:
case 1610:
case 2704:
case 2750:
case 1544:
case 1844:
case 2518:
case 2818:
case 1567:
case 197:
case 1867:
case 1099:
case 3272:
case 1035:
case 2325:
case 1689:
case 3648:
case 3286:
case 328:
case 1191:
case 1930:
case 1982:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760418002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,];
var gg_b = "1760418002/";

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
