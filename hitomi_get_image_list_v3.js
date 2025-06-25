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
case 3972:
case 2103:
case 1503:
case 2018:
case 476:
case 1080:
case 2905:
case 787:
case 2989:
case 3754:
case 1491:
case 3823:
case 519:
case 1204:
case 2865:
case 3478:
case 3436:
case 1935:
case 3638:
case 3086:
case 2271:
case 3047:
case 3153:
case 347:
case 662:
case 3629:
case 1658:
case 2592:
case 2400:
case 970:
case 3177:
case 3235:
case 2772:
case 3394:
case 1338:
case 3536:
case 798:
case 1307:
case 2156:
case 3789:
case 41:
case 2954:
case 3882:
case 3370:
case 1329:
case 2083:
case 2673:
case 1530:
case 2130:
case 2826:
case 485:
case 2755:
case 1997:
case 3106:
case 3904:
case 2191:
case 1591:
case 3550:
case 3653:
case 2809:
case 1996:
case 3495:
case 520:
case 3138:
case 350:
case 61:
case 959:
case 2594:
case 1194:
case 2702:
case 2336:
case 2219:
case 1158:
case 2558:
case 893:
case 573:
case 3129:
case 3775:
case 18:
case 1557:
case 1828:
case 90:
case 2043:
case 3842:
case 1719:
case 569:
case 794:
case 3931:
case 3508:
case 1732:
case 1016:
case 2063:
case 3862:
case 721:
case 2630:
case 245:
case 3769:
case 1573:
case 2691:
case 3437:
case 3087:
case 1274:
case 676:
case 780:
case 340:
case 2949:
case 2201:
case 3333:
case 3392:
case 1040:
case 46:
case 2656:
case 2458:
case 2171:
case 560:
case 4077:
case 3598:
case 2061:
case 3253:
case 444:
case 3554:
case 3900:
case 1233:
case 2455:
case 30:
case 2619:
case 833:
case 2693:
case 603:
case 1602:
case 1059:
case 648:
case 3390:
case 1351:
case 3028:
case 1866:
case 734:
case 1104:
case 359:
case 2950:
case 2792:
case 3489:
case 3331:
case 3197:
case 1172:
case 2230:
case 3816:
case 1062:
case 3736:
case 2700:
case 940:
case 2404:
case 349:
case 3589:
case 1756:
case 3206:
case 2375:
case 1674:
case 2291:
case 1084:
case 3696:
case 3135:
case 2601:
case 2349:
case 517:
case 1953:
case 2888:
case 2256:
case 3778:
case 42:
case 3933:
case 1200:
case 3454:
case 3992:
case 1791:
case 1155:
case 3014:
case 3372:
case 2490:
case 1102:
case 2502:
case 370:
case 1023:
case 3697:
case 2389:
case 1604:
case 2848:
case 3575:
case 275:
case 3549:
case 1401:
case 1757:
case 1886:
case 3207:
case 2671:
case 1847:
case 1294:
case 510:
case 1593:
case 1519:
case 2119:
case 654:
case 2132:
case 3229:
case 3817:
case 3737:
case 2020:
case 286:
case 815:
case 2101:
case 1938:
case 3635:
case 3452:
case 3994:
case 567:
case 738:
case 2398:
case 3196:
case 4007:
case 1907:
case 1082:
case 3821:
case 1419:
case 3151:
case 2402:
case 3795:
case 711:
case 2273:
case 2868:
case 543:
case 508:
case 1976:
case 1131:
case 2531:
case 193:
case 448:
case 88:
case 2064:
case 4037:
case 1937:
case 3605:
case 3045:
case 3689:
case 7:
case 2976:
case 917:
case 751:
case 668:
case 2190:
case 1590:
case 3551:
case 2419:
case 2493:
case 1354:
case 616:
case 2082:
case 2655:
case 2432:
case 1398:
case 3334:
case 3596:
case 2907:
case 2938:
case 2501:
case 1101:
case 3371:
case 3079:
case 855:
case 1020:
case 186:
case 3295:
case 381:
case 3654:
case 373:
case 3776:
case 431:
case 1193:
case 845:
case 2847:
case 1671:
case 929:
case 1995:
case 3698:
case 1634:
case 466:
case 3175:
case 3729:
case 3208:
case 1770:
case 2044:
case 3822:
case 369:
case 1081:
case 3065:
case 1305:
case 1758:
case 1431:
case 1389:
case 3707:
case 3818:
case 79:
case 3451:
case 1490:
case 67:
case 3738:
case 225:
case 741:
case 1257:
case 792:
case 2155:
case 1555:
case 705:
case 3393:
case 3236:
case 631:
case 414:
case 1601:
case 3669:
case 1349:
case 327:
case 2084:
case 2730:
case 908:
case 2434:
case 967:
case 2846:
case 1291:
case 1375:
case 3278:
case 1700:
case 2690:
case 2825:
case 3777:
case 2172:
case 535:
case 3903:
case 3597:
case 2906:
case 4050:
case 1950:
case 319:
case 1504:
case 910:
case 1792:
case 1813:
case 1978:
case 3675:
case 1733:
case 1899:
case 830:
case 3753:
case 2059:
case 2042:
case 3824:
case 2351:
case 3027:
case 2292:
case 1693:
case 1619:
case 3956:
case 1632:
case 2233:
case 3154:
case 416:
case 1061:
case 1369:
case 3009:
case 4036:
case 1936:
case 1134:
case 3198:
case 2396:
case 2703:
case 407:
case 197:
case 3932:
case 1731:
case 2040:
case 2600:
case 626:
case 771:
case 3841:
case 367:
case 642:
case 1201:
case 3751:
case 3088:
case 3636:
case 1949:
case 4049:
case 3195:
case 4075:
case 3678:
case 2231:
case 343:
case 927:
case 2701:
case 1173:
case 3796:
case 1630:
case 2016:
case 595:
case 3303:
case 3108:
case 353:
case 2306:
case 2812:
case 3137:
case 3099:
case 2839:
case 3576:
case 890:
case 1603:
case 1043:
case 2202:
case 2473:
case 215:
case 2828:
case 2557:
case 886:
case 839:
case 28:
case 2170:
case 1570:
case 624:
case 1232:
case 1558:
case 2158:
case 1219:
case 1827:
case 282:
case 2060:
case 919:
case 2194:
case 1336:
case 1969:
case 3507:
case 3861:
case 3252:
case 199:
case 1191:
case 1755:
case 1308:
case 233:
case 2997:
case 3205:
case 2376:
case 549:
case 2403:
case 3357:
case 1826:
case 2530:
case 1130:
case 577:
case 2272:
case 1433:
case 1083:
case 452:
case 2021:
case 1492:
case 3934:
case 3820:
case 317:
case 3453:
case 2192:
case 1592:
case 888:
case 2456:
case 2658:
case 442:
case 1533:
case 2133:
case 50:
case 491:
case 2017:
case 2670:
case 426:
case 3477:
case 3298:
case 1395:
case 2935:
case 304:
case 360:
case 2694:
case 1022:
case 559:
case 1905:
case 4089:
case 73:
case 981:
case 265:
case 3373:
case 1018:
case 2503:
case 1103:
case 732:
case 2917:
case 87:
case 401:
case 592:
case 3283:
case 541:
case 3141:
case 394:
case 2035:
case 2485:
case 3584:
case 3620:
case 3895:
case 126:
case 1645:
case 1381:
case 1089:
case 934:
case 750:
case 1412:
case 4022:
case 1873:
case 3615:
case 1918:
case 276:
case 1767:
case 3808:
case 1512:
case 3968:
case 3345:
case 3222:
case 1539:
case 499:
case 936:
case 740:
case 807:
case 1786:
case 3218:
case 3462:
case 274:
case 1747:
case 961:
case 3326:
case 816:
case 1528:
case 2870:
case 2748:
case 1054:
case 868:
case 637:
case 2411:
case 1983:
case 4083:
case 380:
case 3071:
case 1185:
case 430:
case 3161:
case 3034:
case 3780:
case 1098:
case 3484:
case 2246:
case 3850:
case 128:
case 2287:
case 3564:
case 3444:
case 1145:
case 3913:
case 3423:
case 699:
case 2342:
case 3263:
case 455:
case 2051:
case 779:
case 800:
case 1830:
case 1943:
case 3115:
case 1924:
case 3582:
case 278:
case 2800:
case 1611:
case 437:
case 1725:
case 1288:
case 2579:
case 3716:
case 3836:
case 2210:
case 387:
case 1361:
case 3001:
case 3309:
case 1069:
case 3019:
case 818:
case 262:
case 1627:
case 2833:
case 735:
case 1766:
case 3032:
case 2384:
case 3661:
case 1049:
case 1609:
case 2479:
case 601:
case 3760:
case 398:
case 2445:
case 831:
case 2266:
case 757:
case 2916:
case 2426:
case 2628:
case 2114:
case 1514:
case 3224:
case 2362:
case 3243:
case 1078:
case 85:
case 3091:
case 3399:
case 3313:
case 2568:
case 2646:
case 852:
case 2874:
case 639:
case 3030:
case 2959:
case 2625:
case 1343:
case 2890:
case 3056:
case 3183:
case 3927:
case 3417:
case 686:
case 107:
case 3869:
case 2610:
case 2077:
case 1567:
case 2167:
case 3985:
case 256:
case 3762:
case 3421:
case 311:
case 1832:
case 1227:
case 1819:
case 1893:
case 222:
case 998:
case 1467:
case 1547:
case 3388:
case 246:
case 1586:
case 2186:
case 3759:
case 1209:
case 2053:
case 1285:
case 3849:
case 583:
case 1699:
case 842:
case 1613:
case 2548:
case 891:
case 2666:
case 571:
case 2468:
case 84:
case 488:
case 2727:
case 3118:
case 1363:
case 3003:
case 3624:
case 2802:
case 2228:
case 2962:
case 2709:
case 826:
case 2317:
case 2855:
case 131:
case 3460:
case 3540:
case 475:
case 2588:
case 166:
case 1095:
case 2667:
case 3220:
case 2110:
case 1510:
case 3965:
case 1981:
case 258:
case 118:
case 3782:
case 2413:
case 1546:
case 2146:
case 2944:
case 2499:
case 3805:
case 1322:
case 3516:
case 2779:
case 1226:
case 70:
case 389:
case 2076:
case 3622:
case 3281:
case 1008:
case 3945:
case 2513:
case 1113:
case 1446:
case 2166:
case 2964:
case 1487:
case 439:
case 1037:
case 3057:
case 3124:
case 3143:
case 4015:
case 3560:
case 697:
case 361:
case 2321:
case 1714:
case 4020:
case 1410:
case 1834:
case 3979:
case 100:
case 490:
case 336:
case 2686:
case 749:
case 2007:
case 1007:
case 3367:
case 1647:
case 200:
case 3094:
case 1686:
case 983:
case 971:
case 2920:
case 2410:
case 2383:
case 1321:
case 3070:
case 3160:
case 1982:
case 1765:
case 2487:
case 4064:
case 2199:
case 727:
case 2037:
case 1513:
case 493:
case 1804:
case 3223:
case 1076:
case 3897:
case 3244:
case 2226:
case 425:
case 3116:
case 3443:
case 1125:
case 2525:
case 3563:
case 3424:
case 3914:
case 3720:
case 86:
case 2245:
case 2322:
case 2587:
case 2668:
case 218:
case 1413:
case 1146:
case 3715:
case 2510:
case 1110:
case 2188:
case 266:
case 2279:
case 3386:
case 3140:
case 3621:
case 1855:
case 1317:
case 1228:
case 4062:
case 1709:
case 1785:
case 3180:
case 1802:
case 3259:
case 3242:
case 1727:
case 625:
case 2148:
case 1548:
case 27:
case 1468:
case 1666:
case 3:
case 2941:
case 2586:
case 1186:
case 146:
case 1984:
case 2893:
case 122:
case 3092:
case 3660:
case 2227:
case 2819:
case 3117:
case 3483:
case 351:
case 521:
case 3033:
case 769:
case 2688:
case 2447:
case 3896:
case 341:
case 3121:
case 3583:
case 932:
case 3418:
case 3928:
case 1625:
case 3262:
case 693:
case 1942:
case 4059:
case 2168:
case 3366:
case 1006:
case 1646:
case 1687:
case 720:
case 81:
case 1711:
case 3642:
case 2514:
case 3415:
case 1916:
case 1628:
case 2299:
case 1266:
case 1612:
case 2213:
case 3123:
case 589:
case 665:
case 1639:
case 1445:
case 706:
case 3144:
case 3987:
case 3743:
case 1479:
case 536:
case 2685:
case 2609:
case 2052:
case 561:
case 16:
case 1833:
case 1799:
case 4040:
case 858:
case 1892:
case 3877:
case 2069:
case 1210:
case 729:
case 2288:
case 2179:
case 1579:
case 3240:
case 48:
case 803:
case 1800:
case 2611:
case 3182:
case 2787:
case 1960:
case 4060:
case 941:
case 992:
case 2830:
case 1526:
case 3328:
case 1359:
case 3090:
case 415:
case 1788:
case 99:
case 1545:
case 1465:
case 760:
case 3164:
case 3074:
case 1287:
case 3806:
case 1246:
case 228:
case 2185:
case 3561:
case 1509:
case 1247:
case 2320:
case 1894:
case 3722:
case 4021:
case 2983:
case 1527:
case 1858:
case 2054:
case 905:
case 3829:
case 11:
case 25:
case 511:
case 1382:
case 856:
case 2528:
case 2315:
case 2747:
case 2786:
case 174:
case 3644:
case 3004:
case 3876:
case 433:
case 2665:
case 3623:
case 2539:
case 1097:
case 2512:
case 767:
case 2767:
case 4080:
case 1980:
case 176:
case 465:
case 3072:
case 846:
case 2873:
case 2268:
case 2922:
case 710:
case 1344:
case 2005:
case 2439:
case 1323:
case 2089:
case 2679:
case 226:
case 1267:
case 3947:
case 1035:
case 1409:
case 3986:
case 3461:
case 3221:
case 24:
case 1511:
case 2111:
case 4017:
case 1427:
case 2045:
case 1304:
case 3174:
case 1475:
case 3672:
case 545:
case 2551:
case 1151:
case 3190:
case 1795:
case 3493:
case 4070:
case 3929:
case 3419:
case 3082:
case 3655:
case 1958:
case 4058:
case 3432:
case 2883:
case 1821:
case 3773:
case 1452:
case 1569:
case 2334:
case 1196:
case 77:
case 692:
case 3532:
case 1817:
case 1708:
case 273:
case 2654:
case 3519:
case 3258:
case 651:
case 1238:
case 220:
case 3294:
case 3335:
case 1552:
case 2149:
case 537:
case 3401:
case 2698:
case 768:
case 2496:
case 707:
case 2175:
case 1575:
case 123:
case 2729:
case 2065:
case 3023:
case 1276:
case 1697:
case 3604:
case 2822:
case 2451:
case 170:
case 2973:
case 2818:
case 2707:
case 325:
case 555:
case 1372:
case 840:
case 1454:
case 1750:
case 2332:
case 2706:
case 863:
case 1840:
case 2319:
case 4033:
case 1933:
case 2393:
case 3084:
case 1696:
case 2535:
case 227:
case 3810:
case 3674:
case 3846:
case 2250:
case 599:
case 764:
case 700:
case 149:
case 2497:
case 3631:
case 3756:
case 2189:
case 3825:
case 1736:
case 3062:
case 1302:
case 847:
case 177:
case 2991:
case 219:
case 1331:
case 1489:
case 605:
case 2597:
case 1039:
case 2675:
case 1028:
case 98:
case 3602:
case 2824:
case 982:
case 3351:
case 441:
case 102:
case 492:
case 2027:
case 1900:
case 4000:
case 915:
case 10:
case 501:
case 718:
case 2198:
case 1598:
case 2435:
case 2009:
case 2649:
case 1253:
case 3040:
case 2919:
case 2993:
case 267:
case 1884:
case 1296:
case 2407:
case 2636:
case 2438:
case 3231:
case 539:
case 724:
case 243:
case 1408:
case 1046:
case 1902:
case 3701:
case 3573:
case 1251:
case 3016:
case 2303:
case 1025:
case 1862:
case 1537:
case 2137:
case 113:
case 1931:
case 2013:
case 2275:
case 3306:
case 2576:
case 3719:
case 1974:
case 671:
case 791:
case 683:
case 3557:
case 74:
case 1749:
case 3473:
case 1752:
case 315:
case 2529:
case 3633:
case 3170:
case 382:
case 3060:
case 2356:
case 3158:
case 1495:
case 1107:
case 3996:
case 3194:
case 2538:
case 1138:
case 210:
case 2249:
case 2252:
case 2861:
case 333:
case 2506:
case 802:
case 3591:
case 483:
case 2178:
case 1578:
case 471:
case 80:
case 2205:
case 3376:
case 2815:
case 859:
case 3021:
case 1358:
case 3100:
case 206:
case 3338:
case 1394:
case 2695:
case 2577:
case 217:
case 2971:
case 157:
case 2453:
case 2797:
case 3456:
case 3658:
case 3192:
case 179:
case 2254:
case 925:
case 3017:
case 1629:
case 3133:
case 2477:
case 2298:
case 728:
case 260:
case 3694:
case 597:
case 877:
case 1047:
case 229:
case 1823:
case 1297:
case 1478:
case 1676:
case 2406:
case 2048:
case 163:
case 2608:
case 1754:
case 1972:
case 827:
case 3103:
case 3657:
case 778:
case 2798:
case 1373:
case 975:
case 2754:
case 1406:
case 2297:
case 2676:
case 2478:
case 3022:
case 129:
case 1881:
case 3865:
case 3395:
case 2607:
case 2436:
case 2638:
case 104:
case 2153:
case 1553:
case 1477:
case 1298:
case 2629:
case 3533:
case 3592:
case 3704:
case 1797:
case 2955:
case 4071:
case 257:
case 1971:
case 3772:
case 3879:
case 2394:
case 496:
case 330:
case 687:
case 421:
case 3156:
case 2705:
case 3433:
case 3083:
case 819:
case 1357:
case 3130:
case 3826:
case 3673:
case 235:
case 762:
case 1289:
case 1205:
case 2864:
case 3191:
case 3337:
case 3308:
case 1068:
case 3755:
case 1506:
case 1861:
case 3885:
case 1252:
case 337:
case 2653:
case 1538:
case 2138:
case 3594:
case 3702:
case 3969:
case 3336:
case 696:
case 1356:
case 3827:
case 3558:
case 3293:
case 776:
case 2129:
case 1529:
case 2990:
case 525:
case 3157:
case 2842:
case 3024:
case 3603:
case 2974:
case 997:
case 3378:
case 1013:
case 2508:
case 213:
case 2066:
case 1275:
case 3350:
case 1391:
case 1137:
case 2537:
case 2862:
case 712:
case 3063:
case 71:
case 3630:
case 108:
case 2046:
case 2606:
case 2408:
case 143:
case 2437:
case 1678:
case 3975:
case 593:
case 873:
case 1751:
case 1438:
case 3494:
case 2296:
case 2677:
case 1269:
case 167:
case 2884:
case 3470:
case 869:
case 4093:
case 1993:
case 785:
case 4019:
case 2333:
case 1429:
case 4032:
case 3458:
case 774:
case 1085:
case 3061:
case 1301:
case 1652:
case 1435:
case 3369:
case 1009:
case 2253:
case 3134:
case 758:
case 636:
case 3632:
case 1956:
case 1154:
case 2554:
case 1027:
case 3693:
case 3619:
case 202:
case 3203:
case 1843:
case 1930:
case 565:
case 806:
case 689:
case 2028:
case 3472:
case 2374:
case 937:
case 3899:
case 2197:
case 3230:
case 860:
case 804:
case 4003:
case 1903:
case 2302:
case 1105:
case 2505:
case 1497:
case 1278:
case 3700:
case 1250:
case 388:
case 2206:
case 3375:
case 3601:
case 1535:
case 3041:
case 1669:
case 2277:
case 2696:
case 3888:
case 1393:
case 2840:
case 1011:
case 3256:
case 1706:
case 634:
case 2880:
case 2014:
case 3257:
case 1451:
case 638:
case 4073:
case 1738:
case 169:
case 756:
case 3431:
case 1175:
case 1208:
case 1237:
case 3770:
case 3474:
case 3848:
case 1496:
case 3634:
case 434:
case 375:
case 2549:
case 3671:
case 120:
case 2207:
case 384:
case 1776:
case 3119:
case 582:
case 58:
case 1654:
case 173:
case 1079:
case 1295:
case 1596:
case 2994:
case 999:
case 1169:
case 2821:
case 461:
case 2970:
case 3402:
case 1026:
case 3273:
case 810:
case 72:
case 3868:
case 1605:
case 136:
case 909:
case 3714:
case 3920:
case 3410:
case 4079:
case 3834:
case 2070:
case 1854:
case 161:
case 56:
case 2781:
case 1723:
case 2058:
case 1440:
case 1560:
case 2160:
case 1744:
case 2524:
case 1124:
case 3425:
case 2463:
case 1926:
case 4026:
case 3915:
case 1618:
case 2543:
case 619:
case 95:
case 2680:
case 3446:
case 3113:
case 4045:
case 3566:
case 3199:
case 2897:
case 2244:
case 924:
case 1622:
case 189:
case 1215:
case 94:
case 2424:
case 2914:
case 2443:
case 2116:
case 3525:
case 2563:
case 1163:
case 1805:
case 3668:
case 3981:
case 1965:
case 4065:
case 3546:
case 469:
case 3587:
case 3510:
case 2835:
case 3279:
case 134:
case 3188:
case 366:
case 1220:
case 481:
case 1764:
case 898:
case 578:
case 1683:
case 2621:
case 2180:
case 1580:
case 2761:
case 894:
case 2259:
case 1643:
case 1003:
case 2518:
case 1624:
case 372:
case 3699:
case 138:
case 3148:
case 37:
case 2310:
case 2:
case 1852:
case 793:
case 314:
case 1388:
case 3586:
case 427:
case 512:
case 3739:
case 3893:
case 2483:
case 620:
case 251:
case 2033:
case 1517:
case 3832:
case 3447:
case 3567:
case 3688:
case 316:
case 4085:
case 1985:
case 3036:
case 1762:
case 2896:
case 241:
case 292:
case 2121:
case 1521:
case 1927:
case 4027:
case 725:
case 1417:
case 29:
case 896:
case 2616:
case 2262:
case 2928:
case 1480:
case 1784:
case 880:
case 2741:
case 1091:
case 419:
case 1399:
case 368:
case 1313:
case 2939:
case 2366:
case 821:
case 3078:
case 2912:
case 2642:
case 834:
case 2925:
case 3514:
case 629:
case 3075:
case 3213:
case 3299:
case 1544:
case 2144:
case 1760:
case 2123:
case 198:
case 3165:
case 443:
case 467:
case 972:
case 2724:
case 733:
case 3685:
case 1988:
case 4088:
case 1661:
case 3609:
case 3052:
case 604:
case 660:
case 1482:
case 1019:
case 1311:
case 3627:
case 2260:
case 187:
case 1001:
case 410:
case 3288:
case 1120:
case 617:
case 232:
case 1327:
case 3787:
case 23:
case 3943:
case 3710:
case 1263:
case 1564:
case 3145:
case 453:
case 861:
case 2966:
case 2339:
case 2481:
case 328:
case 558:
case 2312:
case 907:
case 2074:
case 2806:
case 1161:
case 2561:
case 3098:
case 417:
case 522:
case 352:
case 3983:
case 3054:
case 2829:
case 2217:
case 1326:
case 1542:
case 2142:
case 653:
case 2159:
case 3786:
case 1462:
case 3747:
case 3665:
case 4068:
case 1681:
case 1345:
case 2623:
case 3539:
case 2004:
case 900:
case 1808:
case 283:
case 271:
case 3512:
case 608:
case 1562:
case 782:
case 643:
case 1459:
case 3767:
case 3873:
case 2314:
case 3428:
case 1615:
case 429:
case 2783:
case 3412:
case 3268:
case 1365:
case 3439:
case 1948:
case 3089:
case 966:
case 2664:
case 544:
case 326:
case 1895:
case 2541:
case 460:
case 2461:
case 1584:
case 2947:
case 1283:
case 2221:
case 2055:
case 34:
case 342:
case 391:
case 3917:
case 479:
case 755:
case 2584:
case 958:
case 4047:
case 1947:
case 2141:
case 1986:
case 447:
case 463:
case 2948:
case 851:
case 2721:
case 1072:
case 2615:
case 8:
case 3980:
case 2562:
case 2459:
case 171:
case 89:
case 183:
case 3364:
case 1004:
case 1623:
case 2681:
case 2345:
case 892:
case 3139:
case 572:
case 2559:
case 2218:
case 374:
case 3128:
case 3614:
case 1829:
case 3748:
case 3527:
case 1807:
case 3247:
case 1838:
case 903:
case 2034:
case 948:
case 1967:
case 296:
case 2161:
case 3585:
case 3509:
case 3287:
case 1074:
case 1312:
case 1031:
case 3545:
case 3465:
case 1339:
case 1481:
case 2423:
case 1966:
case 4066:
case 2564:
case 2740:
case 2444:
case 3342:
case 1662:
case 3359:
case 1090:
case 3526:
case 1328:
case 2582:
case 1182:
case 13:
case 378:
case 1240:
case 2327:
case 3800:
case 132:
case 1520:
case 2836:
case 3579:
case 805:
case 2001:
case 450:
case 1684:
case 2019:
case 2032:
case 3833:
case 3799:
case 799:
case 2988:
case 440:
case 679:
case 1853:
case 1910:
case 1743:
case 500:
case 564:
case 2181:
case 1581:
case 3565:
case 1123:
case 2523:
case 3445:
case 4046:
case 2544:
case 946:
case 4087:
case 3266:
case 3114:
case 3628:
case 1925:
case 3362:
case 1002:
case 1642:
case 3831:
case 784:
case 1912:
case 695:
case 1939:
case 775:
case 2091:
case 2399:
case 3687:
case 3959:
case 3942:
case 1741:
case 2480:
case 2030:
case 1616:
case 4028:
case 1928:
case 2663:
case 2056:
case 19:
case 591:
case 40:
case 542:
case 3360:
case 1000:
case 1640:
case 883:
case 2927:
case 54:
case 141:
case 2521:
case 402:
case 3610:
case 3077:
case 1284:
case 526:
case 2909:
case 344:
case 1117:
case 1483:
case 2421:
case 1033:
case 151:
case 32:
case 552:
case 3340:
case 2388:
case 739:
case 3186:
case 3984:
case 3147:
case 1:
case 2849:
case 3053:
case 2261:
case 3548:
case 1346:
case 3727:
case 509:
case 3239:
case 1522:
case 786:
case 962:
case 3802:
case 2624:
case 3316:
case 1518:
case 2643:
case 2003:
case 3962:
case 3228:
case 1761:
case 2580:
case 1180:
case 2683:
case 3317:
case 2764:
case 3745:
case 3667:
case 1347:
case 3588:
case 1386:
case 3726:
case 3187:
case 528:
case 2348:
case 2889:
case 797:
case 1264:
case 1116:
case 2163:
case 1563:
case 3872:
case 3380:
case 649:
case 2215:
case 470:
case 2073:
case 3076:
case 1223:
case 3804:
case 2622:
case 1897:
case 303:
case 2945:
case 3513:
case 348:
case 3166:
case 91:
case 3214:
case 659:
case 105:
case 1463:
case 1543:
case 2416:
case 2143:
case 2618:
case 1524:
case 912:
case 2440:
case 1160:
case 2560:
case 974:
case 2744:
case 3982:
case 1058:
case 2723:
case 3029:
case 2854:
case 1617:
case 602:
case 2979:
case 788:
case 1367:
case 60:
case 3686:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750888802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,];
var gg_b = "1750888802/";

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
