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
case 1009:
case 3609:
case 3450:
case 1520:
case 1362:
case 2592:
case 1854:
case 509:
case 3427:
case 3360:
case 2615:
case 322:
case 2174:
case 592:
case 1696:
case 1782:
case 739:
case 1635:
case 3087:
case 210:
case 2112:
case 470:
case 2026:
case 664:
case 1668:
case 3154:
case 148:
case 3618:
case 837:
case 1133:
case 1018:
case 1453:
case 3434:
case 13:
case 3199:
case 3209:
case 3523:
case 28:
case 2330:
case 4067:
case 2844:
case 1401:
case 3776:
case 199:
case 2863:
case 2129:
case 4059:
case 1830:
case 3938:
case 1344:
case 441:
case 695:
case 4088:
case 1363:
case 2593:
case 679:
case 330:
case 3312:
case 916:
case 1783:
case 2810:
case 362:
case 712:
case 3381:
case 815:
case 51:
case 624:
case 933:
case 269:
case 3622:
case 1022:
case 3750:
case 1620:
case 992:
case 3020:
case 2151:
case 3302:
case 3509:
case 331:
case 2431:
case 3069:
case 2515:
case 2786:
case 3841:
case 3727:
case 1866:
case 3328:
case 1535:
case 3125:
case 2920:
case 980:
case 3608:
case 2957:
case 1884:
case 1871:
case 654:
case 2398:
case 1568:
case 383:
case 2456:
case 2969:
case 1992:
case 2195:
case 3990:
case 909:
case 1411:
case 1753:
case 3734:
case 178:
case 1023:
case 3623:
case 3303:
case 91:
case 2647:
case 1701:
case 3476:
case 2693:
case 471:
case 1269:
case 533:
case 3336:
case 3208:
case 547:
case 3171:
case 145:
case 703:
case 3395:
case 1019:
case 4089:
case 2605:
case 136:
case 259:
case 2128:
case 698:
case 2077:
case 1947:
case 3166:
case 1446:
case 1428:
case 1713:
case 2279:
case 2146:
case 3589:
case 1217:
case 869:
case 3311:
case 3856:
case 243:
case 475:
case 88:
case 585:
case 3667:
case 988:
case 141:
case 1402:
case 237:
case 1059:
case 3659:
case 43:
case 727:
case 2624:
case 2285:
case 1156:
case 1937:
case 1712:
case 1436:
case 874:
case 3383:
case 335:
case 2679:
case 1495:
case 1774:
case 3346:
case 2182:
case 3288:
case 3259:
case 2049:
case 37:
case 2591:
case 534:
case 2578:
case 2637:
case 1403:
case 3104:
case 2861:
case 690:
case 2917:
case 2685:
case 3521:
case 4009:
case 767:
case 1131:
case 2224:
case 317:
case 3763:
case 3114:
case 436:
case 663:
case 1089:
case 1873:
case 588:
case 1170:
case 886:
case 3045:
case 1645:
case 2406:
case 4019:
case 2907:
case 1350:
case 3897:
case 3864:
case 2101:
case 3559:
case 3352:
case 0:
case 2850:
case 2278:
case 3700:
case 3594:
case 2153:
case 2741:
case 478:
case 3221:
case 218:
case 1607:
case 1460:
case 1075:
case 1142:
case 3462:
case 3675:
case 3410:
case 1991:
case 2372:
case 2579:
case 140:
case 1978:
case 3258:
case 2048:
case 1795:
case 844:
case 1517:
case 2314:
case 376:
case 1481:
case 4008:
case 1814:
case 1245:
case 2678:
case 3948:
case 34:
case 3842:
case 2834:
case 2691:
case 2716:
case 2432:
case 1955:
case 4022:
case 2152:
case 3301:
case 1751:
case 1021:
case 309:
case 2287:
case 3881:
case 2746:
case 1038:
case 983:
case 665:
case 2268:
case 3918:
case 275:
case 3665:
case 1470:
case 2235:
case 437:
case 1129:
case 299:
case 3539:
case 18:
case 3440:
case 2018:
case 392:
case 23:
case 2453:
case 2711:
case 3238:
case 625:
case 3306:
case 2687:
case 129:
case 3110:
case 700:
case 1112:
case 3626:
case 3265:
case 2782:
case 756:
case 1174:
case 1181:
case 2696:
case 2854:
case 1987:
case 1399:
case 2362:
case 1615:
case 3590:
case 3333:
case 2899:
case 1862:
case 2557:
case 3860:
case 694:
case 1731:
case 1497:
case 1443:
case 377:
case 530:
case 3829:
case 3538:
case 1077:
case 2993:
case 2446:
case 2825:
case 245:
case 2483:
case 3895:
case 2905:
case 111:
case 668:
case 3290:
case 1647:
case 2257:
case 3047:
case 3093:
case 2220:
case 1742:
case 3919:
case 1195:
case 2587:
case 2992:
case 3526:
case 3277:
case 1957:
case 1136:
case 2884:
case 1456:
case 1398:
case 2568:
case 840:
case 3922:
case 2008:
case 1366:
case 2596:
case 144:
case 930:
case 75:
case 3404:
case 1786:
case 2657:
case 1247:
case 1103:
case 3341:
case 2669:
case 1515:
case 1090:
case 628:
case 3690:
case 1743:
case 347:
case 1764:
case 2300:
case 552:
case 3802:
case 2116:
case 2752:
case 2620:
case 2131:
case 60:
case 1224:
case 1685:
case 1732:
case 3085:
case 3037:
case 1578:
case 1591:
case 2979:
case 3649:
case 1182:
case 3425:
case 2985:
case 632:
case 3846:
case 474:
case 214:
case 1555:
case 3079:
case 2495:
case 1679:
case 2156:
case 2937:
case 4026:
case 270:
case 3883:
case 429:
case 385:
case 2712:
case 48:
case 1285:
case 2507:
case 2760:
case 1733:
case 2804:
case 1624:
case 3331:
case 2729:
case 848:
case 3249:
case 2059:
case 137:
case 3176:
case 1237:
case 287:
case 143:
case 705:
case 2545:
case 772:
case 1706:
case 3471:
case 3484:
case 3811:
case 619:
case 4065:
case 976:
case 3466:
case 469:
case 2713:
case 334:
case 3959:
case 3882:
case 57:
case 802:
case 1279:
case 2143:
case 2751:
case 2164:
case 1585:
case 3150:
case 1432:
case 1716:
case 1152:
case 2186:
case 1340:
case 3091:
case 3127:
case 388:
case 2334:
case 4090:
case 3078:
case 2517:
case 1314:
case 650:
case 3921:
case 2481:
case 444:
case 1048:
case 3648:
case 984:
case 3370:
case 240:
case 1579:
case 2991:
case 917:
case 3386:
case 2327:
case 3499:
case 2142:
case 2075:
case 576:
case 1153:
case 2607:
case 1433:
case 661:
case 1850:
case 878:
case 3958:
case 411:
case 271:
case 3852:
case 2429:
case 97:
case 742:
case 3784:
case 1406:
case 173:
case 1907:
case 836:
case 2645:
case 3975:
case 3766:
case 2413:
case 391:
case 2789:
case 960:
case 2758:
case 3902:
case 932:
case 3066:
case 2177:
case 3506:
case 713:
case 3071:
case 1684:
case 226:
case 2966:
case 2320:
case 2467:
case 2494:
case 3928:
case 201:
case 2600:
case 550:
case 2459:
case 2002:
case 1123:
case 3424:
case 506:
case 778:
case 2562:
case 1392:
case 2775:
case 3533:
case 3216:
case 1869:
case 2892:
case 2357:
case 1554:
case 1266:
case 920:
case 561:
case 919:
case 1748:
case 2095:
case 676:
case 323:
case 1284:
case 3951:
case 1108:
case 3755:
case 1625:
case 2805:
case 3377:
case 2200:
case 2190:
case 951:
case 3778:
case 2003:
case 3791:
case 4086:
case 3157:
case 3120:
case 1347:
case 457:
case 1016:
case 638:
case 2893:
case 4043:
case 3532:
case 196:
case 2847:
case 4064:
case 64:
case 2051:
case 50:
case 2458:
case 2396:
case 872:
case 2489:
case 2013:
case 2138:
case 805:
case 950:
case 684:
case 2387:
case 1962:
case 702:
case 1598:
case 2368:
case 112:
case 2954:
case 1887:
case 2794:
case 560:
case 2759:
case 532:
case 2029:
case 2815:
case 748:
case 73:
case 3633:
case 1033:
case 1118:
case 427:
case 3054:
case 3232:
case 3541:
case 2475:
case 1699:
case 551:
case 4056:
case 2012:
case 2126:
case 200:
case 382:
case 2610:
case 1448:
case 3168:
case 3779:
case 646:
case 897:
case 1963:
case 3196:
case 1944:
case 289:
case 404:
case 2074:
case 256:
case 3455:
case 2930:
case 26:
case 3912:
case 3737:
case 3818:
case 519:
case 390:
case 520:
case 961:
case 3785:
case 2262:
case 1299:
case 3030:
case 1630:
case 2644:
case 2421:
case 1254:
case 467:
case 3974:
case 3981:
case 3233:
case 3242:
case 157:
case 2409:
case 2722:
case 1064:
case 1097:
case 496:
case 958:
case 3643:
case 2973:
case 2234:
case 1504:
case 1807:
case 3686:
case 3415:
case 568:
case 2580:
case 1673:
case 2708:
case 354:
case 683:
case 965:
case 1927:
case 2418:
case 3297:
case 3264:
case 208:
case 2634:
case 2561:
case 2972:
case 1175:
case 1042:
case 3642:
case 994:
case 3040:
case 2878:
case 2250:
case 1640:
case 3793:
case 2001:
case 3286:
case 771:
case 2576:
case 3072:
case 3145:
case 1672:
case 3670:
case 2940:
case 528:
case 2719:
case 1273:
case 403:
case 3953:
case 2855:
case 1614:
case 1158:
case 3901:
case 652:
case 1777:
case 3859:
case 3982:
case 8:
case 2422:
case 4032:
case 3888:
case 2709:
case 3867:
case 2550:
case 3631:
case 2527:
case 1324:
case 3911:
case 1604:
case 2824:
case 2276:
case 364:
case 104:
case 297:
case 3117:
case 2408:
case 1573:
case 770:
case 856:
case 3656:
case 1056:
case 889:
case 2011:
case 622:
case 127:
case 3542:
case 2423:
case 2837:
case 2718:
case 3983:
case 3231:
case 1540:
case 2534:
case 1167:
case 2676:
case 3493:
case 3946:
case 741:
case 1159:
case 2885:
case 1188:
case 2879:
case 1765:
case 1961:
case 412:
case 272:
case 4006:
case 2419:
case 2083:
case 1738:
case 1477:
case 1514:
case 1976:
case 2046:
case 630:
case 3256:
case 1893:
case 563:
case 2530:
case 1051:
case 296:
case 3839:
case 688:
case 2393:
case 2347:
case 1544:
case 3603:
case 15:
case 1003:
case 857:
case 1190:
case 1200:
case 591:
case 3192:
case 2449:
case 3202:
case 3417:
case 3581:
case 3574:
case 1805:
case 2625:
case 2284:
case 306:
case 166:
case 2271:
case 3228:
case 1510:
case 350:
case 3695:
case 3636:
case 1036:
case 1357:
case 2554:
case 1892:
case 3560:
case 2123:
case 1369:
case 1984:
case 2041:
case 1488:
case 2820:
case 361:
case 3602:
case 711:
case 1966:
case 1494:
case 2684:
case 442:
case 2698:
case 3308:
case 786:
case 982:
case 759:
case 1789:
case 1758:
case 3044:
case 3260:
case 553:
case 2630:
case 2109:
case 3551:
case 1262:
case 1:
case 2749:
case 16:
case 867:
case 685:
case 963:
case 3717:
case 3838:
case 239:
case 2963:
case 2525:
case 4011:
case 29:
case 3213:
case 804:
case 3865:
case 332:
case 3612:
case 1012:
case 729:
case 991:
case 3010:
case 2315:
case 2699:
case 1475:
case 3906:
case 1244:
case 2118:
case 12:
case 1759:
case 1788:
case 827:
case 1029:
case 351:
case 1794:
case 3502:
case 582:
case 634:
case 1368:
case 4083:
case 2887:
case 1954:
case 405:
case 3933:
case 212:
case 2962:
case 923:
case 3445:
case 1165:
case 2896:
case 4046:
case 3528:
case 590:
case 1210:
case 1396:
case 2566:
case 1458:
case 2835:
case 1138:
case 2777:
case 1855:
case 803:
case 2614:
case 1719:
case 142:
case 426:
case 2273:
case 773:
case 2934:
case 3942:
case 355:
case 2672:
case 2465:
case 1940:
case 2070:
case 3848:
case 401:
case 1576:
case 1227:
case 2042:
case 1561:
case 2640:
case 1878:
case 108:
case 368:
case 979:
case 3487:
case 4036:
case 1345:
case 3511:
case 2272:
case 1708:
case 924:
case 3582:
case 3997:
case 3496:
case 3943:
case 3201:
case 3375:
case 549:
case 3191:
case 2807:
case 4003:
case 2504:
case 598:
case 328:
case 2064:
case 2121:
case 4051:
case 1234:
case 1973:
case 2043:
case 3253:
case 3720:
case 1409:
case 995:
case 3050:
case 2477:
case 1046:
case 1317:
case 4013:
case 2817:
case 2738:
case 365:
case 2961:
case 2379:
case 2572:
case 1083:
case 715:
case 3683:
case 1419:
case 172:
case 1879:
case 1280:
case 2765:
case 1885:
case 2439:
case 2204:
case 2194:
case 3849:
case 3553:
case 4060:
case 1534:
case 2337:
case 3061:
case 1718:
case 1423:
case 839:
case 400:
case 2056:
case 3682:
case 2573:
case 3080:
case 595:
case 3796:
case 197:
case 4081:
case 325:
case 89:
case 3931:
case 2604:
case 1824:
case 4:
case 579:
case 3137:
case 1149:
case 1527:
case 524:
case 1261:
case 3552:
case 2031:
case 1550:
case 3185:
case 1422:
case 3367:
case 1709:
case 1321:
case 3576:
case 3914:
case 4000:
case 3001:
case 1252:
case 3878:
case 611:
case 3053:
case 1034:
case 3634:
case 249:
case 2901:
case 3855:
case 298:
case 659:
case 2348:
case 155:
case 904:
case 2670:
case 1027:
case 3627:
case 1757:
case 788:
case 2686:
case 2875:
case 1178:
case 1769:
case 421:
case 3409:
case 3052:
case 1652:
case 2242:
case 927:
case 2531:
case 1050:
case 3650:
case 450:
case 644:
case 3148:
case 1468:
case 823:
case 2556:
case 1511:
case 1986:
case 1155:
case 3708:
case 2952:
case 254:
case 2858:
case 2270:
case 1435:
case 1582:
case 1389:
case 2073:
case 1358:
case 3580:
case 1501:
case 68:
case 2946:
case 1849:
case 1553:
case 3534:
case 2542:
case 1124:
case 1061:
case 2231:
case 2983:
case 3423:
case 3718:
case 957:
case 419:
case 420:
case 2405:
case 734:
case 567:
case 372:
case 1282:
case 3879:
case 3280:
case 2004:
case 2715:
case 3276:
case 1956:
case 3149:
case 1469:
case 3527:
case 2586:
case 2911:
case 207:
case 2867:
case 1552:
case 194:
case 1359:
case 2631:
case 3422:
case 1185:
case 2982:
case 2859:
case 2564:
case 1367:
case 2597:
case 3709:
case 432:
case 674:
case 1179:
case 1611:
case 3011:
case 460:
case 1787:
case 1682:
case 3680:
case 1080:
case 1796:
case 397:
case 527:
case 125:
case 2755:
case 912:
case 1417:
case 1581:
case 1574:
case 223:
case 716:
case 1877:
case 2951:
case 106:
case 1512:
case 3510:
case 150:
case 2479:
case 2903:
case 854:
case 2339:
case 503:
case 3893:
case 1651:
case 2241:
case 3847:
case 2120:
case 1839:
case 781:
case 3925:
case 2823:
case 2437:
case 3003:
case 4027:
case 121:
case 3200:
case 2778:
case 2169:
case 2995:
case 263:
case 326:
case 2071:
case 1941:
case 596:
case 1745:
case 2066:
case 1236:
case 2808:
case 1295:
case 2902:
case 898:
case 1890:
case 3998:
case 2533:
case 1560:
case 3562:
case 3984:
case 1251:
case 1000:
case 3600:
case 2928:
case 301:
case 1602:
case 1203:
case 1193:
case 1322:
case 3494:
case 2135:
case 3930:
case 356:
case 1717:
case 2206:
case 1681:
case 3074:
case 1865:
case 132:
case 1612:
case 3012:
case 3610:
case 1010:
case 282:
case 160:
case 300:
case 1595:
case 1063:
case 2516:
case 2981:
case 2632:
case 1551:
case 1115:
case 3:
case 1503:
case 807:
case 780:
case 1274:
case 1933:
case 1281:
case 2960:
case 2326:
case 253:
case 3165:
case 1528:
case 709:
case 3335:
case 119:
case 615:
case 643:
case 824:
case 1660:
case 3060:
case 3475:
case 3662:
case 458:
case 539:
case 4061:
case 3244:
case 2054:
case 2633:
case 32:
case 1629:
case 3788:
case 3029:
case 895:
case 3794:
case 1309:
case 1502:
case 2964:
case 2582:
case 850:
case 2943:
case 2358:
case 3673:
case 4025:
case 2155:
case 905:
case 1858:
case 2511:
case 3426:
case 806:
case 1556:
case 2468:
case 3214:
case 2652:
case 1242:
case 357:
case 2720:
case 3240:
case 1531:
case 228:
case 2253:
case 1643:
case 821:
case 1875:
case 3790:
case 738:
case 1792:
case 2178:
case 2027:
case 2375:
case 1145:
case 1072:
case 3672:
case 3465:
case 2942:
case 255:
case 997:
case 2583:
case 4071:
case 198:
case 3934:
case 636:
case 613:
case 3614:
case 1705:
case 3158:
case 2546:
case 1297:
case 1264:
case 2034:
case 861:
case 2653:
case 3391:
case 3042:
case 3175:
case 2252:
case 2970:
case 1040:
case 2601:
case 1821:
case 1793:
case 1286:
case 2321:
case 164:
case 304:
case 2796:
case 746:
case 2283:
case 2735:
case 1117:
case 482:
case 3726:
case 2246:
case 1656:
case 2787:
case 2394:
case 1597:
case 2367:
case 1982:
case 1859:
case 4030:
case 2185:
case 3980:
case 908:
case 2420:
case 1888:
case 1894:
case 1867:
case 367:
case 505:
case 107:
case 3031:
case 80:
case 717:
case 2388:
case 2469:
case 77:
case 1911:
case 1004:
case 3604:
case 490:
case 2457:
case 2137:
case 2282:
case 3765:
case 3379:
case 265:
case 124:
case 1570:
case 3738:
case 602:
case 3514:
case 179:
case 3976:
case 2124:
case 4054:
case 597:
case 1349:
case 195:
case 1542:
case 3540:
case 2849:
case 699:
case 2553:
case 3167:
case 1447:
case 3204:
case 2076:
case 1493:
case 2501:
case 63:
case 648:
case 3439:
case 2147:
case 96:
case 9:
case 1928:
case 2602:
case 1822:
case 3123:
case 671:
case 2560:
case 566:
case 1641:
case 3392:
case 1216:
case 191:
case 1808:
case 2628:
case 1902:
case 752:
case 3698:
case 989:
case 163:
case 303:
case 956:
case 3119:
case 3684:
case 1071:
case 1084:
case 221:
case 2202:
case 828:
case 1169:
case 1778:
case 1437:
case 1157:
case 3393:
case 2839:
case 1120:
case 3347:
case 1616:
case 396:
case 3530:
case 526:
case 3266:
case 1819:
case 501:
case 2228:
case 2319:
case 3271:
case 3284:
case 206:
case 1951:
case 2877:
case 640:
case 2916:
case 454:
case 251:
case 500:
case 858:
case 2502:
case 2309:
case 1809:
case 2629:
case 95:
case 1724:
case 495:
case 3033:
case 1054:
case 3230:
case 556:
case 1541:
case 56:
case 2212:
case 2528:
case 479:
case 219:
case 220:
case 5:
case 966:
case 3571:
case 3598:
case 762:
case 2826:
case 1606:
case 424:
case 2281:
case 2274:
case 3887:
case 2503:
case 3749:
case 2318:
case 1491:
case 1818:
case 901:
case 3910:
case 4004:
case 3032:
case 1785:
case 1632:
case 3299:
case 3109:
case 2063:
case 407:
case 1974:
case 1516:
case 1233:
case 2595:
case 1365:
case 2010:
case 1187:
case 1168:
case 2865:
case 722:
case 1196:
case 1338:
case 2674:
case 2681:
case 464:
case 2838:
case 1455:
case 670:
case 600:
case 2346:
case 3182:
case 3555:
case 1079:
case 2949:
case 235:
case 1883:
case 185:
case 587:
case 3876:
case 2744:
case 477:
case 3224:
case 6:
case 2521:
case 3416:
case 3732:
case 3861:
case 2294:
case 2288:
case 41:
case 27:
case 3591:
case 3049:
case 765:
case 1484:
case 480:
case 1811:
case 1466:
case 1967:
case 1994:
case 2589:
case 830:
case 3880:
case 940:
case 1988:
case 1959:
case 3279:
case 758:
case 2762:
case 1799:
case 3285:
case 1754:
case 514:
case 3441:
case 1161:
case 1024:
case 2575:
case 492:
case 1331:
case 337:
case 2831:
case 1176:
case 3237:
case 2667:
case 2694:
case 1725:
case 1055:
case 3655:
case 276:
case 2173:
case 416:
case 2870:
case 433:
case 1370:
case 3372:
case 2410:
case 728:
case 2463:
case 447:
case 3432:
case 3716:
case 65:
case 3834:
case 1091:
case 1342:
case 1549:
case 941:
case 2948:
case 4092:
case 1784:
case 3406:
case 373:
case 755:
case 3255:
case 1975:
case 626:
case 3373:
case 4005:
case 970:
case 3945:
case 2462:
case 3153:
case 3433:
case 2221:
case 318:
case 1343:
case 3850:
case 1958:
case 1397:
case 1989:
case 1852:
case 2700:
case 4093:
case 2588:
case 2559:
case 2352:
case 2897:
case 4047:
case 2938:
case 3844:
case 3330:
case 3863:
case 1332:
case 3215:
case 2209:
case 1162:
case 38:
case 3160:
case 192:
case 2761:
case 3505:
case 1881:
case 1874:
case 1226:
case 719:
case 3113:
case 1638:
case 672:
case 2374:
case 434:
case 605:
case 1414:
case 1918:
case 3810:
case 1472:
case 1665:
case 3065:
case 884:
case 2519:
case 2312:
case 2427:
case 3987:
case 3399:
case 3615:
case 3486:
case 1704:
case 70:
case 3862:
case 3354:
case 3968:
case 1860:
case 3464:
case 2522:
case 1163:
case 3443:
case 575:
case 2130:
case 3935:
case 2450:
case 846:
case 1238:
case 2068:
case 697:
case 732:
case 599:
case 3756:
case 485:
case 1813:
case 1265:
case 2035:
case 3174:
case 3181:
case 53:
case 3292:
case 761:
case 3102:
case 2351:
case 1290:
case 311:
case 1100:
case 1047:
case 1851:
case 1093:
case 1740:
case 2303:
case 3742:
case 793:
case 1919:
case 1677:
case 1005:
case 1714:
case 359:
case 3605:
case 3128:
case 642:
case 2939:
case 2184:
case 1836:
case 2171:
case 2619:
case 252:
case 2336:
case 2208:
case 1404:
case 2057:
case 3103:
case 721:
case 1239:
case 4078:
case 3090:
case 999:
case 1690:
case 3151:
case 545:
case 3797:
case 231:
case 2223:
case 84:
case 2750:
case 1802:
case 93:
case 181:
case 948:
case 2020:
case 3800:
case 3195:
case 3371:
case 133:
case 750:
case 876:
case 1526:
case 3957:
case 3456:
case 1922:
case 1828:
case 3920:
case 3366:
case 1773:
case 2219:
case 706:
case 2328:
case 1831:
case 3094:
case 1694:
case 1667:
case 1400:
case 341:
case 3402:
case 1659:
case 2754:
case 1762:
case 2799:
case 3760:
case 2988:
case 880:
case 2959:
case 2466:
case 1589:
case 1382:
case 184:
case 2498:
case 2811:
case 2356:
case 724:
case 462:
case 2471:
case 3545:
case 3924:
case 1259:
case 3361:
case 3979:
case 2037:
case 1267:
case 1294:
case 1104:
case 3376:
case 918:
case 3131:
case 543:
case 515:
case 117:
case 1710:
case 639:
case 3712:
case 3495:
case 2079:
case 3781:
case 2846:
case 3774:
case 146:
case 1346:
case 4035:
case 973:
case 1017:
case 2180:
case 2425:
case 1843:
case 1352:
case 1559:
case 2958:
case 2343:
case 1700:
case 3429:
case 2989:
case 2364:
case 1567:
case 1886:
case 1221:
case 2454:
case 1007:
case 2386:
case 1462:
case 2499:
case 3058:
case 1658:
case 1114:
case 603:
case 1689:
case 3873:
case 2975:
case 1045:
case 2798:
case 1172:
case 2771:
case 2784:
case 1353:
case 696:
case 3840:
case 2078:
case 1948:
case 3334:
case 1842:
case 138:
case 4069:
case 288:
case 2091:
case 3751:
case 1463:
case 3207:
case 573:
case 3197:
case 2370:
case 3991:
case 3978:
case 1870:
case 833:
case 3517:
case 3481:
case 3814:
case 2725:
case 3245:
case 122:
case 3696:
case 1508:
case 2265:
case 2909:
case 885:
case 4017:
case 1035:
case 3782:
case 1087:
case 2626:
case 1806:
case 782:
case 3915:
case 3711:
case 435:
case 986:
case 1450:
case 1522:
case 1218:
case 2144:
case 3520:
case 2163:
case 3899:
case 2333:
case 2860:
case 3569:
case 3854:
case 1427:
case 2015:
case 2704:
case 790:
case 3310:
case 130:
case 753:
case 2665:
case 944:
case 1312:
case 834:
case 2918:
case 302:
case 280:
case 162:
case 2638:
case 2414:
case 3287:
case 1154:
case 1618:
case 3018:
case 3133:
case 1434:
case 1761:
case 574:
case 2162:
case 1209:
case 2440:
case 1523:
case 1776:
case 510:
case 2539:
case 1938:
case 1832:
case 3363:
case 2773:
case 3866:
case 3535:
case 2922:
case 1125:
case 1608:
case 1480:
case 3884:
case 3871:
case 2277:
case 3992:
case 2802:
case 1622:
case 3116:
case 888:
case 1750:
case 2908:
case 247:
case 1509:
case 3300:
case 3669:
case 1069:
case 438:
case 2341:
case 559:
case 2690:
case 44:
case 1057:
case 586:
case 2404:
case 657:
case 1336:
case 4045:
case 152:
case 1208:
case 1198:
case 1171:
case 1184:
case 2836:
case 763:
case 2565:
case 1395:
case 1619:
case 929:
case 2677:
case 3947:
case 1166:
case 3753:
case 3141:
case 544:
case 378:
case 1623:
case 2803:
case 2740:
case 1518:
case 1222:
case 2851:
case 1476:
case 3701:
case 1351:
case 3905:
case 3269:
case 2639:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743818401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,];
var gg_b = "1743818401/";

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
