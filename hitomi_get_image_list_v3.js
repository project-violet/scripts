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
case 1483:
case 2029:
case 382:
case 2535:
case 2728:
case 3062:
case 3638:
case 2188:
case 1810:
case 1606:
case 3999:
case 1383:
case 98:
case 2794:
case 3230:
case 883:
case 1530:
case 641:
case 291:
case 1432:
case 2815:
case 118:
case 631:
case 3952:
case 665:
case 1332:
case 444:
case 2899:
case 2489:
case 1337:
case 632:
case 353:
case 1366:
case 3720:
case 52:
case 1296:
case 3957:
case 3809:
case 2376:
case 3042:
case 1951:
case 3331:
case 2238:
case 446:
case 1635:
case 381:
case 527:
case 3596:
case 2718:
case 3055:
case 176:
case 408:
case 277:
case 1840:
case 1130:
case 1656:
case 3685:
case 27:
case 2753:
case 431:
case 854:
case 3791:
case 465:
case 2588:
case 2992:
case 2845:
case 328:
case 1043:
case 660:
case 441:
case 1086:
case 3902:
case 205:
case 3859:
case 1688:
case 1021:
case 3196:
case 442:
case 2997:
case 2978:
case 3433:
case 1792:
case 3074:
case 3012:
case 3333:
case 174:
case 3892:
case 268:
case 3760:
case 1759:
case 1326:
case 197:
case 2865:
case 1063:
case 384:
case 2556:
case 856:
case 3382:
case 2285:
case 313:
case 1875:
case 2434:
case 1426:
case 646:
case 2748:
case 2375:
case 941:
case 2547:
case 2733:
case 169:
case 2826:
case 965:
case 2155:
case 1295:
case 931:
case 1514:
case 2782:
case 3608:
case 1987:
case 3661:
case 1370:
case 504:
case 778:
case 2677:
case 2213:
case 2698:
case 880:
case 3200:
case 1470:
case 2360:
case 2939:
case 3734:
case 2122:
case 3448:
case 908:
case 1572:
case 2290:
case 2624:
case 4077:
case 1605:
case 595:
case 1577:
case 711:
case 1164:
case 1598:
case 2614:
case 2354:
case 1739:
case 1345:
case 4024:
case 347:
case 2672:
case 2096:
case 2536:
case 1524:
case 2223:
case 1982:
case 2454:
case 3571:
case 767:
case 3401:
case 1647:
case 3468:
case 3839:
case 1271:
case 259:
case 932:
case 899:
case 34:
case 2340:
case 1219:
case 2491:
case 2881:
case 1307:
case 3224:
case 2208:
case 2261:
case 3368:
case 1933:
case 3301:
case 1407:
case 2391:
case 2440:
case 3641:
case 33:
case 3277:
case 506:
case 3613:
case 1172:
case 1550:
case 1674:
case 4050:
case 2522:
case 1452:
case 944:
case 3569:
case 2420:
case 752:
case 3621:
case 663:
case 3932:
case 2664:
case 2162:
case 1612:
case 487:
case 3195:
case 2320:
case 934:
case 716:
case 48:
case 1544:
case 3663:
case 501:
case 2286:
case 3658:
case 2243:
case 1876:
case 3318:
case 3946:
case 2866:
case 1399:
case 3983:
case 2837:
case 3264:
case 2832:
case 3394:
case 1655:
case 2142:
case 783:
case 2404:
case 502:
case 2:
case 3549:
case 1415:
case 219:
case 125:
case 2221:
case 3494:
case 3884:
case 2846:
case 355:
case 1357:
case 3403:
case 2493:
case 3119:
case 2883:
case 1124:
case 3451:
case 2574:
case 3966:
case 2310:
case 2167:
case 3303:
case 3679:
case 1457:
case 1931:
case 2263:
case 3686:
case 1177:
case 751:
case 3611:
case 1198:
case 2258:
case 3351:
case 3643:
case 4064:
case 2393:
case 3152:
case 921:
case 1395:
case 198:
case 267:
case 3472:
case 1548:
case 1495:
case 1885:
case 3414:
case 2083:
case 1429:
case 2275:
case 2046:
case 3372:
case 166:
case 3084:
case 973:
case 3125:
case 2390:
case 2441:
case 3640:
case 2109:
case 2260:
case 582:
case 87:
case 2653:
case 703:
case 2490:
case 759:
case 3691:
case 3565:
case 475:
case 2592:
case 2601:
case 3785:
case 2668:
case 2578:
case 805:
case 130:
case 1692:
case 4001:
case 3115:
case 1194:
case 1568:
case 15:
case 1553:
case 140:
case 4053:
case 32:
case 3253:
case 1151:
case 3398:
case 3980:
case 212:
case 2361:
case 3545:
case 553:
case 3477:
case 922:
case 896:
case 3157:
case 2408:
case 278:
case 1371:
case 2220:
case 586:
case 2694:
case 7:
case 2192:
case 1252:
case 924:
case 3165:
case 3102:
case 2509:
case 2081:
case 2628:
case 3738:
case 3039:
case 2016:
case 3599:
case 2443:
case 3350:
case 1225:
case 3806:
case 1299:
case 2159:
case 2486:
case 251:
case 2479:
case 1369:
case 1930:
case 1148:
case 162:
case 2311:
case 3218:
case 3693:
case 2651:
case 3450:
case 2343:
case 2379:
case 1469:
case 1838:
case 3170:
case 470:
case 949:
case 3228:
case 988:
case 2321:
case 216:
case 393:
case 800:
case 1503:
case 892:
case 4051:
case 3835:
case 3364:
case 2204:
case 1551:
case 1449:
case 2293:
case 11:
case 3251:
case 1101:
case 2026:
case 4094:
case 2363:
case 2906:
case 3107:
case 1349:
case 2210:
case 1735:
case 2463:
case 1373:
case 2178:
case 2139:
case 1712:
case 2584:
case 3116:
case 1075:
case 1950:
case 2764:
case 2922:
case 1283:
case 1727:
case 304:
case 3430:
case 1863:
case 1187:
case 3532:
case 3689:
case 1774:
case 2955:
case 424:
case 1060:
case 3059:
case 1886:
case 550:
case 2338:
case 1879:
case 2276:
case 1811:
case 2869:
case 1755:
case 3973:
case 8:
case 1396:
case 3817:
case 1266:
case 3949:
case 3711:
case 3566:
case 3743:
case 133:
case 537:
case 1040:
case 3786:
case 143:
case 791:
case 2750:
case 2927:
case 1531:
case 1717:
case 547:
case 4031:
case 2947:
case 3146:
case 1900:
case 2871:
case 1216:
case 1281:
case 3183:
case 3723:
case 1861:
case 705:
case 1808:
case 3634:
case 2905:
case 1767:
case 3132:
case 1736:
case 796:
case 1587:
case 1914:
case 3842:
case 4087:
case 3995:
case 3009:
case 768:
case 2777:
case 389:
case 2184:
case 2099:
case 422:
case 777:
case 3233:
case 2772:
case 1380:
case 907:
case 1582:
case 2714:
case 1639:
case 4082:
case 1890:
case 1480:
case 3166:
case 2967:
case 1705:
case 2936:
case 1924:
case 3137:
case 859:
case 390:
case 803:
case 3741:
case 2057:
case 3282:
case 1010:
case 2385:
case 649:
case 688:
case 626:
case 3862:
case 3805:
case 639:
case 2895:
case 77:
case 1093:
case 3239:
case 508:
case 79:
case 2216:
case 2742:
case 2281:
case 774:
case 279:
case 3898:
case 3488:
case 3941:
case 2020:
case 1724:
case 3626:
case 3018:
case 3771:
case 2587:
case 2914:
case 2972:
case 1798:
case 1539:
case 2823:
case 797:
case 2131:
case 542:
case 2004:
case 906:
case 1687:
case 2998:
case 3176:
case 2977:
case 2380:
case 3189:
case 3795:
case 3800:
case 532:
case 3356:
case 1936:
case 2890:
case 3681:
case 2705:
case 627:
case 1057:
case 3872:
case 2010:
case 3923:
case 3003:
case 2093:
case 2533:
case 3051:
case 3814:
case 1942:
case 2075:
case 2283:
case 1065:
case 3986:
case 1631:
case 3979:
case 901:
case 2774:
case 3335:
case 3749:
case 2232:
case 723:
case 2944:
case 1955:
case 3773:
case 2060:
case 544:
case 3435:
case 185:
case 3284:
case 3963:
case 1338:
case 2879:
case 307:
case 2496:
case 2133:
case 1289:
case 3406:
case 2811:
case 3958:
case 2843:
case 1276:
case 3646:
case 1869:
case 2755:
case 3683:
case 2237:
case 718:
case 1974:
case 2182:
case 1007:
case 546:
case 2684:
case 1927:
case 3001:
case 529:
case 3068:
case 243:
case 3576:
case 990:
case 1750:
case 772:
case 2531:
case 3053:
case 2717:
case 1912:
case 2091:
case 3796:
case 2252:
case 1694:
case 1220:
case 1935:
case 2518:
case 3087:
case 2706:
case 321:
case 587:
case 4009:
case 1509:
case 1628:
case 114:
case 448:
case 3175:
case 3322:
case 1411:
case 2299:
case 1443:
case 2225:
case 2369:
case 872:
case 58:
case 3657:
case 3209:
case 3317:
case 3160:
case 1486:
case 1896:
case 373:
case 818:
case 3417:
case 2469:
case 1603:
case 1379:
case 2838:
case 3412:
case 3374:
case 116:
case 3427:
case 1730:
case 245:
case 2503:
case 1204:
case 3593:
case 402:
case 3033:
case 3474:
case 871:
case 3504:
case 1293:
case 1618:
case 3191:
case 2449:
case 2473:
case 1026:
case 2101:
case 2594:
case 606:
case 3699:
case 1458:
case 3082:
case 3625:
case 1178:
case 2373:
case 2609:
case 3830:
case 2528:
case 720:
case 648:
case 298:
case 2395:
case 2329:
case 2756:
case 876:
case 3292:
case 2202:
case 2265:
case 2548:
case 3362:
case 858:
case 3560:
case 1083:
case 638:
case 3780:
case 266:
case 3405:
case 1275:
case 3607:
case 1988:
case 3575:
case 154:
case 1260:
case 3347:
case 2678:
case 404:
case 601:
case 1653:
case 2118:
case 1341:
case 1490:
case 4092:
case 3447:
case 2270:
case 3985:
case 1066:
case 602:
case 4078:
case 264:
case 1037:
case 1578:
case 1597:
case 1323:
case 495:
case 326:
case 2245:
case 89:
case 2568:
case 3342:
case 2692:
case 349:
case 3665:
case 2788:
case 3602:
case 240:
case 993:
case 690:
case 3104:
case 874:
case 3591:
case 3467:
case 2419:
case 2151:
case 1291:
case 897:
case 3554:
case 2103:
case 3336:
case 1240:
case 2319:
case 156:
case 406:
case 3110:
case 3367:
case 2659:
case 178:
case 1408:
case 2371:
case 1461:
case 1956:
case 2172:
case 1420:
case 4017:
case 331:
case 486:
case 1731:
case 1517:
case 1984:
case 2452:
case 365:
case 1105:
case 1162:
case 761:
case 428:
case 1664:
case 2114:
case 3586:
case 2612:
case 1320:
case 3579:
case 3255:
case 4055:
case 1286:
case 1279:
case 1555:
case 2544:
case 2876:
case 1211:
case 2499:
case 2889:
case 1147:
case 71:
case 3217:
case 3309:
case 3649:
case 1837:
case 3190:
case 2325:
case 947:
case 1832:
case 1142:
case 915:
case 681:
case 1644:
case 1:
case 3123:
case 413:
case 119:
case 3521:
case 762:
case 833:
case 2617:
case 2273:
case 1846:
case 1574:
case 342:
case 2249:
case 1167:
case 1310:
case 2085:
case 1493:
case 2124:
case 93:
case 1136:
case 3108:
case 3161:
case 843:
case 94:
case 3989:
case 1527:
case 653:
case 332:
case 2198:
case 609:
case 3030:
case 3590:
case 1375:
case 2465:
case 4047:
case 1733:
case 3882:
case 1547:
case 1475:
case 2365:
case 3513:
case 2834:
case 3541:
case 2295:
case 2144:
case 3392:
case 2642:
case 2229:
case 1782:
case 2514:
case 2370:
case 4005:
case 4062:
case 3111:
case 1698:
case 1505:
case 2470:
case 757:
case 1939:
case 3247:
case 3619:
case 2572:
case 2150:
case 2636:
case 1290:
case 575:
case 3726:
case 2667:
case 2038:
case 910:
case 2598:
case 3781:
case 1127:
case 3934:
case 1112:
case 2345:
case 1614:
case 766:
case 1672:
case 481:
case 1174:
case 220:
case 50:
case 329:
case 2445:
case 1787:
case 2271:
case 103:
case 159:
case 3397:
case 1816:
case 409:
case 3378:
case 453:
case 1340:
case 1491:
case 3267:
case 507:
case 4042:
case 3478:
case 3887:
case 1208:
case 955:
case 1542:
case 1440:
case 2891:
case 2481:
case 3853:
case 3044:
case 3868:
case 3801:
case 2416:
case 3288:
case 2840:
case 177:
case 1807:
case 2316:
case 2130:
case 2656:
case 194:
case 1701:
case 1768:
case 1588:
case 1069:
case 17:
case 1753:
case 3975:
case 4088:
case 2043:
case 2011:
case 2778:
case 2797:
case 521:
case 2079:
case 3765:
case 455:
case 63:
case 864:
case 105:
case 830:
case 3585:
case 1997:
case 2792:
case 953:
case 909:
case 3848:
case 64:
case 2953:
case 2968:
case 274:
case 2901:
case 85:
case 3138:
case 840:
case 3954:
case 168:
case 857:
case 615:
case 2058:
case 981:
case 647:
case 2759:
case 1802:
case 1334:
case 1285:
case 1049:
case 2875:
case 1434:
case 637:
case 1748:
case 2893:
case 1029:
case 1728:
case 2383:
case 2810:
case 2606:
case 2346:
case 1794:
case 1909:
case 191:
case 3384:
case 1703:
case 1751:
case 3000:
case 272:
case 862:
case 3894:
case 3484:
case 3757:
case 2013:
case 1815:
case 3920:
case 2041:
case 733:
case 3235:
case 1825:
case 2366:
case 1476:
case 1899:
case 3206:
case 1156:
case 100:
case 3993:
case 845:
case 2466:
case 1376:
case 271:
case 1238:
case 43:
case 3077:
case 526:
case 437:
case 3098:
case 2709:
case 2994:
case 1852:
case 81:
case 539:
case 913:
case 3725:
case 2008:
case 2061:
case 1019:
case 447:
case 1718:
case 415:
case 1506:
case 1000:
case 3751:
case 2793:
case 3703:
case 567:
case 391:
case 1828:
case 511:
case 1235:
case 2710:
case 795:
case 3728:
case 2062:
case 2005:
case 706:
case 1851:
case 1014:
case 3535:
case 3909:
case 3794:
case 3857:
case 958:
case 1072:
case 2230:
case 1696:
case 2925:
case 976:
case 2999:
case 1725:
case 1799:
case 1904:
case 4038:
case 1077:
case 3071:
case 420:
case 1024:
case 3019:
case 2720:
case 893:
case 300:
case 974:
case 2809:
case 3156:
case 3630:
case 1206:
case 99:
case 3489:
case 1910:
case 3825:
case 2331:
case 3238:
case 2042:
case 392:
case 578:
case 1975:
case 286:
case 2017:
case 702:
case 3588:
case 2022:
case 394:
case 972:
case 3845:
case 3992:
case 790:
case 228:
case 2970:
case 1801:
case 1868:
case 1044:
case 2055:
case 1853:
case 551:
case 1680:
case 1339:
case 2487:
case 2897:
case 3807:
case 3959:
case 377:
case 1288:
case 3334:
case 748:
case 789:
case 620:
case 516:
case 82:
case 2945:
case 2892:
case 2482:
case 1954:
case 368:
case 3073:
case 213:
case 3748:
case 3434:
case 2382:
case 552:
case 1770:
case 3285:
case 3997:
case 305:
case 3106:
case 2907:
case 1765:
case 1940:
case 1702:
case 1064:
case 2027:
case 3870:
case 2333:
case 2775:
case 1848:
case 1991:
case 2012:
case 3562:
case 1143:
case 838:
case 3213:
case 1459:
case 1111:
case 2529:
case 1186:
case 2608:
case 1833:
case 1179:
case 2981:
case 2448:
case 676:
case 2734:
case 1359:
case 1726:
case 889:
case 3624:
case 1619:
case 2169:
case 1247:
case 3939:
case 1671:
case 801:
case 1492:
case 134:
case 727:
case 472:
case 4090:
case 160:
case 1030:
case 2272:
case 144:
case 1541:
case 418:
case 1513:
case 3475:
case 4041:
case 1267:
case 250:
case 3881:
case 69:
case 3340:
case 24:
case 2839:
case 674:
case 3816:
case 1397:
case 1523:
case 2173:
case 4023:
case 2277:
case 3542:
case 1163:
case 1497:
case 1887:
case 1478:
case 1242:
case 925:
case 3614:
case 1508:
case 4008:
case 3354:
case 1695:
case 3112:
case 4061:
case 237:
case 3787:
case 129:
case 2571:
case 697:
case 136:
case 247:
case 1113:
case 2658:
case 458:
case 3211:
case 1141:
case 2318:
case 108:
case 3243:
case 3555:
case 3279:
case 1831:
case 2663:
case 1409:
case 2250:
case 2418:
case 3837:
case 1649:
case 1673:
case 3147:
case 2946:
case 3984:
case 165:
case 3517:
case 804:
case 2621:
case 618:
case 2776:
case 2789:
case 2244:
case 793:
case 1255:
case 3320:
case 1586:
case 2129:
case 969:
case 4043:
case 3664:
case 1511:
case 3162:
case 4011:
case 2451:
case 3136:
case 2937:
case 1732:
case 2119:
case 3883:
case 3310:
case 3167:
case 2171:
case 4021:
case 1669:
case 1521:
case 132:
case 1976:
case 3393:
case 1989:
case 2351:
case 3512:
case 2679:
case 1161:
case 1108:
case 3644:
case 2394:
case 2428:
case 497:
case 1563:
case 2264:
case 623:
case 3832:
case 1227:
case 599:
case 4058:
case 2573:
case 2328:
case 2494:
case 1123:
case 3:
case 2056:
case 806:
case 2300:
case 1347:
case 73:
case 3260:
case 354:
case 886:
case 2856:
case 962:
case 2640:
case 1607:
case 74:
case 3032:
case 3668:
case 750:
case 2400:
case 3601:
case 2691:
case 36:
case 2502:
case 715:
case 367:
case 1362:
case 591:
case 2152:
case 1292:
case 2314:
case 747:
case 1645:
case 3275:
case 1405:
case 2372:
case 311:
case 3083:
case 737:
case 4054:
case 1670:
case 2201:
case 2424:
case 1436:
case 500:
case 1193:
case 3648:
case 1467:
case 3956:
case 3461:
case 2660:
case 813:
case 378:
case 1367:
case 2477:
case 1110:
case 356:
case 2324:
case 1336:
case 91:
case 126:
case 917:
case 433:
case 3037:
case 1985:
case 3066:
case 1104:
case 227:
case 1602:
case 188:
case 935:
case 1342:
case 3254:
case 961:
case 3896:
case 1160:
case 1317:
case 3479:
case 3443:
case 3159:
case 2610:
case 2806:
case 1322:
case 3379:
case 3603:
case 2552:
case 4020:
case 2170:
case 3311:
case 479:
case 755:
case 3343:
case 2218:
case 2102:
case 1087:
case 2165:
case 2604:
case 57:
case 1355:
case 710:
case 3192:
case 1796:
case 383:
case 2525:
case 1175:
case 2039:
case 3081:
case 998:
case 2738:
case 1455:
case 3026:
case 2515:
case 4004:
case 122:
case 1191:
case 3618:
case 1504:
case 3197:
case 1140:
case 957:
case 2107:
case 1625:
case 881:
case 3210:
case 1427:
case 95:
case 568:
case 1374:
case 643:
case 809:
case 3321:
case 930:
case 4093:
case 2364:
case 1474:
case 2835:
case 1033:
case 1593:
case 2620:
case 1154:
case 2145:
case 1652:
case 596:
case 3730:
case 1773:
case 2812:
case 3070:
case 2827:
case 1749:
case 1864:
case 2763:
case 385:
case 2874:
case 2758:
case 2583:
case 204:
case 662:
case 3922:
case 3584:
case 2969:
case 1911:
case 2676:
case 2092:
case 2532:
case 2689:
case 709:
case 1979:
case 3002:
case 3065:
case 1986:
case 2779:
case 2786:
case 1921:
case 430:
case 2097:
case 464:
case 617:
case 2711:
case 3974:
case 855:
case 10:
case 1053:
case 2855:
case 1769:
case 1576:
case 3750:
case 4089:
case 1134:
case 4076:
case 3276:
case 1958:
case 1406:
case 2231:
case 3338:
case 1963:
case 1306:
case 1683:
case 1850:
case 2949:
case 3438:
case 2973:
case 3869:
case 782:
case 206:
case 1646:
case 238:
case 2995:
case 2842:
case 713:
case 1018:
case 1771:
case 3905:
case 3724:
case 2132:
case 784:
case 698:
case 289:
case 3099:
case 3539:
case 3798:
case 3777:
case 3819:
case 2183:
case 2836:
case 1824:
case 201:
case 2867:
case 3947:
case 2146:
case 1239:
case 1941:
case 1898:
case 3052:
case 2723:
case 462:
case 2282:
case 399:
case 461:
case 2741:
case 943:
case 728:
case 2713:
case 435:
case 65:
case 202:
case 417:
case 3485:
case 3895:
case 3942:
case 1814:
case 1051:
case 3829:
case 786:
case 3234:
case 445:
case 519:
case 933:
case 2805:
case 2862:
case 2526:
case 1534:
case 1189:
case 41:
case 1961:
case 837:
case 1456:
case 1028:
case 1681:
case 3967:
case 2919:
case 657:
case 2137:
case 1356:
case 1729:
case 1616:
case 2847:
case 1995:
case 138:
case 1842:
case 2018:
case 2771:
case 3587:
case 1929:
case 3736:
case 2719:
case 3767:
case 2626:
case 3823:
case 483:
case 414:
case 667:
case 1009:
case 1581:
case 101:
case 2990:
case 1867:
case 834:
case 2824:
case 3216:
case 860:
case 3900:
case 1146:
case 844:
case 3020:
case 2898:
case 2941:
case 379:
case 3861:
case 654:
case 1287:
case 787:
case 1282:
case 2814:
case 3533:
case 102:
case 1790:
case 1862:
case 2003:
case 3226:
case 525:
case 2176:
case 4026:
case 3841:
case 656:
case 1526:
case 1233:
case 3131:
case 2961:
case 1137:
case 2681:
case 3480:
case 3890:
case 1971:
case 1847:
case 2356:
case 3582:
case 1812:
case 2773:
case 3944:
case 2335:
case 2864:
case 1827:
case 3232:
case 2284:
case 411:
case 3060:
case 1583:
case 104:
case 3727:
case 1181:
case 2666:
case 865:
case 1330:
case 3712:
case 2943:
case 4032:
case 3774:
case 3858:
case 1689:
case 2911:
case 1092:
case 1721:
case 3187:
case 2986:
case 275:
case 2979:
case 1786:
case 2921:
case 3182:
case 842:
case 1779:
case 195:
case 3684:
case 652:
case 1097:
case 1537:
case 1711:
case 1078:
case 1855:
case 520:
case 3717:
case 763:
case 2053:
case 616:
case 2589:
case 2134:
case 2576:
case 3964:
case 2632:
case 3054:
case 2958:
case 3133:
case 3496:
case 412:
case 1231:
case 2850:
case 1949:
case 3237:
case 1817:
case 3396:
case 456:
case 3930:
case 3369:
case 732:
case 2317:
case 2160:
case 2209:
case 3299:
case 558:
case 1610:
case 1806:
case 96:
case 3225:
case 954:
case 3838:
case 3469:
case 2520:
case 1450:
case 1218:
case 273:
case 362:
case 1604:
case 3518:
case 3706:
case 2087:
case 3252:
case 2355:
case 911:
case 4025:
case 1599:
case 1039:
case 1444:
case 1738:
case 221:
case 480:
case 2938:
case 1515:
case 978:
case 3168:
case 3101:
case 3034:
case 1251:
case 2191:
case 956:
case 31:
case 222:
case 3257:
case 2830:
case 3373:
case 708:
case 59:
case 912:
case 3735:
case 2699:
case 574:
case 3349:
case 1107:
case 2082:
case 193:
case 2510:
case 741:
case 361:
case 1228:
case 4057:
case 335:
case 2593:
case 2327:
case 731:
case 2474:
case 1835:
case 2652:
case 345:
case 3215:
case 3503:
case 2312:
case 1145:
case 1856:
case 3697:
case 1300:
case 2347:
case 2607:
case 2259:
case 2575:
case 1084:
case 2447:
case 1248:
case 1691:
case 4065:
case 3202:
case 983:
case 680:
case 2362:
case 2305:
case 4070:
case 1654:
case 3395:
case 1152:
case 2292:
case 88:
case 3756:
case 736:
case 2405:
case 366:
case 2462:
case 1372:
case 485:
case 518:
case 224:
case 1414:
case 3103:
case 2554:
case 4045:
case 2670:
case 3471:
case 1980:
case 2436:
case 1424:
case 3151:
case 2193:
case 12:
case 1660:
case 571:
case 3319:
case 2336:
case 3207:
case 2110:
case 1477:
case 2367:
case 2540:
case 1507:
case 330:
case 2442:
case 364:
case 3128:
case 2985:
case 239:
case 734:
case 35:
case 127:
case 3568:
case 3194:
case 3501:
case 249:
case 3076:
case 699:
case 2342:
case 2141:
case 1318:
case 3876:
case 208:
case 3425:
case 1658:
case 3889:
case 2831:
case 2409:
case 1663:
case 1983:
case 2190:
case 3325:
case 722:
case 1946:
case 3269:
case 477:
case 3100:
case 2309:
case 2217:
case 231:
case 494:
case 3550:
case 1776:
case 3352:
case 3114:
case 1244:
case 2255:
case 1195:
case 2579:
case 241:
case 875:
case 2766:
case 1932:
case 3249:
case 3085:
case 1966:
case 3622:
case 1451:
case 3124:
case 1119:
case 1403:
case 2669:
case 3357:
case 405:
case 3273:
case 1171:
case 773:
case 2989:
case 1351:
case 1611:
case 1686:
case 2108:
case 903:
case 3784:
case 1679:
case 1303:
case 2212:
case 3655:
case 2227:
case 807:
case 1264:
case 721:
case 1884:
case 2123:
case 4073:
case 1328:
case 1549:
case 2274:
case 110:
case 4049:
case 2459:
case 2143:
case 1035:
case 1595:
case 3987:
case 1608:
case 3514:
case 2833:
case 2619:
case 1981:
case 3667:
case 1448:
case 1734:
case 2671:
case 1916:
case 3470:
case 2247:
case 1169:
case 2492:
case 2882:
case 234:
case 1623:
case 2590:
case 491:
case 3144:
case 3295:
case 726:
case 3229:
case 244:
case 2392:
case 3302:
case 2513:
case 1224:
case 3307:
case 1690:
case 400:
case 150:
case 1839:
case 1468:
case 1401:
case 2397:
case 2158:
case 605:
case 1277:
case 1641:
case 13:
case 3407:
case 2497:
case 2478:
case 3933:
case 3345:
case 3739:
case 533:
case 2561:
case 2242:
case 2629:
case 2508:
case 3164:
case 3577:
case 137:
case 696:
case 1571:
case 2121:
case 3982:
case 3445:
case 1519:
case 147:
case 236:
case 4019:
case 1791:
case 186:
case 2975:
case 1017:
case 1685:
case 3086:
case 1740:
case 3079:
case 991:
case 3043:
case 3011:
case 3854:
case 1970:
case 2868:
case 376:
case 1878:
case 2339:
case 1487:
case 2745:
case 2960:
case 2288:
case 3381:
case 824:
case 1580:
case 3063:
case 535:
case 397:
case 4080:
case 1760:
case 1945:
case 2954:
case 1482:
case 3058:
case 3426:
case 545:
case 1382:
case 2770:
case 2585:
case 826:
case 1196:
case 2765:
case 1859:
case 374:
case 3901:
case 1027:
case 1333:
case 659:
case 2064:
case 900:
case 2138:
case 603:
case 3280:
case 39:
case 3953:
case 1012:
case 3432:
case 70:
case 1047:
case 372:
case 3090:
case 2828:
case 3530:
case 2384:
case 1710:
case 97:
case 3013:
case 2757:
case 2894:
case 2484:
case 1952:
case 3041:
case 318:
case 2920:
case 1638:
case 3446:
case 182:
case 3483:
case 2851:
case 2014:
case 2715:
case 2072:
case 1704:
case 1999:
case 821:
case 2904:
case 996:
case 2725:
case 619:
case 2098:
case 2538:
case 1915:
case 822:
case 2077:
case 3820:
case 530:
case 1036:
case 1596:
case 181:
case 1809:
case 1957:
case 1431:
case 557:
case 1720:
case 3366:
case 109:
case 153:
case 403:
case 2206:
case 3023:
case 459:
case 371:
case 2993:
case 3437:
case 905:
case 2818:
case 1042:
case 3466:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758373202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,];
var gg_b = "1758373202/";

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
