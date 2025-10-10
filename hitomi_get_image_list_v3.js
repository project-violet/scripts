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
case 1030:
case 1591:
case 1600:
case 436:
case 241:
case 1631:
case 1165:
case 3314:
case 1001:
case 3636:
case 2662:
case 1369:
case 3567:
case 1099:
case 1092:
case 3174:
case 2211:
case 3596:
case 2882:
case 3234:
case 2889:
case 3307:
case 996:
case 1502:
case 257:
case 3392:
case 4083:
case 3358:
case 2147:
case 717:
case 3062:
case 723:
case 1566:
case 191:
case 2337:
case 2204:
case 1007:
case 1405:
case 3140:
case 782:
case 2217:
case 1014:
case 3195:
case 3348:
case 2468:
case 2157:
case 3816:
case 29:
case 1163:
case 2780:
case 275:
case 428:
case 3998:
case 3959:
case 3425:
case 2903:
case 1289:
case 2621:
case 318:
case 3620:
case 3933:
case 14:
case 2584:
case 905:
case 1026:
case 3781:
case 1048:
case 1403:
case 1817:
case 2108:
case 2627:
case 2616:
case 542:
case 854:
case 1826:
case 447:
case 3760:
case 3231:
case 2214:
case 655:
case 3488:
case 1472:
case 1479:
case 1415:
case 756:
case 2796:
case 1594:
case 2144:
case 343:
case 730:
case 1004:
case 1634:
case 2207:
case 2310:
case 1732:
case 3177:
case 2820:
case 2292:
case 3237:
case 451:
case 2979:
case 2972:
case 3016:
case 2915:
case 1790:
case 4028:
case 1512:
case 843:
case 3317:
case 1575:
case 967:
case 2201:
case 1678:
case 355:
case 3580:
case 2226:
case 2248:
case 702:
case 892:
case 2624:
case 1324:
case 1413:
case 3869:
case 778:
case 2118:
case 1807:
case 3682:
case 4056:
case 1858:
case 3806:
case 855:
case 677:
case 654:
case 2729:
case 2722:
case 3024:
case 1801:
case 3627:
case 987:
case 1543:
case 2522:
case 2529:
case 1459:
case 1452:
case 1925:
case 2781:
case 1773:
case 1498:
case 657:
case 2021:
case 70:
case 2620:
case 3151:
case 758:
case 1834:
case 965:
case 2952:
case 2425:
case 2959:
case 3903:
case 2998:
case 2027:
case 375:
case 2816:
case 1626:
case 641:
case 3468:
case 2195:
case 1545:
case 1590:
case 1031:
case 2140:
case 2301:
case 1601:
case 1712:
case 2561:
case 1923:
case 2942:
case 1775:
case 3204:
case 54:
case 3337:
case 374:
case 3764:
case 1539:
case 3147:
case 1658:
case 2062:
case 3606:
case 2069:
case 471:
case 1699:
case 1692:
case 1553:
case 1037:
case 3211:
case 776:
case 2567:
case 2174:
case 1449:
case 3669:
case 3662:
case 3905:
case 1442:
case 949:
case 874:
case 69:
case 3331:
case 3560:
case 2824:
case 341:
case 3141:
case 1216:
case 675:
case 1227:
case 3581:
case 3722:
case 1078:
case 4063:
case 2806:
case 2682:
case 1382:
case 1389:
case 3587:
case 1221:
case 3118:
case 3836:
case 1831:
case 255:
case 2580:
case 3248:
case 590:
case 1185:
case 715:
case 3378:
case 1617:
case 3170:
case 2827:
case 721:
case 193:
case 3761:
case 2016:
case 3915:
case 3230:
case 4065:
case 733:
case 2237:
case 1797:
case 3820:
case 3292:
case 1206:
case 2311:
case 2821:
case 243:
case 78:
case 1010:
case 1269:
case 3144:
case 3796:
case 1262:
case 316:
case 840:
case 2488:
case 2231:
case 3214:
case 2171:
case 470:
case 2760:
case 3616:
case 426:
case 1897:
case 3113:
case 287:
case 1686:
case 546:
case 7:
case 3720:
case 1284:
case 2727:
case 305:
case 2485:
case 3861:
case 212:
case 2680:
case 696:
case 3524:
case 2860:
case 1073:
case 4068:
case 805:
case 510:
case 3687:
case 3255:
case 2582:
case 77:
case 604:
case 3896:
case 264:
case 134:
case 3179:
case 1737:
case 3172:
case 1364:
case 739:
case 3476:
case 1504:
case 199:
case 804:
case 2977:
case 2483:
case 794:
case 3312:
case 1188:
case 3822:
case 3290:
case 396:
case 3516:
case 3944:
case 249:
case 3394:
case 1983:
case 1477:
case 2971:
case 2209:
case 1511:
case 3864:
case 2520:
case 481:
case 537:
case 667:
case 2993:
case 1956:
case 1450:
case 3908:
case 511:
case 2133:
case 2629:
case 1329:
case 1438:
case 1322:
case 2622:
case 1819:
case 1812:
case 1281:
case 2198:
case 1526:
case 3103:
case 42:
case 2159:
case 1493:
case 2456:
case 2950:
case 786:
case 1655:
case 2355:
case 955:
case 768:
case 2149:
case 2142:
case 1599:
case 885:
case 1558:
case 2428:
case 1002:
case 2446:
case 2995:
case 3096:
case 1091:
case 459:
case 2661:
case 3947:
case 2135:
case 1690:
case 2212:
case 2219:
case 1645:
case 2060:
case 400:
case 2345:
case 1873:
case 943:
case 1928:
case 3660:
case 1440:
case 2716:
case 1495:
case 2294:
case 3569:
case 1734:
case 2536:
case 1097:
case 207:
case 1367:
case 2696:
case 3302:
case 2736:
case 3769:
case 110:
case 2394:
case 1694:
case 3971:
case 1707:
case 2944:
case 3291:
case 1714:
case 1843:
case 957:
case 1675:
case 2375:
case 1612:
case 1701:
case 3977:
case 974:
case 2239:
case 461:
case 1799:
case 1758:
case 2476:
case 2115:
case 2172:
case 3297:
case 1853:
case 2687:
case 649:
case 3721:
case 1086:
case 1726:
case 2918:
case 4025:
case 43:
case 1578:
case 1454:
case 1222:
case 1229:
case 1890:
case 483:
case 312:
case 1845:
case 1381:
case 599:
case 2681:
case 2373:
case 3727:
case 205:
case 2080:
case 3485:
case 1832:
case 2720:
case 527:
case 3087:
case 1418:
case 534:
case 387:
case 865:
case 2113:
case 4088:
case 1039:
case 1602:
case 2302:
case 2309:
case 3696:
case 2941:
case 3667:
case 2562:
case 3294:
case 3536:
case 3716:
case 1531:
case 1360:
case 1500:
case 698:
case 2391:
case 1691:
case 2465:
case 3345:
case 111:
case 3275:
case 807:
case 797:
case 1441:
case 3661:
case 3995:
case 2096:
case 3428:
case 3339:
case 3940:
case 1666:
case 2506:
case 124:
case 548:
case 2397:
case 3142:
case 267:
case 137:
case 3149:
case 729:
case 2521:
case 3355:
case 1963:
case 75:
case 398:
case 3950:
case 1408:
case 2103:
case 1280:
case 125:
case 2463:
case 772:
case 2951:
case 1457:
case 898:
case 708:
case 2684:
case 3993:
case 2864:
case 2018:
case 2:
case 1251:
case 2847:
case 3513:
case 1768:
case 3840:
case 3733:
case 1208:
case 252:
case 3256:
case 145:
case 1480:
case 3124:
case 1865:
case 3987:
case 3752:
case 2054:
case 1257:
case 1685:
case 958:
case 666:
case 3618:
case 2486:
case 2980:
case 295:
case 153:
case 764:
case 2677:
case 239:
case 3572:
case 169:
case 3893:
case 1588:
case 3670:
case 888:
case 2964:
case 866:
case 2705:
case 3475:
case 3838:
case 2265:
case 3419:
case 2383:
case 2857:
case 3116:
case 1241:
case 976:
case 1111:
case 3228:
case 3376:
case 3850:
case 749:
case 528:
case 144:
case 629:
case 2713:
case 308:
case 3050:
case 4078:
case 1063:
case 3608:
case 3127:
case 2870:
case 1656:
case 2693:
case 697:
case 3984:
case 2057:
case 551:
case 2008:
case 1429:
case 2638:
case 2559:
case 3503:
case 1876:
case 442:
case 2650:
case 872:
case 35:
case 2051:
case 3402:
case 589:
case 1945:
case 2772:
case 3409:
case 493:
case 2715:
case 2961:
case 1467:
case 3647:
case 329:
case 3106:
case 921:
case 608:
case 1523:
case 2549:
case 1192:
case 2542:
case 1270:
case 914:
case 1395:
case 4034:
case 1340:
case 2640:
case 1065:
case 933:
case 2535:
case 3491:
case 2041:
case 1130:
case 3365:
case 2445:
case 3040:
case 1114:
case 2996:
case 3095:
case 3283:
case 4010:
case 3505:
case 65:
case 2276:
case 3960:
case 2432:
case 2674:
case 126:
case 1374:
case 2136:
case 707:
case 170:
case 3162:
case 3169:
case 897:
case 4030:
case 704:
case 136:
case 67:
case 1676:
case 2376:
case 4001:
case 1134:
case 2116:
case 4092:
case 4058:
case 796:
case 3383:
case 806:
case 1994:
case 3857:
case 3265:
case 2412:
case 2475:
case 3070:
case 3705:
case 2838:
case 1083:
case 652:
case 2071:
case 923:
case 394:
case 3964:
case 3808:
case 4007:
case 1856:
case 982:
case 339:
case 2572:
case 3044:
case 3677:
case 2494:
case 3851:
case 306:
case 2742:
case 4014:
case 2874:
case 3980:
case 3486:
case 395:
case 544:
case 2618:
case 1318:
case 1250:
case 128:
case 1846:
case 3841:
case 3385:
case 1178:
case 3054:
case 2473:
case 1481:
case 2752:
case 2798:
case 3263:
case 1238:
case 705:
case 87:
case 2895:
case 1293:
case 571:
case 2733:
case 553:
case 2513:
case 2981:
case 1487:
case 3:
case 3136:
case 3047:
case 147:
case 2169:
case 2162:
case 2497:
case 668:
case 1991:
case 538:
case 3674:
case 3346:
case 3432:
case 3439:
case 1271:
case 2283:
case 1885:
case 785:
case 1100:
case 4004:
case 3996:
case 2365:
case 1665:
case 1909:
case 1788:
case 3041:
case 2491:
case 1966:
case 1460:
case 3640:
case 4011:
case 767:
case 2647:
case 3961:
case 2106:
case 1046:
case 2402:
case 3779:
case 1137:
case 1028:
case 902:
case 3844:
case 3051:
case 386:
case 2121:
case 526:
case 3650:
case 368:
case 1883:
case 2657:
case 3552:
case 3559:
case 2503:
case 3443:
case 978:
case 3533:
case 272:
case 3057:
case 3693:
case 3870:
case 2608:
case 868:
case 2038:
case 3120:
case 1351:
case 189:
case 3922:
case 3455:
case 208:
case 3713:
case 741:
case 1565:
case 2771:
case 410:
case 2160:
case 1191:
case 2605:
case 2962:
case 2969:
case 3936:
case 3430:
case 2035:
case 1931:
case 2437:
case 3744:
case 1406:
case 1900:
case 3574:
case 2049:
case 3167:
case 3458:
case 223:
case 179:
case 2777:
case 774:
case 60:
case 3813:
case 3649:
case 217:
case 1462:
case 3642:
case 3323:
case 282:
case 3414:
case 876:
case 2431:
case 2288:
case 3005:
case 3161:
case 3635:
case 1785:
case 2921:
case 775:
case 1563:
case 2603:
case 4086:
case 80:
case 79:
case 3550:
case 26:
case 13:
case 3718:
case 1025:
case 2551:
case 30:
case 3815:
case 122:
case 858:
case 3754:
case 2508:
case 3122:
case 3593:
case 2098:
case 2368:
case 3920:
case 2052:
case 3633:
case 2059:
case 615:
case 3741:
case 3571:
case 3803:
case 2859:
case 230:
case 4045:
case 160:
case 4090:
case 2774:
case 1194:
case 3079:
case 1746:
case 256:
case 2410:
case 997:
case 3411:
case 740:
case 3747:
case 3164:
case 1249:
case 2223:
case 2615:
case 1315:
case 2679:
case 1825:
case 1112:
case 437:
case 2833:
case 88:
case 2795:
case 424:
case 1235:
case 662:
case 3989:
case 202:
case 3982:
case 95:
case 3805:
case 315:
case 1259:
case 1252:
case 2924:
case 2187:
case 278:
case 559:
case 614:
case 2849:
case 500:
case 1313:
case 1424:
case 4055:
case 1173:
case 2181:
case 908:
case 3708:
case 1756:
case 2003:
case 3368:
case 2448:
case 2633:
case 561:
case 2426:
case 9:
case 3052:
case 86:
case 3098:
case 682:
case 2122:
case 2593:
case 1556:
case 2754:
case 3508:
case 2879:
case 579:
case 623:
case 1625:
case 617:
case 1948:
case 1420:
case 435:
case 1155:
case 180:
case 3603:
case 1068:
case 1352:
case 2652:
case 2659:
case 2538:
case 1992:
case 3400:
case 434:
case 2005:
case 2770:
case 4094:
case 1335:
case 522:
case 3288:
case 906:
case 2540:
case 2414:
case 2595:
case 1342:
case 1436:
case 2323:
case 1623:
case 1279:
case 3547:
case 583:
case 2813:
case 1139:
case 2407:
case 1132:
case 323:
case 2492:
case 2499:
case 2574:
case 1776:
case 2458:
case 2167:
case 4019:
case 1528:
case 831:
case 4012:
case 1546:
case 2744:
case 2196:
case 1153:
case 1914:
case 66:
case 3437:
case 3969:
case 817:
case 1907:
case 3771:
case 823:
case 3478:
case 2708:
case 878:
case 3835:
case 262:
case 132:
case 3181:
case 181:
case 3613:
case 3849:
case 3842:
case 1186:
case 1489:
case 2751:
case 12:
case 3750:
case 378:
case 560:
case 3518:
case 656:
case 968:
case 1763:
case 215:
case 2180:
case 986:
case 302:
case 2989:
case 856:
case 3740:
case 3570:
case 221:
case 2388:
case 4009:
case 3679:
case 214:
case 3223:
case 4091:
case 233:
case 3434:
case 2411:
case 28:
case 356:
case 2015:
case 3410:
case 3544:
case 2079:
case 2072:
case 2803:
case 3852:
case 3898:
case 2571:
case 602:
case 2741:
case 1911:
case 3208:
case 2293:
case 1840:
case 3768:
case 671:
case 2354:
case 983:
case 1654:
case 2085:
case 345:
case 2487:
case 1513:
case 922:
case 228:
case 2318:
case 475:
case 1874:
case 1473:
case 93:
case 1752:
case 1798:
case 3685:
case 2178:
case 3257:
case 1670:
case 474:
case 1735:
case 1893:
case 2240:
case 3588:
case 645:
case 552:
case 4036:
case 2083:
case 979:
case 371:
case 457:
case 353:
case 2919:
case 2975:
case 1579:
case 369:
case 1572:
case 3377:
case 1494:
case 1376:
case 2676:
case 710:
case 250:
case 1246:
case 1228:
case 595:
case 1077:
case 2274:
case 344:
case 236:
case 209:
case 3464:
case 1644:
case 853:
case 3863:
case 1116:
case 3241:
case 869:
case 3683:
case 3393:
case 1608:
case 2308:
case 4082:
case 2568:
case 172:
case 3254:
case 108:
case 1050:
case 289:
case 670:
case 626:
case 1363:
case 3955:
case 3422:
case 2056:
case 1093:
case 2883:
case 3148:
case 1657:
case 2357:
case 1285:
case 1503:
case 3065:
case 440:
case 3340:
case 2460:
case 3932:
case 251:
case 3939:
case 3270:
case 3395:
case 2788:
case 3130:
case 197:
case 2997:
case 1491:
case 3496:
case 3945:
case 2046:
case 2028:
case 724:
case 2277:
case 3192:
case 737:
case 3467:
case 3646:
case 3628:
case 586:
case 370:
case 1169:
case 1497:
case 638:
case 3374:
case 326:
case 1095:
case 1365:
case 1283:
case 2271:
case 1505:
case 2341:
case 3461:
case 2371:
case 1671:
case 1383:
case 4006:
case 1857:
case 3994:
case 2241:
case 1070:
case 2863:
case 1705:
case 309:
case 336:
case 244:
case 350:
case 2111:
case 734:
case 2377:
case 3110:
case 1044:
case 3975:
case 2076:
case 713:
case 3912:
case 271:
case 799:
case 809:
case 3083:
case 194:
case 4062:
case 850:
case 3856:
case 2257:
case 2685:
case 1841:
case 735:
case 3481:
case 1980:
case 588:
case 609:
case 3846:
case 1182:
case 3828:
case 1189:
case 566:
case 17:
case 1018:
case 3487:
case 3725:
case 3085:
case 245:
case 3354:
case 3293:
case 4021:
case 2768:
case 828:
case 152:
case 3885:
case 3341:
case 3100:
case 443:
case 2953:
case 1490:
case 3991:
case 1674:
case 226:
case 1136:
case 1276:
case 1818:
case 1346:
case 2646:
case 2107:
case 1328:
case 1439:
case 2628:
case 373:
case 2467:
case 3347:
case 1961:
case 3277:
case 1542:
case 2199:
case 2192:
case 1549:
case 2945:
case 3137:
case 3028:
case 2496:
case 1535:
case 1854:
case 900:
case 3788:
case 847:
case 2395:
case 959:
case 2065:
case 2340:
case 351:
case 2939:
case 2101:
case 2932:
case 1552:
case 1559:
case 889:
case 2126:
case 3883:
case 1598:
case 3357:
case 92:
case 3663:
case 1638:
case 2429:
case 2422:
case 2955:
case 455:
case 1844:
case 1650:
case 238:
case 3484:
case 2525:
case 389:
case 981:
case 1120:
case 3351:
case 4024:
case 1713:
case 673:
case 1922:
case 1455:
case 2254:
case 1057:
case 1870:
case 3308:
case 492:
case 2656:
case 597:
case 1196:
case 1744:
case 2546:
case 2914:
case 56:
case 3931:
case 1499:
case 3406:
case 2776:
case 1167:
case 3023:
case 1458:
case 1401:
case 3783:
case 201:
case 944:
case 879:
case 3565:
case 3305:
case 449:
case 1540:
case 2190:
case 1414:
case 969:
case 1595:
case 1770:
case 1005:
case 464:
case 953:
case 971:
case 3166:
case 379:
case 2349:
case 1649:
case 1642:
case 3462:
case 2623:
case 2930:
case 2215:
case 2279:
case 683:
case 2948:
case 2926:
case 883:
case 3427:
case 2068:
case 1659:
case 1652:
case 2352:
case 3888:
case 2143:
case 2556:
case 487:
case 3668:
case 2333:
case 1633:
case 531:
case 83:
case 582:
case 945:
case 517:
case 383:
case 3421:
case 10:
case 1815:
case 1872:
case 679:
case 578:
case 1404:
case 360:
case 18:
case 1015:
case 1072:
case 1079:
case 1741:
case 926:
case 3934:
case 2911:
case 970:
case 1417:
case 407:
case 1803:
case 1571:
case 3119:
case 1388:
case 803:
case 3175:
case 3235:
case 3416:
case 2868:
case 133:
case 200:
case 4060:
case 3249:
case 1164:
case 3242:
case 719:
case 1577:
case 3315:
case 498:
case 3978:
case 660:
case 1989:
case 2203:
case 2585:
case 3259:
case 3252:
case 2763:
case 3298:
case 1180:
case 115:
case 232:
case 3173:
case 281:
case 3424:
case 3756:
case 1268:
case 3233:
case 2482:
case 2489:
case 1751:
case 2186:
case 3213:
case 405:
case 74:
case 283:
case 1927:
case 2421:
case 1059:
case 222:
case 1508:
case 3143:
case 2303:
case 1603:
case 1557:
case 3398:
case 23:
case 16:
case 3420:
case 3155:
case 380:
case 1547:
case 2197:
case 2462:
case 117:
case 2469:
case 3436:
case 3623:
case 123:
case 279:
case 791:
case 3139:
case 1777:
case 50:
case 3958:
case 3999:
case 182:
case 3145:
case 261:
case 1288:
case 3190:
case 4064:
case 1541:
case 2191:
case 1605:
case 1962:
case 1035:
case 2565:
case 3907:
case 2783:
case 909:
case 1049:
case 1042:
case 496:
case 2023:
case 558:
case 2102:
case 2109:
case 3546:
case 2823:
case 3186:
case 1613:
case 663:
case 3482:
case 659:
case 521:
case 82:
case 1478:
case 1554:
case 1835:
case 2424:
case 381:
case 1181:
case 989:
case 2173:
case 3763:
case 2298:
case 41:
case 3203:
case 2252:
case 2259:
case 102:
case 2978:
case 178:
case 881:
case 832:
case 1518:
case 4029:
case 58:
case 2315:
case 2372:
case 2825:
case 3917:
case 467:
case 3868:
case 681:
case 4067:
case 2416:
case 562:
case 2175:
case 2119:
case 2112:
case 1570:
case 515:
case 863:
case 1544:
case 2194:
case 4061:
case 156:
case 1410:
case 1916:
case 203:
case 1774:
case 1174:
case 3092:
case 1636:
case 1423:
case 1006:
case 2449:
case 3369:
case 3509:
case 2553:
case 2794:
case 2037:
case 2128:
case 1307:
case 2607:
case 3600:
case 3165:
case 1314:
case 701:
case 891:
case 1561:
case 2712:
case 2719:
case 2630:
case 2775:
case 3405:
case 2545:
case 1195:
case 934:
case 2031:
case 927:
case 2590:
case 1301:
case 1069:
case 494:
case 1062:
case 1392:
case 2699:
case 1399:
case 3637:
case 64:
case 2532:
case 1787:
case 3321:
case 2555:
case 3282:
case 2834:
case 1816:
case 1278:
case 84:
case 495:
case 1326:
case 2648:
case 1027:
case 3163:
case 1138:
case 2925:
case 2452:
case 3026:
case 2773:
case 3403:
case 3817:
case 4:
case 1529:
case 1522:
case 574:
case 1620:
case 691:
case 3968:
case 3804:
case 3236:
case 2262:
case 2269:
case 2709:
case 2702:
case 3479:
case 1311:
case 3634:
case 1821:
case 4047:
case 1171:
case 1760:
case 3316:
case 1200:
case 1488:
case 1231:
case 1016:
case 3745:
case 1317:
case 3575:
case 1827:
case 3519:
case 759:
case 3739:
case 1564:
case 2766:
case 2206:
case 177:
case 2988:
case 1237:
case 3011:
case 2034:
case 72:
case 1862:
case 3413:
case 4008:
case 2389:
case 1682:
case 2221:
case 1580:
case 155:
case 2185:
case 468:
case 242:
case 3830:
case 948:
case 732:
case 3573:
case 781:
case 1024:
case 3220:
case 2837:
case 1151:
case 2968:
case 24:
case 722:
case 3543:
case 1627:
case 1108:
case 2048:
case 2403:
case 3773:
case 2163:
case 1780:
case 3626:
case 1157:
case 1468:
case 2289:
case 2321:
case 1621:
case 73:
case 1020:
case 1903:
case 2566:
case 1764:
case 3539:
case 291:
case 3532:
case 174:
case 1337:
case 3699:
case 3692:
case 1036:
case 4071:
case 2597:
case 2306:
case 3031:
case 3590:
case 1217:
case 2405:
case 3000:
case 3775:
case 3712:
case 2165:
case 2631:
case 1331:
case 488:
case 3614:
case 1141:
case 3216:
case 3435:
case 3878:
case 1300:
case 2600:
case 3146:
case 3037:
case 1211:
case 3794:
case 1882:
case 2509:
case 3336:
case 1669:
case 2369:
case 3449:
case 3442:
case 1905:
case 1662:
case 518:
case 2099:
case 3837:
case 554:
case 619:
case 1082:
case 842:
case 2858:
case 3586:
case 2220:
case 2899:
case 577:
case 2801:
case 408:
case 4050:
case 1154:
case 693:
case 1722:
case 1729:
case 2830:
case 3831:
case 2814:
case 1624:
case 3185:
case 45:
case 2678:
case 4093:
case 1118:
case 3382:
case 925:
case 3389:
case 2413:
case 543:
case 3604:
case 3034:
case 3988:
case 1310:
case 1258:
case 3206:
case 1820:
case 2739:
case 2732:
case 911:
case 1292:
case 3766:
case 393:
case 2519:
case 1761:
case 937:
case 3617:
case 1214:
case 3791:
case 555:
case 642:
case 819:
case 3183:
case 2176:
case 4040:
case 1767:
case 893:
case 2004:
case 3611:
case 2634:
case 1334:
case 3702:
case 3010:
case 2236:
case 1144:
case 3269:
case 3262:
case 2594:
case 1796:
case 105:
case 2222:
case 2890:
case 699:
case 1681:
case 2381:
case 1954:
case 2839:
case 1720:
case 3284:
case 627:
case 3866:
case 2418:
case 634:
case 3985:
case 1867:
case 1255:
case 3802:
case 3809:
case 335:
case 2578:
case 46:
case 3891:
case 2726:
case 1524:
case 1918:
case 417:
case 3471:
case 399:
case 2261:
case 512:
case 1822:
case 2730:
case 1829:
case 1375:
case 1290:
case 2843:
case 327:
case 246:
case 1179:
case 3094:
case 1232:
case 431:
case 1239:
case 2792:
case 587:
case 2799:
case 2758:
case 482:
case 1970:
case 2694:
case 1394:
case 2707:
case 4035:
case 899:
case 1064:
case 709:
case 1736:
case 2855:
case 210:
case 3511:
case 2296:
case 3731:
case 834:
case 196:
case 1516:
case 3019:
case 3012:
case 635:
case 2470:
case 3075:
case 2168:
case 3819:
case 3281:
case 3329:
case 3438:
case 3322:
case 1463:
case 3875:
case 184:
case 3125:
case 1864:
case 1286:
case 3956:
case 348:
case 2055:
case 1908:
case 1684:
case 2384:
case 11:
case 2451:
case 3894:
case 1789:
case 3287:
case 507:
case 478:
case 3548:
case 2280:
case 3526:
case 3778:
case 2043:
case 1947:
case 3091:
case 3530:
case 1465:
case 751:
case 3873:
case 3501:
case 3690:
case 3474:
case 2704:
case 1397:
case 2697:
case 3558:
case 167:
case 3592:
case 2264:
case 3599:
case 2886:
case 1067:
case 3710:
case 2537:
case 1096:
case 2666:
case 1366:
case 3002:
case 2447:
case 3367:
case 747:
case 1562:
case 1569:
case 3097:
case 3653:
case 2039:
case 1309:
case 1302:
case 2602:
case 3507:
case 2500:
case 2691:
case 1061:
case 185:
case 3495:
case 2531:
case 2090:
case 3928:
case 3946:
case 430:
case 1660:
case 2045:
case 3470:
case 3976:
case 2075:
case 2700:
case 476:
case 2012:
case 2019:
case 2260:
case 420:
case 2731:
case 1202:
case 1209:
case 3855:
case 1769:
case 1762:
case 3296:
case 2511:
case 310:
case 149:
case 3267:
case 3707:
case 744:
case 1884:
case 3792:
case 1266:
case 2094:
case 346:
case 234:
case 2737:
case 164:
case 3510:
case 1297:
case 1664:
case 2364:
case 769:
case 3619:
case 3612:
case 3730:
case 2188:
case 2517:
case 771:
case 3261:
case 1483:
case 3701:
case 458:
case 3726:
case 2073:
case 3748:
case 1860:
case 2891:
case 3454:
case 1680:
case 165:
case 3853:
case 2809:
case 3387:
case 1582:
case 1589:
case 504:
case 1721:
case 3086:
case 610:
case 3418:
case 646:
case 3832:
case 2284:
case 1087:
case 187:
case 4003:
case 2686:
case 1386:
case 112:
case 3381:
case 40:
case 625:
case 2928:
case 2946:
case 2440:
case 2514:
case 3531:
case 3090:
case 4072:
case 4079:
case 1974:
case 824:
case 48:
case 3691:
case 2507:
case 811:
case 2396:
case 3039:
case 2653:
case 1353:
case 3609:
case 51:
case 1294:
case 2734:
case 2639:
case 1339:
case 421:
case 1332:
case 2632:
case 1446:
case 1940:
case 2002:
case 2710:
case 584:
case 1995:
case 3537:
case 2599:
case 1149:
case 337:
case 3264:
case 3886:
case 2123:
case 993:
case 3697:
case 1390:
case 2690:
case 1275:
case 1212:
case 2873:
case 1881:
case 1345:
case 919:
case 1060:
case 2530:
case 414:
case 1135:
case 2361:
case 585:
case 2493:
case 1950:
case 1456:
case 2548:
case 1724:
case 325:
case 1152:
case 1159:
case 1938:
case 2655:
case 3963:
case 1084:
case 2287:
case 3451:
case 942:
case 3384:
case 637:
case 2956:
case 3055:
case 462:
case 624:
case 2322:
case 2438:
case 2329:
case 1629:
case 2643:
case 2819:
case 2281:
case 1273:
case 3168:
case 1133:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760115601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,];
var gg_b = "1760115601/";

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
