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
case 3013:
case 1972:
case 434:
case 2045:
case 1515:
case 1794:
case 1555:
case 2914:
case 147:
case 2192:
case 2580:
case 2272:
case 1164:
case 1058:
case 3320:
case 2771:
case 1246:
case 1286:
case 1258:
case 3806:
case 1873:
case 1847:
case 875:
case 1713:
case 3242:
case 2051:
case 2274:
case 4088:
case 507:
case 3213:
case 2967:
case 2663:
case 1278:
case 749:
case 2320:
case 1923:
case 2908:
case 3526:
case 1817:
case 545:
case 2656:
case 56:
case 1451:
case 1226:
case 495:
case 163:
case 3121:
case 4046:
case 1820:
case 1231:
case 1867:
case 3349:
case 3592:
case 2691:
case 622:
case 4072:
case 2638:
case 3782:
case 3621:
case 446:
case 3883:
case 471:
case 3234:
case 1400:
case 1527:
case 3069:
case 3172:
case 2141:
case 1006:
case 343:
case 381:
case 1793:
case 157:
case 3684:
case 1609:
case 2611:
case 2546:
case 2224:
case 3942:
case 3443:
case 378:
case 3583:
case 2266:
case 12:
case 3212:
case 2503:
case 3737:
case 3154:
case 461:
case 296:
case 3047:
case 2654:
case 647:
case 822:
case 2433:
case 3540:
case 2033:
case 222:
case 3927:
case 999:
case 3004:
case 3971:
case 3113:
case 563:
case 1940:
case 2331:
case 2150:
case 3031:
case 2233:
case 703:
case 133:
case 981:
case 3848:
case 3775:
case 2539:
case 3629:
case 3053:
case 2073:
case 2591:
case 1241:
case 1184:
case 1142:
case 3118:
case 800:
case 865:
case 2279:
case 1696:
case 246:
case 640:
case 2998:
case 477:
case 2093:
case 3764:
case 3189:
case 3770:
case 1601:
case 21:
case 3524:
case 603:
case 2406:
case 3024:
case 4052:
case 3680:
case 709:
case 1111:
case 3492:
case 1509:
case 3398:
case 1268:
case 987:
case 2944:
case 529:
case 455:
case 771:
case 3211:
case 3364:
case 3374:
case 91:
case 64:
case 3607:
case 7:
case 2398:
case 2554:
case 3219:
case 1063:
case 3311:
case 654:
case 1414:
case 1008:
case 1583:
case 2317:
case 3501:
case 2986:
case 40:
case 2490:
case 120:
case 797:
case 2819:
case 3028:
case 2517:
case 3087:
case 1886:
case 1598:
case 1456:
case 3901:
case 2054:
case 1955:
case 3058:
case 2924:
case 539:
case 3498:
case 2784:
case 1339:
case 1314:
case 2822:
case 3272:
case 2911:
case 3999:
case 3875:
case 2038:
case 1759:
case 3957:
case 1374:
case 927:
case 2125:
case 489:
case 1974:
case 363:
case 3200:
case 1654:
case 3148:
case 1335:
case 3268:
case 1367:
case 2892:
case 156:
case 332:
case 3727:
case 4042:
case 1392:
case 1846:
case 3287:
case 2534:
case 1498:
case 3079:
case 3953:
case 2181:
case 4081:
case 517:
case 1806:
case 3712:
case 1225:
case 2472:
case 4067:
case 860:
case 3535:
case 1216:
case 1875:
case 2405:
case 1663:
case 1925:
case 1619:
case 2313:
case 1657:
case 2602:
case 2992:
case 3554:
case 3545:
case 1682:
case 2355:
case 9:
case 3963:
case 3078:
case 3586:
case 3936:
case 2260:
case 2286:
case 4073:
case 1579:
case 2651:
case 974:
case 2895:
case 1066:
case 3528:
case 3657:
case 297:
case 1434:
case 1247:
case 2044:
case 3428:
case 1885:
case 2491:
case 1232:
case 2617:
case 4045:
case 2249:
case 1488:
case 2570:
case 4015:
case 2105:
case 2167:
case 4054:
case 220:
case 2350:
case 3127:
case 2302:
case 760:
case 3474:
case 3943:
case 1108:
case 279:
case 735:
case 4057:
case 2203:
case 614:
case 1088:
case 2082:
case 1516:
case 1000:
case 403:
case 560:
case 652:
case 3913:
case 385:
case 2114:
case 2841:
case 3716:
case 2299:
case 1224:
case 2515:
case 3365:
case 922:
case 3688:
case 140:
case 3331:
case 1987:
case 2587:
case 3844:
case 3473:
case 3044:
case 2376:
case 219:
case 3252:
case 2137:
case 1202:
case 1182:
case 1428:
case 984:
case 705:
case 834:
case 2194:
case 3895:
case 3719:
case 226:
case 1153:
case 2238:
case 3582:
case 3810:
case 2134:
case 3830:
case 1667:
case 2768:
case 1891:
case 237:
case 1670:
case 2013:
case 2283:
case 2653:
case 3616:
case 833:
case 1743:
case 1417:
case 1227:
case 2176:
case 615:
case 2666:
case 3648:
case 2657:
case 1435:
case 3015:
case 2551:
case 1316:
case 1920:
case 1235:
case 3558:
case 2811:
case 551:
case 234:
case 2128:
case 2307:
case 1229:
case 3646:
case 239:
case 2541:
case 3679:
case 2795:
case 1625:
case 3686:
case 589:
case 604:
case 3939:
case 1916:
case 410:
case 1890:
case 2160:
case 2139:
case 474:
case 1905:
case 3337:
case 144:
case 3992:
case 60:
case 3873:
case 3933:
case 3136:
case 567:
case 2440:
case 3266:
case 1519:
case 1379:
case 2677:
case 2628:
case 3351:
case 2223:
case 284:
case 189:
case 1356:
case 3850:
case 3603:
case 3698:
case 1934:
case 1760:
case 433:
case 4074:
case 2838:
case 2419:
case 3778:
case 4068:
case 2845:
case 2052:
case 3170:
case 1288:
case 983:
case 777:
case 2431:
case 3256:
case 2582:
case 1297:
case 1323:
case 3123:
case 788:
case 3392:
case 2877:
case 491:
case 1120:
case 2858:
case 949:
case 1070:
case 3328:
case 1317:
case 1057:
case 1642:
case 263:
case 701:
case 3077:
case 2166:
case 2730:
case 200:
case 1215:
case 1902:
case 931:
case 2987:
case 1566:
case 2391:
case 1281:
case 3454:
case 811:
case 2271:
case 1620:
case 1617:
case 611:
case 3385:
case 1347:
case 3358:
case 1537:
case 2607:
case 1074:
case 1587:
case 2684:
case 3105:
case 1600:
case 498:
case 2947:
case 2830:
case 4053:
case 1801:
case 351:
case 1053:
case 2834:
case 1160:
case 1426:
case 1055:
case 2171:
case 3309:
case 2410:
case 2177:
case 1750:
case 3318:
case 319:
case 3645:
case 2328:
case 1039:
case 1034:
case 770:
case 274:
case 3439:
case 1306:
case 3140:
case 75:
case 2531:
case 533:
case 998:
case 1502:
case 1071:
case 168:
case 2754:
case 3042:
case 1608:
case 1614:
case 2692:
case 3541:
case 2412:
case 1439:
case 1789:
case 653:
case 1131:
case 859:
case 1775:
case 805:
case 3808:
case 676:
case 3959:
case 3091:
case 3469:
case 2520:
case 816:
case 3394:
case 1787:
case 444:
case 2048:
case 3185:
case 1292:
case 2018:
case 754:
case 3867:
case 1970:
case 547:
case 3110:
case 2915:
case 31:
case 4080:
case 850:
case 3232:
case 646:
case 2081:
case 2859:
case 2195:
case 2527:
case 197:
case 3641:
case 830:
case 2319:
case 2552:
case 691:
case 1668:
case 1394:
case 1489:
case 1771:
case 2007:
case 2718:
case 665:
case 3842:
case 1166:
case 387:
case 2774:
case 2084:
case 967:
case 3319:
case 606:
case 1780:
case 1467:
case 23:
case 179:
case 3589:
case 3338:
case 1158:
case 1860:
case 1550:
case 4038:
case 167:
case 3726:
case 311:
case 656:
case 2688:
case 633:
case 2824:
case 2251:
case 1050:
case 2946:
case 3751:
case 3772:
case 625:
case 2801:
case 837:
case 3460:
case 3932:
case 2863:
case 369:
case 3449:
case 3278:
case 130:
case 692:
case 1788:
case 253:
case 1033:
case 1403:
case 2690:
case 3585:
case 1647:
case 828:
case 641:
case 3070:
case 3183:
case 2563:
case 2856:
case 1357:
case 4043:
case 1708:
case 2470:
case 1581:
case 67:
case 3584:
case 1911:
case 27:
case 3048:
case 3633:
case 1564:
case 824:
case 558:
case 757:
case 170:
case 3125:
case 674:
case 1045:
case 3494:
case 3333:
case 3898:
case 1678:
case 93:
case 232:
case 1113:
case 2999:
case 1470:
case 1481:
case 523:
case 1812:
case 185:
case 3017:
case 2583:
case 624:
case 3207:
case 1929:
case 413:
case 1238:
case 3138:
case 2309:
case 778:
case 3116:
case 1733:
case 3206:
case 880:
case 2883:
case 2383:
case 2058:
case 818:
case 1270:
case 792:
case 1203:
case 1320:
case 1895:
case 3676:
case 3899:
case 2954:
case 866:
case 1491:
case 1785:
case 80:
case 3879:
case 663:
case 565:
case 2902:
case 41:
case 943:
case 2209:
case 150:
case 3248:
case 855:
case 2487:
case 1135:
case 1449:
case 1162:
case 2903:
case 907:
case 3343:
case 2772:
case 1310:
case 2797:
case 1702:
case 1087:
case 2536:
case 3455:
case 2909:
case 3098:
case 846:
case 2415:
case 262:
case 795:
case 2872:
case 2493:
case 1069:
case 227:
case 3363:
case 1405:
case 3644:
case 2115:
case 3150:
case 347:
case 1125:
case 3777:
case 1119:
case 566:
case 439:
case 3080:
case 1926:
case 2732:
case 1541:
case 3155:
case 2575:
case 1381:
case 3451:
case 3431:
case 1951:
case 3478:
case 2399:
case 1666:
case 1103:
case 2113:
case 3606:
case 2511:
case 924:
case 2356:
case 932:
case 1185:
case 506:
case 636:
case 2275:
case 2674:
case 670:
case 2096:
case 1560:
case 2288:
case 869:
case 596:
case 1279:
case 1784:
case 153:
case 2149:
case 810:
case 1639:
case 1544:
case 331:
case 2394:
case 952:
case 1421:
case 1446:
case 3002:
case 493:
case 2421:
case 2499:
case 3941:
case 2353:
case 3906:
case 14:
case 1359:
case 118:
case 2002:
case 3654:
case 976:
case 3672:
case 4022:
case 696:
case 2408:
case 2337:
case 2120:
case 4060:
case 1714:
case 3550:
case 1559:
case 2417:
case 3525:
case 637:
case 2869:
case 747:
case 2820:
case 3949:
case 710:
case 158:
case 3129:
case 3919:
case 1915:
case 3523:
case 2972:
case 2969:
case 499:
case 1425:
case 2027:
case 2549:
case 1596:
case 4028:
case 345:
case 2183:
case 3599:
case 2839:
case 3251:
case 2919:
case 3982:
case 3083:
case 2304:
case 1736:
case 755:
case 2116:
case 3940:
case 1684:
case 113:
case 1722:
case 581:
case 2997:
case 599:
case 2168:
case 105:
case 1727:
case 856:
case 1161:
case 906:
case 2765:
case 1756:
case 2229:
case 207:
case 2626:
case 4085:
case 2959:
case 2681:
case 3572:
case 350:
case 2346:
case 4058:
case 201:
case 4018:
case 1038:
case 1973:
case 1378:
case 1937:
case 1693:
case 989:
case 1631:
case 1009:
case 3438:
case 790:
case 1256:
case 3711:
case 2601:
case 1613:
case 1572:
case 3487:
case 838:
case 74:
case 977:
case 94:
case 3865:
case 1679:
case 1382:
case 2211:
case 683:
case 3514:
case 2259:
case 314:
case 2204:
case 3312:
case 937:
case 894:
case 3890:
case 1116:
case 2311:
case 3836:
case 3181:
case 2039:
case 2693:
case 3006:
case 3796:
case 540:
case 3547:
case 2735:
case 2683:
case 1978:
case 3650:
case 3609:
case 1499:
case 3412:
case 2782:
case 1863:
case 2492:
case 1964:
case 3653:
case 3114:
case 4050:
case 3835:
case 1178:
case 3613:
case 1106:
case 1717:
case 3496:
case 1804:
case 2720:
case 2303:
case 485:
case 2069:
case 1430:
case 3198:
case 42:
case 2234:
case 3804:
case 3244:
case 3335:
case 393:
case 1023:
case 1692:
case 484:
case 753:
case 111:
case 3016:
case 929:
case 2890:
case 1013:
case 3738:
case 607:
case 1695:
case 2250:
case 2378:
case 1975:
case 2769:
case 372:
case 3263:
case 1982:
case 1757:
case 1411:
case 2896:
case 3217:
case 2212:
case 360:
case 1194:
case 1652:
case 3511:
case 773:
case 223:
case 3205:
case 892:
case 3998:
case 955:
case 3731:
case 2070:
case 3766:
case 1996:
case 1121:
case 1190:
case 819:
case 487:
case 3027:
case 121:
case 1774:
case 1965:
case 3386:
case 2652:
case 1200:
case 2706:
case 903:
case 3631:
case 3054:
case 1282:
case 3916:
case 740:
case 3061:
case 664:
case 1548:
case 2049:
case 2174:
case 2713:
case 3553:
case 2462:
case 3243:
case 333:
case 876:
case 1624:
case 1212:
case 2439:
case 1287:
case 2351:
case 3191:
case 3903:
case 1159:
case 2071:
case 708:
case 3317:
case 463:
case 732:
case 2065:
case 2222:
case 1540:
case 514:
case 4047:
case 690:
case 2971:
case 2791:
case 2455:
case 1554:
case 2658:
case 2641:
case 743:
case 349:
case 3768:
case 769:
case 1567:
case 462:
case 2739:
case 1471:
case 3575:
case 1067:
case 2023:
case 2568:
case 3894:
case 2950:
case 1478:
case 3377:
case 2106:
case 2778:
case 935:
case 3102:
case 1128:
case 1207:
case 1954:
case 2385:
case 2988:
case 230:
case 2025:
case 2028:
case 1156:
case 2230:
case 1385:
case 1267:
case 2825:
case 409:
case 1754:
case 1148:
case 3008:
case 96:
case 1783:
case 1107:
case 3793:
case 3920:
case 1751:
case 3801:
case 2422:
case 2926:
case 659:
case 1944:
case 1813:
case 595:
case 1837:
case 2508:
case 3543:
case 2985:
case 4002:
case 2124:
case 2086:
case 414:
case 4010:
case 1887:
case 1611:
case 3119:
case 2365:
case 3128:
case 2163:
case 1739:
case 2757:
case 871:
case 3352:
case 320:
case 2775:
case 2548:
case 1508:
case 402:
case 1758:
case 2019:
case 384:
case 1294:
case 963:
case 3000:
case 883:
case 3871:
case 808:
case 3218:
case 2728:
case 2829:
case 759:
case 2783:
case 482:
case 2747:
case 3452:
case 1939:
case 2870:
case 765:
case 748:
case 2625:
case 1526:
case 689:
case 1590:
case 1910:
case 2612:
case 2218:
case 2525:
case 3117:
case 508:
case 1851:
case 2227:
case 3993:
case 1228:
case 1748:
case 1612:
case 1507:
case 2727:
case 781:
case 1188:
case 3354:
case 2786:
case 3095:
case 2826:
case 712:
case 1802:
case 399:
case 942:
case 2349:
case 950:
case 3051:
case 412:
case 4000:
case 2473:
case 3539:
case 2407:
case 228:
case 1543:
case 2880:
case 1672:
case 750:
case 1626:
case 531:
case 1984:
case 2800:
case 3687:
case 2605:
case 3275:
case 3725:
case 152:
case 1947:
case 3014:
case 3301:
case 2151:
case 1412:
case 1452:
case 3635:
case 1123:
case 3330:
case 20:
case 3722:
case 1641:
case 177:
case 3035:
case 1068:
case 785:
case 3073:
case 702:
case 34:
case 58:
case 1413:
case 1797:
case 3169:
case 1705:
case 2667:
case 2682:
case 2014:
case 2156:
case 2876:
case 3889:
case 1361:
case 1819:
case 1914:
case 1967:
case 3745:
case 3929:
case 3828:
case 2090:
case 1101:
case 2723:
case 2290:
case 917:
case 3627:
case 2036:
case 1749:
case 1505:
case 3695:
case 3962:
case 3022:
case 3542:
case 1259:
case 1573:
case 2080:
case 3393:
case 4029:
case 383:
case 3425:
case 3636:
case 3952:
case 3238:
case 2752:
case 2284:
case 3742:
case 1761:
case 2097:
case 3965:
case 1723:
case 2958:
case 564:
case 1949:
case 2342:
case 993:
case 3670:
case 1786:
case 2623:
case 321:
case 1994:
case 2173:
case 767:
case 3562:
case 1199:
case 1134:
case 910:
case 241:
case 840:
case 2182:
case 1265:
case 440:
case 2981:
case 257:
case 3756:
case 3841:
case 3757:
case 2821:
case 364:
case 2219:
case 1027:
case 69:
case 375:
case 3760:
case 213:
case 1504:
case 1538:
case 752:
case 1855:
case 971:
case 2332:
case 3239:
case 3546:
case 3165:
case 3500:
case 1261:
case 1809:
case 2430:
case 669:
case 3892:
case 2662:
case 609:
case 601:
case 1721:
case 325:
case 1853:
case 2609:
case 1534:
case 2004:
case 719:
case 1031:
case 390:
case 3050:
case 1311:
case 809:
case 2897:
case 1054:
case 3529:
case 2586:
case 2516:
case 4083:
case 1966:
case 823:
case 122:
case 2785:
case 1334:
case 3099:
case 2489:
case 1495:
case 1948:
case 2865:
case 2454:
case 2092:
case 1595:
case 3194:
case 3233:
case 1931:
case 3788:
case 1839:
case 978:
case 685:
case 726:
case 2796:
case 2855:
case 2854:
case 2518:
case 1315:
case 941:
case 361:
case 3142:
case 3145:
case 2759:
case 2387:
case 3224:
case 2793:
case 269:
case 3481:
case 3066:
case 3970:
case 2155:
case 3182:
case 265:
case 3284:
case 1687:
case 3736:
case 3414:
case 3675:
case 2035:
case 1213:
case 3536:
case 4079:
case 174:
case 3870:
case 3177:
case 3199:
case 3107:
case 1707:
case 2707:
case 2957:
case 4090:
case 2158:
case 1906:
case 844:
case 2026:
case 3484:
case 3794:
case 1191:
case 229:
case 2755:
case 128:
case 2386:
case 2201:
case 161:
case 1236:
case 3332:
case 1198:
case 926:
case 2363:
case 2689:
case 1459:
case 2006:
case 4011:
case 3261:
case 268:
case 3821:
case 1997:
case 972:
case 2395:
case 3530:
case 4089:
case 3435:
case 962:
case 644:
case 431:
case 3664:
case 3262:
case 2367:
case 2207:
case 1762:
case 1658:
case 451:
case 2910:
case 176:
case 2285:
case 3868:
case 930:
case 2108:
case 2341:
case 3396:
case 1633:
case 1952:
case 1209:
case 1032:
case 3281:
case 3267:
case 2737:
case 338:
case 1251:
case 2429:
case 1029:
case 3407:
case 3255:
case 1303:
case 1688:
case 3800:
case 1109:
case 1588:
case 3626:
case 2205:
case 1369:
case 3950:
case 961:
case 212:
case 1399:
case 3193:
case 954:
case 891:
case 2996:
case 1389:
case 145:
case 3490:
case 667:
case 1623:
case 3612:
case 3399:
case 1615:
case 3109:
case 3930:
case 71:
case 57:
case 236:
case 3432:
case 2574:
case 1391:
case 1808:
case 997:
case 639:
case 1307:
case 1919:
case 2384:
case 2293:
case 2746:
case 1104:
case 3038:
case 695:
case 165:
case 52:
case 2390:
case 521:
case 4027:
case 3581:
case 39:
case 4019:
case 590:
case 3859:
case 1427:
case 479:
case 3271:
case 1899:
case 877:
case 3748:
case 3379:
case 960:
case 3288:
case 1151:
case 3062:
case 3905:
case 3874:
case 1912:
case 501:
case 1993:
case 293:
case 650:
case 1917:
case 2191:
case 3534:
case 3424:
case 2359:
case 1155:
case 794:
case 2913:
case 2960:
case 3378:
case 406:
case 1345:
case 3574:
case 2760:
case 1358:
case 1145:
case 1720:
case 3456:
case 396:
case 996:
case 2336:
case 391:
case 2315:
case 1918:
case 3655:
case 4041:
case 3020:
case 2132:
case 162:
case 1072:
case 3039:
case 18:
case 1556:
case 2397:
case 2436:
case 964:
case 2063:
case 511:
case 2961:
case 2699:
case 2369:
case 3730:
case 1643:
case 827:
case 1218:
case 3506:
case 975:
case 3441:
case 2101:
case 758:
case 697:
case 2252:
case 273:
case 4063:
case 3246:
case 1321:
case 1365:
case 3855:
case 562:
case 2196:
case 1593:
case 1792:
case 2357:
case 2812:
case 2764:
case 3994:
case 737:
case 2152:
case 1533:
case 1913:
case 3624:
case 148:
case 438:
case 1274:
case 3019:
case 3926:
case 3210:
case 457:
case 3159:
case 2506:
case 804:
case 1448:
case 1561:
case 3:
case 3560:
case 3457:
case 3298:
case 2276:
case 630:
case 1343:
case 3656:
case 3858:
case 825:
case 516:
case 1711:
case 1589:
case 3223:
case 1689:
case 3141:
case 2840:
case 1665:
case 525:
case 3297:
case 2100:
case 2860:
case 3046:
case 1675:
case 2581:
case 3515:
case 3723:
case 1685:
case 3802:
case 3948:
case 3827:
case 3937:
case 2799:
case 2326:
case 3230:
case 3043:
case 3221:
case 1077:
case 2437:
case 1828:
case 1289:
case 418:
case 2633:
case 882:
case 2669:
case 72:
case 3908:
case 1492:
case 573:
case 1719:
case 2231:
case 3914:
case 3784:
case 356:
case 82:
case 2878:
case 1328:
case 2104:
case 1383:
case 3785:
case 3214:
case 3630:
case 90:
case 1037:
case 2468:
case 3160:
case 2664:
case 2112:
case 947:
case 2110:
case 472:
case 2505:
case 556:
case 2314:
case 1904:
case 3236:
case 3715:
case 473:
case 2900:
case 4016:
case 3005:
case 62:
case 119:
case 420:
case 1826:
case 1628:
case 1093:
case 102:
case 3907:
case 77:
case 1237:
case 2034:
case 2109:
case 3222:
case 2567:
case 2418:
case 901:
case 2593:
case 1691:
case 3915:
case 2792:
case 1245:
case 1854:
case 3601:
case 476:
case 2993:
case 98:
case 254:
case 1326:
case 2316:
case 3126:
case 114:
case 73:
case 1927:
case 1767:
case 2095:
case 1304:
case 3733:
case 3792:
case 878:
case 1388:
case 172:
case 631:
case 1486:
case 3876:
case 87:
case 2966:
case 741:
case 1565:
case 1141:
case 1575:
case 1044:
case 2984:
case 2463:
case 3483:
case 3491:
case 3289:
case 1366:
case 3350:
case 146:
case 1127:
case 1152:
case 1333:
case 2043:
case 2220:
case 173:
case 1043:
case 261:
case 684:
case 3938:
case 821:
case 3696:
case 2107:
case 3325:
case 1539:
case 79:
case 5:
case 2338:
case 1035:
case 745:
case 2717:
case 1814:
case 305:
case 362:
case 3934:
case 3178:
case 706:
case 3373:
case 1981:
case 2711:
case 3851:
case 2634:
case 3362:
case 3231:
case 2592:
case 802:
case 1959:
case 1144:
case 4086:
case 2543:
case 2188:
case 789:
case 561:
case 2358:
case 921:
case 3381:
case 2722:
case 617:
case 1296:
case 2555:
case 2066:
case 1362:
case 4095:
case 3081:
case 83:
case 2130:
case 2931:
case 2873:
case 3404:
case 2382:
case 1402:
case 698:
case 3063:
case 171:
case 2157:
case 2453:
case 3388:
case 2031:
case 401:
case 2523:
case 453:
case 3833:
case 4092:
case 411:
case 1497:
case 3749:
case 3405:
case 3280:
case 1888:
case 2640:
case 100:
case 1683:
case 3860:
case 958:
case 1240:
case 4075:
case 2928:
case 3522:
case 3276:
case 2622:
case 1768:
case 4031:
case 4012:
case 918:
case 2246:
case 3180:
case 1506:
case 2339:
case 2360:
case 541:
case 2579:
case 2849:
case 2787:
case 2245:
case 2610:
case 847:
case 1269:
case 699:
case 3295:
case 3253:
case 2675:
case 3371:
case 195:
case 2731:
case 915:
case 2375:
case 1866:
case 1255:
case 272:
case 442:
case 2934:
case 4069:
case 2595:
case 1653:
case 2370:
case 1930:
case 3538:
case 673:
case 829:
case 3809:
case 2976:
case 638:
case 231:
case 110:
case 1963:
case 2604:
case 1661:
case 2393:
case 4006:
case 1465:
case 3340:
case 1747:
case 1150:
case 2479:
case 1277:
case 1823:
case 793:
case 3134:
case 2216:
case 1877:
case 1849:
case 1126:
case 3608:
case 2560:
case 2450:
case 948:
case 520:
case 3467:
case 2254:
case 211:
case 1139:
case 4017:
case 3765:
case 3769:
case 2308:
case 1821:
case 3179:
case 994:
case 3315:
case 2273:
case 3838:
case 183:
case 116:
case 2424:
case 143:
case 1776:
case 1732:
case 3694:
case 2973:
case 658:
case 47:
case 2469:
case 1522:
case 3573:
case 1398:
case 3666:
case 3803:
case 15:
case 1738:
case 1024:
case 1558:
case 1630:
case 2589:
case 1791:
case 783:
case 1122:
case 1097:
case 2392:
case 2848:
case 3426:
case 2085:
case 518:
case 2159:
case 543:
case 1524:
case 2733:
case 898:
case 2428:
case 4059:
case 1703:
case 3366:
case 1466:
case 3400:
case 3120:
case 1272:
case 22:
case 3642:
case 1283:
case 988:
case 301:
case 913:
case 2322:
case 2665:
case 1080:
case 3944:
case 26:
case 3961:
case 380:
case 270:
case 2016:
case 458:
case 1706:
case 379:
case 3423:
case 1302:
case 3975:
case 460:
case 2512:
case 1096:
case 193:
case 965:
case 3843:
case 3701:
case 3864:
case 3101:
case 3667:
case 3175:
case 2809:
case 3133:
case 1715:
case 3003:
case 678:
case 2970:
case 307:
case 881:
case 1059:
case 247:
case 968:
case 602:
case 2175:
case 1313:
case 2024:
case 1606:
case 1457:
case 2564:
case 149:
case 392:
case 3812:
case 2001:
case 900:
case 3507:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1678125602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,];
var gg_b = "1678125602/";

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
