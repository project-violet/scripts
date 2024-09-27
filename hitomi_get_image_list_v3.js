// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2715:
case 623:
case 2045:
case 225:
case 3839:
case 1257:
case 417:
case 869:
case 1688:
case 2259:
case 114:
case 2980:
case 96:
case 2846:
case 3763:
case 3703:
case 1794:
case 3045:
case 2006:
case 1719:
case 1770:
case 3285:
case 1373:
case 2159:
case 1846:
case 2039:
case 3787:
case 405:
case 3791:
case 2984:
case 888:
case 2729:
case 4046:
case 841:
case 2686:
case 1954:
case 3697:
case 3634:
case 385:
case 54:
case 3595:
case 1647:
case 3225:
case 2956:
case 382:
case 1130:
case 2574:
case 2421:
case 4005:
case 151:
case 4025:
case 859:
case 1776:
case 1385:
case 1752:
case 2348:
case 616:
case 3956:
case 1700:
case 3420:
case 478:
case 1481:
case 781:
case 1981:
case 3292:
case 2513:
case 2303:
case 2619:
case 1323:
case 3362:
case 2087:
case 3354:
case 2302:
case 3576:
case 2643:
case 2145:
case 754:
case 3531:
case 1849:
case 3567:
case 3076:
case 146:
case 730:
case 3260:
case 3878:
case 3446:
case 2684:
case 975:
case 855:
case 3493:
case 1842:
case 2038:
case 2403:
case 812:
case 3863:
case 579:
case 371:
case 1300:
case 1807:
case 4001:
case 2262:
case 2918:
case 2446:
case 4055:
case 2832:
case 3669:
case 1446:
case 1496:
case 3829:
case 3409:
case 610:
case 3296:
case 4031:
case 842:
case 2070:
case 3009:
case 2560:
case 2557:
case 1181:
case 1500:
case 348:
case 2283:
case 3083:
case 2292:
case 2197:
case 2632:
case 3757:
case 1321:
case 2083:
case 2660:
case 2577:
case 1578:
case 44:
case 232:
case 2775:
case 2709:
case 3506:
case 761:
case 1978:
case 2934:
case 1185:
case 74:
case 3386:
case 2840:
case 901:
case 3173:
case 1960:
case 1322:
case 2734:
case 3760:
case 820:
case 1394:
case 2408:
case 1142:
case 1397:
case 1546:
case 3894:
case 2416:
case 1813:
case 1990:
case 224:
case 613:
case 2639:
case 3851:
case 3550:
case 4070:
case 1313:
case 3965:
case 1101:
case 2609:
case 2351:
case 208:
case 2880:
case 1785:
case 853:
case 4017:
case 868:
case 1536:
case 2399:
case 1204:
case 327:
case 989:
case 588:
case 2606:
case 1487:
case 4089:
case 3191:
case 630:
case 1227:
case 2620:
case 3010:
case 2166:
case 2141:
case 798:
case 4088:
case 304:
case 1037:
case 1137:
case 3511:
case 3371:
case 892:
case 540:
case 598:
case 2827:
case 140:
case 1015:
case 778:
case 3903:
case 1635:
case 3295:
case 1691:
case 1374:
case 2942:
case 2516:
case 2237:
case 223:
case 1375:
case 2543:
case 1463:
case 3318:
case 3280:
case 850:
case 52:
case 1477:
case 3589:
case 1452:
case 3324:
case 63:
case 3065:
case 1344:
case 906:
case 3570:
case 923:
case 4085:
case 1966:
case 2002:
case 458:
case 636:
case 81:
case 2460:
case 534:
case 241:
case 1000:
case 1023:
case 3461:
case 1114:
case 1730:
case 3291:
case 3969:
case 813:
case 3712:
case 2065:
case 1529:
case 1080:
case 2391:
case 1987:
case 3271:
case 2105:
case 3259:
case 4042:
case 1285:
case 3113:
case 2726:
case 3196:
case 1147:
case 3342:
case 1186:
case 4000:
case 2773:
case 1187:
case 898:
case 2266:
case 2073:
case 3300:
case 3773:
case 2812:
case 2428:
case 1280:
case 713:
case 2223:
case 2608:
case 1711:
case 1043:
case 2271:
case 33:
case 396:
case 1534:
case 204:
case 2887:
case 1264:
case 844:
case 3713:
case 3886:
case 1460:
case 2477:
case 384:
case 2456:
case 454:
case 2584:
case 1967:
case 219:
case 3210:
case 2814:
case 3353:
case 2314:
case 3628:
case 638:
case 1535:
case 3428:
case 3440:
case 3674:
case 3642:
case 2646:
case 3031:
case 1488:
case 1132:
case 545:
case 1099:
case 972:
case 89:
case 2261:
case 1499:
case 3361:
case 2034:
case 4030:
case 3123:
case 1661:
case 1595:
case 1765:
case 3088:
case 1712:
case 125:
case 320:
case 2905:
case 1474:
case 3846:
case 2140:
case 1159:
case 881:
case 816:
case 2318:
case 1304:
case 825:
case 871:
case 2750:
case 1859:
case 1467:
case 3206:
case 3770:
case 484:
case 3748:
case 3638:
case 1983:
case 2356:
case 372:
case 3304:
case 2203:
case 1071:
case 452:
case 1167:
case 1741:
case 2961:
case 1212:
case 2760:
case 1824:
case 88:
case 3497:
case 2914:
case 1429:
case 3578:
case 1395:
case 2395:
case 2100:
case 1800:
case 1521:
case 814:
case 1804:
case 3370:
case 3761:
case 1750:
case 2423:
case 1216:
case 2801:
case 1103:
case 1548:
case 1033:
case 2649:
case 474:
case 1619:
case 1522:
case 2299:
case 2598:
case 2561:
case 3758:
case 3544:
case 1706:
case 1217:
case 2496:
case 1668:
case 3086:
case 1148:
case 780:
case 2771:
case 1083:
case 1422:
case 1872:
case 2370:
case 115:
case 210:
case 2872:
case 2714:
case 827:
case 749:
case 47:
case 3554:
case 1182:
case 1782:
case 710:
case 2539:
case 3739:
case 1504:
case 1787:
case 1089:
case 1388:
case 1086:
case 1038:
case 1973:
case 3391:
case 2248:
case 3562:
case 2325:
case 1055:
case 622:
case 1466:
case 3616:
case 3650:
case 2653:
case 3415:
case 861:
case 3165:
case 3842:
case 1158:
case 3586:
case 2498:
case 3249:
case 3022:
case 521:
case 1024:
case 4021:
case 1352:
case 1324:
case 1329:
case 2360:
case 756:
case 2928:
case 1891:
case 2227:
case 2134:
case 2969:
case 2863:
case 3075:
case 2110:
case 970:
case 2669:
case 1814:
case 1052:
case 1501:
case 2442:
case 248:
case 10:
case 1995:
case 415:
case 169:
case 1626:
case 2257:
case 2997:
case 481:
case 3801:
case 3865:
case 2361:
case 3730:
case 1894:
case 3042:
case 2919:
case 1305:
case 1435:
case 3017:
case 2908:
case 1449:
case 582:
case 715:
case 2291:
case 1248:
case 262:
case 401:
case 2452:
case 27:
case 1512:
case 1974:
case 2857:
case 1531:
case 1904:
case 1168:
case 580:
case 2733:
case 709:
case 4029:
case 467:
case 3373:
case 3999:
case 3261:
case 600:
case 3729:
case 937:
case 2909:
case 2298:
case 184:
case 3082:
case 2518:
case 2267:
case 2581:
case 3377:
case 632:
case 3081:
case 1607:
case 2541:
case 2551:
case 1533:
case 2970:
case 2945:
case 1497:
case 1698:
case 1568:
case 3981:
case 2264:
case 244:
case 1552:
case 1885:
case 643:
case 3284:
case 3873:
case 3683:
case 3175:
case 627:
case 3799:
case 59:
case 2474:
case 3077:
case 3278:
case 1755:
case 3311:
case 3952:
case 3588:
case 3326:
case 1956:
case 655:
case 1572:
case 3720:
case 3023:
case 1721:
case 1236:
case 2894:
case 1421:
case 1934:
case 1008:
case 3436:
case 1138:
case 3434:
case 3294:
case 389:
case 2015:
case 3314:
case 2285:
case 3185:
case 1470:
case 921:
case 2522:
case 1690:
case 2152:
case 3640:
case 3462:
case 1328:
case 435:
case 668:
case 3831:
case 738:
case 707:
case 1554:
case 1828:
case 1835:
case 3400:
case 2305:
case 3111:
case 2661:
case 1773:
case 3093:
case 1223:
case 890:
case 2162:
case 2025:
case 3947:
case 1349:
case 1681:
case 3039:
case 1703:
case 3771:
case 2201:
case 347:
case 457:
case 1432:
case 2074:
case 3509:
case 157:
case 311:
case 2807:
case 3053:
case 6:
case 1036:
case 2895:
case 395:
case 4075:
case 3198:
case 1817:
case 1211:
case 3233:
case 670:
case 1222:
case 107:
case 3098:
case 2781:
case 899:
case 3316:
case 480:
case 48:
case 1107:
case 3708:
case 3398:
case 3299:
case 3667:
case 2703:
case 2277:
case 1518:
case 2154:
case 3972:
case 3473:
case 942:
case 1502:
case 3178:
case 704:
case 1337:
case 254:
case 1085:
case 3305:
case 1542:
case 2116:
case 3180:
case 2082:
case 397:
case 2839:
case 1031:
case 3306:
case 661:
case 3702:
case 3853:
case 221:
case 3715:
case 1151:
case 564:
case 1779:
case 4054:
case 985:
case 3764:
case 2671:
case 2146:
case 3783:
case 2725:
case 886:
case 943:
case 1491:
case 1241:
case 2842:
case 508:
case 1881:
case 575:
case 2845:
case 101:
case 1933:
case 369:
case 316:
case 1234:
case 3871:
case 1622:
case 2678:
case 2706:
case 4049:
case 3079:
case 2668:
case 109:
case 2198:
case 3443:
case 56:
case 1006:
case 737:
case 2487:
case 2806:
case 213:
case 95:
case 2037:
case 103:
case 2517:
case 38:
case 839:
case 1040:
case 1672:
case 3214:
case 2861:
case 3732:
case 667:
case 3171:
case 500:
case 3150:
case 1209:
case 1575:
case 1104:
case 3884:
case 2308:
case 2417:
case 833:
case 3582:
case 2988:
case 1678:
case 2542:
case 3018:
case 3416:
case 740:
case 360:
case 1972:
case 188:
case 3475:
case 3815:
case 2613:
case 3392:
case 3843:
case 3385:
case 3717:
case 2906:
case 1564:
case 4044:
case 2214:
case 3369:
case 878:
case 324:
case 620:
case 2730:
case 2194:
case 2587:
case 3805:
case 3944:
case 3566:
case 1757:
case 2818:
case 1359:
case 2172:
case 413:
case 513:
case 1917:
case 1942:
case 723:
case 3958:
case 3021:
case 3071:
case 2960:
case 1443:
case 3737:
case 3467:
case 581:
case 345:
case 2235:
case 3946:
case 671:
case 94:
case 3164:
case 1266:
case 4062:
case 3860:
case 2465:
case 719:
case 573:
case 1760:
case 2786:
case 1428:
case 940:
case 2805:
case 357:
case 3110:
case 2930:
case 2294:
case 1221:
case 3743:
case 3614:
case 2544:
case 3637:
case 1720:
case 1713:
case 285:
case 4066:
case 944:
case 163:
case 2090:
case 1922:
case 2796:
case 1311:
case 919:
case 2767:
case 2497:
case 1615:
case 1949:
case 2331:
case 774:
case 1230:
case 3189:
case 315:
case 2012:
case 3270:
case 2220:
case 398:
case 677:
case 17:
case 3487:
case 2451:
case 2950:
case 3774:
case 2601:
case 237:
case 1964:
case 2352:
case 2404:
case 2300:
case 1202:
case 3943:
case 64:
case 4077:
case 933:
case 2722:
case 2482:
case 3561:
case 3997:
case 2803:
case 3288:
case 2933:
case 2965:
case 2521:
case 746:
case 1843:
case 1695:
case 2736:
case 3282:
case 1633:
case 2042:
case 4082:
case 144:
case 3599:
case 3068:
case 2791:
case 2837:
case 351:
case 3492:
case 757:
case 602:
case 3502:
case 2059:
case 2662:
case 3417:
case 2081:
case 4039:
case 3632:
case 3822:
case 2098:
case 541:
case 306:
case 718:
case 400:
case 2943:
case 3520:
case 466:
case 3584:
case 1822:
case 518:
case 1834:
case 1707:
case 1604:
case 2744:
case 3395:
case 845:
case 2816:
case 698:
case 2369:
case 1306:
case 1991:
case 569:
case 3938:
case 2682:
case 875:
case 1936:
case 2875:
case 1129:
case 2849:
case 2531:
case 2987:
case 3812:
case 3796:
case 3302:
case 3742:
case 2637:
case 2396:
case 3097:
case 3125:
case 1108:
case 2614:
case 1601:
case 2491:
case 1215:
case 379:
case 116:
case 2492:
case 1516:
case 2931:
case 3686:
case 3679:
case 3685:
case 983:
case 410:
case 1003:
case 2133:
case 2182:
case 3464:
case 1390:
case 720:
case 3003:
case 697:
case 3557:
case 2526:
case 1931:
case 2640:
case 3964:
case 190:
case 3048:
case 336:
case 3569:
case 856:
case 3384:
case 2401:
case 1587:
case 635:
case 2708:
case 3012:
case 1073:
case 1928:
case 684:
case 3727:
case 2799:
case 2142:
case 546:
case 2912:
case 3496:
case 2538:
case 1876:
case 722:
case 1180:
case 2377:
case 3541:
case 3883:
case 2120:
case 796:
case 3788:
case 1943:
case 3408:
case 2123:
case 3468:
case 92:
case 633:
case 325:
case 750:
case 2509:
case 2515:
case 1724:
case 1792:
case 3250:
case 3850:
case 429:
case 1511:
case 794:
case 1830:
case 4034:
case 2418:
case 617:
case 486:
case 915:
case 948:
case 2069:
case 1407:
case 2381:
case 728:
case 302:
case 2130:
case 2723:
case 2550:
case 3930:
case 1184:
case 469:
case 1014:
case 1053:
case 3512:
case 3080:
case 127:
case 93:
case 2026:
case 270:
case 731:
case 2907:
case 1631:
case 4037:
case 3298:
case 3290:
case 329:
case 2570:
case 3751:
case 597:
case 3095:
case 862:
case 2519:
case 11:
case 421:
case 3309:
case 1286:
case 3426:
case 3820:
case 3768:
case 3239:
case 3928:
case 1694:
case 3152:
case 760:
case 1110:
case 1284:
case 202:
case 1689:
case 2897:
case 1354:
case 680:
case 2638:
case 3784:
case 843:
case 3963:
case 3838:
case 3153:
case 1301:
case 2889:
case 3898:
case 266:
case 3114:
case 3333:
case 1092:
case 1363:
case 243:
case 3690:
case 1597:
case 3049:
case 603:
case 2676:
case 3929:
case 1736:
case 1845:
case 43:
case 2679:
case 1851:
case 955:
case 3228:
case 3469:
case 1648:
case 1325:
case 3802:
case 2433:
case 2831:
case 2910:
case 3276:
case 1796:
case 97:
case 2564:
case 903:
case 2315:
case 2244:
case 1056:
case 78:
case 1906:
case 1377:
case 2958:
case 3272:
case 3247:
case 3519:
case 1260:
case 1371:
case 4094:
case 1624:
case 1360:
case 3134:
case 2233:
case 2432:
case 303:
case 2072:
case 3265:
case 246:
case 3617:
case 805:
case 3693:
case 3458:
case 3572:
case 3711:
case 3344:
case 3880:
case 34:
case 2710:
case 2210:
case 141:
case 2272:
case 3747:
case 1665:
case 3890:
case 388:
case 926:
case 1379:
case 3856:
case 3618:
case 587:
case 1865:
case 3352:
case 159:
case 2013:
case 2429:
case 3922:
case 2147:
case 1251:
case 547:
case 606:
case 3328:
case 1258:
case 1317:
case 2467:
case 744:
case 3035:
case 3832:
case 2892:
case 3979:
case 156:
case 3192:
case 3579:
case 1654:
case 308:
case 1639:
case 734:
case 1060:
case 645:
case 277:
case 2855:
case 2177:
case 476:
case 2344:
case 1798:
case 910:
case 3777:
case 2085:
case 326:
case 2402:
case 295:
case 1596:
case 3840:
case 3861:
case 2555:
case 2502:
case 3194:
case 3096:
case 3556:
case 2578:
case 2953:
case 866:
case 4032:
case 1854:
case 2576:
case 32:
case 1169:
case 2007:
case 1462:
case 352:
case 1837:
case 2093:
case 3521:
case 3577:
case 1815:
case 2174:
case 2199:
case 577:
case 199:
case 1920:
case 1616:
case 1172:
case 3122:
case 3181:
case 3157:
case 2434:
case 2745:
case 2471:
case 3643:
case 1465:
case 1579:
case 3131:
case 2514:
case 1207:
case 1161:
case 3608:
case 3574:
case 2334:
case 2508:
case 2057:
case 3242:
case 578:
case 100:
case 1925:
case 2441:
case 3719:
case 3553:
case 1879:
case 3945:
case 2473:
case 1844:
case 3613:
case 1594:
case 3527:
case 561:
case 3849:
case 185:
case 3734:
case 1112:
case 104:
case 3024:
case 1170:
case 4023:
case 3360:
case 2224:
case 2641:
case 3205:
case 1126:
case 67:
case 2165:
case 1965:
case 2798:
case 3807:
case 3862:
case 1570:
case 1591:
case 86:
case 2716:
case 2475:
case 2758:
case 1220:
case 3252:
case 1951:
case 3465:
case 3213:
case 2903:
case 1975:
case 1634:
case 238:
case 186:
case 3215:
case 455:
case 2215:
case 2443:
case 537:
case 191:
case 2111:
case 891:
case 821:
case 2687:
case 3448:
case 3144:
case 1793:
case 3957:
case 2696:
case 3670:
case 826:
case 939:
case 310:
case 2186:
case 3016:
case 3941:
case 2881:
case 3368:
case 1651:
case 3810:
case 4050:
case 2659:
case 1163:
case 1242:
case 2009:
case 261:
case 4051:
case 1662:
case 2591:
case 299:
case 1464:
case 4009:
case 3681:
case 3320:
case 2104:
case 3604:
case 1709:
case 3516:
case 3033:
case 149:
case 3910:
case 359:
case 472:
case 293:
case 176:
case 2209:
case 15:
case 1679:
case 1268:
case 253:
case 1297:
case 423:
case 3879:
case 3427:
case 3927:
case 2329:
case 3410:
case 2126:
case 432:
case 1028:
case 3433:
case 793:
case 2615:
case 2422:
case 1413:
case 934:
case 3673:
case 1219:
case 3119:
case 3393:
case 2288:
case 2306:
case 3340:
case 196:
case 1331:
case 1914:
case 363:
case 3476:
case 206:
case 2929:
case 883:
case 1475:
case 393:
case 2181:
case 1893:
case 3090:
case 1723:
case 1560:
case 3013:
case 1026:
case 4063:
case 1424:
case 3195:
case 3636:
case 3460:
case 3447:
case 2052:
case 1802:
case 3882:
case 1508:
case 1868:
case 1309:
case 489:
case 378:
case 702:
case 2310:
case 1603:
case 2765:
case 3517:
case 65:
case 706:
case 1310:
case 1090:
case 1519:
case 651:
case 105:
case 370:
case 174:
case 840:
case 2357:
case 1733:
case 3755:
case 2630:
case 1431:
case 4053:
case 2008:
case 3897:
case 2504:
case 1203:
case 1145:
case 1205:
case 1472:
case 565:
case 212:
case 1803:
case 4091:
case 2634:
case 3709:
case 3672:
case 112:
case 3399:
case 496:
case 123:
case 646:
case 755:
case 3383:
case 438:
case 2866:
case 1994:
case 2545:
case 3346:
case 390:
case 1549:
case 483:
case 1823:
case 2208:
case 2939:
case 849:
case 1732:
case 2804:
case 344:
case 3490:
case 1440:
case 542:
case 3312:
case 2573:
case 2011:
case 1396:
case 3939:
case 1957:
case 2376:
case 1766:
case 764:
case 894:
case 1042:
case 2688:
case 2815:
case 3793:
case 2588:
case 1277:
case 1702:
case 916:
case 2833:
case 1697:
case 810:
case 3317:
case 3960:
case 2879:
case 3389:
case 461:
case 2902:
case 439:
case 1929:
case 1969:
case 3137:
case 4016:
case 1125:
case 2480:
case 1644:
case 2825:
case 1912:
case 2319:
case 936:
case 2047:
case 523:
case 3390:
case 2762:
case 2829:
case 2853:
case 563:
case 1270:
case 2128:
case 1002:
case 1593:
case 1136:
case 2633:
case 533:
case 383:
case 1612:
case 1941:
case 2742:
case 2076:
case 72:
case 1111:
case 1116:
case 3019:
case 1445:
case 108:
case 3752:
case 1232:
case 2797:
case 1372:
case 3857:
case 3724:
case 3310:
case 1985:
case 58:
case 1614:
case 3138:
case 2993:
case 3132:
case 331:
case 2107:
case 3345:
case 2168:
case 473:
case 3581:
case 3948:
case 2180:
case 1018:
case 928:
case 376:
case 1012:
case 701:
case 3592:
case 1758:
case 529:
case 2481:
case 3211:
case 2483:
case 535:
case 381:
case 3078:
case 1128:
case 274:
case 2219:
case 2923:
case 2113:
case 3258:
case 3411:
case 3735:
case 3149:
case 2690:
case 2599:
case 3452:
case 3529:
case 273:
case 328:
case 3689:
case 18:
case 725:
case 662:
case 2921:
case 3047:
case 3798:
case 1910:
case 1903:
case 3130:
case 2597:
case 517:
case 120:
case 3357:
case 1887:
case 5:
case 1900:
case 3982:
case 2135:
case 2058:
case 1070:
case 2153:
case 3337:
case 2976:
case 992:
case 3590:
case 1961:
case 2809:
case 2394:
case 1339:
case 3482:
case 659:
case 2112:
case 3901:
case 4006:
case 1630:
case 2420:
case 1889:
case 3647:
case 2951:
case 2962:
case 1993:
case 3546:
case 2667:
case 2387:
case 2439:
case 3498:
case 3936:
case 3526:
case 2828:
case 2705:
case 1829:
case 777:
case 882:
case 2749:
case 3255:
case 2511:
case 2427:
case 3995:
case 2229:
case 601:
case 2938:
case 90:
case 2792:
case 2150:
case 479:
case 305:
case 2400:
case 1581:
case 800:
case 3155:
case 3026:
case 880:
case 2877:
case 2616:
case 1164:
case 495:
case 1278:
case 3925:
case 2:
case 342:
case 3116:
case 3977:
case 3043:
case 349:
case 4093:
case 3001:
case 1437:
case 648:
case 1249:
case 148:
case 2225:
case 676:
case 1208:
case 177:
case 543:
case 2435:
case 3274:
case 2991:
case 3396:
case 3376:
case 753:
case 339:
case 3227:
case 1771:
case 3985:
case 2859:
case 1415:
case 3005:
case 1378:
case 264:
case 2173:
case 2540:
case 3754:
case 1682:
case 1425:
case 79:
case 629:
case 69:
case 917:
case 1877:
case 134:
case 1756:
case 2683:
case 2657:
case 660:
case 3580:
case 3996:
case 3038:
case 1081:
case 136:
case 619:
case 3056:
case 692:
case 1149:
case 1224:
case 819:
case 1189:
case 685:
case 3970:
case 1527:
case 592:
case 3321:
case 1932:
case 2101:
case 3216:
case 2952:
case 2981:
case 2720:
case 2340:
case 981:
case 553:
case 203:
case 2838:
case 2631:
case 1864:
case 3133:
case 3115:
case 2374:
case 2151:
case 1330:
case 2149:
case 2946:
case 2913:
case 2412:
case 1935:
case 2060:
case 696:
case 3322:
case 614:
case 735:
case 2622:
case 75:
case 3835:
case 2322:
case 1250:
case 2176:
case 3339:
case 3635:
case 514:
case 562:
case 2759:
case 3555:
case 1492:
case 1315:
case 66:
case 1675:
case 1027:
case 2975:
case 1507:
case 1364:
case 1115:
case 3539:
case 3736:
case 3025:
case 1743:
case 2092:
case 2206:
case 979:
case 3932:
case 509:
case 1009:
case 321:
case 3166:
case 3583:
case 2821:
case 1902:
case 3085:
case 924:
case 538:
case 590:
case 377:
case 1064:
case 2043:
case 531:
case 1067:
case 1871:
case 1196:
case 283:
case 341:
case 2064:
case 235:
case 2896:
case 3037:
case 165:
case 893:
case 678:
case 2247:
case 3161:
case 3606:
case 1950:
case 2275:
case 3330:
case 3441:
case 998:
case 3020:
case 3269:
case 586:
case 1333:
case 978:
case 4047:
case 3535:
case 1643:
case 133:
case 45:
case 2900:
case 608:
case 3089:
case 3323:
case 524:
case 3558:
case 3916:
case 2493:
case 1183:
case 3508:
case 539:
case 3854:
case 3332:
case 1295:
case 2717:
case 1609:
case 695:
case 160:
case 425:
case 2053:
case 3301:
case 3611:
case 772:
case 1102:
case 2255:
case 2469:
case 2874:
case 3466:
case 1637:
case 3800:
case 2095:
case 2281:
case 453:
case 1288:
case 3331:
case 2554:
case 3059:
case 25:
case 652:
case 2044:
case 1513:
case 3864:
case 3746:
case 3474:
case 1308:
case 3254:
case 1034:
case 711:
case 2499:
case 3547:
case 559:
case 2343:
case 2185:
case 3984:
case 980:
case 3451:
case 1526:
case 447:
case 3866:
case 1789:
case 2830:
case 857:
case 3234:
case 3222:
case 2032:
case 3459:
case 801:
case 675:
case 2068:
case 2490:
case 1389:
case 954:
case 3238:
case 747:
case 925:
case 1197:
case 80:
case 3375:
case 2505:
case 147:
case 2546:
case 2565:
case 126:
case 1214:
case 3273:
case 3951:
case 1818:
case 666:
case 462:
case 2347:
case 487:
case 548:
case 2501:
case 1539:
case 3374:
case 1281:
case 1735:
case 1848:
case 1448:
case 2618:
case 1274:
case 3707:
case 3481:
case 1479:
case 375:
case 3405:
case 716:
case 1524:
case 2651:
case 2230:
case 2129:
case 1088:
case 3808:
case 3129:
case 2585:
case 1861:
case 2062:
case 1556:
case 3971:
case 1883:
case 2783:
case 2844:
case 2654:
case 2941:
case 1558:
case 3769:
case 938:
case 2355:
case 2721:
case 1937:
case 1685:
case 1953:
case 1926:
case 1226:
case 14:
case 1351:
case 3671:
case 3184:
case 3920:
case 411:
case 1778:
case 2973:
case 3962:
case 2324:
case 3067:
case 343:
case 3087:
case 2226:
case 574:
case 1606:
case 1561:
case 2642:
case 1976:
case 209:
case 3797:
case 3668:
case 3329:
case 2035:
case 3000:
case 201:
case 3200:
case 2274:
case 267:
case 119:
case 2018:
case 1350:
case 366:
case 745:
case 2316:
case 688:
case 799:
case 1602:
case 2507:
case 1605:
case 3495:
case 4086:
case 192:
case 1025:
case 1171:
case 373:
case 1290:
case 2050:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1727452801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,];
var gg_b = "1727452801/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
