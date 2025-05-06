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
case 3656:
case 1576:
case 2631:
case 1854:
case 3077:
case 3546:
case 386:
case 3523:
case 2258:
case 2683:
case 1684:
case 2028:
case 1311:
case 3079:
case 3403:
case 447:
case 2449:
case 2480:
case 973:
case 1897:
case 2039:
case 2308:
case 3336:
case 1590:
case 2763:
case 1428:
case 542:
case 1551:
case 2037:
case 1764:
case 2225:
case 428:
case 1508:
case 550:
case 1641:
case 375:
case 1732:
case 2814:
case 1028:
case 502:
case 2455:
case 3323:
case 2311:
case 1853:
case 1376:
case 2439:
case 974:
case 2049:
case 2080:
case 3404:
case 1201:
case 1270:
case 1631:
case 869:
case 2437:
case 1683:
case 3240:
case 1258:
case 85:
case 628:
case 3289:
case 2764:
case 2551:
case 1390:
case 2218:
case 3536:
case 1225:
case 3616:
case 2732:
case 3003:
case 407:
case 1039:
case 896:
case 530:
case 1308:
case 724:
case 647:
case 1351:
case 1415:
case 4012:
case 2590:
case 2350:
case 861:
case 3888:
case 1859:
case 398:
case 1687:
case 2043:
case 2026:
case 1835:
case 853:
case 1857:
case 3074:
case 1640:
case 3658:
case 4065:
case 3283:
case 1044:
case 2095:
case 1434:
case 1550:
case 3231:
case 2391:
case 2444:
case 452:
case 1495:
case 2200:
case 2062:
case 2585:
case 1506:
case 834:
case 440:
case 2306:
case 1385:
case 3009:
case 1033:
case 767:
case 1443:
case 2298:
case 3529:
case 2857:
case 2578:
case 3160:
case 3407:
case 2640:
case 1256:
case 3527:
case 3348:
case 537:
case 2835:
case 3284:
case 400:
case 2081:
case 2385:
case 2894:
case 2310:
case 865:
case 432:
case 3875:
case 2495:
case 2767:
case 1510:
case 1630:
case 1200:
case 782:
case 3474:
case 3618:
case 888:
case 2670:
case 3391:
case 2327:
case 2601:
case 2548:
case 3095:
case 2283:
case 40:
case 1160:
case 1407:
case 720:
case 1820:
case 2329:
case 279:
case 763:
case 1284:
case 1409:
case 476:
case 1527:
case 534:
case 1348:
case 751:
case 3298:
case 1875:
case 681:
case 2009:
case 857:
case 3845:
case 3306:
case 2696:
case 1474:
case 1618:
case 2625:
case 3630:
case 735:
case 3510:
case 553:
case 468:
case 2073:
case 179:
case 3835:
case 2409:
case 3687:
case 2348:
case 1888:
case 685:
case 198:
case 2527:
case 1231:
case 1966:
case 1548:
case 1327:
case 1658:
case 3689:
case 668:
case 2160:
case 1283:
case 3857:
case 1074:
case 3506:
case 992:
case 2474:
case 3767:
case 3495:
case 2538:
case 2241:
case 533:
case 1338:
case 3033:
case 3443:
case 3894:
case 1696:
case 764:
case 3376:
case 1287:
case 821:
case 850:
case 2079:
case 1346:
case 3683:
case 1289:
case 286:
case 2546:
case 3511:
case 2968:
case 748:
case 3201:
case 3270:
case 3631:
case 3742:
case 2656:
case 1404:
case 3814:
case 53:
case 1477:
case 1536:
case 2230:
case 3447:
case 3390:
case 3351:
case 3763:
case 3055:
case 3296:
case 2698:
case 1821:
case 3480:
case 2240:
case 3047:
case 76:
case 3437:
case 1546:
case 1968:
case 186:
case 1324:
case 830:
case 3854:
case 1077:
case 2404:
case 604:
case 643:
case 3311:
case 444:
case 2323:
case 2524:
case 1079:
case 403:
case 112:
case 3684:
case 1336:
case 2479:
case 1698:
case 2821:
case 2003:
case 825:
case 3732:
case 175:
case 3508:
case 708:
case 3641:
case 1671:
case 3899:
case 689:
case 1230:
case 3551:
case 3764:
case 2948:
case 2566:
case 138:
case 1260:
case 3762:
case 362:
case 900:
case 1927:
case 791:
case 710:
case 1366:
case 3726:
case 897:
case 3743:
case 3469:
case 646:
case 932:
case 3198:
case 209:
case 2522:
case 1141:
case 2774:
case 1322:
case 47:
case 3910:
case 1938:
case 249:
case 606:
case 2184:
case 158:
case 446:
case 3991:
case 1566:
case 2260:
case 3067:
case 387:
case 1131:
case 2929:
case 2141:
case 3906:
case 952:
case 4005:
case 3744:
case 283:
case 940:
case 795:
case 1522:
case 222:
case 673:
case 3739:
case 1703:
case 890:
case 474:
case 3755:
case 2568:
case 2946:
case 2472:
case 3911:
case 2923:
case 3170:
case 241:
case 2704:
case 3158:
case 205:
case 145:
case 2130:
case 3125:
case 1261:
case 1936:
case 3464:
case 2282:
case 717:
case 2779:
case 3196:
case 3865:
case 4075:
case 799:
case 778:
case 3660:
case 872:
case 2703:
case 947:
case 7:
case 2924:
case 2187:
case 815:
case 1282:
case 473:
case 766:
case 3780:
case 674:
case 59:
case 18:
case 2072:
case 2261:
case 3747:
case 1660:
case 1976:
case 3704:
case 4045:
case 0:
case 341:
case 3923:
case 2170:
case 3568:
case 3946:
case 1064:
case 4019:
case 713:
case 2739:
case 944:
case 322:
case 4093:
case 1780:
case 2865:
case 677:
case 1990:
case 2728:
case 1463:
case 1747:
case 418:
case 3777:
case 590:
case 511:
case 1118:
case 1908:
case 2125:
case 2432:
case 2042:
case 1892:
case 1063:
case 3924:
case 3368:
case 1739:
case 3189:
case 515:
case 2660:
case 2032:
case 4094:
case 1911:
case 989:
case 1737:
case 2951:
case 2747:
case 1464:
case 301:
case 2908:
case 280:
case 345:
case 943:
case 904:
case 856:
case 714:
case 4057:
case 2990:
case 1728:
case 981:
case 3709:
case 4014:
case 1781:
case 893:
case 3131:
case 2762:
case 3707:
case 3183:
case 3566:
case 94:
case 3402:
case 2171:
case 492:
case 2100:
case 3774:
case 1906:
case 1116:
case 4053:
case 2198:
case 2682:
case 2743:
case 3929:
case 2978:
case 4013:
case 1762:
case 3002:
case 3260:
case 2950:
case 338:
case 2991:
case 3184:
case 976:
case 2781:
case 1198:
case 3773:
case 470:
case 4054:
case 1682:
case 1726:
case 726:
case 985:
case 1852:
case 3938:
case 1910:
case 2906:
case 3322:
case 2681:
case 3521:
case 2314:
case 2890:
case 1487:
case 2203:
case 841:
case 3836:
case 1204:
case 1397:
case 1440:
case 1313:
case 1514:
case 1662:
case 211:
case 2554:
case 2089:
case 3247:
case 3132:
case 999:
case 3164:
case 3824:
case 2087:
case 3249:
case 1626:
case 1992:
case 1354:
case 1279:
case 1172:
case 1851:
case 2030:
case 2514:
case 2313:
case 3142:
case 2397:
case 1808:
case 1681:
case 2965:
case 39:
case 623:
case 1890:
case 2399:
case 707:
case 660:
case 917:
case 2643:
case 2992:
case 845:
case 3163:
case 2553:
case 2279:
case 2354:
case 3674:
case 3418:
case 1761:
case 1430:
case 215:
case 1876:
case 3058:
case 3305:
case 3001:
case 3823:
case 3838:
case 393:
case 2431:
case 62:
case 3016:
case 2041:
case 858:
case 752:
case 1517:
case 2760:
case 2345:
case 1209:
case 2317:
case 1639:
case 884:
case 995:
case 3281:
case 740:
case 2273:
case 1357:
case 3520:
case 2680:
case 1335:
case 2878:
case 297:
case 1441:
case 3829:
case 3388:
case 2850:
case 2647:
case 3400:
case 2912:
case 3471:
case 2102:
case 2545:
case 2639:
case 2209:
case 1594:
case 3098:
case 2637:
case 482:
case 3262:
case 2952:
case 1041:
case 1345:
case 1760:
case 3234:
case 3604:
case 2394:
case 587:
case 2335:
case 3677:
case 3416:
case 2031:
case 1557:
case 2274:
case 42:
case 1102:
case 1912:
case 1647:
case 910:
case 2628:
case 1084:
case 667:
case 700:
case 1273:
case 3588:
case 1559:
case 2357:
case 883:
case 1535:
case 1649:
case 926:
case 2603:
case 3317:
case 3345:
case 1604:
case 862:
case 435:
case 2456:
case 3041:
case 768:
case 3431:
case 293:
case 631:
case 1262:
case 2167:
case 3102:
case 2471:
case 3912:
case 1848:
case 584:
case 1677:
case 1416:
case 1320:
case 397:
case 2244:
case 1226:
case 2169:
case 1243:
case 3680:
case 664:
case 3649:
case 451:
case 2520:
case 2498:
case 463:
case 1679:
case 2827:
case 3891:
case 3273:
case 420:
case 655:
case 3559:
case 3615:
case 1456:
case 3517:
case 2234:
case 1016:
case 2375:
case 1838:
case 3952:
case 3207:
case 2000:
case 2262:
case 3810:
case 3637:
case 887:
case 464:
case 1575:
case 1281:
case 3655:
case 2098:
case 455:
case 1233:
case 3209:
case 3545:
case 2226:
case 3357:
case 781:
case 1827:
case 2679:
case 1167:
case 2848:
case 1388:
case 431:
case 2320:
case 1829:
case 2677:
case 2056:
case 2295:
case 1142:
case 1321:
case 1607:
case 3851:
case 659:
case 3599:
case 2470:
case 3172:
case 2401:
case 427:
case 1239:
case 3203:
case 3890:
case 3633:
case 1609:
case 914:
case 3513:
case 3681:
case 704:
case 1255:
case 743:
case 1096:
case 439:
case 2673:
case 2496:
case 1228:
case 2280:
case 1586:
case 236:
case 789:
case 1070:
case 1823:
case 1305:
case 2132:
case 1058:
case 2247:
case 505:
case 3089:
case 2425:
case 3554:
case 4066:
case 372:
case 3399:
case 2609:
case 1521:
case 3965:
case 501:
case 1458:
case 2321:
case 3440:
case 3313:
case 648:
case 3489:
case 2142:
case 3030:
case 3514:
case 3662:
case 3204:
case 3634:
case 1836:
case 1401:
case 1470:
case 256:
case 3811:
case 2070:
case 3277:
case 2001:
case 1164:
case 1247:
case 1132:
case 46:
case 1425:
case 2674:
case 1673:
case 3279:
case 744:
case 3782:
case 913:
case 1280:
case 1249:
case 3626:
case 3643:
case 2586:
case 1824:
case 2133:
case 133:
case 3352:
case 706:
case 1822:
case 2181:
case 916:
case 3994:
case 1756:
case 261:
case 982:
case 4024:
case 2672:
case 77:
case 1134:
case 1700:
case 3664:
case 3512:
case 92:
case 2716:
case 3741:
case 3202:
case 3060:
case 2267:
case 3935:
case 1798:
case 410:
case 2920:
case 695:
case 598:
case 188:
case 1988:
case 3460:
case 3993:
case 3107:
case 3917:
case 161:
case 153:
case 2134:
case 3783:
case 610:
case 4046:
case 4023:
case 233:
case 967:
case 2822:
case 3945:
case 337:
case 2798:
case 1920:
case 2988:
case 1269:
case 3312:
case 2143:
case 1144:
case 1716:
case 3272:
case 3789:
case 575:
case 3365:
case 1242:
case 1137:
case 321:
case 1155:
case 3787:
case 924:
case 15:
case 2921:
case 3997:
case 3913:
case 3103:
case 4029:
case 169:
case 1796:
case 1263:
case 2149:
case 3482:
case 3669:
case 2905:
case 512:
case 4038:
case 1868:
case 2147:
case 3392:
case 2602:
case 2264:
case 3954:
case 466:
case 1921:
case 25:
case 3565:
case 3082:
case 773:
case 3104:
case 3914:
case 2137:
case 2770:
case 2868:
case 1232:
case 325:
case 1147:
case 3177:
case 571:
case 1718:
case 499:
case 4:
case 3953:
case 2796:
case 960:
case 2128:
case 3592:
case 302:
case 3179:
case 2986:
case 886:
case 2103:
case 2997:
case 1565:
case 1082:
case 2787:
case 4091:
case 221:
case 908:
case 2365:
case 2740:
case 812:
case 2061:
case 2954:
case 1461:
case 1730:
case 2667:
case 3147:
case 875:
case 1592:
case 3905:
case 2669:
case 614:
case 4006:
case 1999:
case 2914:
case 3758:
case 1789:
case 1365:
case 1272:
case 927:
case 369:
case 35:
case 2565:
case 2082:
case 1997:
case 1913:
case 1103:
case 142:
case 871:
case 3986:
case 2592:
case 202:
case 939:
case 3263:
case 2953:
case 3725:
case 1954:
case 2730:
case 396:
case 3868:
case 1783:
case 1552:
case 898:
case 1993:
case 1917:
case 964:
case 2994:
case 1945:
case 2784:
case 3133:
case 1109:
case 626:
case 1663:
case 2959:
case 334:
case 4008:
case 2173:
case 137:
case 257:
case 1174:
case 2957:
case 3716:
case 2741:
case 4090:
case 2664:
case 931:
case 1994:
case 4011:
case 2783:
case 3134:
case 2552:
case 935:
case 2107:
case 1632:
case 1060:
case 41:
case 1957:
case 2174:
case 1512:
case 951:
case 2663:
case 3126:
case 388:
case 963:
case 237:
case 1785:
case 1369:
case 2860:
case 1710:
case 969:
case 2944:
case 3502:
case 1995:
case 1367:
case 1926:
case 1943:
case 3159:
case 518:
case 1188:
case 874:
case 2120:
case 3422:
case 3135:
case 996:
case 4089:
case 3194:
case 2981:
case 3727:
case 2791:
case 2933:
case 4087:
case 339:
case 3729:
case 260:
case 223:
case 1962:
case 3302:
case 2367:
case 93:
case 308:
case 1120:
case 4030:
case 1860:
case 3974:
case 1706:
case 224:
case 2995:
case 472:
case 2710:
case 1567:
case 1750:
case 160:
case 3193:
case 577:
case 3907:
case 3117:
case 2665:
case 415:
case 1933:
case 3909:
case 3119:
case 1186:
case 1364:
case 2105:
case 1928:
case 182:
case 592:
case 335:
case 1332:
case 2949:
case 4041:
case 2708:
case 3154:
case 933:
case 2751:
case 2947:
case 2363:
case 116:
case 3572:
case 1652:
case 3199:
case 619:
case 1937:
case 988:
case 2861:
case 806:
case 954:
case 2121:
case 1939:
case 2342:
case 1882:
case 965:
case 1955:
case 3977:
case 167:
case 1751:
case 3068:
case 364:
case 3979:
case 697:
case 282:
case 1790:
case 1105:
case 2364:
case 953:
case 3292:
case 1980:
case 1949:
case 4031:
case 1342:
case 2882:
case 4083:
case 22:
case 2955:
case 2652:
case 3746:
case 2542:
case 3904:
case 1861:
case 506:
case 3363:
case 3564:
case 3751:
case 3947:
case 3532:
case 3708:
case 1292:
case 694:
case 235:
case 57:
case 3790:
case 3915:
case 2724:
case 3342:
case 2903:
case 2113:
case 2197:
case 131:
case 798:
case 251:
case 3776:
case 1904:
case 892:
case 2199:
case 263:
case 937:
case 2572:
case 135:
case 3332:
case 3186:
case 1736:
case 255:
case 1154:
case 2977:
case 151:
case 2114:
case 3542:
case 546:
case 163:
case 494:
case 4056:
case 3882:
case 3939:
case 693:
case 1903:
case 1113:
case 231:
case 3569:
case 656:
case 4018:
case 2422:
case 1302:
case 775:
case 2502:
case 3567:
case 2738:
case 2157:
case 1193:
case 1907:
case 1117:
case 902:
case 69:
case 1748:
case 1119:
case 1909:
case 3175:
case 2727:
case 3791:
case 3981:
case 786:
case 925:
case 127:
case 1502:
case 2066:
case 1157:
case 3785:
case 1212:
case 3369:
case 49:
case 1135:
case 1973:
case 4025:
case 1422:
case 208:
case 950:
case 877:
case 2909:
case 1727:
case 456:
case 148:
case 4070:
case 4001:
case 2022:
case 4058:
case 2145:
case 1194:
case 3665:
case 2117:
case 3962:
case 139:
case 1729:
case 2748:
case 3934:
case 2254:
case 3328:
case 919:
case 688:
case 195:
case 1858:
case 1577:
case 2620:
case 461:
case 3205:
case 3549:
case 3635:
case 2024:
case 665:
case 568:
case 3659:
case 1688:
case 1424:
case 3337:
case 3221:
case 2297:
case 2304:
case 1165:
case 210:
case 3008:
case 1303:
case 633:
case 2299:
case 3051:
case 1768:
case 434:
case 3286:
case 1620:
case 54:
case 2192:
case 3347:
case 3490:
case 2688:
case 2046:
case 1254:
case 2801:
case 3380:
case 2858:
case 634:
case 3349:
case 3408:
case 2577:
case 2504:
case 2303:
case 3942:
case 3693:
case 488:
case 749:
case 454:
case 1297:
case 1213:
case 661:
case 465:
case 832:
case 1503:
case 653:
case 2896:
case 43:
case 3969:
case 2374:
case 2027:
case 2235:
case 3410:
case 78:
case 1438:
case 3050:
case 2029:
case 972:
case 1373:
case 3078:
case 3485:
case 217:
case 1856:
case 1507:
case 3841:
case 3006:
case 2038:
case 828:
case 2448:
case 313:
case 1217:
case 1871:
case 1800:
case 722:
case 1245:
case 705:
case 3334:
case 1509:
case 3533:
case 2294:
case 178:
case 3581:
case 199:
case 1898:
case 1219:
case 3697:
case 1112:
case 1257:
case 266:
case 2438:
case 314:
case 3831:
case 469:
case 2574:
case 117:
case 2856:
case 3288:
case 1573:
case 3653:
case 2722:
case 701:
case 911:
case 3543:
case 745:
case 1294:
case 2509:
case 807:
case 2245:
case 496:
case 1621:
case 3478:
case 3085:
case 3614:
case 2:
case 1816:
case 2152:
case 3450:
case 1448:
case 503:
case 2800:
case 3534:
case 317:
case 2485:
case 1406:
case 1831:
case 2654:
case 602:
case 99:
case 2544:
case 1595:
case 3112:
case 3902:
case 442:
case 2410:
case 2326:
case 3235:
case 2884:
case 1543:
case 1526:
case 1288:
case 1653:
case 4061:
case 956:
case 2275:
case 1491:
case 3294:
case 2533:
case 2699:
case 1333:
case 1534:
case 1010:
case 213:
case 1450:
case 1381:
case 1478:
case 1085:
case 2526:
case 2543:
case 1395:
case 2344:
case 780:
case 844:
case 3722:
case 803:
case 2288:
case 1969:
case 1078:
case 1485:
case 507:
case 4082:
case 3574:
case 2831:
case 1654:
case 3373:
case 214:
case 1050:
case 1410:
case 1343:
case 2883:
case 2595:
case 1544:
case 3293:
case 2534:
case 3217:
case 2010:
case 3871:
case 2333:
case 1699:
case 2450:
case 3152:
case 113:
case 642:
case 2381:
case 3:
case 2478:
case 2085:
case 3507:
case 936:
case 3219:
case 1697:
case 1613:
case 399:
case 3898:
case 2491:
case 378:
case 3245:
case 1334:
case 650:
case 3509:
case 1347:
case 1490:
case 1963:
case 552:
case 2549:
case 2635:
case 1286:
case 3377:
case 126:
case 2657:
case 1408:
case 1349:
case 1451:
case 3379:
case 637:
case 3423:
case 3446:
case 1537:
case 629:
case 3299:
case 762:
case 1830:
case 2008:
case 868:
case 4060:
case 2694:
case 3304:
case 457:
case 1539:
case 2221:
case 2090:
case 885:
case 2337:
case 1619:
case 1657:
case 226:
case 1932:
case 2380:
case 1840:
case 3858:
case 1328:
case 1964:
case 2315:
case 3870:
case 3801:
case 3046:
case 3253:
case 3579:
case 1659:
case 2963:
case 2347:
case 1887:
case 2490:
case 1515:
case 1205:
case 993:
case 3896:
case 2645:
case 787:
case 1090:
case 3424:
case 2555:
case 3768:
case 1411:
case 1051:
case 84:
case 2617:
case 3303:
case 2693:
case 437:
case 2476:
case 3504:
case 1008:
case 1735:
case 2222:
case 3788:
case 2052:
case 3110:
case 3971:
case 4028:
case 1757:
case 1941:
case 1560:
case 2717:
case 2793:
case 4039:
case 107:
case 1012:
case 304:
case 945:
case 1984:
case 4037:
case 1794:
case 228:
case 922:
case 1052:
case 303:
case 147:
case 4080:
case 3916:
case 3106:
case 715:
case 3191:
case 2794:
case 2869:
case 1360:
case 878:
case 772:
case 2560:
case 1717:
case 1983:
case 514:
case 2452:
case 1148:
case 98:
case 1136:
case 376:
case 1754:
case 1561:
case 938:
case 30:
case 2582:
case 797:
case 4095:
case 4034:
case 252:
case 810:
case 1124:
case 983:
case 1797:
case 1713:
case 1465:
case 2714:
case 1940:
case 1832:
case 3901:
case 132:
case 1582:
case 1065:
case 984:
case 51:
case 1361:
case 3190:
case 895:
case 4044:
case 3705:
case 3872:
case 2136:
case 3918:
case 2561:
case 1930:
case 2382:
case 3176:
case 2989:
case 4081:
case 526:
case 719:
case 2864:
case 909:
case 4033:
case 1863:
case 1092:
case 152:
case 2987:
case 34:
case 2713:
case 3721:
case 1190:
case 987:
case 4074:
case 3361:
case 3753:
case 2622:
case 2996:
case 3582:
case 181:
case 591:
case 1918:
case 1108:
case 479:
case 2925:
case 1151:
case 4009:
case 3123:
case 2901:
case 2111:
case 2666:
case 3268:
case 1176:
case 285:
case 4007:
case 3092:
case 3863:
case 352:
case 1925:
case 4073:
case 3754:
case 962:
case 2705:
case 2190:
case 794:
case 10:
case 3797:
case 24:
case 3465:
case 168:
case 3864:
case 679:
case 3799:
case 81:
case 1901:
case 1958:
case 3832:
case 698:
case 595:
case 185:
case 1106:
case 2185:
case 2971:
case 412:
case 103:
case 3052:
case 289:
case 1720:
case 4004:
case 3745:
case 980:
case 3719:
case 243:
case 2668:
case 3266:
case 675:
case 3759:
case 3735:
case 2720:
case 189:
case 5:
case 2916:
case 3138:
case 143:
case 3452:
case 3012:
case 79:
case 3867:
case 1956:
case 4003:
case 307:
case 2775:
case 3792:
case 3855:
case 2596:
case 3982:
case 683:
case 1803:
case 1021:
case 3685:
case 2804:
case 734:
case 1396:
case 563:
case 520:
case 1276:
case 649:
case 3499:
case 3387:
case 2570:
case 2648:
case 206:
case 3223:
case 3246:
case 2211:
case 3497:
case 1358:
case 2421:
case 3340:
case 638:
case 27:
case 753:
case 1627:
case 1301:
case 1370:
case 1005:
case 3828:
case 1804:
case 1525:
case 2396:
case 2518:
case 1405:
case 765:
case 2325:
case 1596:
case 816:
case 2290:
case 3097:
case 3013:
case 3330:
case 17:
case 3849:
case 684:
case 1421:
case 1086:
case 2370:
case 1879:
case 2627:
case 3587:
case 2005:
case 3847:
case 2276:
case 564:
case 106:
case 1648:
case 3650:
case 1570:
case 3054:
case 1211:
case 1877:
case 370:
case 658:
case 1558:
case 3540:
case 3678:
case 3414:
case 3457:
case 3862:
case 3093:
case 422:
case 3017:
case 2210:
case 3834:
case 1636:
case 1206:
case 645:
case 548:
case 1075:
case 3019:
case 2809:
case 3045:
case 405:
case 2420:
case 2598:
case 1291:
case 1873:
case 3843:
case 1624:
case 2475:
case 823:
case 3166:
case 3611:
case 3583:
case 1278:
case 527:
case 2075:
case 824:
case 1809:
case 3690:
case 2300:
case 3094:
case 56:
case 559:
case 1316:
case 3881:
case 3608:
case 3541:
case 377:
case 1571:
case 1500:
case 1285:
case 3712:
case 3651:
case 2636:
case 68:
case 273:
case 1623:
case 1646:
case 3844:
case 75:
case 2278:
case 3493:
case 3417:
case 2250:
case 1874:
case 2873:
case 3331:
case 2291:
case 2356:
case 3584:
case 641:
case 508:
case 3059:
case 2624:
case 3598:
case 2122:
case 1881:
case 2341:
case 2435:
case 680:
case 4063:
case 2834:
case 177:
case 3807:
case 3210:
case 1608:
case 1238:
case 2531:
case 848:
case 3556:
case 1676:
case 2384:
case 2583:
case 2752:
case 3646:
case 2611:
case 1229:
case 2166:
case 1059:
case 3088:
case 218:
case 750:
case 839:
case 1584:
case 2494:
case 721:
case 3206:
case 1834:
case 2712:
case 277:
case 808:
case 2238:
case 2608:
case 912:
case 1341:
case 1122:
case 4032:
case 2094:
case 986:
case 1019:
case 3300:
case 2833:
case 1459:
case 3488:
case 975:
case 3624:
case 2059:
case 2383:
case 2584:
case 2445:
case 1494:
case 3356:
case 3020:
case 3291:
case 3873:
case 480:
case 524:
case 1248:
case 1531:
case 2676:
case 2493:
case 2960:
case 86:
case 1166:
case 859:
case 1611:
case 373:
case 1752:
case 1099:
case 2610:
case 462:
case 2454:
case 1606:
case 2530:
case 1097:
case 1330:
case 2982:
case 3318:
case 2792:
case 3405:
case 1815:
case 3086:
case 3879:
case 1691:
case 820:
case 1224:
case 2389:
case 37:
case 3421:
case 1880:
case 2340:
case 1589:
case 1540:
case 567:
case 1054:
case 3211:
case 170:
case 306:
case 3648:
case 1650:
case 3501:
case 2387:
case 2499:
case 1839:
case 1982:
case 2013:
case 2097:
case 864:
case 2453:
case 3325:
case 1855:
case 52:
case 1792:
case 1837:
case 979:
case 2099:
case 737:
case 2961:
case 2236:
case 1454:
case 3396:
case 2606:
case 3251:
case 1014:
case 2414:
case 2678:
case 3629:
case 270:
case 729:
case 1246:
case 516:
case 831:
case 2650:
case 3276:
case 2847:
case 1387:
case 1828:
case 2815:
case 2587:
case 3301:
case 3627:
case 1053:
case 2849:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746489602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,];
var gg_b = "1746489602/";

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
