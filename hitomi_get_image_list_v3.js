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
case 181:
case 498:
case 2867:
case 374:
case 3223:
case 1598:
case 1632:
case 2612:
case 87:
case 2974:
case 3966:
case 1170:
case 3501:
case 3823:
case 2267:
case 1710:
case 1439:
case 832:
case 2520:
case 2697:
case 2730:
case 799:
case 3102:
case 2022:
case 4076:
case 2116:
case 561:
case 1233:
case 879:
case 47:
case 3655:
case 3097:
case 2213:
case 3244:
case 665:
case 3988:
case 3496:
case 2379:
case 3484:
case 3798:
case 735:
case 2589:
case 386:
case 2747:
case 2556:
case 3844:
case 3429:
case 746:
case 1441:
case 2813:
case 1833:
case 3837:
case 2524:
case 1714:
case 3126:
case 2006:
case 1281:
case 2318:
case 3012:
case 3154:
case 1072:
case 704:
case 731:
case 2964:
case 2490:
case 130:
case 1799:
case 1061:
case 661:
case 3615:
case 2468:
case 2253:
case 1956:
case 2358:
case 3101:
case 3052:
case 3930:
case 2021:
case 4066:
case 2120:
case 3339:
case 2143:
case 1924:
case 2853:
case 1428:
case 3687:
case 1754:
case 3025:
case 1726:
case 1882:
case 2369:
case 2652:
case 2494:
case 3621:
case 1396:
case 3770:
case 1384:
case 1574:
case 2189:
case 2303:
case 1329:
case 1282:
case 3947:
case 3011:
case 2124:
case 1295:
case 1750:
case 2808:
case 3736:
case 125:
case 2345:
case 747:
case 1665:
case 1442:
case 1702:
case 387:
case 3438:
case 3967:
case 3607:
case 93:
case 3181:
case 1226:
case 3595:
case 1254:
case 2192:
case 659:
case 3080:
case 1471:
case 1300:
case 249:
case 1299:
case 2019:
case 1039:
case 1669:
case 116:
case 995:
case 1909:
case 4077:
case 519:
case 2684:
case 157:
case 1325:
case 2163:
case 2888:
case 4046:
case 2:
case 3497:
case 1493:
case 311:
case 3619:
case 1985:
case 3870:
case 939:
case 1992:
case 2573:
case 1250:
case 1795:
case 3913:
case 51:
case 763:
case 1304:
case 2331:
case 1123:
case 1140:
case 260:
case 2288:
case 3412:
case 1850:
case 2680:
case 2557:
case 3335:
case 867:
case 1802:
case 2406:
case 377:
case 2230:
case 171:
case 252:
case 2375:
case 1461:
case 2090:
case 273:
case 2767:
case 384:
case 2876:
case 2585:
case 3581:
case 3362:
case 728:
case 88:
case 489:
case 2638:
case 3371:
case 1618:
case 619:
case 1973:
case 3977:
case 2517:
case 3740:
case 3723:
case 1537:
case 3533:
case 3452:
case 2421:
case 156:
case 1810:
case 2830:
case 3686:
case 1544:
case 466:
case 3425:
case 913:
case 117:
case 490:
case 82:
case 3953:
case 1957:
case 403:
case 788:
case 642:
case 1028:
case 1214:
case 48:
case 2094:
case 2563:
case 2086:
case 2234:
case 61:
case 1991:
case 2173:
case 533:
case 3260:
case 3527:
case 3690:
case 1814:
case 829:
case 3737:
case 2509:
case 1733:
case 3946:
case 991:
case 707:
case 297:
case 3298:
case 2332:
case 3668:
case 2415:
case 2453:
case 483:
case 708:
case 3135:
case 2268:
case 3751:
case 1340:
case 2030:
case 2952:
case 1010:
case 2309:
case 2900:
case 1111:
case 1949:
case 1605:
case 1762:
case 919:
case 572:
case 2477:
case 1965:
case 409:
case 1228:
case 4055:
case 1597:
case 3593:
case 3064:
case 4022:
case 2076:
case 304:
case 3647:
case 1620:
case 2363:
case 1551:
case 2859:
case 27:
case 1842:
case 787:
case 347:
case 3838:
case 691:
case 2294:
case 1152:
case 1001:
case 2317:
case 1100:
case 2149:
case 1931:
case 2047:
case 3333:
case 3238:
case 3571:
case 2165:
case 2259:
case 1624:
case 3060:
case 2385:
case 3797:
case 823:
case 4048:
case 3161:
case 1482:
case 2575:
case 809:
case 2894:
case 40:
case 3535:
case 2357:
case 1054:
case 1112:
case 868:
case 3280:
case 3440:
case 1427:
case 320:
case 3752:
case 2721:
case 3955:
case 2819:
case 2531:
case 1504:
case 959:
case 2636:
case 3880:
case 2373:
case 513:
case 2583:
case 2066:
case 3074:
case 141:
case 2219:
case 3193:
case 1761:
case 1099:
case 2878:
case 1239:
case 2467:
case 380:
case 1151:
case 3666:
case 2674:
case 3284:
case 3036:
case 1735:
case 3948:
case 2912:
case 1050:
case 137:
case 1552:
case 3711:
case 2807:
case 346:
case 3444:
case 1500:
case 468:
case 3437:
case 1433:
case 3896:
case 2787:
case 3171:
case 335:
case 1481:
case 3162:
case 769:
case 2391:
case 2997:
case 3572:
case 1241:
case 2088:
case 3142:
case 3354:
case 3825:
case 3326:
case 3800:
case 2503:
case 2821:
case 1261:
case 2719:
case 2430:
case 3968:
case 1374:
case 3608:
case 84:
case 4019:
case 715:
case 2077:
case 267:
case 2179:
case 1596:
case 3225:
case 3646:
case 1584:
case 1861:
case 3990:
case 2569:
case 3252:
case 370:
case 896:
case 3464:
case 2476:
case 3399:
case 1872:
case 4:
case 1673:
case 307:
case 3350:
case 1918:
case 2316:
case 2046:
case 3128:
case 1835:
case 2008:
case 2287:
case 2707:
case 2447:
case 3811:
case 3804:
case 3729:
case 776:
case 1741:
case 1414:
case 2215:
case 3796:
case 1095:
case 1657:
case 105:
case 3784:
case 4007:
case 1979:
case 496:
case 150:
case 3986:
case 849:
case 44:
case 1082:
case 3204:
case 751:
case 3211:
case 2518:
case 473:
case 1728:
case 1692:
case 1538:
case 1454:
case 2822:
case 522:
case 1685:
case 289:
case 2324:
case 3919:
case 1958:
case 2356:
case 582:
case 2466:
case 3474:
case 755:
case 3251:
case 2389:
case 1196:
case 2579:
case 1184:
case 266:
case 2067:
case 793:
case 2637:
case 1364:
case 3978:
case 1450:
case 3812:
case 28:
case 3436:
case 2759:
case 4094:
case 1402:
case 2343:
case 852:
case 1033:
case 363:
case 3297:
case 873:
case 3301:
case 3907:
case 3044:
case 2929:
case 306:
case 3667:
case 3470:
case 1081:
case 22:
case 1398:
case 2996:
case 2984:
case 2248:
case 2488:
case 110:
case 497:
case 965:
case 2640:
case 1360:
case 2786:
case 2794:
case 711:
case 3469:
case 908:
case 3386:
case 1213:
case 2093:
case 3885:
case 2564:
case 2233:
case 1970:
case 3166:
case 2174:
case 436:
case 4014:
case 1379:
case 4001:
case 719:
case 1524:
case 3817:
case 2441:
case 2701:
case 3285:
case 2675:
case 322:
case 1556:
case 3720:
case 3403:
case 1747:
case 2338:
case 3292:
case 1048:
case 3032:
case 3671:
case 3445:
case 3705:
case 1776:
case 3075:
case 2227:
case 3209:
case 1867:
case 987:
case 281:
case 2560:
case 2170:
case 2062:
case 3368:
case 3789:
case 1612:
case 818:
case 2598:
case 4010:
case 221:
case 1697:
case 3693:
case 927:
case 1055:
case 1543:
case 3809:
case 3263:
case 3724:
case 3534:
case 2827:
case 3954:
case 563:
case 71:
case 845:
case 1116:
case 1369:
case 1652:
case 2882:
case 1486:
case 437:
case 2164:
case 458:
case 3176:
case 3891:
case 2649:
case 4002:
case 1960:
case 1189:
case 3083:
case 2895:
case 2574:
case 285:
case 3566:
case 2396:
case 1998:
case 570:
case 1124:
case 3291:
case 3031:
case 2282:
case 2329:
case 3130:
case 3914:
case 588:
case 3901:
case 3307:
case 1156:
case 841:
case 2905:
case 1846:
case 2665:
case 3418:
case 2442:
case 2702:
case 1459:
case 225:
case 1345:
case 1808:
case 3716:
case 1015:
case 2750:
case 974:
case 2061:
case 1490:
case 230:
case 3378:
case 1604:
case 194:
case 2072:
case 1253:
case 3257:
case 2570:
case 837:
case 3635:
case 606:
case 1468:
case 986:
case 3873:
case 1877:
case 663:
case 2198:
case 2380:
case 3065:
case 2924:
case 3319:
case 3147:
case 3049:
case 507:
case 1021:
case 3910:
case 3134:
case 2536:
case 1105:
case 3273:
case 2754:
case 2683:
case 2428:
case 3639:
case 2658:
case 1888:
case 702:
case 3167:
case 3069:
case 292:
case 924:
case 2795:
case 3216:
case 2992:
case 2202:
case 580:
case 3981:
case 1288:
case 1109:
case 2140:
case 915:
case 2123:
case 4095:
case 1331:
case 2304:
case 2041:
case 3933:
case 2311:
case 520:
case 1406:
case 3432:
case 450:
case 599:
case 4082:
case 3816:
case 1448:
case 3641:
case 1185:
case 391:
case 1078:
case 535:
case 2471:
case 1365:
case 976:
case 2254:
case 2226:
case 1777:
case 2645:
case 1866:
case 2462:
case 2144:
case 1940:
case 3321:
case 2669:
case 216:
case 1923:
case 1455:
case 2039:
case 59:
case 2137:
case 1019:
case 1117:
case 850:
case 2300:
case 2299:
case 1266:
case 1422:
case 546:
case 257:
case 805:
case 951:
case 3757:
case 353:
case 3243:
case 372:
case 2397:
case 1234:
case 3982:
case 1094:
case 3567:
case 699:
case 3177:
case 2781:
case 3205:
case 3628:
case 3995:
case 395:
case 3792:
case 3483:
case 1487:
case 1509:
case 2733:
case 801:
case 1834:
case 2540:
case 834:
case 3431:
case 1847:
case 3820:
case 680:
case 900:
case 1059:
case 3306:
case 2435:
case 197:
case 3805:
case 993:
case 1585:
case 1876:
case 69:
case 173:
case 2210:
case 3256:
case 152:
case 1375:
case 271:
case 1230:
case 2618:
case 3465:
case 3642:
case 4027:
case 462:
case 1592:
case 646:
case 3889:
case 635:
case 1421:
case 256:
case 2810:
case 3856:
case 3355:
case 3824:
case 3709:
case 547:
case 2727:
case 1276:
case 2028:
case 434:
case 3322:
case 3108:
case 2957:
case 765:
case 2679:
case 3146:
case 524:
case 2842:
case 3818:
case 1446:
case 17:
case 3935:
case 218:
case 1748:
case 2551:
case 1408:
case 2337:
case 1904:
case 2931:
case 1047:
case 1317:
case 1664:
case 1034:
case 2001:
case 655:
case 236:
case 2152:
case 548:
case 920:
case 1259:
case 245:
case 2242:
case 1165:
case 3218:
case 584:
case 3879:
case 1392:
case 2656:
case 3610:
case 132:
case 515:
case 1886:
case 3491:
case 1532:
case 35:
case 1698:
case 576:
case 2512:
case 3548:
case 1268:
case 198:
case 3457:
case 1453:
case 1131:
case 2104:
case 4062:
case 3056:
case 1309:
case 1290:
case 2323:
case 854:
case 935:
case 179:
case 2771:
case 3187:
case 1183:
case 946:
case 1868:
case 2605:
case 3601:
case 3367:
case 1890:
case 1363:
case 677:
case 333:
case 99:
case 1076:
case 3775:
case 2525:
case 237:
case 904:
case 2932:
case 1912:
case 2735:
case 931:
case 1674:
case 2002:
case 2151:
case 3308:
case 485:
case 319:
case 615:
case 3731:
case 722:
case 2552:
case 500:
case 2481:
case 1565:
case 3654:
case 624:
case 1787:
case 3869:
case 1088:
case 342:
case 1175:
case 555:
case 3485:
case 3993:
case 1997:
case 1391:
case 430:
case 1132:
case 651:
case 885:
case 3148:
case 3353:
case 3106:
case 2504:
case 1819:
case 1278:
case 2511:
case 3409:
case 814:
case 3858:
case 1066:
case 3602:
case 3587:
case 676:
case 825:
case 3650:
case 1373:
case 3377:
case 511:
case 3258:
case 2772:
case 3463:
case 1467:
case 2975:
case 2239:
case 947:
case 2197:
case 241:
case 3283:
case 1008:
case 3405:
case 3745:
case 1046:
case 492:
case 1938:
case 2918:
case 1316:
case 2673:
case 2401:
case 3519:
case 66:
case 3831:
case 3420:
case 3443:
case 3703:
case 1707:
case 838:
case 2979:
case 2580:
case 795:
case 205:
case 1887:
case 3883:
case 4041:
case 3091:
case 3769:
case 753:
case 3231:
case 1545:
case 3159:
case 3695:
case 875:
case 626:
case 1118:
case 669:
case 2529:
case 3456:
case 2739:
case 2410:
case 3507:
case 3849:
case 2691:
case 2272:
case 892:
case 963:
case 167:
case 686:
case 2374:
case 3366:
case 4039:
case 1476:
case 1778:
case 1569:
case 1221:
case 3194:
case 3186:
case 2861:
case 3718:
case 1806:
case 2402:
case 2742:
case 1759:
case 18:
case 3416:
case 928:
case 1158:
case 2903:
case 3017:
case 1013:
case 3119:
case 1320:
case 2033:
case 3941:
case 3347:
case 871:
case 12:
case 2398:
case 3232:
case 1996:
case 817:
case 1206:
case 3568:
case 574:
case 2893:
case 713:
case 2969:
case 988:
case 608:
case 3681:
case 1822:
case 2454:
case 2271:
case 2129:
case 2027:
case 3275:
case 3107:
case 2958:
case 627:
case 1855:
case 2685:
case 3939:
case 2871:
case 2184:
case 1980:
case 2196:
case 1389:
case 2862:
case 3376:
case 791:
case 2364:
case 2617:
case 201:
case 4028:
case 103:
case 3633:
case 234:
case 1169:
case 166:
case 1067:
case 417:
case 190:
case 3793:
case 1161:
case 1797:
case 1630:
case 4032:
case 3624:
case 1060:
case 714:
case 1381:
case 1562:
case 3983:
case 552:
case 1987:
case 573:
case 1238:
case 422:
case 649:
case 1098:
case 2218:
case 3242:
case 2313:
case 1676:
case 3931:
case 2043:
case 2121:
case 3344:
case 3842:
case 147:
case 1838:
case 482:
case 943:
case 3551:
case 1712:
case 318:
case 3689:
case 2935:
case 612:
case 2601:
case 1634:
case 1064:
case 3597:
case 131:
case 64:
case 2775:
case 1647:
case 822:
case 3643:
case 104:
case 3620:
case 2972:
case 233:
case 660:
case 2089:
case 2187:
case 3762:
case 2473:
case 3949:
case 3104:
case 3340:
case 1751:
case 4075:
case 3828:
case 2457:
case 2506:
case 1135:
case 1382:
case 1229:
case 1561:
case 242:
case 2203:
case 2993:
case 3481:
case 979:
case 135:
case 1896:
case 2783:
case 2492:
case 4083:
case 3841:
case 2155:
case 3552:
case 146:
case 1444:
case 1829:
case 1036:
case 549:
case 337:
case 3050:
case 1906:
case 673:
case 2845:
case 3975:
case 180:
case 3772:
case 2258:
case 97:
case 3197:
case 3099:
case 1193:
case 3761:
case 2962:
case 2602:
case 2765:
case 4049:
case 2377:
case 2971:
case 3511:
case 3839:
case 3504:
case 54:
case 1700:
case 2858:
case 1423:
case 4065:
case 1688:
case 2409:
case 2749:
case 120:
case 178:
case 3054:
case 2148:
case 21:
case 1535:
case 2106:
case 3026:
case 560:
case 2231:
case 1460:
case 2769:
case 2578:
case 1211:
case 3082:
case 3580:
case 4003:
case 1498:
case 2168:
case 3095:
case 2883:
case 1796:
case 305:
case 3370:
case 1784:
case 3235:
case 3401:
case 2443:
case 1804:
case 2831:
case 1302:
case 990:
case 3835:
case 1959:
case 966:
case 2283:
case 3673:
case 903:
case 3336:
case 4069:
case 2249:
case 1464:
case 98:
case 60:
case 3872:
case 1399:
case 1200:
case 3861:
case 2186:
case 568:
case 2194:
case 1252:
case 1225:
case 3596:
case 2865:
case 1780:
case 3374:
case 1608:
case 128:
case 2489:
case 3410:
case 3739:
case 1852:
case 2456:
case 2682:
case 3529:
case 3261:
case 756:
case 92:
case 2758:
case 1800:
case 2424:
case 3691:
case 188:
case 265:
case 2057:
case 491:
case 1142:
case 3138:
case 1354:
case 4018:
case 839:
case 310:
case 43:
case 792:
case 3398:
case 2092:
case 2568:
case 1470:
case 1044:
case 1907:
case 1314:
case 1667:
case 3663:
case 967:
case 3033:
case 2017:
case 1297:
case 495:
case 3293:
case 2718:
case 453:
case 3945:
case 1738:
case 3450:
case 1812:
case 2416:
case 2633:
case 3617:
case 3364:
case 2376:
case 2594:
case 3196:
case 83:
case 668:
case 872:
case 1040:
case 716:
case 2275:
case 3027:
case 2330:
case 3129:
case 2939:
case 3685:
case 50:
case 1919:
case 3426:
case 2681:
case 738:
case 1542:
case 3728:
case 895:
case 3692:
case 3454:
case 2671:
case 589:
case 1154:
case 2902:
case 1126:
case 758:
case 2662:
case 2705:
case 3701:
case 3441:
case 2817:
case 1837:
case 3833:
case 1510:
case 2743:
case 2403:
case 2720:
case 1429:
case 3675:
case 2530:
case 4043:
case 3174:
case 3881:
case 459:
case 85:
case 1622:
case 2892:
case 1496:
case 503:
case 529:
case 282:
case 1244:
case 1760:
case 2386:
case 126:
case 4005:
case 3233:
case 1655:
case 1199:
case 169:
case 2576:
case 433:
case 2926:
case 1102:
case 1051:
case 2547:
case 3439:
case 0:
case 2756:
case 2693:
case 4089:
case 1823:
case 1501:
case 1840:
case 2263:
case 2809:
case 1966:
case 1606:
case 3170:
case 3062:
case 3071:
case 1480:
case 16:
case 3632:
case 1648:
case 859:
case 2390:
case 2209:
case 174:
case 140:
case 2188:
case 1764:
case 2075:
case 1240:
case 741:
case 3702:
case 3665:
case 3905:
case 603:
case 442:
case 1554:
case 1526:
case 3295:
case 666:
case 2716:
case 1736:
case 690:
case 325:
case 718:
case 1341:
case 3920:
case 3943:
case 1947:
case 1011:
case 2291:
case 2901:
case 1934:
case 3282:
case 736:
case 2566:
case 2083:
case 745:
case 3396:
case 2479:
case 909:
case 689:
case 3384:
case 4016:
case 1621:
case 3649:
case 314:
case 2891:
case 2176:
case 3164:
case 3726:
case 1550:
case 1025:
case 2273:
case 1502:
case 2857:
case 1687:
case 3683:
case 3754:
case 1339:
case 2049:
case 842:
case 1000:
case 62:
case 2319:
case 3956:
case 1101:
case 2134:
case 1615:
case 2257:
case 2588:
case 819:
case 68:
case 2378:
case 2553:
case 1335:
case 3802:
case 2045:
case 177:
case 2315:
case 973:
case 2432:
case 2003:
case 3311:
case 1678:
case 3917:
case 3041:
case 375:
case 1084:
case 865:
case 3795:
case 3250:
case 1096:
case 2387:
case 1870:
case 3782:
case 1497:
case 111:
case 2639:
case 213:
case 2791:
case 2167:
case 3658:
case 698:
case 2508:
case 338:
case 1274:
case 2757:
case 2546:
case 3325:
case 357:
case 3352:
case 2321:
case 3144:
case 4073:
case 3299:
case 3137:
case 3039:
case 1133:
case 3254:
case 1080:
case 1874:
case 3462:
case 2773:
case 1595:
case 4057:
case 701:
case 291:
case 3899:
case 734:
case 193:
case 2641:
case 1607:
case 100:
case 3603:
case 912:
case 1908:
case 4085:
case 3312:
case 2348:
case 643:
case 2805:
case 3042:
case 2018:
case 3540:
case 4092:
case 2717:
case 3801:
case 3814:
case 2843:
case 1260:
case 1744:
case 2431:
case 2205:
case 3781:
case 2177:
case 4017:
case 2483:
case 2792:
case 461:
case 295:
case 2995:
case 2628:
case 151:
case 1393:
case 1860:
case 3991:
case 272:
case 253:
case 3214:
case 2567:
case 2982:
case 3201:
case 2785:
case 148:
case 9:
case 3028:
case 2146:
case 564:
case 3679:
case 2856:
case 356:
case 3544:
case 1686:
case 1400:
case 2513:
case 1723:
case 1264:
case 2449:
case 1533:
case 2824:
case 2642:
case 3618:
case 2465:
case 1977:
case 3973:
case 1581:
case 115:
case 1362:
case 960:
case 2889:
case 184:
case 1864:
case 371:
case 861:
case 2256:
case 3210:
case 794:
case 937:
case 204:
case 1775:
case 3076:
case 2064:
case 886:
case 231:
case 1961:
case 1187:
case 3868:
case 3755:
case 3309:
case 1056:
case 869:
case 3030:
case 2327:
case 1024:
case 692:
case 3268:
case 2135:
case 3453:
case 3925:
case 15:
case 3532:
case 474:
case 440:
case 3698:
case 1548:
case 3385:
case 3894:
case 638:
case 1610:
case 3575:
case 2161:
case 4012:
case 3886:
case 2797:
case 1218:
case 2098:
case 3392:
case 1879:
case 768:
case 2381:
case 3259:
case 1121:
case 1555:
case 517:
case 3047:
case 3904:
case 1043:
case 3911:
case 3664:
case 874:
case 1313:
case 2915:
case 86:
case 1522:
case 3408:
case 1279:
case 3446:
case 1818:
case 1005:
case 3878:
case 343:
case 2193:
case 408:
case 280:
case 918:
case 1971:
case 1377:
case 1650:
case 4052:
case 887:
case 2074:
case 1602:
case 3066:
case 1587:
case 592:
case 1962:
case 1749:
case 2423:
case 2440:
case 2700:
case 945:
case 723:
case 709:
case 2752:
case 1515:
case 3357:
case 2535:
case 2922:
case 1106:
case 1353:
case 1148:
case 278:
case 1485:
case 2572:
case 3997:
case 1993:
case 3391:
case 1203:
case 3207:
case 1869:
case 2561:
case 2171:
case 3565:
case 808:
case 1654:
case 2896:
case 1783:
case 656:
case 4004:
case 1245:
case 2162:
case 2070:
case 427:
case 2444:
case 1803:
case 1269:
case 538:
case 3549:
case 557:
case 119:
case 3413:
case 671:
case 1845:
case 2666:
case 1122:
case 3715:
case 70:
case 29:
case 3912:
case 2252:
case 752:
case 1194:
case 3221:
case 3778:
case 2990:
case 773:
case 1186:
case 2399:
case 244:
case 228:
case 1489:
case 2608:
case 1366:
case 877:
case 2225:
case 514:
case 3179:
case 367:
case 1424:
case 1849:
case 2800:
case 2541:
case 525:
case 3719:
case 2852:
case 1456:
case 811:
case 1507:
case 4080:
case 3503:
case 654:
case 1265:
case 3118:
case 400:
case 3545:
case 3053:
case 165:
case 1057:
case 288:
case 910:
case 493:
case 2326:
case 1190:
case 1388:
case 2211:
case 1091:
case 1231:
case 2653:
case 3887:
case 2796:
case 1168:
case 621:
case 2804:
case 800:
case 1420:
case 2811:
case 3447:
case 893:
case 3434:
case 3558:
case 3046:
case 681:
case 1745:
case 1405:
case 3938:
case 1942:
case 411:
case 3287:
case 3008:
case 2959:
case 2128:
case 2302:
case 1063:
case 1594:
case 712:
case 3644:
case 1875:
case 1376:
case 2978:
case 2251:
case 424:
case 3466:
case 554:
case 415:
case 749:
case 1939:
case 1330:
case 2023:
case 2040:
case 3356:
case 1107:
case 2542:
case 3518:
case 1559:
case 950:
case 3822:
case 4038:
case 1627:
case 3623:
case 3488:
case 1590:
case 1178:
case 3794:
case 3786:
case 2897:
case 1085:
case 3206:
case 1779:
case 3248:
case 1232:
case 3996:
case 848:
case 2297:
case 2139:
case 2037:
case 1347:
case 206:
case 3929:
case 796:
case 884:
case 2044:
case 3158:
case 1334:
case 760:
case 521:
case 3759:
case 1832:
case 38:
case 2812:
case 1416:
case 74:
case 2738:
case 630:
case 2528:
case 1718:
case 3806:
case 3022:
case 431:
case 4064:
case 650:
case 1926:
case 2328:
case 3505:
case 2150:
case 914:
case 2514:
case 1809:
case 3267:
case 605:
case 3419:
case 1693:
case 3697:
case 1789:
case 847:
case 1368:
case 2966:
case 510:
case 383:
case 3478:
case 743:
case 925:
case 1075:
case 2223:
case 1188:
case 1863:
case 240:
case 1359:
case 562:
case 1705:
case 1445:
case 930:
case 1292:
case 3936:
case 2154:
case 3318:
case 2342:
case 1530:
case 122:
case 2844:
case 1720:
case 3556:
case 3407:
case 2510:
case 1743:
case 2837:
case 1285:
case 3734:
case 3379:
case 3970:
case 2199:
case 1885:
case 2097:
case 2655:
case 2237:
case 1394:
case 226:
case 2760:
case 447:
case 2244:
case 2687:
case 2502:
case 1273:
case 954:
case 835:
case 2930:
case 2052:
case 1134:
case 2101:
case 1910:
case 3358:
case 1319:
case 2000:
case 3143:
case 3120:
case 2774:
case 1065:
case 1257:
case 1635:
case 89:
case 3468:
case 2615:
case 550:
case 3964:
case 1378:
case 3611:
case 394:
case 505:
case 1588:
case 3490:
case 3345:
case 3459:
case 2526:
case 2554:
case 2438:
case 634:
case 981:
case 601:
case 3846:
case 1661:
case 1914:
case 1130:
case 1901:
case 1291:
case 3124:
case 4070:
case 2011:
case 435:
case 880:
case 1031:
case 2341:
case 1672:
case 921:
case 3246:
case 3998:
case 1479:
case 3625:
case 368:
case 3189:
case 878:
case 820:
case 3600:
case 1176:
case 1891:
case 3788:
case 3494:
case 2621:
case 4036:
case 3652:
case 3369:
case 3696:
case 1546:
case 3684:
case 3753:
case 1757:
case 444:
case 1508:
case 3455:
case 789:
case 3349:
case 2133:
case 428:
case 1113:
case 645:
case 1058:
case 3923:
case 1927:
case 1773:
case 3777:
case 2181:
case 807:
case 3192:
case 618:
case 2607:
case 766:
case 1475:
case 2361:
case 312:
case 2967:
case 703:
case 488:
case 3185:
case 2372:
case 293:
case 1641:
case 729:
case 191:
case 34:
case 828:
case 1432:
case 3680:
case 3448:
case 3708:
case 78:
case 277:
case 3406:
case 3746:
case 1045:
case 2335:
case 971:
case 3331:
case 3937:
case 1933:
case 2029:
case 956:
case 3:
case 407:
case 3888:
case 1791:
case 1069:
case 1167:
case 1639:
case 2619:
case 211:
case 2497:
case 2425:
case 1146:
case 1108:
case 1322:
case 536:
case 2953:
case 992:
case 248:
case 1289:
case 224:
case 1355:
case 2400:
case 3517:
case 3830:
case 2694:
case 2452:
case 3068:
case 1889:
case 2195:
case 215:
case 2362:
case 1465:
case 2371:
case 767:
case 4040:
case 3592:
case 863:
case 2182:
case 3375:
case 352:
case 3230:
case 545:
case 3585:
case 3876:
case 284:
case 1763:
case 397:
case 13:
case 641:
case 1018:
case 2668:
case 3157:
case 1153:
case 1306:
case 1431:
case 2260:
case 3509:
case 3834:
case 2527:
case 1717:
case 1628:
case 195:
case 1792:
case 916:
case 3173:
case 4044:
case 406:
case 1205:
case 1785:
case 1567:
case 1982:
case 938:
case 1243:
case 957:
case 172:
case 2393:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752404402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,];
var gg_b = "1752404402/";

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
