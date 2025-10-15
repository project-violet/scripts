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
case 3812:
case 2768:
case 1071:
case 3431:
case 2508:
case 3029:
case 763:
case 1257:
case 2555:
case 438:
case 1415:
case 594:
case 3939:
case 3713:
case 3620:
case 3946:
case 1463:
case 3189:
case 1741:
case 850:
case 1800:
case 1988:
case 243:
case 2660:
case 600:
case 3558:
case 435:
case 721:
case 2111:
case 1546:
case 1138:
case 3159:
case 2240:
case 956:
case 3961:
case 1945:
case 541:
case 3906:
case 461:
case 1484:
case 178:
case 590:
case 4050:
case 1023:
case 14:
case 604:
case 4080:
case 3807:
case 854:
case 303:
case 1018:
case 2291:
case 3280:
case 409:
case 423:
case 907:
case 90:
case 2887:
case 677:
case 3175:
case 67:
case 3533:
case 2986:
case 1153:
case 645:
case 1560:
case 2201:
case 3813:
case 2972:
case 635:
case 4081:
case 980:
case 638:
case 3747:
case 2834:
case 2274:
case 3369:
case 2825:
case 522:
case 3712:
case 1608:
case 1791:
case 2868:
case 4026:
case 1462:
case 137:
case 3316:
case 3281:
case 2030:
case 3828:
case 1384:
case 1596:
case 477:
case 1819:
case 262:
case 565:
case 75:
case 979:
case 1995:
case 859:
case 1614:
case 324:
case 1363:
case 68:
case 1022:
case 3686:
case 1315:
case 366:
case 3595:
case 984:
case 2661:
case 742:
case 1801:
case 2606:
case 1866:
case 188:
case 3567:
case 2598:
case 3331:
case 3621:
case 1874:
case 661:
case 2199:
case 1225:
case 2527:
case 185:
case 1967:
case 260:
case 186:
case 1886:
case 2378:
case 4046:
case 2681:
case 3690:
case 2795:
case 1137:
case 2651:
case 2273:
case 1856:
case 2767:
case 791:
case 365:
case 740:
case 2336:
case 566:
case 1205:
case 446:
case 3246:
case 1258:
case 2845:
case 3099:
case 3601:
case 524:
case 982:
case 2221:
case 712:
case 2888:
case 402:
case 2805:
case 1665:
case 520:
case 331:
case 1720:
case 1613:
case 2858:
case 705:
case 226:
case 415:
case 2286:
case 1628:
case 2311:
case 3950:
case 2512:
case 264:
case 888:
case 418:
case 885:
case 1550:
case 1093:
case 493:
case 1873:
case 3980:
case 2177:
case 636:
case 1163:
case 3489:
case 3640:
case 3260:
case 3926:
case 1438:
case 3459:
case 2272:
case 2966:
case 2220:
case 1003:
case 3078:
case 2832:
case 2901:
case 2745:
case 1526:
case 3898:
case 1786:
case 1551:
case 2399:
case 3714:
case 341:
case 2990:
case 529:
case 1476:
case 150:
case 503:
case 2075:
case 2733:
case 3951:
case 3296:
case 1581:
case 734:
case 2919:
case 3169:
case 1483:
case 693:
case 2650:
case 749:
case 394:
case 1035:
case 1295:
case 1024:
case 2680:
case 1773:
case 1968:
case 2449:
case 3708:
case 1612:
case 2565:
case 3116:
case 1184:
case 2513:
case 511:
case 2788:
case 1647:
case 2089:
case 3600:
case 3525:
case 1043:
case 2478:
case 852:
case 2758:
case 602:
case 117:
case 3534:
case 148:
case 1784:
case 3716:
case 1466:
case 3943:
case 2188:
case 782:
case 571:
case 4022:
case 1401:
case 2065:
case 1592:
case 652:
case 1754:
case 3312:
case 802:
case 2559:
case 2105:
case 177:
case 17:
case 3025:
case 1543:
case 2158:
case 2617:
case 893:
case 1909:
case 2976:
case 2262:
case 2693:
case 3347:
case 3185:
case 1300:
case 818:
case 251:
case 3935:
case 2642:
case 104:
case 3155:
case 488:
case 1524:
case 2028:
case 3270:
case 3108:
case 2877:
case 2237:
case 1535:
case 647:
case 815:
case 2602:
case 1051:
case 1340:
case 1949:
case 2468:
case 1081:
case 3148:
case 1277:
case 2575:
case 2133:
case 1837:
case 1441:
case 3903:
case 3652:
case 1763:
case 3413:
case 991:
case 846:
case 1715:
case 3578:
case 437:
case 2425:
case 1503:
case 43:
case 2145:
case 273:
case 2487:
case 1080:
case 3676:
case 2012:
case 949:
case 3869:
case 3993:
case 2334:
case 567:
case 3942:
case 2635:
case 44:
case 447:
case 3313:
case 685:
case 836:
case 2457:
case 1050:
case 3365:
case 161:
case 452:
case 3397:
case 5:
case 581:
case 2047:
case 1854:
case 4018:
case 18:
case 3917:
case 1172:
case 1120:
case 1999:
case 2603:
case 1390:
case 63:
case 4004:
case 1910:
case 3599:
case 2982:
case 2254:
case 227:
case 22:
case 2132:
case 3447:
case 1400:
case 3831:
case 3653:
case 1762:
case 1374:
case 1675:
case 3087:
case 1491:
case 135:
case 3412:
case 3204:
case 934:
case 2195:
case 1229:
case 138:
case 3057:
case 1737:
case 774:
case 2623:
case 3994:
case 1420:
case 136:
case 3243:
case 3663:
case 2878:
case 1752:
case 1140:
case 2238:
case 3292:
case 2799:
case 3032:
case 2937:
case 70:
case 2644:
case 41:
case 789:
case 3922:
case 2187:
case 2264:
case 3379:
case 3235:
case 3224:
case 2836:
case 1570:
case 2962:
case 823:
case 1209:
case 2157:
case 4003:
case 2305:
case 1977:
case 1191:
case 3112:
case 2283:
case 932:
case 963:
case 3577:
case 1236:
case 2388:
case 2495:
case 2530:
case 3355:
case 3654:
case 686:
case 835:
case 2467:
case 1060:
case 3498:
case 921:
case 756:
case 1100:
case 3385:
case 1278:
case 1616:
case 3203:
case 838:
case 1838:
case 2811:
case 848:
case 3637:
case 3944:
case 779:
case 1119:
case 957:
case 2332:
case 1783:
case 2014:
case 2048:
case 1544:
case 3408:
case 1473:
case 2749:
case 2367:
case 845:
case 617:
case 87:
case 4017:
case 3455:
case 877:
case 3662:
case 4093:
case 1166:
case 1101:
case 2395:
case 784:
case 942:
case 3923:
case 2810:
case 2694:
case 2915:
case 654:
case 2778:
case 1006:
case 1852:
case 115:
case 1523:
case 2405:
case 2899:
case 3045:
case 3113:
case 1421:
case 780:
case 29:
case 816:
case 2516:
case 2954:
case 910:
case 3088:
case 3005:
case 1046:
case 3479:
case 3759:
case 486:
case 2711:
case 1738:
case 2125:
case 800:
case 1039:
case 371:
case 2168:
case 1630:
case 1764:
case 146:
case 1372:
case 2569:
case 1456:
case 2008:
case 2709:
case 3202:
case 1927:
case 1344:
case 440:
case 3110:
case 2567:
case 1213:
case 3606:
case 3199:
case 937:
case 2707:
case 93:
case 439:
case 3598:
case 2331:
case 2621:
case 333:
case 3787:
case 1062:
case 2656:
case 1633:
case 1323:
case 1851:
case 180:
case 266:
case 1881:
case 4041:
case 4074:
case 2673:
case 3219:
case 2251:
case 715:
case 2996:
case 649:
case 2077:
case 1422:
case 4066:
case 2897:
case 2281:
case 3030:
case 3290:
case 408:
case 1142:
case 4090:
case 412:
case 702:
case 1605:
case 328:
case 2865:
case 3201:
case 564:
case 3266:
case 1117:
case 444:
case 1304:
case 2813:
case 3834:
case 1371:
case 2369:
case 3274:
case 1572:
case 3887:
case 156:
case 1948:
case 3291:
case 1212:
case 3956:
case 1751:
case 1394:
case 1586:
case 3429:
case 3857:
case 434:
case 1404:
case 3548:
case 598:
case 1781:
case 513:
case 3149:
case 2533:
case 1370:
case 639:
case 1632:
case 1979:
case 2906:
case 640:
case 203:
case 229:
case 1667:
case 691:
case 3377:
case 501:
case 2765:
case 2330:
case 2620:
case 107:
case 3725:
case 1423:
case 3734:
case 343:
case 1143:
case 2847:
case 1054:
case 1955:
case 3768:
case 1880:
case 2812:
case 3069:
case 608:
case 947:
case 3109:
case 1124:
case 430:
case 3508:
case 174:
case 2728:
case 1850:
case 1135:
case 606:
case 2600:
case 738:
case 950:
case 3565:
case 1342:
case 3758:
case 1038:
case 2011:
case 870:
case 1739:
case 1965:
case 610:
case 3478:
case 1746:
case 2525:
case 294:
case 1997:
case 432:
case 1076:
case 3680:
case 3129:
case 3436:
case 1317:
case 2755:
case 3399:
case 1083:
case 91:
case 3990:
case 787:
case 290:
case 80:
case 2951:
case 807:
case 3733:
case 3919:
case 65:
case 1053:
case 889:
case 2748:
case 3409:
case 3895:
case 172:
case 1424:
case 3075:
case 954:
case 2926:
case 3867:
case 761:
case 1706:
case 313:
case 2078:
case 1574:
case 1443:
case 2779:
case 1761:
case 398:
case 155:
case 2459:
case 1392:
case 663:
case 632:
case 3311:
case 2359:
case 1591:
case 2885:
case 1796:
case 3256:
case 3177:
case 3991:
case 1668:
case 4021:
case 222:
case 525:
case 2855:
case 3221:
case 621:
case 1947:
case 3888:
case 1324:
case 299:
case 3410:
case 410:
case 1625:
case 1335:
case 2206:
case 3858:
case 2261:
case 4086:
case 2641:
case 1082:
case 3626:
case 3940:
case 1907:
case 3767:
case 4073:
case 1806:
case 1052:
case 3845:
case 268:
case 884:
case 1540:
case 2246:
case 1194:
case 2727:
case 2690:
case 745:
case 2814:
case 3378:
case 457:
case 2587:
case 777:
case 360:
case 0:
case 748:
case 1208:
case 3273:
case 1122:
case 619:
case 1170:
case 182:
case 2557:
case 2412:
case 923:
case 4054:
case 1480:
case 407:
case 2831:
case 2653:
case 1326:
case 489:
case 71:
case 819:
case 2057:
case 4084:
case 1722:
case 2683:
case 679:
case 1770:
case 130:
case 474:
case 961:
case 1678:
case 3167:
case 1216:
case 3952:
case 3132:
case 32:
case 327:
case 1040:
case 2599:
case 1794:
case 1552:
case 1160:
case 3643:
case 3215:
case 821:
case 3692:
case 470:
case 2816:
case 2917:
case 935:
case 3047:
case 1000:
case 456:
case 3325:
case 2942:
case 3635:
case 3012:
case 832:
case 3487:
case 1609:
case 1231:
case 863:
case 1091:
case 3624:
case 1871:
case 3777:
case 2365:
case 1196:
case 2664:
case 1804:
case 3357:
case 904:
case 2465:
case 1699:
case 1066:
case 842:
case 3387:
case 1161:
case 2179:
case 3434:
case 1723:
case 3425:
case 97:
case 759:
case 1975:
case 2114:
case 3468:
case 1019:
case 1718:
case 3953:
case 945:
case 2549:
case 144:
case 1230:
case 607:
case 948:
case 3983:
case 1822:
case 85:
case 59:
case 2769:
case 3976:
case 3262:
case 1564:
case 2924:
case 3237:
case 1481:
case 2155:
case 2509:
case 1704:
case 2222:
case 2270:
case 3188:
case 2943:
case 900:
case 3589:
case 1350:
case 656:
case 4037:
case 1139:
case 1426:
case 3158:
case 1146:
case 2034:
case 2511:
case 3559:
case 2904:
case 808:
case 3085:
case 271:
case 4052:
case 1677:
case 805:
case 2529:
case 2971:
case 1724:
case 1073:
case 1969:
case 1842:
case 993:
case 2128:
case 3055:
case 3433:
case 114:
case 3954:
case 2165:
case 1584:
case 2088:
case 482:
case 1817:
case 397:
case 39:
case 2759:
case 1916:
case 3252:
case 1554:
case 2058:
case 844:
case 1792:
case 3125:
case 3445:
case 812:
case 1461:
case 1743:
case 2479:
case 15:
case 3134:
case 1563:
case 1021:
case 3810:
case 3694:
case 2923:
case 2217:
case 1515:
case 3488:
case 1703:
case 3079:
case 3963:
case 3405:
case 891:
case 840:
case 253:
case 737:
case 3458:
case 1126:
case 2398:
case 2485:
case 3531:
case 2944:
case 2327:
case 2637:
case 1151:
case 2455:
case 3736:
case 1802:
case 1931:
case 2242:
case 573:
case 2408:
case 1181:
case 2775:
case 3367:
case 2654:
case 2308:
case 472:
case 2889:
case 2355:
case 267:
case 26:
case 2427:
case 2859:
case 1072:
case 119:
case 682:
case 3811:
case 4083:
case 2498:
case 2385:
case 830:
case 1629:
case 455:
case 747:
case 1346:
case 281:
case 2:
case 2112:
case 1180:
case 3305:
case 936:
case 458:
case 3809:
case 3530:
case 1742:
case 2577:
case 1275:
case 778:
case 1306:
case 2379:
case 3644:
case 121:
case 4038:
case 3836:
case 3618:
case 3276:
case 583:
case 2875:
case 52:
case 527:
case 3333:
case 3623:
case 1289:
case 2067:
case 4076:
case 2107:
case 2032:
case 2292:
case 3098:
case 2243:
case 443:
case 2675:
case 563:
case 532:
case 235:
case 3649:
case 3269:
case 2374:
case 3818:
case 3636:
case 628:
case 3770:
case 2301:
case 2229:
case 3722:
case 1195:
case 2815:
case 521:
case 2999:
case 1167:
case 3381:
case 4069:
case 3040:
case 2400:
case 1007:
case 349:
case 794:
case 1254:
case 2884:
case 3611:
case 662:
case 633:
case 1692:
case 334:
case 2659:
case 496:
case 28:
case 2440:
case 1368:
case 3609:
case 261:
case 3196:
case 1457:
case 1829:
case 2593:
case 4030:
case 308:
case 2441:
case 2763:
case 2978:
case 1145:
case 1387:
case 3723:
case 2503:
case 510:
case 3074:
case 3019:
case 425:
case 2862:
case 3718:
case 89:
case 216:
case 1575:
case 2277:
case 799:
case 2156:
case 2837:
case 3744:
case 200:
case 344:
case 3090:
case 3822:
case 1983:
case 768:
case 3451:
case 2419:
case 151:
case 1262:
case 1976:
case 3564:
case 2909:
case 3771:
case 2300:
case 55:
case 2173:
case 1237:
case 1097:
case 765:
case 1964:
case 340:
case 1729:
case 2524:
case 2466:
case 1065:
case 3041:
case 1938:
case 248:
case 3350:
case 1589:
case 3959:
case 2543:
case 3139:
case 514:
case 1617:
case 1158:
case 3426:
case 3989:
case 2592:
case 3146:
case 3380:
case 1105:
case 542:
case 696:
case 2929:
case 953:
case 2486:
case 698:
case 3893:
case 342:
case 873:
case 1008:
case 2504:
case 3969:
case 2776:
case 3735:
case 3842:
case 613:
case 2456:
case 1433:
case 314:
case 1954:
case 2141:
case 1516:
case 2210:
case 3584:
case 19:
case 460:
case 3792:
case 1125:
case 2299:
case 2039:
case 1984:
case 1711:
case 2738:
case 540:
case 591:
case 35:
case 357:
case 3406:
case 1134:
case 601:
case 2882:
case 1488:
case 293:
case 3515:
case 2101:
case 426:
case 2852:
case 3446:
case 1778:
case 1963:
case 2006:
case 2523:
case 215:
case 2061:
case 3439:
case 971:
case 2174:
case 544:
case 3126:
case 3086:
case 2783:
case 1014:
case 508:
case 306:
case 3931:
case 2753:
case 3802:
case 1749:
case 3181:
case 505:
case 202:
case 2373:
case 3072:
case 3020:
case 2278:
case 319:
case 1432:
case 3843:
case 2100:
case 3339:
case 1283:
case 1604:
case 3346:
case 2191:
case 1305:
case 827:
case 2096:
case 82:
case 1495:
case 883:
case 1253:
case 2669:
case 3835:
case 1187:
case 3306:
case 1264:
case 1644:
case 1937:
case 530:
case 2570:
case 1836:
case 2321:
case 3702:
case 1157:
case 1276:
case 3537:
case 1849:
case 96:
case 4089:
case 3496:
case 1623:
case 2782:
case 363:
case 1238:
case 236:
case 2182:
case 3344:
case 1241:
case 864:
case 3265:
case 3998:
case 1661:
case 2679:
case 1606:
case 3213:
case 582:
case 285:
case 2225:
case 1527:
case 1199:
case 1598:
case 2234:
case 133:
case 162:
case 1787:
case 2648:
case 2268:
case 3062:
case 3851:
case 2315:
case 380:
case 3037:
case 2614:
case 2890:
case 1477:
case 2070:
case 2022:
case 23:
case 237:
case 2462:
case 1868:
case 473:
case 3422:
case 384:
case 627:
case 2437:
case 1030:
case 2384:
case 3750:
case 3142:
case 1646:
case 3605:
case 2841:
case 128:
case 1639:
case 1329:
case 1201:
case 2560:
case 1266:
case 1972:
case 3658:
case 3304:
case 125:
case 379:
case 3494:
case 1834:
case 2700:
case 1274:
case 4047:
case 3695:
case 2183:
case 558:
case 1514:
case 1291:
case 2719:
case 1956:
case 2933:
case 3586:
case 555:
case 2044:
case 1136:
case 3404:
case 76:
case 767:
case 3914:
case 2337:
case 2484:
case 3015:
case 3632:
case 3322:
case 3521:
case 651:
case 4012:
case 572:
case 1178:
case 3667:
case 3726:
case 1200:
case 3247:
case 2506:
case 2362:
case 1579:
case 1377:
case 2741:
case 2415:
case 1016:
case 2958:
case 307:
case 992:
case 2138:
case 2546:
case 1240:
case 3423:
case 143:
case 2988:
case 1734:
case 3054:
case 1585:
case 3418:
case 929:
case 1768:
case 3880:
case 1973:
case 42:
case 2891:
case 2071:
case 2176:
case 813:
case 2257:
case 3124:
case 2004:
case 3444:
case 898:
case 3135:
case 1513:
case 1089:
case 1788:
case 2267:
case 2820:
case 1059:
case 2872:
case 896:
case 3038:
case 941:
case 2092:
case 2232:
case 3965:
case 1941:
case 3746:
case 3227:
case 3171:
case 101:
case 3896:
case 1528:
case 254:
case 1680:
case 1449:
case 1129:
case 3083:
case 1399:
case 2786:
case 697:
case 276:
case 3657:
case 1733:
case 2382:
case 1919:
case 2756:
case 3590:
case 3053:
case 2581:
case 3687:
case 3424:
case 372:
case 1974:
case 2115:
case 3501:
case 556:
case 358:
case 2163:
case 3706:
case 113:
case 1272:
case 1220:
case 3761:
case 994:
case 1832:
case 1745:
case 355:
case 2628:
case 1286:
case 2338:
case 3591:
case 2580:
case 1512:
case 164:
case 2697:
case 4079:
case 968:
case 3796:
case 2233:
case 2550:
case 1256:
case 3912:
case 2873:
case 3248:
case 579:
case 1888:
case 3324:
case 2017:
case 1858:
case 3279:
case 584:
case 3839:
case 1547:
case 2665:
case 259:
case 1805:
case 3846:
case 2452:
case 2821:
case 3082:
case 3417:
case 1336:
case 2288:
case 1626:
case 1940:
case 1767:
case 1349:
case 922:
case 4008:
case 4085:
case 2383:
case 580:
case 3540:
case 1507:
case 3303:
case 1681:
case 1378:
case 3285:
case 2957:
case 931:
case 2137:
case 1651:
case 1833:
case 2002:
case 1273:
case 999:
case 3170:
case 1795:
case 2987:
case 3122:
case 3493:
case 3255:
case 546:
case 1992:
case 692:
case 3784:
case 3911:
case 348:
case 2959:
case 466:
case 1943:
case 3466:
case 3401:
case 2146:
case 1034:
case 1294:
case 1511:
case 2989:
case 3592:
case 1312:
case 345:
case 2380:
case 3474:
case 2139:
case 1025:
case 3909:
case 1347:
case 2451:
case 3419:
case 2576:
case 240:
case 304:
case 2704:
case 1155:
case 1509:
case 853:
case 1222:
case 603:
case 1108:
case 3173:
case 3490:
case 2481:
case 2718:
case 3862:
case 2583:
case 518:
case 3340:
case 1114:
case 1307:
case 593:
case 212:
case 2230:
case 2553:
case 1148:
case 1536:
case 3156:
case 1428:
case 3277:
case 2744:
case 3837:
case 1549:
case 2001:
case 871:
case 1465:
case 1903:
case 3763:
case 3978:
case 1413:
case 3121:
case 3715:
case 208:
case 2610:
case 2894:
case 1682:
case 764:
case 502:
case 2106:
case 1179:
case 3080:
case 713:
case 2091:
case 1676:
case 2871:
case 1993:
case 403:
case 429:
case 92:
case 798:
case 983:
case 2804:
case 1664:
case 1730:
case 3593:
case 2196:
case 795:
case 3542:
case 2611:
case 3884:
case 234:
case 2160:
case 3517:
case 492:
case 1407:
case 387:
case 624:
case 323:
case 309:
case 1510:
case 2678:
case 230:
case 4029:
case 3815:
case 2794:
case 1599:
case 620:
case 701:
case 2040:
case 1902:
case 2818:
case 1831:
case 867:
case 2636:
case 3675:
case 3491:
case 2480:
case 1087:
case 1412:
case 3301:
case 1683:
case 2722:
case 2770:
case 769:
case 536:
case 4009:
case 1348:
case 3356:
case 2289:
case 3782:
case 1994:
case 494:
case 538:
case 3472:
case 1243:
case 3420:
case 1107:
case 1314:
case 2803:
case 1032:
case 622:
case 4011:
case 699:
case 1970:
case 3883:
case 743:
case 2361:
case 1379:
case 1875:
case 1224:
case 3522:
case 3321:
case 181:
case 1:
case 2346:
case 3977:
case 2339:
case 2629:
case 3864:
case 523:
case 3249:
case 587:
case 58:
case 3236:
case 668:
case 3669:
case 3876:
case 1355:
case 4036:
case 4049:
case 1308:
case 1654:
case 561:
case 1147:
case 2843:
case 490:
case 2020:
case 1427:
case 1203:
case 3616:
case 3838:
case 2892:
case 1637:
case 725:
case 1944:
case 3119:
case 3783:
case 1398:
case 2086:
case 3518:
case 1408:
case 302:
case 997:
case 3190:
case 210:
case 1293:
case 1033:
case 1662:
case 2056:
case 2931:
case 3166:
case 2515:
case 694:
case 3101:
case 318:
case 2563:
case 1923:
case 3882:
case 422:
case 2446:
case 2703:
case 3852:
case 315:
case 3061:
case 1045:
case 1113:
case 641:
case 690:
case 3141:
case 1165:
case 1789:
case 1088:
case 2584:
case 3210:
case 2461:
case 1005:
case 3046:
case 257:
case 2743:
case 25:
case 1058:
case 2554:
case 2916:
case 3738:
case 504:
case 3039:
case 2792:
case 3299:
case 3929:
case 346:
case 3764:
case 3320:
case 1904:
case 2842:
case 4010:
case 577:
case 214:
case 57:
case 545:
case 1197:
case 3776:
case 2969:
case 1448:
case 3504:
case 1202:
case 3891:
case 2880:
case 3071:
case 3164:
case 1431:
case 2573:
case 3004:
case 274:
case 517:
case 2850:
case 1728:
case 3257:
case 3176:
case 1588:
case 4057:
case 890:
case 3958:
case 1713:
case 1672:
case 1620:
case 1330:
case 1765:
case 3741:
case 3800:
case 4087:
case 1558:
case 20:
case 3138:
case 207:
case 2423:
case 1159:
case 289:
case 1961:
case 3698:
case 3701:
case 2322:
case 2063:
case 1906:
case 3766:
case 3337:
case 378:
case 2247:
case 34:
case 3506:
case 347:
case 3362:
case 3454:
case 375:
case 2103:
case 3840:
case 129:
case 2667:
case 943:
case 1280:
case 3018:
case 3933:
case 192:
case 1469:
case 256:
case 3183:
case 1533:
case 1250:
case 3153:
case 352:
case 2404:
case 3044:
case 3560:
case 2658:
case 1813:
case 3841:
case 2371:
case 3700:
case 1226:
case 2520:
case 2572:
case 1369:
case 933:
case 279:
case 3354:
case 3608:
case 1712:
case 2780:
case 1673:
case 3791:
case 3655:
case 337:
case 3462:
case 33:
case 868:
case 2750:
case 2142:
case 1828:
case 3384:
case 2193:
case 120:
case 2323:
case 2851:
case 3614:
case 3022:
case 1686:
case 831:
case 2102:
case 3315:
case 166:
case 797:
case 1595:
case 2037:
case 1430:
case 79:
case 928:
case 3801:
case 2645:
case 3932:
case 3679:
case 3182:
case 2265:
case 1567:
case 388:
case 1532:
case 822:
case 1331:
case 3225:
case 4068:
case 1707:
case 3152:
case 3967:
case 4058:
case 386:
case 1587:
case 3162:
case 3957:
case 4005:
case 1814:
case 1690:
case 2303:
case 3987:
case 2493:
case 2442:
case 3002:
case 3856:
case 2208:
case 1375:
case 2907:
case 681:
case 6:
case 3821:
case 3353:
case 3288:
case 926:
case 1727:
case 2052:
case 820:
case 3383:
case 1239:
case 537:
case 3482:
case 3376:
case 2947:
case 131:
case 3452:
case 3364:
case 3772:
case 3613:
case 1261:
case 3697:
case 773:
case 3628:
case 1950:
case 2214:
case 3042:
case 1855:
case 3093:
case 3233:
case 1389:
case 3550:
case 3873:
case 3607:
case 3115:
case 1926:
case 1260:
case 901:
case 3438:
case 1459:
case 2123:
case 481:
case 4:
case 1779:
case 2443:
case 2574:
case 1078:
case 1898:
case 2761:
case 3526:
case 190:
case 3464:
case 376:
case 2118:
case 3551:
case 141:
case 1714:
case 1049:
case 3476:
case 969:
case 1748:
case 272:
case 54:
case 547:
case 2053:
case 3581:
case 3756:
case 467:
case 72:
case 2171:
case 783:
case 913:
case 194:
case 2064:
case 1568:
case 995:
case 2317:
case 653:
case 1475:
case 3024:
case 2896:
case 1691:
case 3773:
case 3968:
case 2076:
case 1708:
case 354:
case 2541:
case 3184:
case 2342:
case 892:
case 3934:
case 2965:
case 3043:
case 2403:
case 3820:
case 2739:
case 3232:
case 31:
case 1534:
case 2038:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760558402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,];
var gg_b = "1760558402/";

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
