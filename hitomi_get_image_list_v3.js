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
case 437:
case 3324:
case 3090:
case 2000:
case 1861:
case 4030:
case 3665:
case 2537:
case 880:
case 2750:
case 1045:
case 1326:
case 3868:
case 908:
case 2899:
case 2954:
case 2619:
case 2258:
case 377:
case 2963:
case 1466:
case 3681:
case 1667:
case 192:
case 1885:
case 3453:
case 250:
case 2377:
case 4050:
case 2557:
case 2883:
case 1550:
case 3077:
case 518:
case 2912:
case 1340:
case 374:
case 1737:
case 1311:
case 3395:
case 362:
case 1981:
case 2934:
case 2238:
case 2160:
case 780:
case 3181:
case 1167:
case 105:
case 3988:
case 455:
case 2024:
case 2043:
case 2457:
case 3300:
case 3433:
case 3735:
case 2390:
case 2656:
case 11:
case 3328:
case 4049:
case 39:
case 1549:
case 1561:
case 1830:
case 2032:
case 3587:
case 1502:
case 4002:
case 3864:
case 2958:
case 2254:
case 483:
case 2779:
case 122:
case 3487:
case 3542:
case 1461:
case 3686:
case 2014:
case 1449:
case 840:
case 1585:
case 2151:
case 954:
case 3509:
case 2761:
case 16:
case 1265:
case 3780:
case 2212:
case 740:
case 3314:
case 629:
case 3792:
case 2702:
case 3572:
case 979:
case 2052:
case 138:
case 3833:
case 1281:
case 2483:
case 191:
case 485:
case 1799:
case 311:
case 3332:
case 3186:
case 1579:
case 2131:
case 750:
case 65:
case 933:
case 1184:
case 947:
case 3506:
case 469:
case 2924:
case 1647:
case 481:
case 1446:
case 3175:
case 3067:
case 1504:
case 2776:
case 1605:
case 718:
case 2611:
case 3444:
case 3725:
case 3423:
case 3523:
case 868:
case 3645:
case 3354:
case 1841:
case 1682:
case 1065:
case 3193:
case 4046:
case 2103:
case 1727:
case 1356:
case 2817:
case 2697:
case 2720:
case 2012:
case 2496:
case 83:
case 3607:
case 3794:
case 3947:
case 2704:
case 313:
case 630:
case 1147:
case 4076:
case 193:
case 2140:
case 2626:
case 1871:
case 931:
case 1796:
case 3905:
case 2054:
case 768:
case 1319:
case 818:
case 2746:
case 1945:
case 1520:
case 998:
case 3145:
case 2527:
case 2367:
case 1677:
case 1907:
case 2603:
case 2973:
case 2670:
case 2197:
case 3107:
case 1190:
case 3501:
case 1804:
case 3562:
case 2928:
case 451:
case 101:
case 1086:
case 268:
case 2417:
case 956:
case 2771:
case 3448:
case 540:
case 1510:
case 946:
case 1569:
case 4069:
case 4041:
case 3844:
case 1351:
case 3823:
case 2491:
case 3401:
case 2218:
case 2659:
case 2914:
case 3247:
case 2708:
case 2139:
case 4071:
case 123:
case 1571:
case 2295:
case 3205:
case 2058:
case 2621:
case 3715:
case 3338:
case 3513:
case 1717:
case 2022:
case 30:
case 3282:
case 3812:
case 2048:
case 3378:
case 3692:
case 3983:
case 2661:
case 1431:
case 969:
case 3257:
case 2233:
case 1371:
case 981:
case 3091:
case 2584:
case 2001:
case 3834:
case 2729:
case 2179:
case 127:
case 2685:
case 1255:
case 1836:
case 1098:
case 3192:
case 936:
case 952:
case 1992:
case 431:
case 1429:
case 2149:
case 3522:
case 2968:
case 3237:
case 2253:
case 2391:
case 25:
case 1451:
case 3786:
case 1551:
case 371:
case 3863:
case 4051:
case 2185:
case 3422:
case 498:
case 3558:
case 1784:
case 2942:
case 3348:
case 2317:
case 3374:
case 106:
case 1460:
case 2933:
case 1436:
case 1376:
case 1157:
case 3512:
case 75:
case 2006:
case 74:
case 3412:
case 3096:
case 729:
case 317:
case 1560:
case 1320:
case 1831:
case 3635:
case 2327:
case 2567:
case 1955:
case 4060:
case 3155:
case 2884:
case 446:
case 4019:
case 2287:
case 578:
case 1280:
case 3765:
case 3463:
case 3822:
case 2166:
case 2268:
case 2130:
case 194:
case 2964:
case 1137:
case 84:
case 829:
case 3306:
case 314:
case 982:
case 2953:
case 1767:
case 390:
case 2760:
case 85:
case 1346:
case 3299:
case 110:
case 2209:
case 1829:
case 3858:
case 3135:
case 428:
case 3563:
case 3323:
case 3655:
case 2074:
case 3344:
case 2383:
case 1516:
case 2042:
case 1840:
case 3372:
case 2847:
case 2274:
case 3698:
case 3514:
case 2171:
case 4039:
case 2805:
case 937:
case 1811:
case 1225:
case 953:
case 1379:
case 2641:
case 3414:
case 1439:
case 730:
case 63:
case 2882:
case 2087:
case 2669:
case 2913:
case 3800:
case 1416:
case 484:
case 1092:
case 3227:
case 2610:
case 3873:
case 1998:
case 1294:
case 3452:
case 3824:
case 3198:
case 3387:
case 2671:
case 278:
case 1826:
case 2716:
case 58:
case 2206:
case 830:
case 3296:
case 1349:
case 4059:
case 1191:
case 2962:
case 3368:
case 1559:
case 1459:
case 934:
case 3309:
case 2399:
case 3342:
case 2948:
case 599:
case 618:
case 2169:
case 1421:
case 3917:
case 1870:
case 3083:
case 3552:
case 4011:
case 2505:
case 375:
case 1511:
case 2604:
case 1035:
case 3694:
case 2278:
case 4040:
case 300:
case 209:
case 2547:
case 2482:
case 778:
case 3518:
case 2176:
case 444:
case 2726:
case 3473:
case 1497:
case 3775:
case 1597:
case 454:
case 2590:
case 1440:
case 2053:
case 2120:
case 1127:
case 2703:
case 366:
case 3495:
case 1411:
case 3793:
case 983:
case 3927:
case 3828:
case 1055:
case 1747:
case 4026:
case 1366:
case 3996:
case 1705:
case 2477:
case 1403:
case 1330:
case 2906:
case 3353:
case 2262:
case 3524:
case 3789:
case 433:
case 3443:
case 3852:
case 2146:
case 1570:
case 878:
case 985:
case 3217:
case 2944:
case 2620:
case 196:
case 54:
case 2797:
case 1782:
case 293:
case 3118:
case 2576:
case 2147:
case 3239:
case 1214:
case 1918:
case 3940:
case 3056:
case 696:
case 2989:
case 2796:
case 3911:
case 1995:
case 56:
case 1054:
case 3216:
case 3381:
case 2520:
case 2319:
case 1388:
case 2190:
case 3100:
case 414:
case 3173:
case 1900:
case 3425:
case 2182:
case 2677:
case 2907:
case 2476:
case 3997:
case 2647:
case 604:
case 723:
case 472:
case 3618:
case 3259:
case 3815:
case 3926:
case 1891:
case 3695:
case 346:
case 2975:
case 3221:
case 1611:
case 3594:
case 51:
case 801:
case 2404:
case 3494:
case 332:
case 356:
case 2810:
case 1697:
case 1720:
case 3903:
case 1496:
case 1817:
case 2356:
case 464:
case 522:
case 2869:
case 1103:
case 1170:
case 2546:
case 2065:
case 2682:
case 2571:
case 223:
case 795:
case 1708:
case 471:
case 1218:
case 420:
case 1116:
case 626:
case 3701:
case 3916:
case 2791:
case 1295:
case 2876:
case 3029:
case 3386:
case 3132:
case 1932:
case 3652:
case 505:
case 1769:
case 913:
case 2820:
case 570:
case 1022:
case 1710:
case 1273:
case 2207:
case 2717:
case 893:
case 1827:
case 965:
case 1639:
case 3031:
case 3614:
case 2441:
case 1224:
case 793:
case 3778:
case 1243:
case 3128:
case 3515:
case 13:
case 2275:
case 3921:
case 1616:
case 1771:
case 201:
case 648:
case 2086:
case 2469:
case 3598:
case 2508:
case 503:
case 2846:
case 3498:
case 2329:
case 1952:
case 1517:
case 3152:
case 3270:
case 3415:
case 2293:
case 386:
case 2351:
case 3203:
case 1912:
case 2340:
case 3070:
case 1347:
case 333:
case 71:
case 2550:
case 347:
case 1557:
case 1766:
case 1305:
case 2311:
case 1730:
case 3455:
case 911:
case 3345:
case 2879:
case 2167:
case 1934:
case 2075:
case 3654:
case 1238:
case 379:
case 3555:
case 221:
case 1119:
case 3134:
case 1390:
case 1024:
case 86:
case 3307:
case 2450:
case 2397:
case 1382:
case 1136:
case 205:
case 3880:
case 1537:
case 4037:
case 2861:
case 335:
case 2530:
case 3892:
case 501:
case 2802:
case 354:
case 697:
case 3097:
case 660:
case 2007:
case 466:
case 738:
case 3435:
case 525:
case 2045:
case 2566:
case 989:
case 2089:
case 2466:
case 2667:
case 3011:
case 1619:
case 1258:
case 791:
case 1899:
case 81:
case 2688:
case 1156:
case 3251:
case 400:
case 1018:
case 1377:
case 1636:
case 150:
case 2370:
case 2479:
case 502:
case 805:
case 3622:
case 26:
case 4083:
case 2316:
case 1052:
case 1583:
case 2850:
case 3021:
case 3709:
case 974:
case 2799:
case 792:
case 1483:
case 3260:
case 291:
case 387:
case 3059:
case 3742:
case 1028:
case 3931:
case 3236:
case 703:
case 2783:
case 2359:
case 3772:
case 21:
case 912:
case 1837:
case 3016:
case 1779:
case 3492:
case 308:
case 3929:
case 770:
case 1254:
case 2684:
case 1151:
case 3835:
case 3039:
case 385:
case 2361:
case 2521:
case 411:
case 1108:
case 3380:
case 3392:
case 916:
case 2294:
case 594:
case 3908:
case 3678:
case 2302:
case 788:
case 2191:
case 3162:
case 1206:
case 2349:
case 2826:
case 1141:
case 3246:
case 1399:
case 3969:
case 510:
case 973:
case 1072:
case 3910:
case 1948:
case 1877:
case 3893:
case 1608:
case 489:
case 1759:
case 2840:
case 258:
case 2516:
case 383:
case 1383:
case 3601:
case 1009:
case 2225:
case 3889:
case 3662:
case 1641:
case 2439:
case 49:
case 3845:
case 625:
case 2379:
case 888:
case 2897:
case 1913:
case 3002:
case 975:
case 2416:
case 1882:
case 2080:
case 2366:
case 2526:
case 462:
case 2994:
case 2055:
case 3208:
case 3904:
case 2298:
case 758:
case 1740:
case 2196:
case 2215:
case 355:
case 1676:
case 1906:
case 345:
case 3593:
case 4077:
case 2570:
case 3241:
case 3269:
case 2782:
case 1944:
case 3475:
case 1620:
case 1797:
case 1248:
case 474:
case 2790:
case 3724:
case 2839:
case 2035:
case 1974:
case 3743:
case 1278:
case 2511:
case 412:
case 3606:
case 2350:
case 1490:
case 3271:
case 2816:
case 4047:
case 1176:
case 1547:
case 1482:
case 1053:
case 695:
case 3030:
case 42:
case 449:
case 1590:
case 4090:
case 1064:
case 204:
case 3355:
case 1770:
case 1213:
case 527:
case 3920:
case 2777:
case 3489:
case 3066:
case 3545:
case 2127:
case 1120:
case 3187:
case 507:
case 2429:
case 691:
case 1013:
case 2308:
case 3902:
case 1987:
case 3266:
case 3168:
case 40:
case 3949:
case 3315:
case 1391:
case 15:
case 894:
case 1909:
case 3071:
case 797:
case 3738:
case 2341:
case 2199:
case 129:
case 3985:
case 2856:
case 1317:
case 1078:
case 1942:
case 2369:
case 3865:
case 27:
case 3687:
case 1661:
case 3486:
case 588:
case 1972:
case 3010:
case 3722:
case 917:
case 1233:
case 794:
case 2431:
case 897:
case 3250:
case 3041:
case 1649:
case 2860:
case 710:
case 2531:
case 1179:
case 227:
case 3881:
case 3758:
case 4084:
case 2699:
case 1584:
case 2015:
case 1001:
case 3609:
case 1888:
case 806:
case 3586:
case 2836:
case 621:
case 3394:
case 3202:
case 2280:
case 3966:
case 1287:
case 2657:
case 2456:
case 971:
case 3164:
case 1396:
case 3153:
case 1130:
case 1268:
case 1964:
case 3734:
case 3076:
case 727:
case 2346:
case 824:
case 1760:
case 2556:
case 352:
case 1242:
case 1074:
case 6:
case 2460:
case 3481:
case 1666:
case 206:
case 2419:
case 1044:
case 692:
case 3664:
case 3133:
case 1488:
case 827:
case 2637:
case 3046:
case 2436:
case 603:
case 260:
case 297:
case 3465:
case 415:
case 3886:
case 381:
case 1588:
case 1006:
case 3754:
case 4088:
case 1327:
case 1567:
case 2094:
case 2320:
case 4067:
case 87:
case 1132:
case 2478:
case 2338:
case 1652:
case 3741:
case 20:
case 3384:
case 813:
case 3769:
case 3827:
case 865:
case 424:
case 1297:
case 3273:
case 3139:
case 1114:
case 876:
case 3218:
case 1051:
case 3914:
case 763:
case 3708:
case 574:
case 3116:
case 2578:
case 318:
case 2205:
case 3621:
case 198:
case 2715:
case 1701:
case 1825:
case 1916:
case 2358:
case 3952:
case 47:
case 2548:
case 559:
case 2844:
case 1203:
case 2823:
case 995:
case 1713:
case 1270:
case 3491:
case 1415:
case 2401:
case 2462:
case 1778:
case 3243:
case 3639:
case 1614:
case 3928:
case 2322:
case 1959:
case 3591:
case 3159:
case 3417:
case 3771:
case 549:
case 1921:
case 52:
case 2806:
case 3038:
case 1598:
case 3367:
case 1381:
case 3746:
case 673:
case 3197:
case 1173:
case 2982:
case 1100:
case 1744:
case 1997:
case 276:
case 3973:
case 1723:
case 494:
case 1525:
case 1118:
case 3140:
case 2878:
case 1056:
case 1624:
case 639:
case 80:
case 213:
case 2312:
case 2574:
case 1195:
case 1911:
case 3054:
case 675:
case 2645:
case 1494:
case 2354:
case 2523:
case 2363:
case 3817:
case 925:
case 561:
case 1600:
case 1970:
case 2406:
case 600:
case 70:
case 3720:
case 2848:
case 1673:
case 3496:
case 3170:
case 2193:
case 3640:
case 215:
case 3924:
case 1898:
case 1036:
case 1124:
case 263:
case 2506:
case 1143:
case 1695:
case 2801:
case 3891:
case 2423:
case 2175:
case 4094:
case 2689:
case 1594:
case 874:
case 2472:
case 3938:
case 777:
case 2332:
case 211:
case 3629:
case 3234:
case 1658:
case 576:
case 712:
case 9:
case 1138:
case 1260:
case 1855:
case 1059:
case 1742:
case 1931:
case 2288:
case 759:
case 3131:
case 1622:
case 3212:
case 72:
case 2792:
case 671:
case 3749:
case 921:
case 862:
case 426:
case 513:
case 2542:
case 2686:
case 1158:
case 1929:
case 458:
case 3958:
case 1638:
case 1016:
case 3779:
case 1039:
case 1951:
case 849:
case 859:
case 903:
case 2409:
case 2568:
case 3922:
case 1592:
case 4092:
case 448:
case 2864:
case 774:
case 563:
case 2853:
case 877:
case 2587:
case 3032:
case 1919:
case 3934:
case 789:
case 3160:
case 1654:
case 3238:
case 2181:
case 1345:
case 1960:
case 262:
case 4055:
case 3119:
case 1134:
case 3024:
case 96:
case 407:
case 1936:
case 2433:
case 2300:
case 157:
case 2735:
case 3656:
case 3390:
case 1070:
case 2872:
case 2165:
case 3912:
case 667:
case 690:
case 79:
case 3766:
case 3883:
case 1753:
case 3305:
case 2395:
case 3730:
case 1389:
case 496:
case 274:
case 1764:
case 711:
case 277:
case 4035:
case 212:
case 3095:
case 1229:
case 2005:
case 1634:
case 3156:
case 144:
case 259:
case 3636:
case 664:
case 89:
case 3377:
case 1393:
case 2887:
case 340:
case 22:
case 1880:
case 3537:
case 2082:
case 2553:
case 154:
case 1097:
case 2564:
case 404:
case 2343:
case 889:
case 922:
case 239:
case 613:
case 145:
case 2443:
case 2057:
case 1050:
case 2424:
case 1144:
case 1269:
case 1700:
case 571:
case 3923:
case 2217:
case 2707:
case 1475:
case 520:
case 3797:
case 4075:
case 926:
case 2194:
case 1718:
case 1208:
case 1674:
case 3262:
case 1106:
case 2524:
case 2789:
case 676:
case 155:
case 2996:
case 1795:
case 2291:
case 3337:
case 663:
case 3064:
case 2573:
case 143:
case 1920:
case 266:
case 2495:
case 958:
case 2793:
case 1623:
case 1355:
case 3770:
case 3120:
case 1066:
case 1545:
case 3604:
case 1445:
case 2694:
case 1589:
case 4089:
case 2814:
case 1174:
case 1271:
case 2400:
case 3726:
case 403:
case 2473:
case 1606:
case 1976:
case 309:
case 2518:
case 46:
case 1732:
case 2428:
case 907:
case 1969:
case 3110:
case 1148:
case 766:
case 567:
case 3948:
case 3877:
case 3169:
case 3244:
case 2917:
case 1613:
case 514:
case 2198:
case 775:
case 816:
case 491:
case 2843:
case 2368:
case 3962:
case 3671:
case 2991:
case 3716:
case 60:
case 839:
case 700:
case 1162:
case 3206:
case 1049:
case 3641:
case 1752:
case 739:
case 800:
case 3913:
case 716:
case 875:
case 3890:
case 2227:
case 3882:
case 3087:
case 3759:
case 3042:
case 2432:
case 2372:
case 773:
case 3608:
case 3978:
case 2698:
case 183:
case 1178:
case 3805:
case 3721:
case 1276:
case 2099:
case 1662:
case 1085:
case 924:
case 119:
case 2858:
case 3719:
case 2781:
case 267:
case 1285:
case 674:
case 2323:
case 2655:
case 3736:
case 402:
case 3074:
case 152:
case 136:
case 3242:
case 2135:
case 2554:
case 2822:
case 1020:
case 1394:
case 1202:
case 1966:
case 820:
case 1164:
case 3396:
case 1930:
case 214:
case 2306:
case 1633:
case 871:
case 3130:
case 3964:
case 1153:
case 1886:
case 181:
case 1763:
case 1465:
case 169:
case 2838:
case 1754:
case 62:
case 649:
case 3588:
case 1279:
case 495:
case 2534:
case 3884:
case 4081:
case 97:
case 3756:
case 3327:
case 2635:
case 1581:
case 3023:
case 3272:
case 677:
case 1133:
case 2512:
case 1565:
case 2957:
case 1046:
case 3933:
case 3630:
case 927:
case 4065:
case 1738:
case 3185:
case 3909:
case 3679:
case 182:
case 717:
case 1985:
case 271:
case 3942:
case 539:
case 3317:
case 3078:
case 1142:
case 2180:
case 1672:
case 3161:
case 2192:
case 3987:
case 2301:
case 3253:
case 2237:
case 1315:
case 35:
case 1168:
case 1230:
case 867:
case 890:
case 1949:
case 3062:
case 2091:
case 3584:
case 864:
case 1979:
case 1609:
case 3001:
case 2834:
case 790:
case 906:
case 3888:
case 1008:
case 2313:
case 401:
case 4086:
case 1586:
case 1642:
case 1687:
case 3661:
case 1069:
case 2680:
case 1865:
case 1172:
case 3048:
case 2812:
case 500:
case 2438:
case 1722:
case 661:
case 3602:
case 2378:
case 1668:
case 817:
case 3484:
case 714:
case 960:
case 997:
case 3649:
case 1041:
case 575:
case 641:
case 208:
case 1352:
case 189:
case 1487:
case 3461:
case 556:
case 532:
case 2256:
case 2951:
case 3585:
case 854:
case 4009:
case 3359:
case 733:
case 2772:
case 4068:
case 31:
case 1409:
case 2122:
case 3485:
case 950:
case 19:
case 3321:
case 3561:
case 3830:
case 2580:
case 1853:
case 1864:
case 651:
case 3502:
case 3986:
case 391:
case 3281:
case 1332:
case 2658:
case 3799:
case 1984:
case 3579:
case 2059:
case 847:
case 833:
case 2855:
case 3184:
case 754:
case 3265:
case 857:
case 1792:
case 682:
case 2622:
case 3316:
case 787:
case 2011:
case 2634:
case 884:
case 1809:
case 2163:
case 2154:
case 3885:
case 177:
case 586:
case 3466:
case 3089:
case 3667:
case 2535:
case 2251:
case 2040:
case 3430:
case 2393:
case 1453:
case 159:
case 2892:
case 1343:
case 3802:
case 2612:
case 2097:
case 254:
case 669:
case 12:
case 2880:
case 1553:
case 3861:
case 3566:
case 3326:
case 2375:
case 1868:
case 808:
case 279:
case 2555:
case 370:
case 3981:
case 2960:
case 2134:
case 1181:
case 2345:
case 3879:
case 3075:
case 2654:
case 1988:
case 305:
case 531:
case 1735:
case 3450:
case 2231:
case 3397:
case 1373:
case 619:
case 598:
case 3965:
case 247:
case 1872:
case 2764:
case 652:
case 2389:
case 636:
case 887:
case 3311:
case 1395:
case 3:
case 2455:
case 2753:
case 4048:
case 3408:
case 3846:
case 2498:
case 1358:
case 2632:
case 1823:
case 2713:
case 2415:
case 1401:
case 2203:
case 325:
case 4001:
case 1501:
case 1084:
case 2614:
case 1322:
case 4062:
case 3804:
case 728:
case 3086:
case 2598:
case 554:
case 535:
case 856:
case 2652:
case 685:
case 3820:
case 2748:
case 3207:
case 579:
case 3331:
case 3717:
case 3471:
case 45:
case 10:
case 1798:
case 1874:
case 2051:
case 2939:
case 3571:
case 323:
case 2916:
case 1413:
case 533:
case 3791:
case 3876:
case 3289:
case 1578:
case 746:
case 4078:
case 2762:
case 1523:
case 1354:
case 3841:
case 1645:
case 3404:
case 731:
case 2494:
case 3869:
case 508:
case 1193:
case 3065:
case 2673:
case 1607:
case 1977:
case 93:
case 2600:
case 1088:
case 2124:
case 163:
case 1506:
case 3647:
case 2898:
case 3446:
case 643:
case 2618:
case 637:
case 115:
case 3081:
case 1067:
case 3504:
case 1175:
case 798:
case 1862:
case 1801:
case 2926:
case 2695:
case 3975:
case 2221:
case 48:
case 1145:
case 3360:
case 3520:
case 3336:
case 1813:
case 2723:
case 634:
case 3182:
case 2425:
case 3677:
case 3476:
case 2997:
case 587:
case 1982:
case 655:
case 786:
case 2100:
case 1312:
case 113:
case 1794:
case 2643:
case 1947:
case 3576:
case 165:
case 2525:
case 1905:
case 2216:
case 3871:
case 228:
case 831:
case 2195:
case 3105:
case 1574:
case 3989:
case 2279:
case 782:
case 1096:
case 360:
case 2763:
case 2465:
case 2886:
case 281:
case 172:
case 1635:
case 3094:
case 3560:
case 1155:
case 1534:
case 306:
case 1374:
case 851:
case 3376:
case 644:
case 2046:
case 1957:
case 583:
case 3436:
case 1512:
case 2133:
case 3157:
case 1781:
case 2734:
case 1858:
case 2076:
case 1554:
case 3788:
case 751:
case 4054:
case 1563:
case 1655:
case 1323:
case 3280:
case 1765:
case 1463:
case 242:
case 2394:
case 741:
case 3304:
case 3292:
case 1822:
case 2020:
case 394:
case 3657:
case 1937:
case 2249:
case 929:
case 1306:
case 114:
case 3819:
case 2758:
case 43:
case 3699:
case 3015:
case 2609:
case 2979:
case 3860:
case 327:
case 537:
case 3255:
case 3836:
case 2008:
case 736:
case 4038:
case 1378:
case 742:
case 1017:
case 2865:
case 2172:
case 553:
case 881:
case 2250:
case 2668:
case 1863:
case 3199:
case 120:
case 2109:
case 3551:
case 282:
case 171:
case 2985:
case 2071:
case 1999:
case 1854:
case 1422:
case 3341:
case 4058:
case 3529:
case 2142:
case 842:
case 545:
case 3235:
case 3310:
case 98:
case 3683:
case 2266:
case 3980:
case 555:
case 687:
case 2187:
case 1458:
case 3429:
case 2398:
case 3992:
case 534:
case 2902:
case 3308:
case 1522:
case 819:
case 324:
case 999:
case 2949:
case 1301:
case 2315:
case 1237:
case 4073:
case 551:
case 237:
case 1500:
case 2507:
case 3597:
case 4000:
case 304:
case 243:
case 1037:
case 440:
case 1832:
case 1418:
case 2030:
case 646:
case 2489:
case 2066:
case 2623:
case 2920:
case 2644:
case 3411:
case 1793:
case 3777:
case 175:
case 3511:
case 4095:
case 3839:
case 2724:
case 785:
case 2589:
case 656:
case 450:
case 3540:
case 100:
case 1473:
case 253:
case 3497:
case 1775:
case 3696:
case 388:
case 2271:
case 1400:
case 1424:
case 2050:
case 1852:
case 1443:
case 2946:
case 1745:
case 978:
case 139:
case 1707:
case 2475:
case 2210:
case 396:
case 885:
case 582:
case 3426:
case 3790:
case 2335:
case 2269:
case 2144:
case 3782:
case 3994:
case 783:
case 1194:
case 3366:
case 3470:
case 1625:
case 3215:
case 2493:
case 1996:
case 4024:
case 307:
case 1789:
case 4043:
case 2106:
case 1524:
case 853:
case 1414:
case 2049:
case 909:
case 2845:
case 745:
case 3379:
case 1532:
case 2061:
case 4032:
case 2807:
case 569:
case 2220:
case 1873:
case 2648:
case 1800:
case 3092:
case 348:
case 3516:
case 2178:
case 1818:
case 1432:
case 2662:
case 2085:
case 3539:
case 1099:
case 3691:
case 843:
case 3811:
case 2276:
case 834:
case 1309:
case 743:
case 2732:
case 737:
case 2941:
case 3385:
case 1917:
case 3421:
case 2893:
case 1552:
case 1083:
case 2714:
case 1824:
case 2204:
case 3302:
case 2678:
case 1387:
case 2380:
case 1198:
case 2162:
case 2079:
case 542:
case 3826:
case 1991:
case 1368:
case 1528:
case 753:
case 3191:
case 2101:
case 1115:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769295601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,];
var gg_b = "1769295601/";

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
