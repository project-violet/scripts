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
case 3221:
case 2888:
case 419:
case 2160:
case 2994:
case 252:
case 1891:
case 310:
case 1690:
case 1885:
case 251:
case 1341:
case 2997:
case 3536:
case 1489:
case 1977:
case 1683:
case 995:
case 1338:
case 980:
case 3110:
case 2871:
case 3108:
case 1515:
case 2335:
case 1974:
case 1433:
case 1906:
case 2232:
case 2500:
case 288:
case 1858:
case 3744:
case 136:
case 1920:
case 3325:
case 693:
case 2044:
case 2905:
case 2627:
case 2248:
case 3747:
case 1910:
case 2516:
case 3093:
case 353:
case 2459:
case 2872:
case 2365:
case 3541:
case 597:
case 1368:
case 1723:
case 2576:
case 430:
case 2606:
case 339:
case 2447:
case 2939:
case 1551:
case 3480:
case 3114:
case 3831:
case 2983:
case 2677:
case 2444:
case 1713:
case 1129:
case 3272:
case 3699:
case 3848:
case 2059:
case 2701:
case 853:
case 4085:
case 2822:
case 1063:
case 3255:
case 591:
case 4091:
case 3398:
case 14:
case 977:
case 645:
case 2812:
case 496:
case 1757:
case 257:
case 3660:
case 1598:
case 810:
case 3832:
case 3861:
case 2581:
case 2595:
case 1552:
case 729:
case 4092:
case 1914:
case 2784:
case 2610:
case 575:
case 2040:
case 3087:
case 3919:
case 1924:
case 3288:
case 2620:
case 569:
case 2787:
case 2578:
case 20:
case 332:
case 331:
case 1365:
case 3197:
case 1231:
case 2749:
case 1614:
case 3423:
case 1044:
case 1130:
case 2336:
case 740:
case 1516:
case 2910:
case 2892:
case 611:
case 1248:
case 1627:
case 3049:
case 448:
case 4021:
case 754:
case 2858:
case 1624:
case 612:
case 3300:
case 1617:
case 825:
case 2342:
case 1670:
case 1528:
case 2433:
case 2856:
case 608:
case 1261:
case 1500:
case 1335:
case 721:
case 2683:
case 2977:
case 1246:
case 2338:
case 722:
case 3203:
case 2885:
case 3999:
case 233:
case 1997:
case 2750:
case 2366:
case 1994:
case 2690:
case 1137:
case 3304:
case 3376:
case 1620:
case 1702:
case 3139:
case 2917:
case 2033:
case 1821:
case 727:
case 411:
case 1784:
case 3183:
case 3285:
case 1134:
case 1040:
case 1610:
case 2575:
case 4055:
case 1595:
case 2953:
case 1969:
case 2552:
case 2598:
case 567:
case 3256:
case 3450:
case 3190:
case 160:
case 3054:
case 24:
case 337:
case 2694:
case 3381:
case 3258:
case 1990:
case 1164:
case 831:
case 3292:
case 2063:
case 3057:
case 578:
case 3169:
case 2129:
case 3509:
case 1677:
case 3023:
case 3934:
case 1582:
case 965:
case 3013:
case 3937:
case 3643:
case 2723:
case 1576:
case 979:
case 3378:
case 4071:
case 2551:
case 1447:
case 3727:
case 3680:
case 733:
case 2017:
case 2474:
case 2647:
case 3881:
case 387:
case 3242:
case 1113:
case 1729:
case 2561:
case 2200:
case 3345:
case 2532:
case 2027:
case 2218:
case 3717:
case 1322:
case 3895:
case 2989:
case 966:
case 881:
case 1123:
case 1719:
case 2644:
case 679:
case 974:
case 2764:
case 3159:
case 3067:
case 221:
case 2053:
case 3499:
case 3521:
case 665:
case 3268:
case 1494:
case 2767:
case 1321:
case 3266:
case 3804:
case 3876:
case 3954:
case 3460:
case 963:
case 323:
case 736:
case 3957:
case 254:
case 1311:
case 2562:
case 2531:
case 2102:
case 3034:
case 3140:
case 790:
case 2303:
case 4065:
case 3238:
case 1083:
case 1405:
case 3770:
case 3512:
case 2734:
case 3037:
case 2184:
case 2226:
case 2070:
case 498:
case 1835:
case 3826:
case 1296:
case 1371:
case 29:
case 3816:
case 2760:
case 2010:
case 74:
case 3434:
case 2841:
case 3973:
case 1483:
case 1005:
case 283:
case 3572:
case 1689:
case 1947:
case 2276:
case 2391:
case 2020:
case 3586:
case 509:
case 1388:
case 2470:
case 3949:
case 2008:
case 2006:
case 2074:
case 1386:
case 235:
case 3777:
case 2424:
case 2278:
case 3706:
case 2427:
case 3144:
case 1275:
case 2414:
case 1743:
case 1372:
case 1097:
case 912:
case 1469:
case 1663:
case 4009:
case 2453:
case 3818:
case 2193:
case 227:
case 3464:
case 3950:
case 358:
case 2799:
case 3828:
case 2281:
case 286:
case 3133:
case 724:
case 2039:
case 4068:
case 855:
case 3783:
case 2545:
case 1226:
case 1410:
case 1102:
case 2083:
case 643:
case 1303:
case 1737:
case 3790:
case 501:
case 2959:
case 1562:
case 3851:
case 2090:
case 2321:
case 3650:
case 4042:
case 1101:
case 81:
case 389:
case 573:
case 480:
case 495:
case 646:
case 122:
case 2154:
case 2497:
case 1764:
case 2069:
case 3163:
case 3875:
case 1053:
case 3265:
case 788:
case 4038:
case 945:
case 3902:
case 3987:
case 3852:
case 1027:
case 2123:
case 1989:
case 3029:
case 677:
case 4041:
case 1933:
case 1474:
case 1017:
case 2312:
case 4066:
case 1200:
case 2113:
case 751:
case 3984:
case 2298:
case 1842:
case 31:
case 520:
case 1281:
case 1358:
case 1799:
case 3657:
case 2663:
case 1392:
case 2469:
case 834:
case 2355:
case 1836:
case 3794:
case 2865:
case 1427:
case 3079:
case 2372:
case 3429:
case 2275:
case 1868:
case 1006:
case 1730:
case 3613:
case 1278:
case 2439:
case 1204:
case 1391:
case 1008:
case 2251:
case 3705:
case 1841:
case 1010:
case 1640:
case 3209:
case 414:
case 1385:
case 996:
case 2944:
case 2483:
case 1282:
case 1838:
case 3993:
case 2150:
case 1356:
case 446:
case 238:
case 680:
case 2835:
case 2490:
case 695:
case 100:
case 507:
case 19:
case 2371:
case 529:
case 3132:
case 3688:
case 2004:
case 895:
case 880:
case 2208:
case 1051:
case 3333:
case 41:
case 1948:
case 1103:
case 3389:
case 3776:
case 1387:
case 2007:
case 3438:
case 2082:
case 1931:
case 769:
case 2559:
case 4079:
case 194:
case 775:
case 2837:
case 3466:
case 220:
case 2121:
case 1096:
case 3501:
case 1819:
case 2354:
case 455:
case 3824:
case 242:
case 3817:
case 1294:
case 1301:
case 83:
case 3655:
case 2095:
case 1829:
case 1297:
case 241:
case 3827:
case 3436:
case 2418:
case 3903:
case 1589:
case 1425:
case 792:
case 3230:
case 1075:
case 2277:
case 3584:
case 2313:
case 1961:
case 1415:
case 2274:
case 2428:
case 2864:
case 3442:
case 3686:
case 806:
case 2078:
case 2112:
case 984:
case 1533:
case 689:
case 3264:
case 953:
case 1158:
case 1843:
case 1498:
case 1765:
case 202:
case 3806:
case 3068:
case 3956:
case 2495:
case 1269:
case 2830:
case 2662:
case 2253:
case 1452:
case 1879:
case 3036:
case 1025:
case 3985:
case 2172:
case 2899:
case 3700:
case 2214:
case 2373:
case 2028:
case 306:
case 2736:
case 3991:
case 2000:
case 489:
case 2404:
case 2632:
case 2738:
case 3237:
case 3580:
case 72:
case 3234:
case 1185:
case 3038:
case 2482:
case 2016:
case 2646:
case 3726:
case 303:
case 3041:
case 3810:
case 3066:
case 1290:
case 2171:
case 3958:
case 868:
case 273:
case 15:
case 2741:
case 3621:
case 2350:
case 4019:
case 778:
case 2932:
case 2961:
case 1428:
case 1274:
case 2415:
case 1313:
case 2533:
case 3775:
case 1400:
case 209:
case 1864:
case 1112:
case 1078:
case 365:
case 925:
case 1867:
case 379:
case 2946:
case 2297:
case 2829:
case 937:
case 3798:
case 3359:
case 141:
case 3465:
case 2052:
case 3911:
case 3692:
case 59:
case 107:
case 3658:
case 687:
case 1354:
case 2098:
case 2294:
case 3752:
case 500:
case 3921:
case 1837:
case 586:
case 3554:
case 482:
case 527:
case 2931:
case 294:
case 3796:
case 1210:
case 3009:
case 3685:
case 2948:
case 1007:
case 1082:
case 1416:
case 3751:
case 2302:
case 458:
case 2709:
case 1076:
case 744:
case 1220:
case 535:
case 3691:
case 3435:
case 2051:
case 3890:
case 1426:
case 173:
case 25:
case 2290:
case 118:
case 1350:
case 2:
case 2496:
case 487:
case 1766:
case 3603:
case 3409:
case 670:
case 4067:
case 1407:
case 1646:
case 1016:
case 761:
case 704:
case 4064:
case 1404:
case 1188:
case 1476:
case 1661:
case 3035:
case 1026:
case 2451:
case 2191:
case 3725:
case 3894:
case 1217:
case 1028:
case 215:
case 1478:
case 1186:
case 658:
case 3219:
case 249:
case 1000:
case 879:
case 1018:
case 423:
case 176:
case 3897:
case 799:
case 1155:
case 1495:
case 4034:
case 554:
case 2192:
case 1768:
case 3065:
case 932:
case 101:
case 681:
case 2498:
case 97:
case 2843:
case 931:
case 682:
case 1481:
case 4037:
case 1792:
case 2168:
case 817:
case 2755:
case 3394:
case 267:
case 2259:
case 1873:
case 1652:
case 1165:
case 1263:
case 2431:
case 2695:
case 1758:
case 175:
case 2786:
case 2379:
case 1916:
case 1675:
case 3072:
case 3118:
case 1330:
case 2136:
case 1505:
case 3086:
case 1926:
case 3412:
case 2520:
case 559:
case 2142:
case 2678:
case 632:
case 169:
case 2508:
case 794:
case 2772:
case 3128:
case 3126:
case 437:
case 1900:
case 2574:
case 2604:
case 1233:
case 2915:
case 3088:
case 2676:
case 2432:
case 3116:
case 2446:
case 2925:
case 3202:
case 3305:
case 2240:
case 2788:
case 4057:
case 2577:
case 1597:
case 3411:
case 3965:
case 191:
case 2141:
case 709:
case 192:
case 308:
case 1696:
case 4013:
case 3071:
case 1594:
case 1360:
case 848:
case 3746:
case 299:
case 2626:
case 3339:
case 3488:
case 432:
case 2061:
case 536:
case 2975:
case 3638:
case 47:
case 2616:
case 3107:
case 1334:
case 3383:
case 3732:
case 431:
case 2887:
case 2952:
case 3011:
case 2802:
case 3840:
case 4073:
case 363:
case 3564:
case 2711:
case 590:
case 1981:
case 348:
case 3471:
case 3666:
case 197:
case 1364:
case 2996:
case 1590:
case 3668:
case 12:
case 625:
case 317:
case 812:
case 3731:
case 204:
case 3293:
case 3195:
case 3455:
case 2031:
case 2244:
case 1907:
case 3534:
case 2712:
case 926:
case 1583:
case 3636:
case 2329:
case 2618:
case 1625:
case 3178:
case 3012:
case 2801:
case 1976:
case 4050:
case 1904:
case 2696:
case 330:
case 292:
case 3968:
case 656:
case 2597:
case 178:
case 2756:
case 1771:
case 1607:
case 3310:
case 1446:
case 1138:
case 707:
case 1240:
case 742:
case 1577:
case 3609:
case 1788:
case 3403:
case 3085:
case 1925:
case 2918:
case 2850:
case 1574:
case 3320:
case 610:
case 3942:
case 2135:
case 2928:
case 1915:
case 2233:
case 1461:
case 1676:
case 4001:
case 2785:
case 428:
case 1520:
case 1678:
case 116:
case 3115:
case 845:
case 2445:
case 819:
case 2916:
case 1510:
case 1379:
case 3938:
case 2675:
case 2505:
case 3125:
case 1136:
case 2330:
case 2873:
case 3092:
case 91:
case 4087:
case 2399:
case 2263:
case 3257:
case 2792:
case 167:
case 3058:
case 557:
case 588:
case 1801:
case 319:
case 1600:
case 3324:
case 1319:
case 2854:
case 2976:
case 2045:
case 805:
case 3863:
case 3175:
case 773:
case 2857:
case 2907:
case 1244:
case 1329:
case 2625:
case 3745:
case 2583:
case 551:
case 3492:
case 104:
case 3152:
case 893:
case 684:
case 989:
case 1062:
case 2823:
case 934:
case 639:
case 22:
case 552:
case 2590:
case 3198:
case 3458:
case 2813:
case 776:
case 3456:
case 2981:
case 830:
case 1884:
case 1721:
case 2569:
case 1553:
case 3889:
case 2334:
case 1527:
case 3485:
case 2109:
case 1514:
case 2978:
case 896:
case 2337:
case 2703:
case 1524:
case 3370:
case 628:
case 1061:
case 1032:
case 1361:
case 1332:
case 1235:
case 3408:
case 3184:
case 3226:
case 1896:
case 2238:
case 3216:
case 2770:
case 3303:
case 3737:
case 3548:
case 2522:
case 2140:
case 1346:
case 2034:
case 3562:
case 2882:
case 449:
case 2804:
case 2266:
case 89:
case 598:
case 1851:
case 3767:
case 322:
case 2064:
case 1769:
case 886:
case 2878:
case 609:
case 904:
case 189:
case 2067:
case 2159:
case 2693:
case 1331:
case 134:
case 962:
case 1875:
case 1163:
case 1503:
case 1479:
case 2236:
case 1902:
case 1987:
case 1852:
case 1898:
case 2714:
case 3561:
case 835:
case 287:
case 1443:
case 3228:
case 3017:
case 3933:
case 226:
case 2727:
case 1654:
case 2828:
case 3358:
case 2571:
case 649:
case 2950:
case 1556:
case 2800:
case 327:
case 822:
case 3842:
case 615:
case 2601:
case 967:
case 3193:
case 3836:
case 2467:
case 1794:
case 1825:
case 2099:
case 2818:
case 3392:
case 950:
case 3295:
case 1623:
case 3427:
case 2774:
case 1079:
case 2706:
case 1613:
case 3424:
case 2777:
case 3180:
case 335:
case 282:
case 3006:
case 1591:
case 65:
case 3470:
case 2949:
case 1705:
case 1980:
case 2586:
case 6:
case 3391:
case 3385:
case 2572:
case 3207:
case 3282:
case 579:
case 3640:
case 3010:
case 2555:
case 1993:
case 3760:
case 2816:
case 270:
case 725:
case 409:
case 840:
case 1558:
case 978:
case 2826:
case 1242:
case 607:
case 2984:
case 2443:
case 3729:
case 2898:
case 418:
case 1345:
case 3312:
case 1727:
case 829:
case 1680:
case 595:
case 126:
case 580:
case 642:
case 710:
case 1430:
case 2348:
case 2902:
case 641:
case 2987:
case 3225:
case 3322:
case 1693:
case 4016:
case 2331:
case 2265:
case 1067:
case 1499:
case 756:
case 2163:
case 3157:
case 2875:
case 92:
case 3069:
case 36:
case 3154:
case 3494:
case 1753:
case 1521:
case 2769:
case 1064:
case 1804:
case 1876:
case 4028:
case 2901:
case 3090:
case 3959:
case 997:
case 1807:
case 123:
case 3311:
case 2189:
case 401:
case 464:
case 1923:
case 3083:
case 1238:
case 1770:
case 1034:
case 2739:
case 2346:
case 1140:
case 620:
case 1913:
case 2235:
case 506:
case 2332:
case 2361:
case 402:
case 2783:
case 3039:
case 447:
case 3296:
case 3371:
case 784:
case 4078:
case 3835:
case 1826:
case 991:
case 2993:
case 170:
case 1816:
case 3483:
case 3689:
case 441:
case 2209:
case 1973:
case 1434:
case 1720:
case 1602:
case 3388:
case 1949:
case 442:
case 1684:
case 546:
case 3251:
case 3947:
case 1710:
case 1586:
case 255:
case 2043:
case 2613:
case 647:
case 1147:
case 602:
case 3779:
case 2623:
case 3275:
case 3743:
case 728:
case 3173:
case 969:
case 664:
case 1818:
case 3252:
case 2794:
case 3355:
case 4007:
case 3469:
case 3663:
case 3094:
case 1571:
case 21:
case 2815:
case 568:
case 1601:
case 3298:
case 158:
case 2664:
case 669:
case 901:
case 1960:
case 2566:
case 1194:
case 1454:
case 3793:
case 902:
case 2541:
case 675:
case 3231:
case 3653:
case 324:
case 2667:
case 17:
case 2093:
case 3459:
case 253:
case 3627:
case 3855:
case 3044:
case 3614:
case 3130:
case 2325:
case 1300:
case 3617:
case 1535:
case 3526:
case 1049:
case 1619:
case 2315:
case 1328:
case 976:
case 1413:
case 692:
case 545:
case 3261:
case 3335:
case 2120:
case 256:
case 3871:
case 2637:
case 2943:
case 2484:
case 734:
case 3440:
case 2979:
case 2634:
case 1203:
case 2487:
case 3246:
case 1930:
case 351:
case 3997:
case 973:
case 2211:
case 2568:
case 3702:
case 1139:
case 3578:
case 3787:
case 3821:
case 697:
case 2084:
case 3608:
case 1789:
case 1291:
case 1376:
case 2919:
case 2087:
case 1285:
case 2002:
case 3134:
case 3610:
case 1307:
case 3040:
case 1382:
case 1733:
case 2929:
case 3784:
case 1183:
case 3969:
case 920:
case 3595:
case 475:
case 1967:
case 3581:
case 1450:
case 1190:
case 2271:
case 1964:
case 360:
case 1256:
case 469:
case 852:
case 357:
case 2660:
case 1763:
case 530:
case 1258:
case 3812:
case 2398:
case 3822:
case 1169:
case 2352:
case 907:
case 2493:
case 1292:
case 1395:
case 3167:
case 2699:
case 2153:
case 2848:
case 284:
case 1934:
case 1679:
case 3582:
case 491:
case 2630:
case 2114:
case 1509:
case 1023:
case 3677:
case 2831:
case 3939:
case 1378:
case 3606:
case 2117:
case 3447:
case 239:
case 2286:
case 1937:
case 125:
case 3504:
case 1449:
case 1568:
case 574:
case 3891:
case 1221:
case 517:
case 3366:
case 3750:
case 2565:
case 726:
case 2999:
case 95:
case 1634:
case 1402:
case 2316:
case 1110:
case 678:
case 1979:
case 2930:
case 1536:
case 3525:
case 3977:
case 2326:
case 1120:
case 3856:
case 3974:
case 1484:
case 1943:
case 566:
case 2535:
case 3773:
case 3342:
case 1080:
case 3245:
case 2300:
case 3858:
case 3143:
case 1212:
case 3908:
case 667:
case 1744:
case 2619:
case 2049:
case 2328:
case 1315:
case 644:
case 949:
case 915:
case 1538:
case 3892:
case 2629:
case 2318:
case 1177:
case 2423:
case 3749:
case 3463:
case 3669:
case 1093:
case 4061:
case 232:
case 390:
case 1401:
case 499:
case 1566:
case 2194:
case 1117:
case 836:
case 3551:
case 1480:
case 3970:
case 2937:
case 2643:
case 2679:
case 1375:
case 184:
case 1272:
case 604:
case 1831:
case 1630:
case 2169:
case 3063:
case 1255:
case 1153:
case 1699:
case 1493:
case 3754:
case 2292:
case 80:
case 508:
case 3757:
case 2381:
case 2763:
case 237:
case 1398:
case 885:
case 1271:
case 1396:
case 512:
case 2964:
case 2450:
case 699:
case 994:
case 2256:
case 1861:
case 1832:
case 3552:
case 1846:
case 3953:
case 782:
case 2307:
case 2733:
case 3575:
case 2382:
case 3927:
case 3914:
case 3605:
case 758:
case 444:
case 3089:
case 1929:
case 3033:
case 1740:
case 1170:
case 2291:
case 2789:
case 1084:
case 2071:
case 779:
case 130:
case 99:
case 3771:
case 313:
case 2411:
case 2965:
case 3141:
case 900:
case 3240:
case 1609:
case 3577:
case 3788:
case 2287:
case 1085:
case 2202:
case 2530:
case 2116:
case 3682:
case 3915:
case 196:
case 2088:
case 525:
case 899:
case 1308:
case 44:
case 3506:
case 1091:
case 3574:
case 1320:
case 1942:
case 60:
case 2128:
case 316:
case 1115:
case 18:
case 3508:
case 3343:
case 2100:
case 1374:
case 685:
case 2086:
case 3520:
case 690:
case 1213:
case 105:
case 3893:
case 3379:
case 935:
case 1223:
case 3695:
case 1257:
case 804:
case 193:
case 2844:
case 2397:
case 3259:
case 1092:
case 2394:
case 862:
case 2201:
case 2560:
case 636:
case 459:
case 350:
case 1254:
case 3681:
case 212:
case 1324:
case 3570:
case 3628:
case 3951:
case 816:
case 1249:
case 1317:
case 3722:
case 3600:
case 2636:
case 2472:
case 3048:
case 1745:
case 2909:
case 1314:
case 1175:
case 2022:
case 3244:
case 3031:
case 3062:
case 922:
case 2195:
case 2293:
case 1665:
case 1152:
case 2762:
case 2731:
case 850:
case 1198:
case 867:
case 2668:
case 2181:
case 274:
case 3996:
case 1250:
case 2666:
case 1833:
case 659:
case 436:
case 954:
case 1456:
case 2564:
case 1196:
case 2567:
case 531:
case 3887:
case 813:
case 3802:
case 1003:
case 1529:
case 1485:
case 2383:
case 3514:
case 3975:
case 3616:
case 485:
case 3524:
case 490:
case 2488:
case 2176:
case 1519:
case 3032:
case 3061:
case 1151:
case 399:
case 2746:
case 3698:
case 2058:
case 82:
case 112:
case 1055:
case 3263:
case 2257:
case 1397:
case 3873:
case 3652:
case 2125:
case 3330:
case 624:
case 929:
case 768:
case 2377:
case 375:
case 1422:
case 460:
case 2115:
case 1128:
case 3445:
case 1412:
case 205:
case 457:
case 1935:
case 743:
case 2543:
case 714:
case 296:
case 3233:
case 2320:
case 1126:
case 1284:
case 777:
case 539:
case 3850:
case 2091:
case 2403:
case 1202:
case 2936:
case 1305:
case 1116:
case 2579:
case 746:
case 1965:
case 938:
case 3594:
case 1071:
case 3360:
case 2056:
case 392:
case 230:
case 2370:
case 3703:
case 657:
case 3978:
case 2151:
case 660:
case 3109:
case 1383:
case 2003:
case 2529:
case 771:
case 1182:
case 1107:
case 424:
case 1567:
case 3995:
case 553:
case 2889:
case 891:
case 3569:
case 1840:
case 4044:
case 706:
case 4047:
case 2250:
case 1390:
case 3981:
case 2833:
case 1731:
case 2198:
case 3364:
case 174:
case 510:
case 1668:
case 795:
case 2353:
case 780:
case 96:
case 2665:
case 1369:
case 2492:
case 3583:
case 2314:
case 1859:
case 1636:
case 451:
case 2863:
case 1022:
case 2175:
case 3907:
case 452:
case 3904:
case 166:
case 1537:
case 1748:
case 556:
case 219:
case 703:
case 1012:
case 1486:
case 1775:
case 3864:
case 165:
case 438:
case 1145:
case 246:
case 3540:
case 179:
case 3277:
case 876:
case 2230:
case 2853:
case 3418:
case 730:
case 2903:
case 341:
case 2299:
case 214:
case 796:
case 3357:
case 277:
case 2131:
case 2655:
case 801:
case 864:
case 1359:
case 1752:
case 2468:
case 342:
case 1921:
case 307:
case 1658:
case 2824:
case 3354:
case 873:
case 2260:
case 1839:
case 429:
case 268:
case 3121:
case 818:
case 51:
case 2466:
case 2671:
case 3837:
case 2870:
case 2441:
case 3111:
case 957:
case 1883:
case 3559:
case 1340:
case 2438:
case 3007:
case 3082:
case 3416:
case 2704:
case 1685:
case 793:
case 1435:
case 1912:
case 3426:
case 2132:
case 2161:
case 3004:
case 820:
case 373:
case 2958:
case 2992:
case 534:
case 2810:
case 2611:
case 2041:
case 952:
case 719:
case 1955:
case 203:
case 3766:
case 745:
case 2726:
case 3016:
case 3646:
case 2234:
case 1603:
case 1972:
case 1409:
case 3544:
case 1035:
case 2237:
case 3270:
case 2716:
case 3738:
case 3404:
case 3661:
case 3476:
case 3632:
case 3000:
case 1347:
case 4090:
case 1725:
case 1894:
case 3217:
case 3028:
case 1897:
case 3742:
case 3214:
case 2036:
case 3648:
case 3018:
case 3899:
case 376:
case 3768:
case 3662:
case 2877:
case 3631:
case 3495:
case 3830:
case 302:
case 2068:
case 2806:
case 1550:
case 2874:
case 2956:
case 629:
case 23:
case 842:
case 347:
case 582:
case 2435:
case 640:
case 3051:
case 2912:
case 1333:
case 486:
case 1707:
case 3384:
case 427:
case 2513:
case 1132:
case 3709:
case 3387:
case 3302:
case 654:
case 581:
case 2340:
case 1146:
case 1389:
case 2009:
case 4077:
case 1441:
case 394:
case 2883:
case 143:
case 2656:
case 3096:
case 1501:
case 2554:
case 1870:
case 1671:
case 2921:
case 3301:
case 3098:
case 3819:
case 4020:
case 1781:
case 483:
case 570:
case 1363:
case 1827:
case 2911:
case 1655:
case 1778:
case 1502:
case 2869:
case 3946:
case 1148:
case 1436:
case 1686:
case 1442:
case 2243:
case 265:
case 2775:
case 309:
case 1584:
case 2145:
case 815:
case 146:
case 635:
case 3765:
case 1806:
case 1068:
case 1264:
case 3158:
case 2971:
case 3843:
case 3498:
case 1267:
case 523:
case 3879:
case 1700:
case 1728:
case 2715:
case 748:
case 1036:
case 936:
case 1985:
case 1991:
case 2219:
case 349:
case 763:
case 3380:
case 106:
case 3645:
case 440:
case 1718:
case 1716:
case 3191:
case 600:
case 2035:
case 195:
case 2986:
case 3451:
case 2549:
case 587:
case 69:
case 1726:
case 2573:
case 2409:
case 1234:
case 2972:
case 1041:
case 1611:
case 766:
case 4027:
case 1593:
case 2805:
case 894:
case 2955:
case 3496:
case 1820:
case 1621:
case 3156:
case 1808:
case 3290:
case 35:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747314001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,];
var gg_b = "1747314001/";

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
