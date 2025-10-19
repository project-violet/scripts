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
case 3379:
case 2874:
case 1902:
case 3453:
case 824:
case 1358:
case 1486:
case 3900:
case 3092:
case 2465:
case 2847:
case 1090:
case 3569:
case 719:
case 326:
case 3049:
case 2646:
case 3777:
case 880:
case 3783:
case 1834:
case 1418:
case 2675:
case 3313:
case 1371:
case 1756:
case 1863:
case 1327:
case 1898:
case 1199:
case 639:
case 1699:
case 405:
case 2388:
case 3780:
case 2456:
case 2608:
case 3007:
case 2718:
case 933:
case 4016:
case 3304:
case 9:
case 436:
case 1860:
case 160:
case 1997:
case 457:
case 692:
case 2597:
case 171:
case 569:
case 194:
case 2292:
case 2249:
case 3437:
case 1452:
case 3903:
case 254:
case 2316:
case 572:
case 1765:
case 1068:
case 2429:
case 1548:
case 493:
case 512:
case 828:
case 3251:
case 699:
case 1165:
case 725:
case 2186:
case 2887:
case 2571:
case 3454:
case 1226:
case 3089:
case 2686:
case 323:
case 2442:
case 3595:
case 155:
case 3743:
case 28:
case 4061:
case 170:
case 63:
case 2558:
case 3979:
case 1081:
case 3180:
case 1531:
case 2222:
case 905:
case 3314:
case 1958:
case 2708:
case 3300:
case 1182:
case 2005:
case 2931:
case 3680:
case 4006:
case 3621:
case 3144:
case 849:
case 3740:
case 2217:
case 762:
case 1020:
case 3121:
case 433:
case 1408:
case 56:
case 1656:
case 3177:
case 881:
case 3183:
case 3303:
case 3677:
case 2746:
case 1129:
case 779:
case 258:
case 1094:
case 632:
case 3791:
case 2289:
case 3467:
case 3845:
case 2870:
case 2988:
case 1038:
case 993:
case 496:
case 2051:
case 2652:
case 3904:
case 946:
case 218:
case 1270:
case 122:
case 268:
case 230:
case 3403:
case 2702:
case 3950:
case 2228:
case 2011:
case 3367:
case 521:
case 3823:
case 752:
case 3521:
case 3064:
case 2230:
case 1497:
case 624:
case 1616:
case 885:
case 1556:
case 788:
case 3577:
case 3033:
case 917:
case 2956:
case 3881:
case 2461:
case 3820:
case 387:
case 151:
case 1219:
case 165:
case 4042:
case 1822:
case 2233:
case 3195:
case 115:
case 477:
case 3057:
case 1582:
case 1631:
case 2518:
case 2658:
case 3354:
case 3030:
case 2982:
case 2264:
case 3894:
case 1565:
case 2399:
case 2127:
case 2965:
case 3725:
case 3028:
case 1287:
case 2627:
case 721:
case 552:
case 3838:
case 3414:
case 1375:
case 2171:
case 4035:
case 2586:
case 64:
case 446:
case 3739:
case 3404:
case 3410:
case 2771:
case 3967:
case 1849:
case 720:
case 1892:
case 1648:
case 3125:
case 1352:
case 2055:
case 900:
case 1908:
case 1731:
case 3824:
case 1209:
case 467:
case 2197:
case 628:
case 3063:
case 175:
case 417:
case 3841:
case 290:
case 2697:
case 3543:
case 784:
case 899:
case 2575:
case 977:
case 4082:
case 1807:
case 3479:
case 2263:
case 2999:
case 1062:
case 1542:
case 1161:
case 3060:
case 1599:
case 2234:
case 3255:
case 129:
case 1085:
case 2102:
case 681:
case 1471:
case 1788:
case 3413:
case 2382:
case 1318:
case 1247:
case 2001:
case 3954:
case 1946:
case 759:
case 278:
case 3868:
case 2546:
case 231:
case 1274:
case 4065:
case 1427:
case 2066:
case 3669:
case 3200:
case 3593:
case 1202:
case 789:
case 3568:
case 894:
case 506:
case 3378:
case 2770:
case 272:
case 2003:
case 1835:
case 3411:
case 651:
case 1359:
case 1473:
case 2674:
case 1899:
case 3:
case 1326:
case 14:
case 4022:
case 1842:
case 1698:
case 3915:
case 2261:
case 735:
case 219:
case 1419:
case 810:
case 3351:
case 2875:
case 3732:
case 860:
case 838:
case 2907:
case 269:
case 1634:
case 644:
case 706:
case 1764:
case 1996:
case 3843:
case 754:
case 589:
case 3662:
case 3061:
case 1160:
case 27:
case 1660:
case 3162:
case 2596:
case 2389:
case 3884:
case 622:
case 2457:
case 2109:
case 1297:
case 3203:
case 3590:
case 1069:
case 2014:
case 2787:
case 2000:
case 2248:
case 1470:
case 535:
case 78:
case 2010:
case 3315:
case 629:
case 2004:
case 2886:
case 2187:
case 3538:
case 3785:
case 558:
case 2307:
case 1227:
case 1926:
case 1865:
case 3978:
case 3880:
case 2559:
case 540:
case 3016:
case 2619:
case 1882:
case 3455:
case 1258:
case 1164:
case 834:
case 2922:
case 181:
case 2498:
case 21:
case 3279:
case 758:
case 279:
case 1409:
case 3176:
case 3877:
case 870:
case 3883:
case 3632:
case 1657:
case 3905:
case 861:
case 2079:
case 2917:
case 1856:
case 1798:
case 1095:
case 3844:
case 3523:
case 782:
case 3821:
case 675:
case 2013:
case 2170:
case 212:
case 2670:
case 426:
case 3466:
case 3145:
case 1212:
case 4092:
case 671:
case 1888:
case 2812:
case 3972:
case 660:
case 574:
case 2928:
case 3065:
case 3545:
case 3250:
case 2449:
case 2930:
case 3082:
case 3301:
case 768:
case 730:
case 865:
case 987:
case 1530:
case 3181:
case 1080:
case 851:
case 3576:
case 718:
case 1707:
case 1816:
case 3366:
case 1496:
case 694:
case 1374:
case 3056:
case 4034:
case 1083:
case 2858:
case 1077:
case 1831:
case 2159:
case 2964:
case 3724:
case 4063:
case 3120:
case 317:
case 3741:
case 185:
case 774:
case 1044:
case 791:
case 2050:
case 1973:
case 2334:
case 3911:
case 2265:
case 3138:
case 568:
case 2037:
case 3638:
case 2363:
case 2126:
case 2398:
case 3790:
case 1749:
case 3253:
case 2626:
case 3029:
case 3694:
case 2726:
case 1848:
case 1091:
case 4028:
case 3825:
case 1192:
case 3690:
case 634:
case 2054:
case 3585:
case 3738:
case 790:
case 2357:
case 3267:
case 2196:
case 2897:
case 3720:
case 2960:
case 3562:
case 2696:
case 1040:
case 3141:
case 220:
case 545:
case 3336:
case 4030:
case 2759:
case 3372:
case 4057:
case 2998:
case 2963:
case 3723:
case 4064:
case 1275:
case 1598:
case 2242:
case 731:
case 1373:
case 1459:
case 875:
case 778:
case 1084:
case 1806:
case 1534:
case 3478:
case 2235:
case 3254:
case 3193:
case 1426:
case 13:
case 564:
case 1974:
case 611:
case 2802:
case 3451:
case 3420:
case 2275:
case 909:
case 1299:
case 2717:
case 3555:
case 2806:
case 2534:
case 3008:
case 3705:
case 3115:
case 890:
case 1934:
case 1242:
case 814:
case 3494:
case 23:
case 1235:
case 1364:
case 3438:
case 2319:
case 3814:
case 4073:
case 1802:
case 4087:
case 316:
case 1333:
case 2789:
case 2974:
case 3291:
case 3566:
case 3046:
case 2649:
case 986:
case 2848:
case 1726:
case 2149:
case 750:
case 878:
case 3803:
case 402:
case 3376:
case 831:
case 3751:
case 1330:
case 775:
case 3423:
case 3345:
case 2040:
case 682:
case 1696:
case 2560:
case 1960:
case 2208:
case 2909:
case 1509:
case 2370:
case 232:
case 658:
case 120:
case 2831:
case 3678:
case 1858:
case 2533:
case 2077:
case 2919:
case 1659:
case 409:
case 3178:
case 121:
case 635:
case 1407:
case 1519:
case 2374:
case 1933:
case 2044:
case 29:
case 285:
case 2564:
case 1964:
case 15:
case 1573:
case 751:
case 1587:
case 3052:
case 1037:
case 1265:
case 1334:
case 239:
case 830:
case 1050:
case 3151:
case 2973:
case 544:
case 689:
case 1626:
case 1398:
case 486:
case 2309:
case 3086:
case 3810:
case 2189:
case 2970:
case 1053:
case 2888:
case 874:
case 1492:
case 2816:
case 3932:
case 2530:
case 2080:
case 515:
case 3976:
case 722:
case 3018:
case 565:
case 1930:
case 3105:
case 3277:
case 2496:
case 654:
case 3441:
case 606:
case 2157:
case 3505:
case 2856:
case 1917:
case 570:
case 88:
case 3058:
case 561:
case 2734:
case 2409:
case 179:
case 3755:
case 2517:
case 1349:
case 3923:
case 3390:
case 1216:
case 228:
case 162:
case 1670:
case 3850:
case 2589:
case 3485:
case 3672:
case 112:
case 1989:
case 3837:
case 707:
case 1774:
case 734:
case 1288:
case 2628:
case 3341:
case 1747:
case 2829:
case 2227:
case 1307:
case 2474:
case 3611:
case 803:
case 858:
case 598:
case 711:
case 1173:
case 1187:
case 1010:
case 3701:
case 3239:
case 308:
case 353:
case 2271:
case 2633:
case 507:
case 249:
case 1709:
case 1818:
case 2882:
case 2133:
case 3295:
case 631:
case 1463:
case 11:
case 2664:
case 281:
case 1922:
case 2164:
case 16:
case 2258:
case 534:
case 2760:
case 397:
case 3393:
case 280:
case 2660:
case 794:
case 17:
case 3941:
case 2160:
case 2996:
case 618:
case 1430:
case 3476:
case 841:
case 1457:
case 427:
case 2733:
case 2549:
case 2069:
case 1949:
case 3990:
case 3867:
case 3445:
case 2470:
case 242:
case 760:
case 1317:
case 835:
case 3711:
case 3101:
case 1322:
case 1647:
case 3993:
case 1147:
case 4026:
case 2728:
case 3320:
case 337:
case 594:
case 1674:
case 304:
case 2473:
case 2487:
case 2359:
case 1003:
case 1174:
case 1464:
case 2698:
case 674:
case 3097:
case 2163:
case 2326:
case 1206:
case 2899:
case 169:
case 1907:
case 2634:
case 1433:
case 2757:
case 3515:
case 538:
case 2134:
case 2419:
case 2507:
case 2730:
case 2807:
case 1298:
case 2716:
case 2975:
case 2606:
case 2458:
case 1431:
case 3815:
case 1575:
case 73:
case 229:
case 1942:
case 2599:
case 2161:
case 2542:
case 3940:
case 145:
case 3439:
case 2318:
case 3710:
case 1001:
case 1382:
case 973:
case 61:
case 3614:
case 2788:
case 3380:
case 3554:
case 2535:
case 1102:
case 2427:
case 2274:
case 178:
case 53:
case 164:
case 3713:
case 3603:
case 114:
case 916:
case 3321:
case 3047:
case 732:
case 2648:
case 679:
case 2148:
case 1260:
case 309:
case 1055:
case 1758:
case 1508:
case 3262:
case 947:
case 2352:
case 3779:
case 3984:
case 275:
case 3943:
case 1197:
case 599:
case 1233:
case 2822:
case 672:
case 2219:
case 1461:
case 4075:
case 1982:
case 22:
case 3878:
case 3980:
case 3469:
case 1627:
case 2273:
case 976:
case 2045:
case 1127:
case 852:
case 3340:
case 2748:
case 2565:
case 888:
case 3113:
case 3070:
case 2375:
case 2986:
case 785:
case 1072:
case 1671:
case 130:
case 2270:
case 118:
case 3343:
case 1929:
case 2308:
case 1011:
case 913:
case 3087:
case 3714:
case 3073:
case 244:
case 1112:
case 3610:
case 3245:
case 3550:
case 3604:
case 2889:
case 2497:
case 792:
case 3944:
case 447:
case 30:
case 85:
case 585:
case 1956:
case 4008:
case 3805:
case 3983:
case 3977:
case 684:
case 3443:
case 3325:
case 825:
case 549:
case 1217:
case 1348:
case 581:
case 3484:
case 1775:
case 86:
case 1078:
case 997:
case 2516:
case 234:
case 3059:
case 2408:
case 81:
case 1289:
case 103:
case 620:
case 2094:
case 158:
case 2397:
case 1746:
case 3150:
case 1051:
case 1652:
case 2735:
case 1512:
case 3872:
case 456:
case 3504:
case 3137:
case 3836:
case 953:
case 3510:
case 1361:
case 3238:
case 2165:
case 812:
case 1527:
case 2665:
case 2927:
case 659:
case 3767:
case 862:
case 3294:
case 1306:
case 1435:
case 1571:
case 3939:
case 1186:
case 3513:
case 211:
case 2023:
case 195:
case 261:
case 2259:
case 1442:
case 2864:
case 2182:
case 1931:
case 1118:
case 1819:
case 2958:
case 2475:
case 2081:
case 2833:
case 3224:
case 2782:
case 1718:
case 3241:
case 2312:
case 724:
case 1597:
case 742:
case 2997:
case 3421:
case 1316:
case 2452:
case 106:
case 780:
case 3503:
case 1292:
case 3801:
case 2548:
case 2068:
case 2093:
case 3925:
case 3866:
case 1948:
case 453:
case 408:
case 956:
case 74:
case 3154:
case 3293:
case 1331:
case 3268:
case 524:
case 2358:
case 2486:
case 4071:
case 65:
case 2902:
case 2635:
case 3514:
case 3737:
case 621:
case 135:
case 1847:
case 3969:
case 1175:
case 2371:
case 2756:
case 1482:
case 87:
case 2834:
case 189:
case 2506:
case 3339:
case 2561:
case 141:
case 2199:
case 2041:
case 2863:
case 256:
case 2772:
case 1411:
case 204:
case 1378:
case 2736:
case 1568:
case 3202:
case 3025:
case 1200:
case 3728:
case 2320:
case 237:
case 1732:
case 2515:
case 938:
case 2655:
case 3634:
case 910:
case 1915:
case 3730:
case 1351:
case 3698:
case 3663:
case 3899:
case 133:
case 3326:
case 34:
case 1:
case 4020:
case 3297:
case 1006:
case 1884:
case 3733:
case 2432:
case 461:
case 2941:
case 455:
case 380:
case 1541:
case 411:
case 1662:
case 3996:
case 1843:
case 1436:
case 2601:
case 1185:
case 2002:
case 3470:
case 342:
case 1472:
case 2101:
case 3069:
case 2666:
case 324:
case 1590:
case 3549:
case 1203:
case 2990:
case 1594:
case 2994:
case 727:
case 4068:
case 3926:
case 1785:
case 1538:
case 494:
case 2853:
case 3227:
case 2551:
case 3474:
case 2938:
case 1315:
case 2701:
case 381:
case 157:
case 1762:
case 460:
case 934:
case 3522:
case 3760:
case 2368:
case 3258:
case 3882:
case 2578:
case 3633:
case 349:
case 136:
case 1880:
case 907:
case 3133:
case 2295:
case 1523:
case 4041:
case 1821:
case 2923:
case 4024:
case 955:
case 3630:
case 3856:
case 2505:
case 1132:
case 1176:
case 2058:
case 3734:
case 3409:
case 3517:
case 911:
case 1632:
case 3657:
case 3130:
case 1466:
case 3628:
case 3212:
case 3829:
case 3396:
case 1210:
case 4090:
case 2850:
case 3039:
case 2172:
case 2837:
case 2071:
case 3528:
case 2362:
case 2490:
case 1065:
case 1793:
case 1768:
case 1972:
case 2536:
case 3689:
case 276:
case 392:
case 1936:
case 3496:
case 92:
case 1623:
case 1366:
case 2932:
case 2244:
case 951:
case 3117:
case 887:
case 2018:
case 1301:
case 2221:
case 1082:
case 2715:
case 2105:
case 915:
case 39:
case 450:
case 385:
case 1895:
case 1741:
case 167:
case 1620:
case 2280:
case 1724:
case 702:
case 3622:
case 475:
case 3919:
case 783:
case 2678:
case 3374:
case 1029:
case 2493:
case 263:
case 2468:
case 1790:
case 448:
case 213:
case 1194:
case 2651:
case 1638:
case 146:
case 339:
case 3987:
case 2151:
case 3973:
case 1035:
case 1585:
case 2376:
case 2751:
case 2046:
case 3649:
case 4045:
case 1690:
case 3149:
case 1190:
case 586:
case 3692:
case 1966:
case 1405:
case 2481:
case 929:
case 2962:
case 3722:
case 2423:
case 1624:
case 1562:
case 1641:
case 1124:
case 3806:
case 2615:
case 950:
case 3373:
case 975:
case 399:
case 1311:
case 3459:
case 3563:
case 3861:
case 247:
case 509:
case 3043:
case 100:
case 3319:
case 266:
case 2438:
case 3246:
case 3789:
case 2291:
case 3974:
case 444:
case 3426:
case 33:
case 1668:
case 143:
case 422:
case 3947:
case 1193:
case 1254:
case 1569:
case 3090:
case 1191:
case 1049:
case 2969:
case 3358:
case 2293:
case 2154:
case 1900:
case 2268:
case 924:
case 1453:
case 4039:
case 2654:
case 3142:
case 3024:
case 2096:
case 4095:
case 1140:
case 3898:
case 3041:
case 756:
case 3327:
case 704:
case 3371:
case 3834:
case 1777:
case 2339:
case 1783:
case 980:
case 371:
case 3997:
case 360:
case 3860:
case 2421:
case 1310:
case 833:
case 2224:
case 1684:
case 94:
case 3312:
case 449:
case 1780:
case 2241:
case 3068:
case 504:
case 2925:
case 896:
case 3548:
case 556:
case 2667:
case 2866:
case 2167:
case 2753:
case 1903:
case 1437:
case 2801:
case 537:
case 797:
case 1913:
case 1539:
case 600:
case 2294:
case 2153:
case 3971:
case 2939:
case 1454:
case 3165:
case 3927:
case 2767:
case 928:
case 424:
case 3475:
case 3081:
case 3531:
case 3682:
case 1278:
case 370:
case 311:
case 355:
case 3864:
case 1743:
case 3259:
case 1832:
case 3857:
case 1683:
case 2223:
case 1677:
case 2484:
case 3830:
case 3408:
case 981:
case 3516:
case 334:
case 44:
case 2325:
case 1205:
case 307:
case 1121:
case 3742:
case 1144:
case 949:
case 3735:
case 2754:
case 677:
case 3038:
case 2872:
case 893:
case 553:
case 2510:
case 3912:
case 2836:
case 3094:
case 4025:
case 1791:
case 3828:
case 3129:
case 2537:
case 2073:
case 563:
case 2110:
case 3308:
case 1937:
case 2610:
case 1236:
case 2425:
case 2343:
case 1033:
case 3817:
case 1881:
case 499:
case 2019:
case 2977:
case 4084:
case 3556:
case 776:
case 3497:
case 3761:
case 20:
case 1367:
case 4043:
case 2232:
case 2944:
case 3131:
case 1354:
case 3918:
case 713:
case 3076:
case 3582:
case 2980:
case 315:
case 351:
case 1820:
case 4040:
case 1695:
case 3402:
case 633:
case 2113:
case 6:
case 1639:
case 2553:
case 3986:
case 2851:
case 4091:
case 1211:
case 2469:
case 3287:
case 2340:
case 3748:
case 576:
case 566:
case 3892:
case 3648:
case 2567:
case 2047:
case 1201:
case 3148:
case 1625:
case 3849:
case 2344:
case 2074:
case 605:
case 2103:
case 2713:
case 1266:
case 439:
case 3412:
case 2383:
case 2603:
case 843:
case 1410:
case 999:
case 1098:
case 1063:
case 1543:
case 4044:
case 350:
case 49:
case 773:
case 1350:
case 2984:
case 4083:
case 2262:
case 3599:
case 3161:
case 1540:
case 1255:
case 3661:
case 3542:
case 766:
case 2940:
case 693:
case 3975:
case 3807:
case 3716:
case 877:
case 1868:
case 1591:
case 3318:
case 2710:
case 2439:
case 2704:
case 286:
case 3471:
case 3085:
case 2554:
case 657:
case 2600:
case 747:
case 1413:
case 345:
case 1495:
case 1940:
case 3234:
case 2540:
case 2060:
case 3365:
case 1009:
case 577:
case 653:
case 608:
case 1815:
case 3298:
case 2479:
case 3263:
case 2353:
case 2169:
case 2591:
case 2868:
case 488:
case 1991:
case 984:
case 331:
case 2413:
case 3712:
case 3102:
case 186:
case 1380:
case 873:
case 1439:
case 700:
case 3382:
case 697:
case 1710:
case 1344:
case 3727:
case 2967:
case 2125:
case 816:
case 314:
case 2739:
case 1383:
case 2266:
case 777:
case 1943:
case 3896:
case 3197:
case 2824:
case 3329:
case 390:
case 45:
case 2543:
case 1262:
case 3508:
case 1984:
case 2337:
case 1779:
case 2350:
case 421:
case 3055:
case 2584:
case 109:
case 3406:
case 3658:
case 2057:
case 3518:
case 3158:
case 3335:
case 637:
case 3859:
case 3461:
case 3797:
case 391:
case 767:
case 374:
case 2414:
case 3671:
case 4054:
case 3036:
case 2639:
case 717:
case 1113:
case 1703:
case 3171:
case 1340:
case 3826:
case 2894:
case 952:
case 1469:
case 3342:
case 2211:
case 3965:
case 2725:
case 2028:
case 3702:
case 863:
case 1700:
case 3011:
case 3612:
case 1537:
case 701:
case 1073:
case 1343:
case 2272:
case 3929:
case 368:
case 546:
case 1983:
case 1019:
case 3956:
case 2881:
case 2033:
case 2583:
case 3257:
case 1944:
case 10:
case 3230:
case 921:
case 1276:
case 2177:
case 91:
case 2183:
case 897:
case 1223:
case 96:
case 3775:
case 3348:
case 340:
case 2621:
case 2644:
case 1443:
case 3152:
case 1137:
case 1836:
case 1650:
case 593:
case 853:
case 3870:
case 382:
case 1150:
case 3051:
case 3652:
case 3512:
case 1754:
case 2910:
case 3746:
case 2791:
case 1026:
case 358:
case 1653:
case 3571:
case 3435:
case 2454:
case 647:
case 1811:
case 1513:
case 1939:
case 223:
case 1294:
case 3686:
case 2913:
case 3306:
case 1491:
case 1767:
case 3361:
case 1238:
case 912:
case 736:
case 3618:
case 3558:
case 3708:
case 3118:
case 3005:
case 3931:
case 1220:
case 127:
case 1579:
case 2314:
case 3819:
case 47:
case 2743:
case 3442:
case 2595:
case 616:
case 3499:
case 1995:
case 395:
case 969:
case 2143:
case 2862:
case 2184:
case 2007:
case 3388:
case 2780:
case 3456:
case 3608:
case 2304:
case 1483:
case 2684:
case 1224:
case 3809:
case 3718:
case 2310:
case 425:
case 856:
case 1167:
case 804:
case 2525:
case 1667:
case 1925:
case 972:
case 1503:
case 2450:
case 4010:
case 2437:
case 1290:
case 354:
case 837:
case 4004:
case 3249:
case 2885:
case 1753:
case 3465:
case 3847:
case 2691:
case 226:
case 2049:
case 3646:
case 2191:
case 335:
case 1500:
case 1654:
case 1514:
case 3752:
case 3874:
case 3331:
case 7:
case 3502:
case 1293:
case 412:
case 341:
case 2744:
case 3207:
case 2215:
case 2721:
case 2640:
case 4079:
case 663:
case 3675:
case 3482:
case 1339:
case 2777:
case 389:
case 3175:
case 3906:
case 990:
case 1008:
case 3934:
case 2955:
case 3242:
case 3299:
case 1615:
case 2478:
case 2781:
case 359:
case 3422:
case 200:
case 3998:
case 3963:
case 2723:
case 1420:
case 147:
case 116:
case 4011:
case 1800:
case 166:
case 1814:
case 2451:
case 3574:
case 2168:
case 3235:
case 2193:
case 964:
case 430:
case 2693:
case 2668:
case 418:
case 1751:
case 384:
case 2901:
case 931:
case 2585:
case 2738:
case 4072:
case 3489:
case 2267:
case 474:
case 2966:
case 2190:
case 2794:
case 2690:
case 3417:
case 1778:
case 2405:
case 2720:
case 3328:
case 3960:
case 2562:
case 1345:
case 1423:
case 2099:
case 3796:
case 2120:
case 3282:
case 490:
case 3964:
case 2724:
case 267:
case 2741:
case 321:
case 1178:
case 4055:
case 1879:
case 3407:
case 2415:
case 3858:
case 113:
case 3363:
case 3126:
case 1468:
case 1493:
case 3626:
case 2029:
case 2911:
case 930:
case 968:
case 2138:
case 464:
case 2839:
case 3334:
case 414:
case 246:
case 3871:
case 918:
case 1511:
case 787:
case 1651:
case 3492:
case 2545:
case 2250:
case 388:
case 3928:
case 2768:
case 2065:
case 2793:
case 1945:
case 1490:
case 478:
case 974:
case 1362:
case 4001:
case 2936:
case 176:
case 1572:
case 3812:
case 1536:
case 1804:
case 3229:
case 1086:
case 1810:
case 352:
case 2366:
case 2123:
case 201:
case 2623:
case 445:
case 2681:
case 3930:
case 2082:
case 2532:
case 1105:
case 991:
case 1018:
case 2576:
case 1385:
case 3957:
case 1932:
case 2181:
case 1244:
case 3349:
case 1390:
case 827:
case 1923:
case 205:
case 3460:
case 2905:
case 2581:
case 379:
case 2176:
case 1058:
case 98:
case 1505:
case 2676:
case 609:
case 3288:
case 1672:
case 1071:
case 312:
case 1485:
case 3013:
case 3774:
case 1136:
case 1636:
case 1994:
case 3173:
case 3004:
case 3187:
case 3010:
case 1701:
case 454:
case 958:
case 903:
case 3673:
case 2538:
case 2088:
case 1853:
case 2785:
case 1393:
case 3231:
case 3498:
case 3463:
case 2279:
case 2762:
case 1295:
case 2016:
case 2978:
case 2880:
case 3559:
case 3434:
case 3709:
case 1578:
case 3818:
case 940:
case 1432:
case 3457:
case 2006:
case 4005:
case 3430:
case 3808:
case 941:
case 3719:
case 48:
case 495:
case 2662:
case 2541:
case 1924:
case 2162:
case 3596:
case 1941:
case 37:
case 2305:
case 3787:
case 1002:
case 526:
case 3317:
case 3248:
case 1166:
case 1867:
case 1990:
case 3428:
case 3003:
case 2378:
case 1269:
case 3674:
case 1854:
case 1772:
case 2214:
case 906:
case 1993:
case 3147:
case 3846:
case 2048:
case 2891:
case 3647:
case 3322:
case 2568:
case 726:
case 4078:
case 2351:
case 2915:
case 3261:
case 1338:
case 3433:
case 3907:
case 3875:
case 2732:
case 440:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760850001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,];
var gg_b = "1760850001/";

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
