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
case 1727:
case 2961:
case 3018:
case 432:
case 1767:
case 2921:
case 911:
case 2340:
case 2787:
case 1548:
case 3408:
case 619:
case 1574:
case 1981:
case 698:
case 832:
case 3713:
case 836:
case 3972:
case 3928:
case 4032:
case 2959:
case 1845:
case 3592:
case 1184:
case 2142:
case 1777:
case 368:
case 3895:
case 1542:
case 2971:
case 2584:
case 1564:
case 2345:
case 3141:
case 3012:
case 3962:
case 3598:
case 1343:
case 837:
case 3922:
case 4038:
case 3944:
case 2409:
case 2537:
case 3326:
case 1240:
case 3366:
case 780:
case 398:
case 2435:
case 2019:
case 435:
case 2951:
case 2671:
case 2929:
case 2969:
case 3295:
case 3644:
case 835:
case 3622:
case 2154:
case 828:
case 2706:
case 3376:
case 1681:
case 1554:
case 2661:
case 578:
case 1245:
case 2621:
case 1694:
case 2659:
case 3668:
case 2243:
case 668:
case 2599:
case 3886:
case 3290:
case 1137:
case 3952:
case 1330:
case 1833:
case 1758:
case 3789:
case 2055:
case 2538:
case 2809:
case 4091:
case 701:
case 1096:
case 2610:
case 3957:
case 3677:
case 178:
case 514:
case 1309:
case 759:
case 765:
case 797:
case 2830:
case 277:
case 2615:
case 3667:
case 2801:
case 2065:
case 1772:
case 2788:
case 1913:
case 1547:
case 795:
case 3539:
case 3407:
case 2025:
case 767:
case 3314:
case 1445:
case 3794:
case 3781:
case 1063:
case 3808:
case 275:
case 2915:
case 1722:
case 766:
case 2209:
case 1440:
case 762:
case 2020:
case 2235:
case 404:
case 1744:
case 630:
case 2060:
case 1778:
case 3103:
case 3802:
case 1233:
case 3657:
case 3495:
case 3597:
case 848:
case 804:
case 645:
case 1429:
case 390:
case 420:
case 342:
case 820:
case 111:
case 3357:
case 1215:
case 3054:
case 209:
case 1479:
case 1766:
case 736:
case 347:
case 1459:
case 1518:
case 2707:
case 3048:
case 914:
case 1901:
case 3206:
case 2310:
case 3887:
case 690:
case 1136:
case 2041:
case 1461:
case 3743:
case 1421:
case 1756:
case 2633:
case 1793:
case 2315:
case 647:
case 3482:
case 2504:
case 3042:
case 3367:
case 91:
case 1609:
case 3914:
case 1313:
case 480:
case 1471:
case 2881:
case 3344:
case 859:
case 3378:
case 1039:
case 2894:
case 3362:
case 865:
case 1005:
case 897:
case 3585:
case 459:
case 686:
case 303:
case 3160:
case 2003:
case 465:
case 3888:
case 3523:
case 1000:
case 3368:
case 401:
case 2289:
case 3328:
case 2702:
case 625:
case 1871:
case 1410:
case 3372:
case 1229:
case 638:
case 892:
case 3183:
case 1269:
case 3170:
case 3956:
case 3993:
case 1251:
case 2117:
case 801:
case 3165:
case 1394:
case 978:
case 2361:
case 326:
case 840:
case 3573:
case 866:
case 1851:
case 627:
case 3282:
case 386:
case 3709:
case 382:
case 603:
case 2640:
case 3553:
case 2889:
case 2146:
case 1869:
case 3656:
case 1271:
case 685:
case 3976:
case 1259:
case 622:
case 1389:
case 895:
case 867:
case 3288:
case 3406:
case 2329:
case 387:
case 1546:
case 325:
case 467:
case 3155:
case 338:
case 1261:
case 2294:
case 1879:
case 1221:
case 1925:
case 2013:
case 3848:
case 1590:
case 3874:
case 1193:
case 2403:
case 2718:
case 3391:
case 1507:
case 1439:
case 3254:
case 3384:
case 2841:
case 2107:
case 800:
case 1655:
case 1975:
case 733:
case 974:
case 2392:
case 1960:
case 1920:
case 1341:
case 3842:
case 2593:
case 2556:
case 1704:
case 1010:
case 2973:
case 2696:
case 1736:
case 2653:
case 1400:
case 2712:
case 2190:
case 510:
case 1126:
case 171:
case 2186:
case 1675:
case 2680:
case 139:
case 2953:
case 33:
case 3242:
case 2576:
case 3719:
case 1292:
case 1176:
case 2241:
case 334:
case 3854:
case 3006:
case 3274:
case 2623:
case 1586:
case 3248:
case 2663:
case 1349:
case 3034:
case 2566:
case 3130:
case 1051:
case 3604:
case 4093:
case 250:
case 1069:
case 605:
case 1029:
case 421:
case 3755:
case 2089:
case 3109:
case 955:
case 493:
case 3135:
case 1079:
case 1239:
case 3454:
case 2102:
case 1492:
case 3783:
case 4066:
case 2397:
case 2441:
case 1114:
case 3847:
case 3474:
case 918:
case 3725:
case 3088:
case 3448:
case 1508:
case 2300:
case 606:
case 1059:
case 72:
case 2803:
case 2717:
case 952:
case 724:
case 4076:
case 1071:
case 1619:
case 481:
case 1231:
case 1498:
case 1303:
case 2514:
case 2305:
case 3775:
case 3442:
case 1502:
case 607:
case 700:
case 833:
case 2106:
case 741:
case 4022:
case 3938:
case 1496:
case 2600:
case 2455:
case 557:
case 1737:
case 3749:
case 2697:
case 2557:
case 1157:
case 4068:
case 3932:
case 4072:
case 2639:
case 3086:
case 1506:
case 1319:
case 552:
case 1603:
case 1534:
case 3218:
case 2450:
case 1423:
case 3741:
case 2905:
case 3818:
case 44:
case 3632:
case 1903:
case 2470:
case 2567:
case 2425:
case 1587:
case 2465:
case 1473:
case 844:
case 3638:
case 2900:
case 3812:
case 1127:
case 3095:
case 1167:
case 971:
case 4058:
case 2577:
case 569:
case 939:
case 3510:
case 2420:
case 408:
case 1784:
case 2219:
case 444:
case 2742:
case 3113:
case 2997:
case 2724:
case 2631:
case 1791:
case 36:
case 2182:
case 169:
case 3703:
case 3817:
case 2865:
case 1162:
case 155:
case 694:
case 2572:
case 3246:
case 1863:
case 1941:
case 910:
case 1360:
case 3699:
case 2380:
case 2992:
case 1375:
case 3559:
case 2883:
case 48:
case 3418:
case 2250:
case 1168:
case 2820:
case 3571:
case 3984:
case 4057:
case 2860:
case 1296:
case 2875:
case 3637:
case 1649:
case 3412:
case 1370:
case 2522:
case 2385:
case 215:
case 2998:
case 884:
case 2544:
case 3194:
case 2578:
case 1273:
case 152:
case 2855:
case 1949:
case 3684:
case 3551:
case 258:
case 1033:
case 3569:
case 424:
case 394:
case 2220:
case 2558:
case 2419:
case 3529:
case 2035:
case 1350:
case 66:
case 1738:
case 1280:
case 781:
case 3189:
case 1263:
case 157:
case 664:
case 2850:
case 2283:
case 199:
case 1158:
case 2396:
case 2353:
case 1285:
case 3579:
case 118:
case 574:
case 2552:
case 2225:
case 1641:
case 216:
case 3664:
case 341:
case 2949:
case 256:
case 2273:
case 3731:
case 300:
case 3179:
case 3642:
case 1419:
case 1035:
case 3346:
case 1558:
case 1220:
case 1009:
case 2853:
case 2896:
case 1275:
case 2350:
case 2263:
case 3954:
case 3674:
case 299:
case 1353:
case 731:
case 1283:
case 2355:
case 1692:
case 2285:
case 443:
case 2732:
case 1265:
case 1225:
case 116:
case 1030:
case 173:
case 1373:
case 2885:
case 834:
case 2178:
case 3594:
case 1411:
case 1870:
case 255:
case 1825:
case 3948:
case 3654:
case 2122:
case 3974:
case 600:
case 2360:
case 1747:
case 3739:
case 2320:
case 1572:
case 434:
case 2941:
case 3705:
case 2375:
case 1883:
case 1992:
case 1568:
case 3171:
case 1820:
case 3942:
case 1363:
case 3797:
case 43:
case 2383:
case 950:
case 2172:
case 1385:
case 2873:
case 1998:
case 1562:
case 3436:
case 1522:
case 2370:
case 1255:
case 3014:
case 2325:
case 3161:
case 1544:
case 3404:
case 2365:
case 83:
case 823:
case 989:
case 515:
case 3513:
case 1939:
case 6:
case 1043:
case 1483:
case 807:
case 681:
case 1567:
case 1811:
case 3312:
case 2485:
case 393:
case 423:
case 2045:
case 2903:
case 1465:
case 407:
case 1748:
case 1900:
case 321:
case 2473:
case 3115:
case 663:
case 806:
case 1420:
case 1577:
case 3056:
case 573:
case 891:
case 764:
case 1724:
case 2480:
case 1631:
case 3318:
case 1134:
case 274:
case 1819:
case 4082:
case 461:
case 512:
case 2453:
case 3236:
case 3:
case 1931:
case 1697:
case 2737:
case 3204:
case 1557:
case 1211:
case 805:
case 1605:
case 3916:
case 2799:
case 517:
case 1639:
case 929:
case 2319:
case 1450:
case 2534:
case 27:
case 1397:
case 1094:
case 2492:
case 1081:
case 3501:
case 1441:
case 2508:
case 644:
case 3072:
case 3785:
case 916:
case 1717:
case 1803:
case 912:
case 431:
case 2911:
case 2619:
case 529:
case 333:
case 2231:
case 1108:
case 3773:
case 64:
case 3912:
case 3062:
case 3780:
case 3022:
case 1514:
case 1339:
case 917:
case 3044:
case 3796:
case 3838:
case 2297:
case 344:
case 150:
case 308:
case 4095:
case 915:
case 1089:
case 3509:
case 3437:
case 3316:
case 1449:
case 73:
case 734:
case 973:
case 4007:
case 3618:
case 1203:
case 1331:
case 149:
case 3133:
case 210:
case 4090:
case 1746:
case 3530:
case 549:
case 4002:
case 1680:
case 706:
case 2431:
case 271:
case 1849:
case 2675:
case 239:
case 3438:
case 864:
case 1953:
case 1996:
case 3354:
case 384:
case 3057:
case 3284:
case 2950:
case 38:
case 2670:
case 2292:
case 2665:
case 86:
case 1241:
case 2625:
case 707:
case 3946:
case 1663:
case 2586:
case 3432:
case 550:
case 2349:
case 2965:
case 3140:
case 705:
case 2925:
case 684:
case 3646:
case 1403:
case 1398:
case 3917:
case 3067:
case 129:
case 3027:
case 783:
case 49:
case 2983:
case 1963:
case 2015:
case 2507:
case 1923:
case 1980:
case 1392:
case 2497:
case 2975:
case 3884:
case 324:
case 494:
case 2595:
case 3374:
case 2010:
case 1556:
case 3237:
case 1249:
case 68:
case 1190:
case 1973:
case 2898:
case 894:
case 2736:
case 1696:
case 790:
case 3244:
case 3695:
case 2851:
case 3222:
case 3262:
case 742:
case 4012:
case 2031:
case 1640:
case 3858:
case 2271:
case 2829:
case 3733:
case 509:
case 2869:
case 3268:
case 551:
case 2546:
case 635:
case 1329:
case 3196:
case 628:
case 3986:
case 3607:
case 1281:
case 747:
case 2221:
case 332:
case 2879:
case 4018:
case 2261:
case 336:
case 975:
case 3525:
case 3252:
case 637:
case 1881:
case 3427:
case 2005:
case 2517:
case 2861:
case 3467:
case 2859:
case 1945:
case 688:
case 3907:
case 3180:
case 3872:
case 3575:
case 1359:
case 632:
case 2000:
case 2714:
case 1289:
case 760:
case 3388:
case 2269:
case 2229:
case 3258:
case 2871:
case 2410:
case 3185:
case 976:
case 2251:
case 335:
case 498:
case 3844:
case 819:
case 3822:
case 1321:
case 2394:
case 3428:
case 3745:
case 2901:
case 1310:
case 3472:
case 785:
case 1813:
case 95:
case 727:
case 4046:
case 1041:
case 1790:
case 1112:
case 2136:
case 2815:
case 2421:
case 3511:
case 3867:
case 2461:
case 830:
case 3444:
case 1633:
case 3387:
case 3478:
case 1315:
case 2512:
case 3091:
case 3740:
case 3462:
case 60:
case 2609:
case 726:
case 3902:
case 1795:
case 3877:
case 2635:
case 3037:
case 2469:
case 3306:
case 3519:
case 2429:
case 1933:
case 3458:
case 2451:
case 3602:
case 3857:
case 304:
case 348:
case 2909:
case 2215:
case 1786:
case 30:
case 3227:
case 2726:
case 109:
case 2479:
case 4017:
case 1213:
case 725:
case 738:
case 3608:
case 3099:
case 1025:
case 1788:
case 1230:
case 2085:
case 2728:
case 3503:
case 1083:
case 847:
case 3721:
case 3606:
case 175:
case 1915:
case 890:
case 442:
case 1209:
case 3456:
case 1060:
case 2778:
case 1235:
case 1782:
case 2744:
case 490:
case 2301:
case 2233:
case 3771:
case 1147:
case 798:
case 3729:
case 380:
case 2330:
case 1538:
case 860:
case 1055:
case 1809:
case 4024:
case 2096:
case 4064:
case 278:
case 1116:
case 719:
case 1835:
case 3751:
case 460:
case 1532:
case 3466:
case 2752:
case 620:
case 3131:
case 177:
case 4074:
case 1333:
case 1201:
case 2138:
case 1830:
case 845:
case 3934:
case 396:
case 426:
case 1537:
case 3549:
case 577:
case 1951:
case 2757:
case 3386:
case 1019:
case 21:
case 1969:
case 3682:
case 695:
case 2433:
case 340:
case 667:
case 301:
case 576:
case 2554:
case 397:
case 1706:
case 365:
case 2245:
case 15:
case 403:
case 2694:
case 214:
case 3866:
case 827:
case 666:
case 1659:
case 1979:
case 4047:
case 485:
case 1599:
case 2994:
case 1340:
case 2727:
case 1961:
case 601:
case 909:
case 438:
case 1787:
case 3198:
case 395:
case 487:
case 1164:
case 3988:
case 4016:
case 1959:
case 692:
case 1679:
case 513:
case 3276:
case 2542:
case 886:
case 3710:
case 1971:
case 3307:
case 1591:
case 3414:
case 2524:
case 575:
case 1345:
case 482:
case 1174:
case 2343:
case 1669:
case 3982:
case 951:
case 665:
case 3893:
case 697:
case 224:
case 3920:
case 2145:
case 3960:
case 4009:
case 417:
case 3497:
case 1864:
case 3400:
case 2237:
case 3010:
case 2374:
case 817:
case 2077:
case 3650:
case 3156:
case 143:
case 3193:
case 2140:
case 2299:
case 3965:
case 412:
case 3590:
case 561:
case 1848:
case 416:
case 2342:
case 979:
case 1254:
case 3015:
case 1087:
case 1391:
case 3892:
case 816:
case 2324:
case 3983:
case 671:
case 22:
case 3405:
case 2364:
case 134:
case 28:
case 3950:
case 3176:
case 473:
case 2432:
case 1416:
case 3683:
case 1337:
case 3349:
case 749:
case 506:
case 3586:
case 4001:
case 3431:
case 415:
case 2837:
case 371:
case 3660:
case 1264:
case 1224:
case 507:
case 2438:
case 2291:
case 789:
case 1135:
case 2618:
case 1816:
case 2832:
case 107:
case 53:
case 1247:
case 1454:
case 3239:
case 1338:
case 3079:
case 2133:
case 3611:
case 4043:
case 24:
case 208:
case 3919:
case 3051:
case 1604:
case 2838:
case 2796:
case 2753:
case 2612:
case 1130:
case 3200:
case 2509:
case 2437:
case 534:
case 1755:
case 191:
case 964:
case 2058:
case 3029:
case 3069:
case 3498:
case 3303:
case 610:
case 233:
case 2912:
case 1904:
case 543:
case 2078:
case 1442:
case 2044:
case 3502:
case 1775:
case 1464:
case 994:
case 1424:
case 3839:
case 2723:
case 105:
case 1847:
case 99:
case 2501:
case 3114:
case 1783:
case 3805:
case 3492:
case 3021:
case 2785:
case 2028:
case 2232:
case 1770:
case 1216:
case 729:
case 3508:
case 1725:
case 1765:
case 943:
case 3799:
case 1932:
case 1218:
case 2026:
case 4094:
case 716:
case 4081:
case 3506:
case 1086:
case 3453:
case 3496:
case 758:
case 374:
case 59:
case 2076:
case 2:
case 717:
case 1749:
case 1212:
case 281:
case 2804:
case 2115:
case 2836:
case 850:
case 2798:
case 3473:
case 3791:
case 1113:
case 56:
case 2792:
case 934:
case 3177:
case 1818:
case 1741:
case 3463:
case 2947:
case 2513:
case 1304:
case 1007:
case 3485:
case 3383:
case 618:
case 3172:
case 3880:
case 2924:
case 906:
case 2159:
case 2942:
case 1984:
case 3325:
case 657:
case 1194:
case 2121:
case 2404:
case 991:
case 1002:
case 2436:
case 2014:
case 3370:
case 1181:
case 2700:
case 923:
case 889:
case 3162:
case 355:
case 2581:
case 3122:
case 1703:
case 3885:
case 369:
case 1521:
case 16:
case 907:
case 3375:
case 652:
case 2705:
case 656:
case 3823:
case 2739:
case 1699:
case 1008:
case 3863:
case 1246:
case 2129:
case 19:
case 357:
case 1846:
case 3263:
case 2954:
case 1999:
case 4013:
case 3641:
case 829:
case 1579:
case 3732:
case 3285:
case 1217:
case 2179:
case 200:
case 579:
case 2642:
case 1684:
case 1937:
case 3949:
case 241:
case 352:
case 2664:
case 2731:
case 3152:
case 2624:
case 3896:
case 3853:
case 2589:
case 3350:
case 655:
case 194:
case 1569:
case 961:
case 3524:
case 2414:
case 1141:
case 266:
case 3564:
case 2036:
case 262:
case 2192:
case 2710:
case 2276:
case 2004:
case 713:
case 168:
case 2390:
case 1944:
case 1978:
case 1658:
case 1922:
case 614:
case 1598:
case 1962:
case 3343:
case 1286:
case 1890:
case 3574:
case 2715:
case 295:
case 3548:
case 2226:
case 3994:
case 947:
case 3184:
case 1928:
case 3191:
case 2395:
case 1713:
case 775:
case 2988:
case 3694:
case 4003:
case 3245:
case 259:
case 314:
case 3554:
case 1376:
case 1149:
case 1290:
case 1886:
case 2866:
case 2256:
case 198:
case 2386:
case 3757:
case 296:
case 960:
case 292:
case 1326:
case 3240:
case 1622:
case 776:
case 3989:
case 1662:
case 1295:
case 2682:
case 31:
case 240:
case 119:
case 3335:
case 3613:
case 4041:
case 2131:
case 3752:
case 2779:
case 519:
case 3516:
case 3309:
case 598:
case 2934:
case 1667:
case 3138:
case 2214:
case 1789:
case 2476:
case 1202:
case 3833:
case 2729:
case 378:
case 1957:
case 3132:
case 3053:
case 3096:
case 1103:
case 982:
case 3722:
case 2814:
case 1495:
case 1977:
case 2105:
case 3233:
case 3301:
case 1017:
case 1505:
case 1314:
case 987:
case 2197:
case 3913:
case 678:
case 1407:
case 3772:
case 2302:
case 2987:
case 1490:
case 3063:
case 568:
case 2761:
case 1794:
case 938:
case 1967:
case 20:
case 2267:
case 3726:
case 1287:
case 3601:
case 1054:
case 311:
case 3930:
case 586:
case 4065:
case 1806:
case 2277:
case 190:
case 3776:
case 3210:
case 3429:
case 2037:
case 146:
case 1614:
case 4075:
case 587:
case 142:
case 4060:
case 2740:
case 2091:
case 998:
case 1024:
case 1367:
case 2422:
case 3512:
case 527:
case 476:
case 1327:
case 2462:
case 2257:
case 503:
case 2478:
case 2387:
case 3810:
case 3471:
case 876:
case 2877:
case 3313:
case 1914:
case 1074:
case 1206:
case 526:
case 2468:
case 2745:
case 3459:
case 1234:
case 3518:
case 2428:
case 2867:
case 2511:
case 3421:
case 877:
case 4050:
case 3461:
case 3136:
case 1183:
case 2995:
case 2388:
case 1372:
case 2520:
case 454:
case 2123:
case 545:
case 2575:
case 1580:
case 2163:
case 3714:
case 1368:
case 3000:
case 3097:
case 126:
case 1125:
case 3394:
case 1165:
case 235:
case 2878:
case 1676:
case 2844:
case 228:
case 3381:
case 1362:
case 2427:
case 3943:
case 3517:
case 3821:
case 1322:
case 2570:
case 3279:
case 2252:
case 2525:
case 3415:
case 3039:
case 1344:
case 2990:
case 2565:
case 85:
case 2382:
case 1175:
case 1888:
case 1523:
case 1701:
case 1563:
case 560:
case 103:
case 3859:
case 930:
case 2153:
case 1406:
case 3546:
case 1358:
case 542:
case 2690:
case 1288:
case 1730:
case 1016:
case 2268:
case 709:
case 3389:
case 4011:
case 3643:
case 3879:
case 3221:
case 590:
case 3261:
case 1155:
case 2222:
case 182:
case 2038:
case 1709:
case 2262:
case 2695:
case 288:
case 2457:
case 1352:
case 2278:
case 1976:
case 1656:
case 2733:
case 1693:
case 237:
case 2858:
case 1150:
case 1553:
case 3031:
case 2730:
case 2288:
case 1690:
case 3369:
case 1196:
case 1272:
case 287:
case 3329:
case 1228:
case 1550:
case 2434:
case 136:
case 3645:
case 2926:
case 225:
case 3351:
case 238:
case 3281:
case 2155:
case 1262:
case 286:
case 1222:
case 3379:
case 1555:
case 2709:
case 2735:
case 1244:
case 2150:
case 2693:
case 1858:
case 1733:
case 3146:
case 2596:
case 920:
case 2553:
case 1258:
case 3702:
case 1560:
case 1388:
case 980:
case 2580:
case 1163:
case 2368:
case 1123:
case 3359:
case 1575:
case 2328:
case 3940:
case 222:
case 3321:
case 226:
case 3361:
case 128:
case 2676:
case 1878:
case 1185:
case 2585:
case 2362:
case 2344:
case 1990:
case 1382:
case 814:
case 1525:
case 2047:
case 1252:
case 2378:
case 227:
case 3371:
case 2175:
case 2523:
case 1907:
case 414:
case 2120:
case 2666:
case 3003:
case 2160:
case 2626:
case 2064:
case 2327:
case 3536:
case 992:
case 1257:
case 2042:
case 2111:
case 2482:
case 1877:
case 2048:
case 1472:
case 3310:
case 2074:
case 651:
case 1428:
case 2234:
case 528:
case 965:
case 1468:
case 2743:
case 1827:
case 3494:
case 1511:
case 2887:
case 3112:
case 3790:
case 1267:
case 1227:
case 967:
case 453:
case 4023:
case 1099:
case 853:
case 247:
case 2119:
case 588:
case 2834:
case 4085:
case 290:
case 1519:
case 1306:
case 532:
case 962:
case 536:
case 3489:
case 1334:
case 4080:
case 351:
case 242:
case 2614:
case 1857:
case 770:
case 1602:
case 2103:
case 677:
case 313:
case 1308:
case 1493:
case 3209:
case 3147:
case 1139:
case 2597:
case 3910:
case 1771:
case 2802:
case 120:
case 2495:
case 2314:
case 3070:
case 1759:
case 1302:
case 2539:
case 3788:
case 3230:
case 375:
case 562:
case 1634:
case 1721:
case 3083:
case 1503:
case 3443:
case 2927:
case 1131:
case 2046:
case 501:
case 2486:
case 714:
case 1779:
case 540:
case 4092:
case 1426:
case 2667:
case 3830:
case 596:
case 3201:
case 230:
case 3615:
case 1906:
case 3538:
case 2789:
case 3610:
case 3116:
case 3835:
case 559:
case 2531:
case 372:
case 597:
case 565:
case 3809:
case 928:
case 3661:
case 2376:
case 165:
case 197:
case 2207:
case 3430:
case 2290:
case 2886:
case 3599:
case 1688:
case 2672:
case 4039:
case 3979:
case 3659:
case 580:
case 2628:
case 3243:
case 3435:
case 1256:
case 1293:
case 3951:
case 2326:
case 3537:
case 1549:
case 196:
case 2662:
case 3154:
case 1876:
case 2678:
case 2958:
case 219:
case 3929:
case 2644:
case 1682:
case 1036:
case 4031:
case 2012:
case 2895:
case 268:
case 1192:
case 3584:
case 3971:
case 3651:
case 2402:
case 1004:
case 2978:
case 1893:
case 2658:
case 1390:
case 3669:
case 1982:
case 870:
case 2962:
case 904:
case 65:
case 90:
case 167:
case 2408:
case 654:
case 2286:
case 2018:
case 3843:
case 3961:
case 3340:
case 3959:
case 753:
case 2928:
case 3011:
case 2592:
case 3164:
case 2713:
case 2972:
case 3401:
case 3124:
case 1541:
case 3283:
case 29:
case 3396:
case 1129:
case 5:
case 1674:
case 1648:
case 581:
case 2846:
case 312:
case 3692:
case 77:
case 2217:
case 1642:
case 1179:
case 563:
case 100:
case 4010:
case 358:
case 2691:
case 1731:
case 1624:
case 3855:
case 141:
case 3275:
case 1589:
case 317:
case 3260:
case 3035:
case 3419:
case 2529:
case 3558:
case 2991:
case 439:
case 1924:
case 1797:
case 3875:
case 3188:
case 1942:
case 3363:
case 2571:
case 616:
case 871:
case 1159:
case 3860:
case 3544:
case 1404:
case 839:
case 3578:
case 3522:
case 2412:
case 471:
case 1014:
case 2181:
case 3562:
case 315:
case 1317:
case 1436:
case 3001:
case 1594:
case 3182:
case 26:
case 2561:
case 2817:
case 2418:
case 3250:
case 3528:
case 2559:
case 1705:
case 521:
case 658:
case 3747:
case 2008:
case 2095:
case 4029:
case 1836:
case 1798:
case 2638:
case 1115:
case 3187:
case 3631:
case 984:
case 4051:
case 1056:
case 3577:
case 3460:
case 3742:
case 3219:
case 3420:
case 2510:
case 769:
case 410:
case 755:
case 98:
case 2741:
case 2090:
case 3748:
case 2007:
case 2304:
case 3465:
case 2417:
case 1647:
case 757:
case 799:
case 231:
case 3211:
case 4059:
case 2932:
case 500:
case 1026:
case 279:
case 4061:
case 3450:
case 2446:
case 541:
case 2086:
case 92:
case 2938:
case 752:
case 3106:
case 3600:
case 3819:
case 1076:
case 4071:
case 2749:
case 3697:
case 181:
case 3455:
case 1:
case 1912:
case 2936:
case 133:
case 3108:
case 2904:
case 941:
case 52:
case 474:
case 1044:
case 2442:
case 1078:
case 3339:
case 1491:
case 1780:
case 1238:
case 2424:
case 2775:
case 3305:
case 1763:
case 3441:
case 3081:
case 205:
case 2847:
case 3397:
case 47:
case 1918:
case 1068:
case 2216:
case 524:
case 283:
case 1232:
case 2474:
case 2765:
case 650:
case 2448:
case 2088:
case 2725:
case 1832:
case 223:
case 3203:
case 584:
case 2816:
case 2135:
case 1618:
case 2109:
case 2454:
case 2247:
case 3746:
case 2338:
case 349:
case 2604:
case 2533:
case 144:
case 2130:
case 1753:
case 2636:
case 202:
case 2332:
case 1316:
case 1509:
case 1437:
case 2755:
case 3089:
case 291:
case 58:
case 1058:
case 869:
case 1946:
case 1617:
case 3685:
case 3526:
case 710:
case 508:
case 1432:
case 3566:
case 2034:
case 3623:
case 2274:
case 2006:
case 455:
case 2248:
case 3849:
case 1837:
case 3186:
case 1284:
case 1438:
case 2224:
case 1291:
case 23:
case 852:
case 124:
case 2842:
case 856:
case 1884:
case 2864:
case 3107:
case 1891:
case 3392:
case 2824:
case 456:
case 3696:
case 3973:
case 3190:
case 2540:
case 1348:
case 1077:
case 3593:
case 9:
case 3398:
case 1917:
case 2711:
case 418:
case 899:
case 1646:
case 2874:
case 1140:
case 1299:
case 3923:
case 533:
case 3963:
case 2384:
case 963:
case 457:
case 1364:
case 2545:
case 329:
case 499:
case 2391:
case 1067:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745269202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,];
var gg_b = "1745269202/";

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
