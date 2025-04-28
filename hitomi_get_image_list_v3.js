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
case 3449:
case 2140:
case 3606:
case 1131:
case 1215:
case 3884:
case 3417:
case 1942:
case 2408:
case 1610:
case 2989:
case 3098:
case 3751:
case 4017:
case 3720:
case 3139:
case 829:
case 2232:
case 1923:
case 252:
case 594:
case 211:
case 876:
case 4049:
case 3791:
case 577:
case 2308:
case 2102:
case 667:
case 2973:
case 763:
case 74:
case 4032:
case 157:
case 2962:
case 4048:
case 952:
case 1282:
case 911:
case 3348:
case 2361:
case 1003:
case 3138:
case 3687:
case 654:
case 3332:
case 2249:
case 3875:
case 3635:
case 3063:
case 2988:
case 3014:
case 1526:
case 73:
case 2722:
case 1758:
case 1380:
case 1268:
case 1116:
case 3827:
case 528:
case 3448:
case 185:
case 2461:
case 787:
case 3984:
case 2497:
case 2226:
case 3007:
case 2018:
case 1175:
case 2889:
case 2568:
case 1517:
case 1823:
case 1786:
case 319:
case 2344:
case 2956:
case 1549:
case 2357:
case 2629:
case 3816:
case 584:
case 2582:
case 2628:
case 4004:
case 1652:
case 1184:
case 1532:
case 407:
case 2862:
case 3257:
case 1464:
case 2873:
case 3975:
case 1679:
case 2177:
case 46:
case 3745:
case 3086:
case 199:
case 2047:
case 2569:
case 2593:
case 2515:
case 2888:
case 1276:
case 1313:
case 2501:
case 797:
case 3404:
case 2553:
case 2065:
case 414:
case 679:
case 195:
case 3927:
case 1355:
case 2831:
case 3862:
case 1561:
case 2257:
case 1840:
case 580:
case 2975:
case 472:
case 2297:
case 2086:
case 2745:
case 712:
case 1509:
case 3593:
case 378:
case 3047:
case 3515:
case 2326:
case 1718:
case 3065:
case 181:
case 1934:
case 2927:
case 3497:
case 3226:
case 903:
case 1765:
case 423:
case 1621:
case 1264:
case 947:
case 636:
case 3568:
case 1295:
case 2541:
case 2860:
case 3444:
case 1036:
case 4057:
case 219:
case 4044:
case 1476:
case 3344:
case 3705:
case 132:
case 3357:
case 937:
case 1881:
case 3582:
case 2816:
case 3134:
case 1925:
case 3629:
case 1453:
case 3973:
case 29:
case 1401:
case 3217:
case 2208:
case 160:
case 839:
case 2348:
case 1469:
case 2138:
case 2875:
case 2332:
case 2687:
case 2099:
case 2063:
case 561:
case 845:
case 3409:
case 2014:
case 486:
case 1353:
case 85:
case 1241:
case 2827:
case 191:
case 3461:
case 1902:
case 1369:
case 849:
case 1162:
case 538:
case 1368:
case 2449:
case 1173:
case 1482:
case 2960:
case 3408:
case 2417:
case 1877:
case 2098:
case 3989:
case 804:
case 3248:
case 1557:
case 2751:
case 2261:
case 2139:
case 2720:
case 1637:
case 4008:
case 1382:
case 3430:
case 99:
case 516:
case 2624:
case 3896:
case 3232:
case 1981:
case 1597:
case 3856:
case 3102:
case 3499:
case 1952:
case 3270:
case 3183:
case 783:
case 3414:
case 2009:
case 1717:
case 1303:
case 1992:
case 49:
case 2121:
case 840:
case 3675:
case 3459:
case 1749:
case 3048:
case 3314:
case 824:
case 595:
case 169:
case 3372:
case 3835:
case 3399:
case 958:
case 8:
case 2846:
case 1491:
case 2258:
case 2768:
case 3741:
case 1222:
case 599:
case 2933:
case 830:
case 1451:
case 3359:
case 286:
case 3627:
case 1403:
case 1420:
case 2030:
case 3806:
case 3684:
case 2715:
case 663:
case 64:
case 2259:
case 2793:
case 655:
case 2769:
case 1983:
case 258:
case 1041:
case 2470:
case 3192:
case 2214:
case 986:
case 659:
case 2753:
case 4058:
case 2272:
case 2701:
case 3567:
case 63:
case 1978:
case 3458:
case 3824:
case 2008:
case 3017:
case 2656:
case 3545:
case 2929:
case 1171:
case 1866:
case 2662:
case 343:
case 36:
case 2673:
case 2447:
case 793:
case 3520:
case 3631:
case 3503:
case 437:
case 4086:
case 3551:
case 307:
case 3004:
case 3987:
case 3591:
case 1892:
case 1095:
case 2688:
case 1559:
case 2946:
case 2354:
case 1013:
case 2137:
case 2207:
case 403:
case 3871:
case 1599:
case 2833:
case 2319:
case 3026:
case 1514:
case 589:
case 2112:
case 1445:
case 1883:
case 2174:
case 1598:
case 3906:
case 210:
case 3764:
case 996:
case 51:
case 4007:
case 3795:
case 1187:
case 3247:
case 1211:
case 3924:
case 972:
case 194:
case 2097:
case 2286:
case 2543:
case 1704:
case 2418:
case 3407:
case 888:
case 1600:
case 419:
case 564:
case 2829:
case 697:
case 914:
case 2294:
case 1436:
case 1890:
case 2219:
case 651:
case 310:
case 933:
case 2906:
case 612:
case 2660:
case 2764:
case 1076:
case 1821:
case 2713:
case 3522:
case 2247:
case 606:
case 2795:
case 943:
case 96:
case 3543:
case 3286:
case 1146:
case 3097:
case 1336:
case 3418:
case 907:
case 1681:
case 3057:
case 3829:
case 2616:
case 3044:
case 148:
case 26:
case 243:
case 1744:
case 1912:
case 3447:
case 3673:
case 3828:
case 2631:
case 2520:
case 2110:
case 3419:
case 2987:
case 736:
case 670:
case 3354:
case 4065:
case 4019:
case 4094:
case 1405:
case 2218:
case 2166:
case 3394:
case 396:
case 478:
case 2026:
case 3833:
case 3319:
case 718:
case 1602:
case 2806:
case 2152:
case 1990:
case 1322:
case 2684:
case 508:
case 820:
case 358:
case 1068:
case 3793:
case 1885:
case 2398:
case 1921:
case 834:
case 2192:
case 3299:
case 3753:
case 3701:
case 1518:
case 1251:
case 1761:
case 2567:
case 3696:
case 532:
case 411:
case 1220:
case 771:
case 1837:
case 1709:
case 1291:
case 452:
case 844:
case 1625:
case 3370:
case 1343:
case 2463:
case 180:
case 3928:
case 2270:
case 805:
case 2414:
case 3009:
case 3782:
case 2887:
case 2675:
case 3505:
case 809:
case 2048:
case 1001:
case 1519:
case 1053:
case 1565:
case 466:
case 2835:
case 2372:
case 3846:
case 1594:
case 2363:
case 1547:
case 1093:
case 3933:
case 1015:
case 750:
case 2359:
case 1634:
case 1129:
case 970:
case 3904:
case 15:
case 145:
case 397:
case 2540:
case 2176:
case 1620:
case 1531:
case 1724:
case 3427:
case 374:
case 703:
case 4075:
case 1691:
case 1955:
case 860:
case 3475:
case 2284:
case 737:
case 3926:
case 1913:
case 3663:
case 2046:
case 3699:
case 1277:
case 1964:
case 78:
case 906:
case 117:
case 4084:
case 1010:
case 912:
case 3542:
case 951:
case 2496:
case 1560:
case 3006:
case 479:
case 3384:
case 270:
case 2670:
case 2774:
case 1066:
case 3523:
case 3817:
case 3500:
case 2712:
case 2944:
case 3195:
case 1787:
case 104:
case 2997:
case 3113:
case 3849:
case 2396:
case 643:
case 3932:
case 3778:
case 40:
case 1092:
case 3686:
case 3804:
case 1052:
case 1439:
case 2488:
case 2216:
case 2362:
case 2909:
case 1281:
case 2373:
case 3826:
case 3783:
case 1980:
case 3071:
case 2790:
case 1864:
case 79:
case 355:
case 2647:
case 2473:
case 363:
case 1895:
case 2388:
case 3431:
case 1338:
case 544:
case 1584:
case 1342:
case 3288:
case 2577:
case 1202:
case 1771:
case 2930:
case 1941:
case 1083:
case 121:
case 1400:
case 3607:
case 1423:
case 3460:
case 3917:
case 3180:
case 2489:
case 2857:
case 3752:
case 3262:
case 3316:
case 22:
case 1323:
case 808:
case 2153:
case 1645:
case 842:
case 3949:
case 2525:
case 3792:
case 2897:
case 1078:
case 2416:
case 711:
case 686:
case 168:
case 1161:
case 1090:
case 3930:
case 963:
case 4089:
case 752:
case 1109:
case 1733:
case 3169:
case 3844:
case 3908:
case 3231:
case 182:
case 3489:
case 987:
case 2273:
case 1381:
case 32:
case 3029:
case 2262:
case 1636:
case 1556:
case 2792:
case 3525:
case 2779:
case 3897:
case 4073:
case 2778:
case 530:
case 2932:
case 141:
case 2686:
case 3961:
case 2804:
case 3028:
case 1130:
case 5:
case 1605:
case 3909:
case 3362:
case 3216:
case 450:
case 3373:
case 3168:
case 1340:
case 2141:
case 1915:
case 2826:
case 3033:
case 1969:
case 1302:
case 4088:
case 1993:
case 3665:
case 540:
case 822:
case 3647:
case 1953:
case 2289:
case 1238:
case 3462:
case 1901:
case 24:
case 3388:
case 2431:
case 3182:
case 3721:
case 1976:
case 3456:
case 1746:
case 1085:
case 129:
case 1425:
case 1868:
case 3830:
case 2384:
case 370:
case 1325:
case 3774:
case 1643:
case 1477:
case 3670:
case 192:
case 3808:
case 2817:
case 2523:
case 3712:
case 3944:
case 81:
case 3997:
case 2195:
case 2024:
case 1037:
case 562:
case 672:
case 2904:
case 889:
case 3861:
case 3540:
case 1573:
case 2427:
case 1434:
case 274:
case 2087:
case 885:
case 100:
case 2475:
case 1588:
case 1157:
case 2539:
case 623:
case 556:
case 1144:
case 1893:
case 3284:
case 312:
case 1815:
case 3046:
case 1197:
case 2614:
case 436:
case 1466:
case 936:
case 521:
case 3246:
case 379:
case 647:
case 2111:
case 1310:
case 4006:
case 1727:
case 3424:
case 144:
case 3907:
case 2918:
case 326:
case 375:
case 120:
case 2608:
case 2096:
case 1775:
case 3406:
case 1803:
case 1851:
case 246:
case 3387:
case 2224:
case 2661:
case 3986:
case 218:
case 2446:
case 497:
case 3435:
case 3592:
case 733:
case 619:
case 2609:
case 1107:
case 2965:
case 2919:
case 1680:
case 236:
case 3027:
case 2136:
case 393:
case 76:
case 109:
case 2947:
case 3335:
case 3863:
case 3060:
case 1038:
case 3103:
case 2089:
case 3998:
case 2702:
case 517:
case 3958:
case 3191:
case 1478:
case 271:
case 816:
case 1159:
case 2970:
case 1524:
case 504:
case 2537:
case 1731:
case 2329:
case 2740:
case 3228:
case 950:
case 1172:
case 1163:
case 1199:
case 2697:
case 838:
case 1114:
case 1845:
case 3886:
case 367:
case 3604:
case 2574:
case 1198:
case 1903:
case 545:
case 3229:
case 1716:
case 2328:
case 1991:
case 487:
case 2781:
case 861:
case 463:
case 2894:
case 1655:
case 3371:
case 1479:
case 890:
case 2819:
case 539:
case 2865:
case 1290:
case 3963:
case 1695:
case 2854:
case 3738:
case 1452:
case 3972:
case 1250:
case 2847:
case 4071:
case 1664:
case 535:
case 267:
case 2886:
case 2723:
case 4028:
case 3433:
case 500:
case 3574:
case 3062:
case 652:
case 3073:
case 1040:
case 3143:
case 1170:
case 2371:
case 1546:
case 3819:
case 1002:
case 3854:
case 3088:
case 2972:
case 3428:
case 4033:
case 2738:
case 283:
case 3429:
case 525:
case 894:
case 2120:
case 1321:
case 2998:
case 1350:
case 3271:
case 3702:
case 2510:
case 3818:
case 1922:
case 1390:
case 2191:
case 2958:
case 2233:
case 983:
case 529:
case 1450:
case 1943:
case 1081:
case 254:
case 967:
case 3657:
case 3329:
case 1421:
case 1773:
case 3740:
case 1762:
case 1252:
case 90:
case 3697:
case 2566:
case 1292:
case 592:
case 1279:
case 2552:
case 346:
case 869:
case 3224:
case 1796:
case 2648:
case 2986:
case 124:
case 3446:
case 627:
case 2579:
case 2592:
case 853:
case 1312:
case 1756:
case 1905:
case 1118:
case 3609:
case 1669:
case 3965:
case 1693:
case 3919:
case 2859:
case 3994:
case 979:
case 1533:
case 1601:
case 406:
case 3947:
case 772:
case 1653:
case 1210:
case 412:
case 2335:
case 531:
case 926:
case 1474:
case 975:
case 3346:
case 2863:
case 2899:
case 2898:
case 884:
case 279:
case 2246:
case 2583:
case 3235:
case 3111:
case 2306:
case 3521:
case 3630:
case 1437:
case 2858:
case 1822:
case 568:
case 3918:
case 678:
case 226:
case 1119:
case 2617:
case 3608:
case 1165:
case 3870:
case 723:
case 1843:
case 3096:
case 582:
case 470:
case 1936:
case 1154:
case 2406:
case 2324:
case 1337:
case 4042:
case 3202:
case 3771:
case 2090:
case 2733:
case 3400:
case 2109:
case 1607:
case 3083:
case 3132:
case 3584:
case 827:
case 2021:
case 3338:
case 1288:
case 2161:
case 1360:
case 268:
case 526:
case 575:
case 2239:
case 653:
case 1949:
case 1779:
case 3078:
case 47:
case 2982:
case 1792:
case 941:
case 1917:
case 3667:
case 1752:
case 4000:
case 1262:
case 2728:
case 1316:
case 4023:
case 1180:
case 684:
case 3439:
case 1331:
case 1141:
case 2340:
case 3281:
case 13:
case 789:
case 2605:
case 982:
case 1932:
case 3079:
case 1778:
case 2611:
case 785:
case 187:
case 1948:
case 14:
case 2440:
case 2953:
case 155:
case 1431:
case 3895:
case 159:
case 1783:
case 2915:
case 2868:
case 1542:
case 3234:
case 628:
case 811:
case 225:
case 1006:
case 1538:
case 852:
case 317:
case 3735:
case 2746:
case 1698:
case 420:
case 554:
case 2882:
case 3787:
case 1484:
case 900:
case 1849:
case 1155:
case 2477:
case 434:
case 1817:
case 3126:
case 1500:
case 3225:
case 567:
case 799:
case 866:
case 200:
case 1256:
case 694:
case 345:
case 1848:
case 2562:
case 1296:
case 1832:
case 3531:
case 3620:
case 992:
case 2434:
case 3724:
case 405:
case 1663:
case 1699:
case 2197:
case 3913:
case 1672:
case 976:
case 2853:
case 339:
case 2801:
case 2334:
case 3706:
case 1539:
case 2157:
case 1475:
case 3880:
case 335:
case 583:
case 929:
case 2225:
case 4:
case 3012:
case 904:
case 300:
case 3074:
case 424:
case 2691:
case 648:
case 1540:
case 245:
case 3562:
case 616:
case 781:
case 2603:
case 3434:
case 1046:
case 2913:
case 151:
case 239:
case 3853:
case 1502:
case 3801:
case 4034:
case 3334:
case 106:
case 917:
case 2955:
case 112:
case 89:
case 3893:
case 1284:
case 3869:
case 2560:
case 376:
case 3589:
case 939:
case 1830:
case 2104:
case 2010:
case 3976:
case 732:
case 217:
case 1456:
case 2735:
case 935:
case 3746:
case 690:
case 3882:
case 949:
case 1275:
case 3477:
case 3643:
case 1670:
case 1957:
case 3325:
case 1712:
case 392:
case 2126:
case 1808:
case 1488:
case 2575:
case 546:
case 3130:
case 2439:
case 2052:
case 1168:
case 1373:
case 518:
case 847:
case 341:
case 3200:
case 3223:
case 4040:
case 3402:
case 803:
case 1961:
case 837:
case 1462:
case 3238:
case 2149:
case 1647:
case 1473:
case 3953:
case 2864:
case 3440:
case 921:
case 536:
case 1182:
case 3242:
case 1721:
case 1388:
case 1260:
case 1750:
case 2895:
case 1654:
case 3108:
case 2855:
case 2980:
case 331:
case 488:
case 2771:
case 1618:
case 2423:
case 815:
case 2941:
case 3050:
case 2584:
case 3481:
case 2132:
case 3021:
case 3161:
case 2342:
case 3556:
case 1153:
case 2300:
case 3636:
case 2078:
case 1897:
case 1525:
case 382:
case 2667:
case 1169:
case 1193:
case 12:
case 2438:
case 1489:
case 4079:
case 1229:
case 2805:
case 597:
case 3991:
case 664:
case 574:
case 1700:
case 1604:
case 1886:
case 2278:
case 3920:
case 3903:
case 1738:
case 3613:
case 256:
case 2789:
case 183:
case 3221:
case 3760:
case 3664:
case 1959:
case 2546:
case 1371:
case 3655:
case 3479:
case 3492:
case 201:
case 2002:
case 872:
case 1807:
case 3383:
case 784:
case 2390:
case 1958:
case 3478:
case 3042:
case 4083:
case 2350:
case 1151:
case 2321:
case 3038:
case 1103:
case 2490:
case 3378:
case 3163:
case 3199:
case 3172:
case 3000:
case 2292:
case 2836:
case 2421:
case 3524:
case 3159:
case 2252:
case 2762:
case 262:
case 2773:
case 1592:
case 2374:
case 3891:
case 2118:
case 2756:
case 1075:
case 1387:
case 3803:
case 2528:
case 1552:
case 3820:
case 53:
case 2796:
case 2911:
case 3237:
case 3285:
case 1145:
case 2601:
case 193:
case 1899:
case 435:
case 1872:
case 1335:
case 240:
case 2210:
case 54:
case 2693:
case 2669:
case 1027:
case 998:
case 3784:
case 1487:
case 1084:
case 344:
case 1858:
case 3727:
case 794:
case 1424:
case 126:
case 3641:
case 175:
case 1907:
case 2385:
case 2077:
case 1246:
case 3945:
case 1649:
case 2682:
case 1324:
case 334:
case 3274:
case 404:
case 320:
case 2485:
case 3366:
case 244:
case 1550:
case 1521:
case 1630:
case 1734:
case 3668:
case 4085:
case 429:
case 1105:
case 716:
case 681:
case 3077:
case 3385:
case 2466:
case 1235:
case 748:
case 2310:
case 702:
case 213:
case 3147:
case 1287:
case 3337:
case 3529:
case 2775:
case 3165:
case 1608:
case 4037:
case 220:
case 2410:
case 2366:
case 3843:
case 913:
case 330:
case 1446:
case 3374:
case 3118:
case 3905:
case 1609:
case 2107:
case 3312:
case 146:
case 4012:
case 2851:
case 2820:
case 3528:
case 3:
case 2803:
case 3796:
case 4074:
case 324:
case 1661:
case 2237:
case 400:
case 1224:
case 1947:
case 3412:
case 2285:
case 3601:
case 1346:
case 3210:
case 642:
case 1919:
case 3615:
case 3693:
case 1965:
case 608:
case 205:
case 3034:
case 136:
case 2680:
case 4050:
case 2383:
case 468:
case 1585:
case 3676:
case 2042:
case 691:
case 1429:
case 2038:
case 3321:
case 2163:
case 660:
case 3836:
case 3421:
case 3450:
case 3943:
case 3081:
case 1970:
case 2159:
case 27:
case 1740:
case 2867:
case 1062:
case 441:
case 3805:
case 2158:
case 2716:
case 1433:
case 150:
case 506:
case 2452:
case 2695:
case 1088:
case 356:
case 2221:
case 2664:
case 2250:
case 2479:
case 1143:
case 551:
case 3283:
case 2655:
case 3170:
case 301:
case 2535:
case 3002:
case 1333:
case 1819:
case 1975:
case 1426:
case 2011:
case 2509:
case 1086:
case 1745:
case 1297:
case 3184:
case 634:
case 3532:
case 1244:
case 3413:
case 322:
case 3464:
case 1257:
case 613:
case 395:
case 1404:
case 4064:
case 1671:
case 908:
case 942:
case 749:
case 103:
case 3395:
case 2977:
case 2264:
case 3838:
case 2530:
case 2376:
case 1541:
case 2747:
case 2295:
case 605:
case 981:
case 242:
case 2794:
case 2690:
case 2765:
case 2255:
case 232:
case 717:
case 494:
case 115:
case 119:
case 3786:
case 2036:
case 3517:
case 2508:
case 3678:
case 2469:
case 1348:
case 543:
case 2415:
case 1142:
case 3282:
case 1687:
case 2189:
case 3480:
case 1875:
case 851:
case 3003:
case 1138:
case 507:
case 2401:
case 3504:
case 19:
case 2453:
case 2940:
case 260:
case 1208:
case 2674:
case 3091:
case 2770:
case 514:
case 291:
case 2834:
case 3116:
case 1513:
case 1827:
case 2241:
case 469:
case 3758:
case 3268:
case 1432:
case 1063:
case 3798:
case 1072:
case 3939:
case 4080:
case 1123:
case 1100:
case 3610:
case 3938:
case 3253:
case 2877:
case 3341:
case 2022:
case 3759:
case 3293:
case 3269:
case 3131:
case 3215:
case 2597:
case 1916:
case 1317:
case 1624:
case 2382:
case 1139:
case 1720:
case 2637:
case 2188:
case 2557:
case 1751:
case 3923:
case 2468:
case 1349:
case 721:
case 3441:
case 2610:
case 2942:
case 2201:
case 3877:
case 2799:
case 2763:
case 1989:
case 4068:
case 2341:
case 1140:
case 1576:
case 3280:
case 21:
case 3162:
case 2269:
case 656:
case 2215:
case 1330:
case 3981:
case 111:
case 1856:
case 1308:
case 3382:
case 3557:
case 264:
case 957:
case 152:
case 2923:
case 2441:
case 3544:
case 1232:
case 3468:
case 1361:
case 2160:
case 572:
case 3493:
case 480:
case 2282:
case 3189:
case 1309:
case 1962:
case 3940:
case 257:
case 3453:
case 1973:
case 360:
case 2091:
case 3834:
case 1181:
case 2268:
case 2380:
case 4053:
case 1722:
case 166:
case 1461:
case 3369:
case 4093:
case 1646:
case 2798:
case 4069:
case 2939:
case 596:
case 3353:
case 2526:
case 897:
case 1889:
case 3754:
case 3977:
case 3650:
case 2175:
case 995:
case 3621:
case 3530:
case 3295:
case 1568:
case 308:
case 792:
case 2842:
case 558:
case 999:
case 4076:
case 3719:
case 3255:
case 2683:
case 332:
case 624:
case 1956:
case 2549:
case 729:
case 3925:
case 1629:
case 1357:
case 1996:
case 416:
case 2045:
case 3036:
case 2823:
case 2800:
case 127:
case 2678:
case 1397:
case 1204:
case 630:
case 776:
case 725:
case 1177:
case 1736:
case 3011:
case 855:
case 2184:
case 2652:
case 2413:
case 1628:
case 1873:
case 3561:
case 3840:
case 859:
case 1862:
case 295:
case 3802:
case 83:
case 1553:
case 698:
case 3718:
case 1501:
case 2707:
case 1094:
case 381:
case 1515:
case 887:
case 1593:
case 1047:
case 3196:
case 178:
case 2364:
case 299:
case 2313:
case 2839:
case 2276:
case 1254:
case 238:
case 2076:
case 1660:
case 3910:
case 2985:
case 1713:
case 3638:
case 2436:
case 639:
case 713:
case 734:
case 1906:
case 473:
case 1219:
case 2890:
case 1265:
case 3598:
case 1755:
case 1616:
case 871:
case 216:
case 2681:
case 202:
case 248:
case 645:
case 394:
case 4067:
case 2146:
case 1924:
case 3211:
case 744:
case 3135:
case 649:
case 377:
case 3345:
case 3704:
case 990:
case 2336:
case 422:
case 107:
case 916:
case 3892:
case 1987:
case 2245:
case 709:
case 2974:
case 2757:
case 2267:
case 3106:
case 1631:
case 1503:
case 499:
case 1166:
case 938:
case 3563:
case 3572:
case 1218:
case 2602:
case 617:
case 2411:
case 3013:
case 1935:
case 114:
case 328:
case 133:
case 3064:
case 41:
case 2921:
case 1179:
case 2443:
case 2518:
case 1684:
case 1780:
case 2990:
case 2128:
case 3983:
case 2068:
case 3041:
case 464:
case 2343:
case 3866:
case 3171:
case 2203:
case 3748:
case 1567:
case 2761:
case 2251:
case 2082:
case 2837:
case 3978:
case 1887:
case 3992:
case 3320:
case 58:
case 1048:
case 836:
case 280:
case 1499:
case 1463:
case 1414:
case 3717:
case 537:
case 1183:
case 3243:
case 2069:
case 3403:
case 2730:
case 2129:
case 3420:
case 1971:
case 3080:
case 1359:
case 369:
case 2565:
case 547:
case 2519:
case 2001:
case 1399:
case 3491:
case 1372:
case 846:
case 2979:
case 701:
case 1121:
case 2303:
case 1061:
case 2749:
case 756:
case 2952:
case 1928:
case 1190:
case 3874:
case 2717:
case 1511:
case 2586:
case 3812:
case 1933:
case 3015:
case 2222:
case 1258:
case 3634:
case 186:
case 2451:
case 3053:
case 269:
case 3001:
case 491:
case 2491:
case 953:
case 3921:
case 631:
case 1470:
case 3443:
case 3950:
case 3518:
case 1263:
case 4022:
case 762:
case 3990:
case 3322:
case 3128:
case 3068:
case 2983:
case 1769:
case 1259:
case 875:
case 826:
case 2171:
case 3625:
case 1929:
case 879:
case 3220:
case 3251:
case 4043:
case 2748:
case 3837:
case 3082:
case 284:
case 2978:
case 3311:
case 1465:
case 4005:
case 3797:
case 1494:
case 994:
case 3640:
case 3744:
case 1673:
case 1447:
case 172:
case 3267:
case 1454:
case 3757:
case 3974:
case 1828:
case 390:
case 2106:
case 629:
case 2055:
case 2563:
case 1394:
case 1207:
case 361:
case 80:
case 3411:
case 2514:
case 566:
case 2013:
case 2124:
case 1354:
case 2095:
case 1688:
case 625:
case 481:
case 867:
case 1776:
case 1347:
case 3076:
case 338:
case 2467:
case 2910:
case 2642:
case 3850:
case 3985:
case 2558:
case 2187:
case 3436:
case 1318:
case 2883:
case 1112:
case 2445:
case 442:
case 2598:
case 1174:
case 1829:
case 3681:
case 1057:
case 302:
case 1044:
case 2878:
case 1286:
case 1097:
case 3146:
case 3570:
case 3937:
case 2211:
case 2345:
case 277:
case 3336:
case 2704:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745812801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,];
var gg_b = "1745812801/";

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
