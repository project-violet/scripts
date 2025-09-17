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
case 846:
case 3698:
case 524:
case 83:
case 4060:
case 2219:
case 2835:
case 1085:
case 1478:
case 3076:
case 4029:
case 2728:
case 2482:
case 1393:
case 1646:
case 2087:
case 585:
case 1959:
case 3131:
case 1372:
case 3870:
case 3761:
case 860:
case 757:
case 1834:
case 728:
case 3181:
case 474:
case 696:
case 3527:
case 4016:
case 740:
case 1689:
case 1884:
case 766:
case 431:
case 3524:
case 2202:
case 1508:
case 2432:
case 3213:
case 2037:
case 1148:
case 2927:
case 910:
case 2721:
case 2674:
case 2643:
case 3691:
case 375:
case 209:
case 3210:
case 2677:
case 3686:
case 3138:
case 244:
case 3768:
case 3495:
case 189:
case 400:
case 217:
case 3915:
case 2331:
case 779:
case 3266:
case 1141:
case 2567:
case 1517:
case 3844:
case 3873:
case 3649:
case 1501:
case 2096:
case 2439:
case 669:
case 3134:
case 239:
case 2890:
case 2209:
case 3345:
case 1170:
case 1831:
case 2081:
case 911:
case 1952:
case 19:
case 1440:
case 3184:
case 542:
case 2212:
case 1090:
case 1518:
case 1881:
case 2031:
case 326:
case 3968:
case 3848:
case 3187:
case 4006:
case 741:
case 1379:
case 1896:
case 2671:
case 2387:
case 3430:
case 2724:
case 676:
case 1443:
case 3376:
case 715:
case 3899:
case 2475:
case 2088:
case 1838:
case 307:
case 1477:
case 1072:
case 3697:
case 1511:
case 1147:
case 1888:
case 2872:
case 1192:
case 2893:
case 2337:
case 3251:
case 1144:
case 401:
case 3905:
case 3961:
case 222:
case 1335:
case 3841:
case 618:
case 3106:
case 2029:
case 508:
case 2292:
case 1010:
case 1855:
case 3983:
case 919:
case 3546:
case 1816:
case 2946:
case 2659:
case 749:
case 2854:
case 704:
case 3539:
case 4084:
case 2533:
case 274:
case 1627:
case 3468:
case 1066:
case 3589:
case 136:
case 503:
case 2989:
case 1860:
case 3362:
case 231:
case 345:
case 2055:
case 1303:
case 661:
case 3023:
case 2732:
case 995:
case 3826:
case 926:
case 818:
case 1591:
case 180:
case 1300:
case 3285:
case 1276:
case 3069:
case 409:
case 963:
case 1863:
case 567:
case 1586:
case 1974:
case 770:
case 3614:
case 3235:
case 200:
case 1351:
case 2063:
case 2428:
case 1109:
case 2782:
case 3617:
case 2306:
case 3601:
case 2580:
case 1549:
case 2123:
case 158:
case 3155:
case 3780:
case 1806:
case 3272:
case 884:
case 2851:
case 896:
case 3293:
case 4081:
case 2241:
case 1459:
case 3116:
case 382:
case 439:
case 1051:
case 2363:
case 1313:
case 660:
case 2299:
case 2775:
case 2022:
case 2932:
case 3618:
case 975:
case 646:
case 1743:
case 3532:
case 1621:
case 63:
case 2652:
case 26:
case 2006:
case 3160:
case 771:
case 3995:
case 2329:
case 181:
case 3812:
case 2248:
case 1542:
case 734:
case 1971:
case 1740:
case 1102:
case 4038:
case 3611:
case 2169:
case 3456:
case 1058:
case 1119:
case 1354:
case 937:
case 1003:
case 3415:
case 3323:
case 3467:
case 3062:
case 106:
case 2746:
case 3809:
case 3290:
case 1628:
case 201:
case 3796:
case 1001:
case 4080:
case 2240:
case 1065:
case 665:
case 848:
case 3321:
case 1748:
case 1579:
case 235:
case 2462:
case 970:
case 602:
case 795:
case 693:
case 414:
case 2368:
case 726:
case 698:
case 3731:
case 3161:
case 1246:
case 3105:
case 1973:
case 2619:
case 447:
case 3298:
case 4030:
case 399:
case 1992:
case 768:
case 843:
case 1050:
case 3236:
case 949:
case 1535:
case 1008:
case 3406:
case 904:
case 2534:
case 4033:
case 59:
case 719:
case 3654:
case 3825:
case 2976:
case 2584:
case 3987:
case 3738:
case 4083:
case 2274:
case 3168:
case 2121:
case 1275:
case 2587:
case 2277:
case 1585:
case 315:
case 3610:
case 3324:
case 366:
case 1308:
case 1662:
case 1426:
case 3938:
case 934:
case 1004:
case 3603:
case 42:
case 3658:
case 1402:
case 340:
case 2061:
case 1353:
case 1232:
case 323:
case 1011:
case 1999:
case 2469:
case 737:
case 3164:
case 3156:
case 1572:
case 821:
case 3734:
case 357:
case 2588:
case 328:
case 1861:
case 1770:
case 4095:
case 2811:
case 85:
case 2804:
case 3988:
case 2609:
case 297:
case 205:
case 1317:
case 1744:
case 2367:
case 1365:
case 2423:
case 1301:
case 2315:
case 3021:
case 678:
case 1314:
case 2531:
case 1590:
case 2364:
case 3416:
case 1018:
case 632:
case 2745:
case 1792:
case 379:
case 3600:
case 990:
case 1125:
case 3996:
case 2271:
case 3297:
case 185:
case 616:
case 124:
case 483:
case 775:
case 3981:
case 673:
case 1049:
case 2225:
case 2891:
case 1830:
case 2080:
case 506:
case 133:
case 3253:
case 1171:
case 1499:
case 4067:
case 3963:
case 829:
case 3874:
case 3843:
case 3438:
case 2886:
case 98:
case 1926:
case 2563:
case 3195:
case 4064:
case 3877:
case 3208:
case 3722:
case 3075:
case 3488:
case 2647:
case 2836:
case 3520:
case 3569:
case 2692:
case 459:
case 1645:
case 1091:
case 1919:
case 2920:
case 138:
case 1880:
case 2969:
case 979:
case 2182:
case 3523:
case 2898:
case 928:
case 553:
case 873:
case 3089:
case 477:
case 3955:
case 2670:
case 0:
case 1566:
case 2033:
case 3217:
case 2516:
case 2923:
case 754:
case 966:
case 3929:
case 3840:
case 334:
case 832:
case 3481:
case 710:
case 1833:
case 2083:
case 1397:
case 2132:
case 527:
case 1098:
case 3496:
case 1510:
case 878:
case 1394:
case 558:
case 1676:
case 3685:
case 1143:
case 3218:
case 1174:
case 745:
case 3562:
case 2699:
case 3729:
case 3760:
case 2333:
case 22:
case 3389:
case 1895:
case 4005:
case 1912:
case 4061:
case 915:
case 893:
case 802:
case 2383:
case 349:
case 3716:
case 1447:
case 1909:
case 304:
case 2723:
case 1094:
case 3180:
case 497:
case 1444:
case 1473:
case 3878:
case 2506:
case 3032:
case 2380:
case 536:
case 288:
case 3690:
case 999:
case 3204:
case 462:
case 1336:
case 1719:
case 1551:
case 2139:
case 3906:
case 3763:
case 941:
case 1140:
case 3484:
case 711:
case 2476:
case 1391:
case 108:
case 283:
case 1726:
case 3487:
case 4070:
case 2100:
case 3066:
case 1468:
case 2742:
case 3358:
case 1589:
case 2540:
case 3057:
case 2312:
case 34:
case 3452:
case 420:
case 3624:
case 3860:
case 1933:
case 1023:
case 443:
case 3303:
case 2794:
case 2309:
case 697:
case 3245:
case 1106:
case 2823:
case 3816:
case 850:
case 1122:
case 814:
case 2998:
case 2869:
case 2949:
case 1614:
case 2407:
case 2002:
case 3013:
case 1461:
case 2404:
case 1617:
case 2936:
case 3109:
case 703:
case 3549:
case 2234:
case 792:
case 1601:
case 273:
case 1650:
case 1826:
case 2986:
case 3591:
case 2103:
case 2284:
case 4044:
case 4073:
case 3977:
case 708:
case 2158:
case 1020:
case 1069:
case 3276:
case 2991:
case 380:
case 2019:
case 3300:
case 1285:
case 4047:
case 3943:
case 3586:
case 3863:
case 2453:
case 3777:
case 2786:
case 1618:
case 293:
case 2302:
case 733:
case 3774:
case 2238:
case 1160:
case 1129:
case 1730:
case 738:
case 2288:
case 989:
case 358:
case 1582:
case 3806:
case 1272:
case 2749:
case 851:
case 571:
case 2578:
case 1293:
case 772:
case 1320:
case 2736:
case 2319:
case 3459:
case 3000:
case 2154:
case 1611:
case 2:
case 1783:
case 2661:
case 2414:
case 1607:
case 3058:
case 677:
case 2465:
case 2798:
case 1415:
case 883:
case 590:
case 2012:
case 2417:
case 306:
case 2997:
case 2571:
case 2942:
case 381:
case 3310:
case 4041:
case 2281:
case 2862:
case 1163:
case 2113:
case 154:
case 1733:
case 3740:
case 3597:
case 3971:
case 1181:
case 859:
case 2070:
case 3553:
case 3884:
case 2525:
case 62:
case 3035:
case 2399:
case 220:
case 2876:
case 3925:
case 2953:
case 2263:
case 3887:
case 3148:
case 3478:
case 835:
case 3220:
case 3959:
case 2704:
case 3393:
case 248:
case 2190:
case 1705:
case 137:
case 2711:
case 3639:
case 3834:
case 906:
case 2707:
case 4002:
case 3514:
case 1915:
case 2845:
case 432:
case 2901:
case 958:
case 389:
case 927:
case 1967:
case 2917:
case 1636:
case 3223:
case 540:
case 3517:
case 478:
case 4026:
case 3079:
case 2216:
case 1254:
case 688:
case 3141:
case 1266:
case 566:
case 3501:
case 1964:
case 2193:
case 1649:
case 1844:
case 785:
case 3471:
case 2630:
case 724:
case 2044:
case 1691:
case 528:
case 953:
case 1768:
case 2950:
case 2047:
case 2718:
case 877:
case 1203:
case 1184:
case 650:
case 3952:
case 39:
case 126:
case 3262:
case 3518:
case 221:
case 493:
case 1433:
case 2918:
case 1848:
case 897:
case 1187:
case 1258:
case 465:
case 2185:
case 168:
case 2717:
case 2048:
case 515:
case 2373:
case 1767:
case 2344:
case 2765:
case 2701:
case 2135:
case 1134:
case 2347:
case 1756:
case 647:
case 3831:
case 1483:
case 2392:
case 3147:
case 2436:
case 3888:
case 287:
case 2370:
case 3173:
case 3144:
case 2449:
case 541:
case 1480:
case 3335:
case 2099:
case 1528:
case 1961:
case 1905:
case 2708:
case 2491:
case 1430:
case 599:
case 1200:
case 1899:
case 2041:
case 805:
case 4009:
case 3474:
case 2486:
case 1642:
case 94:
case 2753:
case 3725:
case 862:
case 107:
case 372:
case 3086:
case 1488:
case 1075:
case 554:
case 2077:
case 3645:
case 1520:
case 3880:
case 1382:
case 2493:
case 3919:
case 758:
case 3091:
case 1706:
case 2043:
case 727:
case 831:
case 1253:
case 3171:
case 1332:
case 3830:
case 333:
case 190:
case 753:
case 1874:
case 2526:
case 43:
case 1843:
case 3227:
case 1963:
case 3513:
case 2875:
case 1438:
case 2142:
case 3224:
case 1877:
case 2758:
case 2910:
case 1840:
case 134:
case 1929:
case 2684:
case 1960:
case 3397:
case 1481:
case 276:
case 3712:
case 1046:
case 1685:
case 3394:
case 781:
case 3676:
case 3098:
case 1916:
case 2846:
case 3709:
case 3178:
case 2256:
case 706:
case 3557:
case 1089:
case 2839:
case 2634:
case 4025:
case 3883:
case 1217:
case 1955:
case 149:
case 3097:
case 3492:
case 367:
case 3042:
case 2688:
case 1339:
case 1755:
case 3398:
case 3444:
case 2757:
case 2071:
case 942:
case 74:
case 1562:
case 356:
case 2512:
case 3143:
case 3174:
case 1218:
case 1729:
case 1130:
case 1871:
case 191:
case 2340:
case 91:
case 3221:
case 296:
case 2681:
case 3500:
case 780:
case 170:
case 3702:
case 1484:
case 609:
case 1375:
case 3386:
case 801:
case 2078:
case 2485:
case 2832:
case 1487:
case 3726:
case 3391:
case 886:
case 2198:
case 2435:
case 1207:
case 2205:
case 2261:
case 2882:
case 3349:
case 1211:
case 2631:
case 1204:
case 1690:
case 1434:
case 3719:
case 3551:
case 617:
case 1105:
case 3246:
case 469:
case 3669:
case 3620:
case 3856:
case 3973:
case 2573:
case 3815:
case 2544:
case 199:
case 2104:
case 4043:
case 3050:
case 3409:
case 1321:
case 2403:
case 3065:
case 1796:
case 246:
case 141:
case 2233:
case 3017:
case 3748:
case 23:
case 3579:
case 1613:
case 2663:
case 1781:
case 3318:
case 2458:
case 908:
case 3014:
case 260:
case 1168:
case 817:
case 686:
case 3275:
case 31:
case 115:
case 1984:
case 3585:
case 1576:
case 568:
case 2660:
case 3623:
case 418:
case 1236:
case 3970:
case 3741:
case 1328:
case 1657:
case 1934:
case 3311:
case 844:
case 2935:
case 1249:
case 2280:
case 1666:
case 809:
case 1654:
case 342:
case 2616:
case 1788:
case 1027:
case 1734:
case 157:
case 1164:
case 2993:
case 3861:
case 128:
case 3805:
case 2117:
case 1988:
case 575:
case 1167:
case 2165:
case 3593:
case 1115:
case 1938:
case 1787:
case 3004:
case 2150:
case 3426:
case 3308:
case 166:
case 631:
case 2785:
case 140:
case 3402:
case 1327:
case 1658:
case 2325:
case 484:
case 3232:
case 1294:
case 3868:
case 1460:
case 2108:
case 2410:
case 3350:
case 18:
case 77:
case 2295:
case 2548:
case 1242:
case 2606:
case 3773:
case 2457:
case 1931:
case 1455:
case 1021:
case 3301:
case 3365:
case 2990:
case 2622:
case 452:
case 3590:
case 3018:
case 938:
case 3159:
case 789:
case 3314:
case 3792:
case 1651:
case 3445:
case 2672:
case 457:
case 204:
case 1688:
case 1136:
case 3723:
case 977:
case 1071:
case 2693:
case 516:
case 573:
case 1149:
case 1512:
case 2218:
case 466:
case 1268:
case 2130:
case 1710:
case 1958:
case 2871:
case 2760:
case 858:
case 1191:
case 774:
case 440:
case 3252:
case 3897:
case 3962:
case 1340:
case 184:
case 2763:
case 2375:
case 270:
case 3476:
case 1485:
case 806:
case 1374:
case 48:
case 1696:
case 2082:
case 3648:
case 3330:
case 1435:
case 3506:
case 2878:
case 1198:
case 4021:
case 2211:
case 388:
case 3380:
case 2437:
case 2032:
case 3522:
case 700:
case 152:
case 1631:
case 3720:
case 3769:
case 479:
case 689:
case 2434:
case 2488:
case 3647:
case 2722:
case 3692:
case 2569:
case 169:
case 2520:
case 1519:
case 1077:
case 1472:
case 3673:
case 2706:
case 3644:
case 3030:
case 3969:
case 962:
case 499:
case 3259:
case 1378:
case 1074:
case 1043:
case 3225:
case 76:
case 1526:
case 2874:
case 441:
case 2679:
case 314:
case 1875:
case 1700:
case 2877:
case 2208:
case 2960:
case 2039:
case 1758:
case 234:
case 664:
case 3083:
case 113:
case 1687:
case 1703:
case 794:
case 3560:
case 1637:
case 2916:
case 1846:
case 2523:
case 118:
case 1966:
case 565:
case 3898:
case 1256:
case 1264:
case 2214:
case 2635:
case 1215:
case 502:
case 2265:
case 1040:
case 1957:
case 3670:
case 997:
case 1267:
case 2431:
case 1490:
case 3923:
case 3516:
case 880:
case 3033:
case 2156:
case 3469:
case 449:
case 3807:
case 1114:
case 3278:
case 2734:
case 89:
case 612:
case 1541:
case 2167:
case 3609:
case 2737:
case 1735:
case 2115:
case 1972:
case 1165:
case 1101:
case 2324:
case 2787:
case 2938:
case 2028:
case 161:
case 1150:
case 2603:
case 3776:
case 64:
case 2327:
case 240:
case 3005:
case 1325:
case 3818:
case 744:
case 470:
case 3271:
case 2996:
case 3596:
case 28:
case 2429:
case 1779:
case 2242:
case 4082:
case 950:
case 1821:
case 1457:
case 1606:
case 1990:
case 520:
case 947:
case 2931:
case 1454:
case 717:
case 864:
case 279:
case 1111:
case 2731:
case 1547:
case 2105:
case 3619:
case 1107:
case 2545:
case 3814:
case 1592:
case 988:
case 359:
case 2298:
case 3801:
case 627:
case 3945:
case 3817:
case 1283:
case 3128:
case 490:
case 3015:
case 1403:
case 335:
case 241:
case 1233:
case 13:
case 1352:
case 3462:
case 3067:
case 2613:
case 587:
case 160:
case 983:
case 1458:
case 3064:
case 951:
case 3853:
case 4039:
case 1985:
case 3976:
case 1827:
case 3274:
case 2738:
case 2987:
case 1400:
case 2168:
case 3121:
case 3587:
case 92:
case 2984:
case 3277:
case 1660:
case 55:
case 3537:
case 2236:
case 2024:
case 722:
case 1793:
case 3361:
case 3305:
case 1025:
case 1935:
case 521:
case 377:
case 2937:
case 2027:
case 2654:
case 714:
case 1453:
case 495:
case 1668:
case 3800:
case 867:
case 102:
case 3022:
case 3775:
case 463:
case 909:
case 1238:
case 165:
case 2730:
case 1326:
case 3652:
case 36:
case 2160:
case 1791:
case 1408:
case 3006:
case 3123:
case 2155:
case 1578:
case 513:
case 3851:
case 2293:
case 1319:
case 1166:
case 1154:
case 2369:
case 747:
case 2320:
case 1736:
case 2116:
case 1661:
case 2611:
case 642:
case 2464:
case 3316:
case 3169:
case 2607:
case 1414:
case 808:
case 2323:
case 1465:
case 2467:
case 301:
case 2809:
case 2290:
case 3746:
case 1417:
case 61:
case 1571:
case 3329:
case 386:
case 3360:
case 1009:
case 2733:
case 3248:
case 254:
case 569:
case 1994:
case 3595:
case 3858:
case 2279:
case 374:
case 1418:
case 1742:
case 72:
case 2795:
case 1540:
case 1797:
case 872:
case 2589:
case 751:
case 1312:
case 245:
case 1794:
case 3421:
case 2933:
case 3060:
case 2106:
case 1309:
case 129:
case 3857:
case 833:
case 1823:
case 3946:
case 3583:
case 3659:
case 437:
case 1998:
case 922:
case 584:
case 2235:
case 1407:
case 2614:
case 1869:
case 3322:
case 132:
case 525:
case 3063:
case 1411:
case 2405:
case 1237:
case 1936:
case 2617:
case 1026:
case 3428:
case 1667:
case 3306:
case 3580:
case 1234:
case 788:
case 1615:
case 2826:
case 211:
case 2650:
case 1574:
case 3975:
case 173:
case 3732:
case 1986:
case 116:
case 685:
case 2802:
case 2285:
case 1158:
case 2930:
case 1287:
case 3813:
case 295:
case 3489:
case 2184:
case 2433:
case 3212:
case 3568:
case 226:
case 3921:
case 2968:
case 2521:
case 2187:
case 1918:
case 2848:
case 1750:
case 3176:
case 2258:
case 355:
case 900:
case 3446:
case 1717:
case 2137:
case 2715:
case 1135:
case 3678:
case 1765:
case 1498:
case 1701:
case 2134:
case 1714:
case 3439:
case 482:
case 3890:
case 339:
case 672:
case 3334:
case 560:
case 3561:
case 3928:
case 3038:
case 1436:
case 1904:
case 3505:
case 1370:
case 3145:
case 187:
case 3872:
case 3337:
case 3893:
case 2480:
case 546:
case 53:
case 1449:
case 2528:
case 1911:
case 2841:
case 3387:
case 3724:
case 1491:
case 1179:
case 1695:
case 1486:
case 2642:
case 2697:
case 1753:
case 2181:
case 1070:
case 2527:
case 986:
case 3924:
case 3338:
case 3640:
case 445:
case 2196:
case 1399:
case 1876:
case 3202:
case 656:
case 4023:
case 3927:
case 143:
case 2213:
case 3432:
case 3037:
case 50:
case 1341:
case 3219:
case 3482:
case 797:
case 3087:
case 1704:
case 148:
case 3728:
case 237:
case 2870:
case 2131:
case 1711:
case 667:
case 3388:
case 2892:
case 2257:
case 1901:
case 1965:
case 3331:
case 317:
case 2915:
case 762:
case 2636:
case 2188:
case 2967:
case 1255:
case 3567:
case 692:
case 603:
case 2254:
case 1216:
case 561:
case 2649:
case 1914:
case 2844:
case 1193:
case 1494:
case 3721:
case 3879:
case 2691:
case 1044:
case 930:
case 1348:
case 275:
case 1630:
case 4069:
case 309:
case 1497:
case 2045:
case 1260:
case 1950:
case 96:
case 2686:
case 1718:
case 2495:
case 2426:
case 361:
case 1612:
case 720:
case 2308:
case 2662:
case 3599:
case 3785:
case 743:
case 868:
case 645:
case 2402:
case 2007:
case 913:
case 2011:
case 3325:
case 2999:
case 2353:
case 3413:
case 1061:
case 1538:
case 1005:
case 544:
case 2572:
case 3359:
case 1807:
case 3114:
case 1469:
case 509:
case 2941:
case 1811:
case 895:
case 2805:
case 1588:
case 2861:
case 2282:
case 1804:
case 1609:
case 4094:
case 3541:
case 3165:
case 863:
case 3972:
case 197:
case 3457:
case 2317:
case 2018:
case 1356:
case 3622:
case 3454:
case 1068:
case 2159:
case 2792:
case 1745:
case 2948:
case 1271:
case 1596:
case 3295:
case 3821:
case 3548:
case 522:
case 2289:
case 1240:
case 1067:
case 2579:
case 33:
case 1850:
case 1626:
case 135:
case 3979:
case 4036:
case 3663:
case 3458:
case 1056:
case 360:
case 2014:
case 1368:
case 721:
case 1602:
case 472:
case 2246:
case 3790:
case 682:
case 2864:
case 159:
case 2669:
case 3592:
case 2973:
case 1619:
case 2239:
case 1945:
case 3573:
case 4091:
case 1865:
case 952:
case 1128:
case 3283:
case 1817:
case 2947:
case 2623:
case 1537:
case 555:
case 2741:
case 2970:
case 2008:
case 2535:
case 3935:
case 3772:
case 3025:
case 1305:
case 3280:
case 2307:
case 3616:
case 787:
case 1976:
case 1584:
case 3985:
case 610:
case 3230:
case 3400:
case 1243:
case 2275:
case 925:
case 1121:
case 984:
case 21:
case 3660:
case 3824:
case 996:
case 1808:
case 3268:
case 2174:
case 3512:
case 3479:
case 3191:
case 3958:
case 2558:
case 12:
case 1897:
case 1252:
case 3903:
case 384:
case 500:
case 3186:
case 2221:
case 2895:
case 4011:
case 2097:
case 1445:
case 2447:
case 2042:
case 3766:
case 729:
case 1641:
case 3509:
case 2473:
case 3882:
case 292:
case 3261:
case 203:
case 1380:
case 2349:
case 531:
case 3631:
case 352:
case 2228:
case 1522:
case 810:
case 574:
case 1139:
case 2551:
case 854:
case 1720:
case 2336:
case 2702:
case 946:
case 3374:
case 716:
case 1476:
case 3078:
case 2726:
case 1330:
case 3900:
case 960:
case 2391:
case 4065:
case 2830:
case 1080:
case 4001:
case 501:
case 1891:
case 3913:
case 4017:
case 3526:
case 663:
case 1563:
case 3142:
case 626:
case 2036:
case 1886:
case 3875:
case 114:
case 2926:
case 3502:
case 3197:
case 2086:
case 2645:
case 147:
case 3519:
case 3751:
case 3077:
case 369:
case 1920:
case 2880:
case 1969:
case 586:
case 1673:
case 2091:
case 594:
case 2919:
case 1849:
case 3074:
case 4050:
case 3378:
case 668:
case 845:
case 3966:
case 2709:
case 3846:
case 3637:
case 4008:
case 811:
case 2557:
case 3256:
case 1898:
case 4053:
case 3040:
case 3634:
case 3215:
case 442:
case 2883:
case 3490:
case 3267:
case 1670:
case 2554:
case 2342:
case 1395:
case 3889:
case 3684:
case 2833:
case 1762:
case 376:
case 3371:
case 2448:
case 3687:
case 313:
case 3703:
case 2394:
case 2510:
case 41:
case 2098:
case 3048:
case 2682:
case 458:
case 932:
case 3344:
case 3498:
case 1439:
case 3714:
case 3347:
case 1209:
case 1890:
case 139:
case 4051:
case 2952:
case 29:
case 2881:
case 1031:
case 2262:
case 1568:
case 760:
case 2518:
case 321:
case 2090:
case 3750:
case 2632:
case 2379:
case 3552:
case 690:
case 155:
case 73:
case 3185:
case 671:
case 3041:
case 2385:
case 2474:
case 481:
case 1475:
case 3695:
case 879:
case 1384:
case 2072:
case 2477:
case 3904:
case 2147:
case 1928:
case 1334:
case 2759:
case 2192:
case 1145:
case 3449:
case 3907:
case 2173:
case 1337:
case 88:
case 3911:
case 122:
case 2085:
case 841:
case 2478:
case 9:
case 2220:
case 348:
case 1728:
case 1482:
case 2646:
case 2837:
case 1087:
case 2393:
case 3704:
case 412:
case 3683:
case 3190:
case 2372:
case 3711:
case 3559:
case 604:
case 3707:
case 1084:
case 2834:
case 1226:
case 3633:
case 3070:
case 691:
case 4066:
case 2553:
case 1640:
case 3525:
case 1034:
case 2884:
case 3908:
case 761:
case 3876:
case 320:
case 436:
case 2508:
case 2035:
case 3399:
case 3263:
case 899:
case 1927:
case 343:
case 597:
case 902:
case 3630:
case 27:
case 2752:
case 993:
case 2471:
case 3044:
case 1381:
case 480:
case 670:
case 3497:
case 3092:
case 109:
case 3047:
case 3442:
case 2675:
case 3950:
case 144:
case 3845:
case 117:
case 1331:
case 1556:
case 3965:
case 1564:
case 2390:
case 4013:
case 2079:
case 2517:
case 815:
case 70:
case 1567:
case 2565:
case 3193:
case 998:
case 3680:
case 3288:
case 258:
case 227:
case 3578:
case 3749:
case 2806:
case 699:
case 3157:
case 3736:
case 398:
case 2822:
case 3166:
case 769:
case 3319:
case 2000:
case 3453:
case 1363:
case 2425:
case 1427:
case 1775:
case 3786:
case 130:
case 1800:
case 3668:
case 849:
case 641:
case 2621:
case 2743:
case 3238:
case 2774:
case 1006:
case 3408:
case 1652:
case 3326:
case 3997:
case 615:
case 194:
case 281:
case 2594:
case 1360:
case 1329:
case 1595:
case 3994:
case 920:
case 1248:
case 3113:
case 2542:
case 464:
case 547:
case 2102:
case 3296:
case 2971:
case 2740:
case 3661:
case 514:
case 1739:
case 1120:
case 2058:
case 1316:
case 3798:
case 3401:
case 718:
case 2003:
case 3012:
case 1746:
case 101:
case 3231:
case 206:
case 2598:
case 583:
case 2245:
case 1939:
case 1060:
case 3823:
case 987:
case 2855:
case 628:
case 1866:
case 1583:
case 212:
case 1946:
case 2816:
case 1244:
case 3151:
case 2066:
case 725:
case 623:
case 3100:
case 3742:
case 174:
case 1533:
case 784:
case 3540:
case 640:
case 3797:
case 131:
case 1810:
case 2940:
case 24:
case 3312:
case 2771:
case 1989:
case 2829:
case 3794:
case 1975:
case 3543:
case 373:
case 2977:
case 3284:
case 68:
case 2591:
case 921:
case 3158:
case 280:
case 3577:
case 3991:
case 2586:
case 1813:
case 95:
case 3820:
case 3407:
case 752:
case 100:
case 3237:
case 2013:
case 2536:
case 2351:
case 834:
case 1270:
case 3667:
case 2109:
case 1428:
case 3026:
case 4079:
case 3936:
case 3404:
case 2549:
case 551:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758146402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,];
var gg_b = "1758146402/";

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
