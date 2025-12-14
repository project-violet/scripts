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
case 3207:
case 2453:
case 99:
case 541:
case 443:
case 161:
case 2845:
case 56:
case 1707:
case 2941:
case 750:
case 2948:
case 2255:
case 1497:
case 811:
case 828:
case 3858:
case 469:
case 3194:
case 3597:
case 3105:
case 1924:
case 729:
case 652:
case 2554:
case 1741:
case 3097:
case 1748:
case 1821:
case 2023:
case 2055:
case 1925:
case 1149:
case 3195:
case 1953:
case 3954:
case 29:
case 2555:
case 2997:
case 2523:
case 1441:
case 720:
case 3343:
case 1656:
case 473:
case 645:
case 3548:
case 3297:
case 2725:
case 2328:
case 709:
case 858:
case 3622:
case 2321:
case 2753:
case 1386:
case 2844:
case 1130:
case 1407:
case 1880:
case 2650:
case 808:
case 622:
case 3540:
case 260:
case 4023:
case 2583:
case 2320:
case 49:
case 3352:
case 1131:
case 2083:
case 2658:
case 943:
case 1888:
case 331:
case 273:
case 1820:
case 599:
case 1326:
case 2742:
case 2785:
case 2388:
case 969:
case 3539:
case 852:
case 3682:
case 2381:
case 1440:
case 1277:
case 2484:
case 590:
case 2442:
case 414:
case 2113:
case 1643:
case 3644:
case 2939:
case 166:
case 960:
case 546:
case 1946:
case 2485:
case 1077:
case 3686:
case 845:
case 1739:
case 973:
case 3173:
case 1174:
case 3983:
case 1984:
case 733:
case 1322:
case 777:
case 816:
case 608:
case 937:
case 37:
case 3797:
case 1048:
case 2809:
case 1679:
case 4046:
case 1041:
case 3880:
case 2253:
case 518:
case 583:
case 3967:
case 2455:
case 672:
case 1622:
case 967:
case 655:
case 2127:
case 2524:
case 1007:
case 4084:
case 848:
case 2024:
case 770:
case 930:
case 3828:
case 749:
case 3925:
case 3149:
case 1954:
case 3953:
case 1104:
case 878:
case 2525:
case 796:
case 1626:
case 986:
case 3748:
case 4:
case 453:
case 2025:
case 501:
case 4042:
case 15:
case 403:
case 1597:
case 1923:
case 3924:
case 1241:
case 684:
case 4017:
case 230:
case 2899:
case 3707:
case 2567:
case 2164:
case 625:
case 2620:
case 34:
case 1207:
case 2454:
case 2369:
case 2358:
case 2755:
case 361:
case 3984:
case 2542:
case 3577:
case 1983:
case 2:
case 467:
case 506:
case 2621:
case 2085:
case 1239:
case 2042:
case 923:
case 791:
case 872:
case 2585:
case 203:
case 2350:
case 556:
case 2017:
case 2783:
case 648:
case 1850:
case 1477:
case 1356:
case 4067:
case 3643:
case 1644:
case 1539:
case 1682:
case 281:
case 2046:
case 3440:
case 707:
case 2852:
case 2483:
case 2242:
case 3917:
case 903:
case 526:
case 512:
case 757:
case 2115:
case 1039:
case 953:
case 3326:
case 486:
case 1777:
case 1645:
case 1040:
case 2084:
case 3881:
case 1352:
case 3138:
case 131:
case 3888:
case 393:
case 387:
case 4024:
case 3439:
case 2584:
case 2977:
case 2187:
case 2905:
case 1635:
case 2263:
case 1678:
case 3095:
case 3004:
case 1003:
case 1347:
case 1049:
case 2536:
case 2764:
case 2812:
case 904:
case 2036:
case 2465:
case 1549:
case 3595:
case 224:
case 3430:
case 3957:
case 3793:
case 1308:
case 1301:
case 3403:
case 3449:
case 2427:
case 3141:
case 3294:
case 818:
case 606:
case 821:
case 135:
case 1030:
case 1391:
case 2236:
case 3703:
case 1704:
case 4013:
case 2032:
case 2563:
case 924:
case 1405:
case 3295:
case 3204:
case 1965:
case 2063:
case 1861:
case 332:
case 2532:
case 1634:
case 3633:
case 612:
case 626:
case 2154:
case 2557:
case 2904:
case 2891:
case 1093:
case 3094:
case 3730:
case 578:
case 851:
case 2057:
case 3936:
case 3876:
case 3594:
case 1811:
case 1238:
case 2013:
case 1231:
case 2629:
case 338:
case 1915:
case 4032:
case 3474:
case 3731:
case 555:
case 454:
case 3738:
case 3335:
case 3378:
case 2414:
case 572:
case 2311:
case 365:
case 2302:
case 1074:
case 3073:
case 4057:
case 1366:
case 621:
case 1575:
case 542:
case 1300:
case 83:
case 2676:
case 1806:
case 764:
case 1538:
case 584:
case 1075:
case 1038:
case 424:
case 525:
case 4036:
case 2973:
case 3889:
case 2306:
case 812:
case 1362:
case 1274:
case 3273:
case 2800:
case 1670:
case 3913:
case 3334:
case 3475:
case 3616:
case 3431:
case 1773:
case 1730:
case 1876:
case 676:
case 1936:
case 1662:
case 3927:
case 1370:
case 3810:
case 2949:
case 1633:
case 3634:
case 2265:
case 244:
case 699:
case 528:
case 2432:
case 3316:
case 488:
case 3965:
case 3859:
case 734:
case 3861:
case 132:
case 1749:
case 4014:
case 3398:
case 1703:
case 2227:
case 2564:
case 3494:
case 3964:
case 2436:
case 508:
case 4015:
case 982:
case 3794:
case 1793:
case 3308:
case 3301:
case 1666:
case 1403:
case 3404:
case 871:
case 3530:
case 1449:
case 2763:
case 2696:
case 2329:
case 368:
case 646:
case 1957:
case 1504:
case 1107:
case 1595:
case 690:
case 2527:
case 3347:
case 2372:
case 1004:
case 274:
case 3049:
case 798:
case 552:
case 2515:
case 2146:
case 1475:
case 876:
case 1616:
case 1438:
case 1774:
case 1431:
case 2661:
case 899:
case 502:
case 3274:
case 1913:
case 4027:
case 1698:
case 3075:
case 66:
case 3038:
case 3031:
case 2184:
case 2610:
case 3575:
case 3300:
case 575:
case 3531:
case 362:
case 3806:
case 2871:
case 2931:
case 2878:
case 1601:
case 2938:
case 2835:
case 2215:
case 522:
case 444:
case 3390:
case 3177:
case 3574:
case 545:
case 671:
case 288:
case 1612:
case 3896:
case 2287:
case 1731:
case 1474:
case 1738:
case 2514:
case 846:
case 1378:
case 1775:
case 1647:
case 4064:
case 1371:
case 815:
case 2014:
case 3811:
case 890:
case 138:
case 3231:
case 3818:
case 3915:
case 1091:
case 680:
case 3675:
case 60:
case 2772:
case 3747:
case 1098:
case 2332:
case 352:
case 3416:
case 1598:
case 1247:
case 1591:
case 2687:
case 2510:
case 1857:
case 2363:
case 2559:
case 1972:
case 1182:
case 1832:
case 831:
case 2561:
case 3570:
case 3701:
case 1016:
case 1393:
case 3708:
case 3305:
case 2357:
case 375:
case 1863:
case 2068:
case 4002:
case 2059:
case 1929:
case 1516:
case 3199:
case 142:
case 3070:
case 3408:
case 3304:
case 1047:
case 2830:
case 2614:
case 774:
case 4092:
case 3109:
case 3412:
case 1291:
case 345:
case 62:
case 3961:
case 1298:
case 3910:
case 1008:
case 1001:
case 4006:
case 3270:
case 2261:
case 2121:
case 3447:
case 155:
case 498:
case 2128:
case 1512:
case 292:
case 1501:
case 1216:
case 1508:
case 1836:
case 1012:
case 1330:
case 3278:
case 3462:
case 80:
case 1000:
case 2260:
case 1771:
case 85:
case 1375:
case 1735:
case 3152:
case 2296:
case 3400:
case 3887:
case 1062:
case 3137:
case 3534:
case 1533:
case 3996:
case 2489:
case 2831:
case 2218:
case 2506:
case 492:
case 2978:
case 2211:
case 2838:
case 1290:
case 3766:
case 1694:
case 3693:
case 3960:
case 434:
case 2789:
case 3535:
case 308:
case 535:
case 2096:
case 4010:
case 3571:
case 3700:
case 2596:
case 82:
case 2934:
case 3649:
case 1090:
case 1179:
case 889:
case 3762:
case 3630:
case 788:
case 4068:
case 2002:
case 1374:
case 713:
case 836:
case 2511:
case 3992:
case 998:
case 917:
case 2206:
case 2518:
case 3770:
case 219:
case 3836:
case 3508:
case 3186:
case 3976:
case 3012:
case 2768:
case 2761:
case 3330:
case 1827:
case 1674:
case 1270:
case 2895:
case 2804:
case 1447:
case 2029:
case 1865:
case 1959:
case 1968:
case 3298:
case 2572:
case 1961:
case 1408:
case 785:
case 1395:
case 2072:
case 3047:
case 1791:
case 1864:
case 3863:
case 175:
case 1712:
case 3145:
case 3208:
case 3929:
case 3201:
case 1070:
case 342:
case 1199:
case 1491:
case 1498:
case 3182:
case 2947:
case 3972:
case 919:
case 64:
case 3016:
case 1701:
case 3393:
case 1708:
case 1394:
case 210:
case 2461:
case 295:
case 2272:
case 2912:
case 2468:
case 2364:
case 3470:
case 704:
case 3857:
case 3091:
case 1675:
case 1416:
case 2901:
case 2151:
case 2229:
case 2169:
case 2158:
case 1631:
case 3374:
case 2460:
case 1373:
case 3590:
case 3066:
case 3734:
case 3122:
case 3566:
case 2496:
case 348:
case 1762:
case 1234:
case 1630:
case 2706:
case 1814:
case 2402:
case 2289:
case 410:
case 1035:
case 1466:
case 1078:
case 2873:
case 1535:
case 2314:
case 1571:
case 2418:
case 1700:
case 87:
case 1156:
case 419:
case 3562:
case 2492:
case 1766:
case 693:
case 687:
case 3290:
case 3605:
case 1693:
case 3533:
case 1137:
case 532:
case 3062:
case 1887:
case 84:
case 1790:
case 3126:
case 3778:
case 264:
case 3338:
case 2966:
case 2589:
case 1902:
case 2760:
case 1152:
case 128:
case 2406:
case 1911:
case 1278:
case 378:
case 2387:
case 2796:
case 2990:
case 2663:
case 4072:
case 2751:
case 2323:
case 306:
case 2580:
case 2769:
case 3509:
case 3486:
case 3043:
case 270:
case 1951:
case 3299:
case 1245:
case 1586:
case 1969:
case 1108:
case 1958:
case 739:
case 407:
case 3824:
case 2685:
case 2642:
case 3348:
case 1799:
case 2521:
case 1282:
case 2528:
case 457:
case 996:
case 838:
case 1198:
case 1244:
case 3482:
case 1191:
case 3928:
case 1640:
case 970:
case 2110:
case 2684:
case 2280:
case 1854:
case 312:
case 3867:
case 1082:
case 767:
case 2469:
case 2458:
case 963:
case 427:
case 2228:
case 1582:
case 2161:
case 3980:
case 3170:
case 1045:
case 33:
case 2196:
case 397:
case 3056:
case 2937:
case 3842:
case 894:
case 171:
case 1752:
case 2160:
case 3422:
case 3171:
case 3556:
case 3988:
case 7:
case 1648:
case 753:
case 1641:
case 1079:
case 2111:
case 1456:
case 1522:
case 2118:
case 2281:
case 1737:
case 291:
case 1226:
case 1166:
case 2102:
case 3237:
case 1022:
case 479:
case 3817:
case 907:
case 638:
case 1437:
case 1950:
case 81:
case 0:
case 351:
case 3426:
case 3552:
case 4080:
case 2192:
case 3256:
case 449:
case 2719:
case 3052:
case 301:
case 3846:
case 3037:
case 1222:
case 1162:
case 927:
case 3339:
case 832:
case 16:
case 4028:
case 561:
case 2625:
case 3537:
case 3134:
case 1133:
case 257:
case 463:
case 1919:
case 1526:
case 141:
case 1279:
case 862:
case 3582:
case 1099:
case 1170:
case 1980:
case 13:
case 3045:
case 1397:
case 1867:
case 3082:
case 2353:
case 2721:
case 531:
case 477:
case 2325:
case 3545:
case 4050:
case 3709:
case 2897:
case 1744:
case 200:
case 3499:
case 2986:
case 920:
case 1445:
case 399:
case 1482:
case 250:
case 3244:
case 1209:
case 1928:
case 3191:
case 2069:
case 2367:
case 3854:
case 1853:
case 1348:
case 2807:
case 3282:
case 3443:
case 390:
case 3409:
case 259:
case 3958:
case 3245:
case 3855:
case 2258:
case 2129:
case 2945:
case 156:
case 2841:
case 900:
case 79:
case 2428:
case 2421:
case 2982:
case 2172:
case 2346:
case 1537:
case 662:
case 409:
case 2250:
case 1722:
case 773:
case 3919:
case 3452:
case 2840:
case 933:
case 3526:
case 3162:
case 459:
case 1339:
case 1779:
case 3697:
case 1256:
case 1340:
case 1052:
case 760:
case 3100:
case 3950:
case 50:
case 151:
case 2189:
case 2979:
case 1552:
case 3579:
case 769:
case 1237:
case 536:
case 1817:
case 2788:
case 2342:
case 3648:
case 589:
case 3190:
case 3641:
case 1726:
case 3079:
case 233:
case 2050:
case 3522:
case 868:
case 2623:
case 371:
case 400:
case 2019:
case 3752:
case 743:
case 1981:
case 1988:
case 947:
case 52:
case 1556:
case 118:
case 1252:
case 2519:
case 2926:
case 450:
case 835:
case 121:
case 1479:
case 1056:
case 3607:
case 2699:
case 2820:
case 3115:
case 1484:
case 2277:
case 3046:
case 2440:
case 47:
case 3217:
case 2942:
case 1583:
case 966:
case 160:
case 1658:
case 3084:
case 1083:
case 2131:
case 1669:
case 2881:
case 2138:
case 1651:
case 1717:
case 2175:
case 1446:
case 2739:
case 549:
case 3350:
case 3042:
case 2379:
case 3:
case 353:
case 3085:
case 1417:
case 2984:
case 2174:
case 1879:
case 2643:
case 819:
case 2609:
case 143:
case 3114:
case 3680:
case 44:
case 2740:
case 721:
case 1485:
case 993:
case 1822:
case 3783:
case 1784:
case 3319:
case 695:
case 864:
case 1054:
case 3053:
case 2382:
case 4077:
case 73:
case 2741:
case 2345:
case 2637:
case 3553:
case 1132:
case 3351:
case 3723:
case 114:
case 1425:
case 1163:
case 1941:
case 3620:
case 1948:
case 24:
case 330:
case 466:
case 507:
case 3899:
case 1725:
case 2880:
case 1254:
case 2407:
case 3253:
case 2130:
case 3165:
case 3225:
case 27:
case 3809:
case 1844:
case 2953:
case 527:
case 756:
case 2103:
case 1023:
case 2821:
case 1619:
case 1055:
case 493:
case 2828:
case 487:
case 2656:
case 2344:
case 706:
case 1136:
case 1886:
case 2448:
case 19:
case 1380:
case 2441:
case 3267:
case 1523:
case 1017:
case 3784:
case 1783:
case 2644:
case 892:
case 3939:
case 771:
case 3879:
case 2240:
case 2477:
case 1680:
case 1114:
case 153:
case 2819:
case 1:
case 1085:
case 3746:
case 1621:
case 520:
case 2173:
case 2983:
case 1246:
case 1350:
case 103:
case 2352:
case 1084:
case 3658:
case 231:
case 4007:
case 3446:
case 2040:
case 1217:
case 3583:
case 1977:
case 436:
case 3826:
case 360:
case 1242:
case 3484:
case 550:
case 3785:
case 181:
case 2539:
case 76:
case 58:
case 42:
case 373:
case 2039:
case 1546:
case 577:
case 2007:
case 3886:
case 39:
case 4040:
case 533:
case 3523:
case 1267:
case 692:
case 2507:
case 2104:
case 3023:
case 3055:
case 746:
case 95:
case 3254:
case 1165:
case 2048:
case 2679:
case 3725:
case 980:
case 2622:
case 90:
case 715:
case 4039:
case 1423:
case 3424:
case 2297:
case 3163:
case 1224:
case 1567:
case 3255:
case 1899:
case 130:
case 1755:
case 314:
case 1454:
case 3425:
case 280:
case 2097:
case 167:
case 92:
case 2105:
case 2194:
case 1688:
case 1053:
case 1681:
case 1025:
case 313:
case 1318:
case 2896:
case 1414:
case 3413:
case 3142:
case 3835:
case 3185:
case 3975:
case 3871:
case 3931:
case 2074:
case 1302:
case 2366:
case 3878:
case 3938:
case 2915:
case 592:
case 758:
case 1890:
case 2811:
case 1629:
case 2231:
case 1866:
case 1672:
case 962:
case 3287:
case 1360:
case 2473:
case 1513:
case 1487:
case 800:
case 3661:
case 1306:
case 3015:
case 3659:
case 3668:
case 435:
case 3515:
case 3146:
case 647:
case 2531:
case 1862:
case 2538:
case 728:
case 1415:
case 3214:
case 1213:
case 3834:
case 1973:
case 3974:
case 3610:
case 2495:
case 2530:
case 3565:
case 3602:
case 2794:
case 2301:
case 3436:
case 2312:
case 235:
case 3757:
case 2964:
case 2293:
case 620:
case 3372:
case 2347:
case 2003:
case 374:
case 1801:
case 609:
case 2049:
case 2671:
case 3660:
case 1994:
case 3993:
case 1905:
case 1155:
case 3732:
case 1123:
case 1263:
case 2635:
case 722:
case 124:
case 4038:
case 1232:
case 4075:
case 3696:
case 268:
case 775:
case 1898:
case 3432:
case 2093:
case 935:
case 3125:
case 1904:
case 2593:
case 1464:
case 1057:
case 3606:
case 1368:
case 847:
case 1765:
case 1359:
case 4074:
case 3167:
case 1032:
case 1310:
case 2494:
case 1236:
case 104:
case 3692:
case 2795:
case 1816:
case 2398:
case 2704:
case 3376:
case 2859:
case 1532:
case 1689:
case 3064:
case 1063:
case 3457:
case 2203:
case 154:
case 517:
case 629:
case 3213:
case 1974:
case 1587:
case 3973:
case 1610:
case 1184:
case 1834:
case 3833:
case 2140:
case 3392:
case 938:
case 2698:
case 1389:
case 840:
case 1713:
case 4004:
case 657:
case 879:
case 2431:
case 595:
case 2273:
case 510:
case 494:
case 2913:
case 2889:
case 2139:
case 1659:
case 2775:
case 432:
case 3866:
case 2371:
case 3360:
case 2731:
case 3513:
case 1514:
case 2335:
case 691:
case 627:
case 3396:
case 863:
case 3629:
case 238:
case 1975:
case 1185:
case 1835:
case 1215:
case 1931:
case 3302:
case 2073:
case 1878:
case 3715:
case 188:
case 2612:
case 3311:
case 3414:
case 2573:
case 1142:
case 3063:
case 3727:
case 1064:
case 1870:
case 354:
case 2204:
case 1457:
case 807:
case 696:
case 1736:
case 3032:
case 1167:
case 1227:
case 3310:
case 679:
case 1692:
case 2594:
case 2505:
case 21:
case 725:
case 3057:
case 182:
case 3361:
case 1606:
case 2662:
case 2936:
case 4073:
case 3368:
case 2876:
case 465:
case 1432:
case 3898:
case 1125:
case 1265:
case 2633:
case 1153:
case 144:
case 3904:
case 1903:
case 2504:
case 2430:
case 2957:
case 3232:
case 385:
case 1027:
case 1763:
case 3764:
case 1329:
case 891:
case 3801:
case 2004:
case 1372:
case 932:
case 3905:
case 1264:
case 1527:
case 1732:
case 663:
case 2829:
case 1618:
case 1757:
case 1611:
case 755:
case 2963:
case 2690:
case 2205:
case 91:
case 649:
case 294:
case 2449:
case 2793:
case 1602:
case 2932:
case 3847:
case 2872:
case 1202:
case 554:
case 1489:
case 1006:
case 4001:
case 3711:
case 4008:
case 2533:
case 3315:
case 3718:
case 2062:
case 1875:
case 2290:
case 1935:
case 405:
case 2694:
case 2605:
case 504:
case 1831:
case 1971:
case 1181:
case 1211:
case 1188:
case 1260:
case 1120:
case 3387:
case 623:
case 4047:
case 3990:
case 1664:
case 3406:
case 1592:
case 867:
case 2000:
case 2735:
case 3589:
case 3966:
case 1296:
case 3760:
case 2771:
case 1092:
case 2778:
case 364:
case 3150:
case 1018:
case 2233:
case 1011:
case 2813:
case 2179:
case 2566:
case 524:
case 248:
case 1206:
case 442:
case 2478:
case 2734:
case 2471:
case 1518:
case 2122:
case 2262:
case 1002:
case 765:
case 3418:
case 3962:
case 3411:
case 6:
case 1313:
case 1096:
case 1560:
case 2604:
case 1874:
case 3402:
case 1060:
case 3119:
case 603:
case 284:
case 630:
case 2393:
case 1568:
case 448:
case 1559:
case 2832:
case 225:
case 2516:
case 1357:
case 3901:
case 881:
case 1332:
case 3151:
case 3576:
case 3908:
case 823:
case 3158:
case 972:
case 3894:
case 1893:
case 732:
case 134:
case 1510:
case 1729:
case 2857:
case 310:
case 395:
case 2247:
case 3912:
case 3468:
case 2591:
case 255:
case 3998:
case 1121:
case 1128:
case 1849:
case 2001:
case 3804:
case 3895:
case 3365:
case 3759:
case 3761:
case 2330:
case 205:
case 2501:
case 192:
case 925:
case 2836:
case 2186:
case 2508:
case 2047:
case 853:
case 3276:
case 3916:
case 2291:
case 1336:
case 2144:
case 2547:
case 2298:
case 3613:
case 3327:
case 3029:
case 803:
case 686:
case 1210:
case 1792:
case 2071:
case 3934:
case 3596:
case 2466:
case 1636:
case 2700:
case 2156:
case 928:
case 2906:
case 3313:
case 3789:
case 3627:
case 2535:
case 3560:
case 208:
case 3511:
case 3206:
case 2992:
case 574:
case 3002:
case 1460:
case 643:
case 1900:
case 3018:
case 1150:
case 2814:
case 3502:
case 1496:
case 1632:
case 445:
case 211:
case 2152:
case 2902:
case 3296:
case 544:
case 2433:
case 637:
case 3092:
case 1387:
case 582:
case 3260:
case 1663:
case 3664:
case 958:
case 422:
case 2278:
case 2911:
case 2271:
case 3935:
case 3181:
case 3831:
case 3978:
case 3506:
case 1492:
case 398:
case 2996:
case 3489:
case 1315:
case 428:
case 952:
case 2968:
case 2109:
case 2959:
case 2961:
case 411:
case 513:
case 3180:
case 1613:
case 3776:
case 2798:
case 2791:
case 902:
case 1276:
case 1710:
case 2401:
case 1916:
case 1759:
case 2827:
case 1761:
case 392:
case 4034:
case 3429:
case 119:
case 3472:
case 3261:
case 1998:
case 2674:
case 975:
case 3849:
case 1804:
case 3803:
case 1895:
case 3729:
case 1076:
case 3687:
case 4078:
case 3363:
case 4035:
case 1461:
case 837:
case 1459:
case 922:
case 916:
case 1151:
case 2638:
case 3332:
case 3010:
case 1169:
case 1229:
case 1805:
case 3893:
case 1894:
case 2675:
case 334:
case 3772:
case 3476:
case 275:
case 3059:
case 2701:
case 2570:
case 1410:
case 2394:
case 2456:
case 1111:
case 2522:
case 2377:
case 2648:
case 377:
case 3550:
case 3788:
case 2579:
case 191:
case 127:
case 2607:
case 1937:
case 3720:
case 3519:
case 3926:
case 688:
case 3623:
case 613:
case 3317:
case 3019:
case 1160:
case 107:
case 3420:
case 26:
case 1750:
case 2222:
case 2162:
case 1106:
case 2452:
case 514:
case 241:
case 490:
case 4086:
case 1081:
case 1625:
case 3250:
case 2883:
case 882:
case 3189:
case 3219:
case 2100:
case 971:
case 3384:
case 1383:
case 1667:
case 3481:
case 1028:
case 4026:
case 1021:
case 2823:
case 246:
case 2951:
case 359:
case 2958:
case 2586:
case 2282:
case 72:
case 163:
case 2112:
case 2086:
case 309:
case 2799:
case 3480:
case 3428:
case 3982:
case 2147:
case 3421:
case 1617:
case 3324:
case 1355:
case 789:
case 3841:
case 736:
case 170:
case 3848:
case 888:
case 3258:
case 3945:
case 3269:
case 813:
case 3251:
case 1999:
case 1080:
case 2286:
case 915:
case 329:
case 1451:
case 196:
case 2082:
case 3721:
case 4079:
case 1646:
case 780:
case 70:
case 3728:
case 560:
case 2045:
case 1228:
case 1159:
case 75:
case 1221:
case 1943:
case 140:
case 3058:
case 3683:
case 1684:
case 1110:
case 3069:
case 2854:
case 276:
case 1280:
case 2244:
case 2640:
case 2191:
case 3551:
case 3569:
case 3986:
case 3176:
case 38:
case 2709:
case 3897:
case 2743:
case 471:
case 537:
case 3383:
case 1384:
case 3520:
case 3667:
case 201:
case 997:
case 1488:
case 921:
case 1189:
case 3020:
case 2552:
case 1219:
case 406:
case 567:
case 1840:
case 3088:
case 1346:
case 2722:
case 2884:
case 2134:
case 3625:
case 854:
case 1420:
case 530:
case 307:
case 2037:
case 3750:
case 3106:
case 2339:
case 951:
case 2981:
case 2422:
case 426:
case 2178:
case 2988:
case 1317:
case 2135:
case 3624:
case 586:
case 3220:
case 1655:
case 539:
case 3937:
case 3877:
case 2842:
case 901:
case 1519:
case 218:
case 2252:
case 297:
case 221:
case 2479:
case 2237:
case 43:
case 1788:
case 391:
case 3419:
case 327:
case 3111:
case 885:
case 3288:
case 133:
case 3281:
case 2920:
case 1342:
case 824:
case 1780:
case 226:
case 1558:
case 1569:
case 906:
case 761:
case 581:
case 3110:
case 1058:
case 1683:
case 2853:
case 1051:
case 4056:
case 150:
case 497:
case 956:
case 2928:
case 2980:
case 2170:
case 604:
case 340:
case 3451:
case 1721:
case 3354:
case 1353:
case 1728:
case 401:
case 2307:
case 1841:
case 370:
case 1945:
case 2486:
case 3080:
case 256:
case 1251:
case 926:
case 912:
case 1428:
case 120:
case 1421:
case 1324:
case 553:
case 3751:
case 3617:
case 3580:
case 5:
case 2444:
case 363:
case 3642:
case 2677:
case 1480:
case 2341:
case 77:
case 3028:
case 685:
case 2824:
case 3685:
case 2299:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765681201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,];
var gg_b = "1765681201/";

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
