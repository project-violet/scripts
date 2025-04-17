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
case 1391:
case 2166:
case 3165:
case 737:
case 3928:
case 3697:
case 1514:
case 316:
case 2268:
case 2465:
case 3934:
case 2932:
case 3043:
case 330:
case 3257:
case 1341:
case 1643:
case 2331:
case 594:
case 1097:
case 2114:
case 2306:
case 3305:
case 3356:
case 1992:
case 1754:
case 3964:
case 2435:
case 3151:
case 313:
case 1702:
case 1889:
case 3778:
case 1445:
case 2596:
case 1081:
case 3595:
case 2067:
case 2451:
case 3222:
case 3135:
case 1854:
case 2224:
case 3674:
case 2672:
case 1146:
case 3878:
case 1789:
case 1802:
case 1074:
case 2008:
case 3545:
case 1120:
case 437:
case 3916:
case 1387:
case 2973:
case 354:
case 149:
case 3681:
case 1196:
case 2361:
case 2663:
case 3179:
case 1501:
case 2611:
case 398:
case 1847:
case 491:
case 2375:
case 3376:
case 1399:
case 3743:
case 1273:
case 3277:
case 1747:
case 121:
case 237:
case 821:
case 4008:
case 2737:
case 2627:
case 526:
case 1262:
case 1349:
case 1938:
case 3300:
case 2948:
case 4067:
case 443:
case 3518:
case 1924:
case 2023:
case 735:
case 2525:
case 743:
case 2484:
case 1089:
case 3130:
case 2459:
case 3590:
case 1440:
case 3903:
case 2867:
case 252:
case 944:
case 3078:
case 2182:
case 3409:
case 3184:
case 558:
case 2953:
case 2471:
case 1582:
case 791:
case 812:
case 675:
case 2652:
case 3654:
case 3244:
case 2242:
case 1774:
case 446:
case 4037:
case 3689:
case 3758:
case 949:
case 3540:
case 2910:
case 1006:
case 3185:
case 975:
case 3498:
case 3295:
case 14:
case 722:
case 1055:
case 542:
case 2538:
case 2288:
case 2198:
case 985:
case 2041:
case 3486:
case 805:
case 2485:
case 2220:
case 1850:
case 3670:
case 1031:
case 649:
case 3522:
case 3721:
case 887:
case 3631:
case 1236:
case 2246:
case 35:
case 260:
case 1775:
case 1598:
case 1422:
case 2347:
case 2656:
case 877:
case 3821:
case 3606:
case 2605:
case 177:
case 324:
case 1586:
case 1201:
case 1875:
case 3717:
case 1337:
case 1869:
case 3103:
case 1061:
case 2982:
case 3984:
case 1308:
case 3372:
case 2403:
case 1769:
case 3453:
case 2909:
case 3557:
case 1925:
case 2110:
case 892:
case 1266:
case 3661:
case 2381:
case 192:
case 1142:
case 612:
case 1806:
case 2741:
case 396:
case 3311:
case 1731:
case 1621:
case 3226:
case 94:
case 748:
case 1706:
case 1050:
case 3594:
case 528:
case 3327:
case 3432:
case 1755:
case 3965:
case 2434:
case 2966:
case 3639:
case 807:
case 107:
case 3017:
case 1192:
case 3240:
case 1013:
case 3829:
case 2542:
case 1075:
case 3544:
case 1494:
case 760:
case 1573:
case 2464:
case 2936:
case 4091:
case 1946:
case 556:
case 1761:
case 1996:
case 211:
case 3116:
case 621:
case 2173:
case 2389:
case 221:
case 837:
case 3833:
case 2747:
case 1627:
case 1737:
case 946:
case 1998:
case 3216:
case 1313:
case 3321:
case 1611:
case 2418:
case 2399:
case 1837:
case 611:
case 1375:
case 3922:
case 2924:
case 3027:
case 2938:
case 2349:
case 444:
case 565:
case 1459:
case 3763:
case 852:
case 1430:
case 1182:
case 1525:
case 3140:
case 1767:
case 524:
case 3571:
case 2089:
case 2907:
case 3863:
case 744:
case 2881:
case 2509:
case 3530:
case 1708:
case 2774:
case 3772:
case 1910:
case 3126:
case 3559:
case 2968:
case 342:
case 3872:
case 1808:
case 2874:
case 3584:
case 1604:
case 1471:
case 3228:
case 212:
case 3190:
case 3425:
case 1652:
case 3280:
case 3512:
case 3033:
case 2210:
case 1465:
case 846:
case 3329:
case 2047:
case 721:
case 1306:
case 4089:
case 2992:
case 3994:
case 1823:
case 3811:
case 1355:
case 3019:
case 2643:
case 2341:
case 593:
case 356:
case 2097:
case 1723:
case 143:
case 2802:
case 3145:
case 1588:
case 3608:
case 1101:
case 3579:
case 2445:
case 3446:
case 3704:
case 2889:
case 2702:
case 2501:
case 1663:
case 1361:
case 2286:
case 249:
case 596:
case 712:
case 1915:
case 567:
case 2120:
case 3072:
case 328:
case 1546:
case 2495:
case 3496:
case 1479:
case 2536:
case 421:
case 648:
case 3667:
case 3442:
case 380:
case 2444:
case 2050:
case 2706:
case 822:
case 285:
case 2039:
case 2755:
case 2806:
case 3699:
case 2142:
case 1676:
case 705:
case 2621:
case 275:
case 2731:
case 3259:
case 3534:
case 1914:
case 1099:
case 2075:
case 3076:
case 787:
case 1542:
case 3528:
case 2192:
case 3194:
case 2282:
case 559:
case 207:
case 1791:
case 3783:
case 487:
case 1162:
case 4070:
case 1464:
case 2069:
case 2861:
case 3516:
case 1787:
case 2946:
case 3945:
case 637:
case 1115:
case 2477:
case 2988:
case 1389:
case 4006:
case 405:
case 1354:
case 3177:
case 516:
case 1302:
case 811:
case 2850:
case 1220:
case 922:
case 1198:
case 1397:
case 3800:
case 205:
case 1749:
case 24:
case 3005:
case 323:
case 2138:
case 1656:
case 2422:
case 2201:
case 2875:
case 707:
case 1148:
case 3235:
case 860:
case 2713:
case 2775:
case 358:
case 1246:
case 407:
case 2769:
case 1403:
case 2308:
case 1909:
case 3358:
case 2107:
case 1087:
case 2457:
case 3083:
case 2061:
case 2869:
case 1153:
case 3407:
case 751:
case 475:
case 598:
case 1683:
case 3503:
case 3990:
case 3265:
case 4039:
case 485:
case 4050:
case 911:
case 3926:
case 2168:
case 326:
case 1045:
case 1481:
case 3709:
case 369:
case 517:
case 1740:
case 1558:
case 3270:
case 974:
case 3036:
case 783:
case 2759:
case 2784:
case 2830:
case 1163:
case 3001:
case 1229:
case 804:
case 203:
case 1840:
case 2467:
case 2256:
case 3255:
case 60:
case 979:
case 610:
case 2205:
case 3581:
case 2079:
case 1474:
case 2563:
case 2408:
case 1890:
case 325:
case 989:
case 1636:
case 4060:
case 1726:
case 220:
case 486:
case 645:
case 3645:
case 109:
case 206:
case 2143:
case 1818:
case 3324:
case 1593:
case 3443:
case 786:
case 3066:
case 990:
case 2760:
case 3338:
case 1497:
case 3547:
case 1119:
case 2917:
case 1666:
case 2283:
case 1976:
case 2533:
case 462:
case 138:
case 23:
case 1543:
case 4084:
case 327:
case 3082:
case 1489:
case 174:
case 3701:
case 1217:
case 1152:
case 3836:
case 647:
case 4012:
case 2835:
case 3690:
case 2751:
case 874:
case 262:
case 1983:
case 3987:
case 2276:
case 3275:
case 3801:
case 3009:
case 4:
case 2851:
case 3213:
case 904:
case 283:
case 1454:
case 3736:
case 68:
case 879:
case 3640:
case 1895:
case 2879:
case 3589:
case 179:
case 2071:
case 1609:
case 2552:
case 3554:
case 2200:
case 1090:
case 909:
case 1578:
case 2504:
case 406:
case 286:
case 420:
case 2527:
case 3392:
case 1905:
case 890:
case 3866:
case 3941:
case 1111:
case 403:
case 1334:
case 2344:
case 3269:
case 2812:
case 3991:
case 1127:
case 3187:
case 1057:
case 2668:
case 3388:
case 3862:
case 3320:
case 2864:
case 239:
case 1904:
case 638:
case 2487:
case 2003:
case 3396:
case 1379:
case 1183:
case 833:
case 3561:
case 478:
case 4034:
case 3247:
case 2816:
case 371:
case 488:
case 3657:
case 2345:
case 3773:
case 3010:
case 381:
case 2233:
case 2716:
case 3715:
case 1877:
case 3570:
case 2828:
case 502:
case 1312:
case 3732:
case 1455:
case 2624:
case 80:
case 208:
case 2272:
case 110:
case 778:
case 3141:
case 3832:
case 4016:
case 97:
case 609:
case 1529:
case 1431:
case 2728:
case 788:
case 3086:
case 1648:
case 2441:
case 845:
case 2085:
case 1844:
case 2505:
case 3506:
case 1686:
case 2263:
case 3281:
case 1794:
case 2556:
case 1894:
case 36:
case 355:
case 531:
case 836:
case 3429:
case 2390:
case 1963:
case 861:
case 450:
case 2211:
case 3853:
case 3325:
case 2326:
case 597:
case 1615:
case 739:
case 3967:
case 2803:
case 1371:
case 2958:
case 3073:
case 3710:
case 1330:
case 4085:
case 933:
case 1359:
case 2016:
case 1384:
case 3810:
case 88:
case 2028:
case 3786:
case 1517:
case 3694:
case 2692:
case 3513:
case 563:
case 2034:
case 1439:
case 3032:
case 87:
case 1933:
case 2449:
case 17:
case 3886:
case 2885:
case 4003:
case 3199:
case 3644:
case 3417:
case 847:
case 1919:
case 3202:
case 3748:
case 1278:
case 2117:
case 2499:
case 1094:
case 2500:
case 684:
case 1822:
case 1360:
case 3539:
case 2252:
case 2318:
case 3404:
case 903:
case 3671:
case 1276:
case 3299:
case 3746:
case 3452:
case 1735:
case 2454:
case 183:
case 2040:
case 1851:
case 3846:
case 438:
case 3102:
case 274:
case 2489:
case 862:
case 162:
case 173:
case 555:
case 1377:
case 1835:
case 678:
case 2090:
case 1200:
case 3249:
case 3796:
case 1779:
case 3684:
case 289:
case 2682:
case 3362:
case 3820:
case 2578:
case 688:
case 2609:
case 1071:
case 3720:
case 1879:
case 709:
case 2895:
case 3788:
case 186:
case 1394:
case 2956:
case 3955:
case 1765:
case 886:
case 3906:
case 1423:
case 2328:
case 2127:
case 4045:
case 3332:
case 9:
case 2111:
case 3427:
case 3679:
case 3181:
case 1696:
case 3291:
case 1830:
case 204:
case 650:
case 1467:
case 103:
case 1051:
case 1859:
case 962:
case 3310:
case 973:
case 2558:
case 2740:
case 3725:
case 2726:
case 820:
case 1158:
case 382:
case 3241:
case 557:
case 209:
case 1771:
case 779:
case 1646:
case 120:
case 3353:
case 2790:
case 372:
case 608:
case 1256:
case 2826:
case 1563:
case 2095:
case 2303:
case 3096:
case 1205:
case 3939:
case 1065:
case 3348:
case 479:
case 2900:
case 4026:
case 1519:
case 1143:
case 106:
case 1437:
case 1322:
case 2614:
case 2447:
case 806:
case 986:
case 634:
case 4090:
case 501:
case 3197:
case 3287:
case 532:
case 3975:
case 474:
case 1921:
case 366:
case 13:
case 4040:
case 1917:
case 2497:
case 1283:
case 2666:
case 3665:
case 1:
case 3386:
case 484:
case 1193:
case 1326:
case 2371:
case 2757:
case 1803:
case 939:
case 261:
case 1390:
case 4022:
case 1703:
case 2857:
case 410:
case 2384:
case 3382:
case 676:
case 3309:
case 2330:
case 3768:
case 1016:
case 3974:
case 878:
case 3400:
case 2521:
case 433:
case 70:
case 2450:
case 710:
case 27:
case 3042:
case 525:
case 1028:
case 1080:
case 2100:
case 1692:
case 188:
case 2517:
case 28:
case 3150:
case 3947:
case 1499:
case 2094:
case 3549:
case 569:
case 1204:
case 317:
case 2278:
case 3738:
case 1318:
case 2822:
case 3824:
case 3113:
case 1487:
case 761:
case 3902:
case 2904:
case 1978:
case 2183:
case 1395:
case 3161:
case 2293:
case 6:
case 3989:
case 839:
case 3007:
case 2610:
case 1864:
case 2057:
case 3483:
case 2243:
case 1345:
case 48:
case 3336:
case 2335:
case 47:
case 3301:
case 3603:
case 134:
case 233:
case 606:
case 1728:
case 620:
case 2431:
case 1638:
case 2156:
case 1834:
case 2844:
case 3842:
case 340:
case 2648:
case 1441:
case 1085:
case 3106:
case 1880:
case 3314:
case 2455:
case 1624:
case 2312:
case 1828:
case 2258:
case 2406:
case 3405:
case 77:
case 210:
case 3208:
case 2698:
case 603:
case 850:
case 3024:
case 3267:
case 461:
case 2686:
case 2365:
case 1505:
case 3038:
case 1556:
case 1129:
case 1353:
case 1825:
case 57:
case 1096:
case 1472:
case 615:
case 2206:
case 863:
case 872:
case 264:
case 225:
case 1567:
case 2231:
case 882:
case 902:
case 1241:
case 3771:
case 3646:
case 2108:
case 3357:
case 269:
case 3884:
case 1310:
case 3620:
case 2709:
case 3688:
case 1463:
case 1508:
case 2036:
case 1969:
case 2167:
case 727:
case 1679:
case 2695:
case 1181:
case 2782:
case 3830:
case 547:
case 3051:
case 3917:
case 197:
case 2547:
case 2261:
case 897:
case 3283:
case 4009:
case 1665:
case 3012:
case 2999:
case 1287:
case 561:
case 3533:
case 1975:
case 2493:
case 427:
case 1398:
case 4082:
case 166:
case 3437:
case 306:
case 2597:
case 3322:
case 3860:
case 1612:
case 3065:
case 1939:
case 2066:
case 2443:
case 1433:
case 2338:
case 1950:
case 3519:
case 3760:
case 1147:
case 1659:
case 725:
case 1025:
case 4066:
case 963:
case 2589:
case 972:
case 1788:
case 1896:
case 102:
case 2554:
case 510:
case 1888:
case 764:
case 50:
case 1684:
case 2502:
case 982:
case 1362:
case 3504:
case 2701:
case 2082:
case 227:
case 3178:
case 373:
case 4014:
case 1154:
case 2836:
case 1671:
case 2009:
case 3030:
case 1189:
case 1373:
case 3276:
case 1746:
case 1299:
case 3735:
case 1315:
case 1452:
case 2626:
case 3625:
case 383:
case 3851:
case 3712:
case 997:
case 1427:
case 1970:
case 1411:
case 3423:
case 1660:
case 4036:
case 2392:
case 1955:
case 2766:
case 425:
case 3060:
case 1906:
case 3865:
case 376:
case 1931:
case 195:
case 2941:
case 895:
case 533:
case 3511:
case 3583:
case 590:
case 2247:
case 701:
case 2815:
case 4032:
case 2773:
case 2010:
case 2346:
case 3345:
case 2657:
case 2715:
case 3607:
case 3233:
case 2297:
case 1989:
case 2187:
case 697:
case 3864:
case 2320:
case 2862:
case 1483:
case 2053:
case 3487:
case 732:
case 2396:
case 1161:
case 3003:
case 2762:
case 3764:
case 3263:
case 1792:
case 2191:
case 1366:
case 1685:
case 2048:
case 584:
case 3129:
case 574:
case 1541:
case 1892:
case 168:
case 1024:
case 2429:
case 432:
case 917:
case 1267:
case 255:
case 2622:
case 3880:
case 3734:
case 115:
case 2570:
case 1405:
case 2141:
case 2098:
case 2274:
case 663:
case 1208:
case 672:
case 4015:
case 1155:
case 3085:
case 1106:
case 579:
case 4086:
case 2073:
case 2569:
case 2710:
case 3340:
case 1664:
case 695:
case 201:
case 771:
case 232:
case 455:
case 2753:
case 1981:
case 3390:
case 3227:
case 2325:
case 1223:
case 1707:
case 4048:
case 1997:
case 2289:
case 504:
case 2199:
case 2417:
case 2644:
case 3642:
case 755:
case 1724:
case 1634:
case 3121:
case 3117:
case 1549:
case 3499:
case 2748:
case 817:
case 1738:
case 2421:
case 1628:
case 1680:
case 2539:
case 3500:
case 2254:
case 968:
case 481:
case 2149:
case 2694:
case 257:
case 509:
case 1947:
case 915:
case 471:
case 2513:
case 378:
case 602:
case 3576:
case 763:
case 1239:
case 772:
case 3090:
case 202:
case 3682:
case 2362:
case 2888:
case 3795:
case 1640:
case 3026:
case 657:
case 2788:
case 2896:
case 1589:
case 3609:
case 1987:
case 2746:
case 1275:
case 3402:
case 1478:
case 2671:
case 3040:
case 1626:
case 2452:
case 497:
case 2315:
case 3316:
case 1082:
case 3104:
case 374:
case 1701:
case 550:
case 3845:
case 1836:
case 3152:
case 231:
case 969:
case 3380:
case 3328:
case 1618:
case 539:
case 1123:
case 1714:
case 3334:
case 2332:
case 2970:
case 1342:
case 2427:
case 632:
case 295:
case 2931:
case 472:
case 2523:
case 463:
case 1941:
case 4020:
case 2955:
case 3956:
case 4088:
case 1392:
case 2906:
case 3905:
case 482:
case 3018:
case 2567:
case 125:
case 2174:
case 588:
case 1645:
case 309:
case 1255:
case 702:
case 3826:
case 272:
case 2651:
case 1458:
case 2096:
case 3303:
case 3095:
case 1581:
case 578:
case 304:
case 1782:
case 655:
case 1001:
case 2679:
case 731:
case 66:
case 3840:
case 2508:
case 1574:
case 3481:
case 1709:
case 2310:
case 1167:
case 869:
case 2969:
case 2975:
case 3976:
case 1999:
case 2197:
case 1014:
case 3543:
case 3497:
case 297:
case 3666:
case 3385:
case 1261:
case 1443:
case 3900:
case 2939:
case 2348:
case 1137:
case 4025:
case 2147:
case 671:
case 3133:
case 1597:
case 3662:
case 2382:
case 1810:
case 506:
case 2868:
case 3077:
case 101:
case 1710:
case 3330:
case 1908:
case 1853:
case 3615:
case 2616:
case 1967:
case 5:
case 4024:
case 1677:
case 361:
case 2981:
case 132:
case 3963:
case 2807:
case 832:
case 468:
case 1748:
case 955:
case 217:
case 3278:
case 2549:
case 3094:
case 2092:
case 1539:
case 3413:
case 2738:
case 4007:
case 3176:
case 347:
case 1848:
case 2997:
case 2838:
case 2634:
case 627:
case 3722:
case 3521:
case 3439:
case 2400:
case 2042:
case 37:
case 3044:
case 1798:
case 1786:
case 2947:
case 1149:
case 1657:
case 3243:
case 881:
case 1010:
case 1773:
case 2587:
case 1715:
case 3335:
case 1873:
case 1561:
case 2237:
case 2301:
case 333:
case 3653:
case 2902:
case 3952:
case 1762:
case 3293:
case 2954:
case 1396:
case 2161:
case 1187:
case 2007:
case 3461:
case 1320:
case 417:
case 3610:
case 3894:
case 3911:
case 2892:
case 2541:
case 3698:
case 855:
case 573:
case 2170:
case 562:
case 1531:
case 2267:
case 2024:
case 1429:
case 3686:
case 2366:
case 717:
case 2792:
case 3794:
case 1281:
case 669:
case 2038:
case 583:
case 3529:
case 1832:
case 3431:
case 3105:
case 2106:
case 3648:
case 1086:
case 2842:
case 625:
case 1570:
case 3258:
case 2131:
case 957:
case 3455:
case 1732:
case 2314:
case 1622:
case 30:
case 2208:
case 310:
case 1274:
case 1141:
case 2405:
case 3406:
case 2257:
case 230:
case 3114:
case 3331:
case 335:
case 3207:
case 551:
case 3633:
case 1637:
case 1203:
case 1727:
case 1565:
case 2093:
case 1811:
case 3823:
case 1994:
case 3355:
case 3412:
case 1019:
case 2647:
case 2414:
case 626:
case 1329:
case 3619:
case 3037:
case 2928:
case 99:
case 2697:
case 1944:
case 2043:
case 3268:
case 216:
case 1496:
case 2545:
case 3546:
case 3479:
case 3008:
case 828:
case 3973:
case 1535:
case 585:
case 2383:
case 2681:
case 391:
case 1420:
case 853:
case 1977:
case 254:
case 1285:
case 575:
case 498:
case 61:
case 213:
case 658:
case 2964:
case 2436:
case 3962:
case 1579:
case 1446:
case 2778:
case 1704:
case 114:
case 2222:
case 259:
case 507:
case 3588:
case 1145:
case 3672:
case 2674:
case 2401:
case 623:
case 459:
case 1264:
case 1560:
case 1922:
case 730:
case 1819:
case 413:
case 1011:
case 3023:
case 1733:
case 298:
case 454:
case 3837:
case 592:
case 2160:
case 2985:
case 42:
case 3627:
case 337:
case 2843:
case 699:
case 3808:
case 416:
case 4043:
case 3604:
case 1190:
case 670:
case 1425:
case 1280:
case 953:
case 2171:
case 1530:
case 842:
case 72:
case 54:
case 3708:
case 1772:
case 3910:
case 1234:
case 2540:
case 680:
case 2758:
case 2526:
case 3767:
case 1140:
case 914:
case 1957:
case 4093:
case 577:
case 2130:
case 1863:
case 759:
case 2590:
case 2903:
case 3867:
case 3459:
case 2294:
case 3292:
case 3430:
case 587:
case 2078:
case 2409:
case 614:
case 858:
case 1438:
case 2631:
case 1641:
case 1776:
case 2245:
case 2817:
case 3799:
case 25:
case 2655:
case 3347:
case 2717:
case 3899:
case 3148:
case 2606:
case 3749:
case 1279:
case 2498:
case 1393:
case 441:
case 619:
case 1700:
case 1056:
case 2319:
case 970:
case 3220:
case 229:
case 3198:
case 3485:
case 2486:
case 3041:
case 653:
case 11:
case 3288:
case 218:
case 3849:
case 980:
case 3397:
case 81:
case 1800:
case 2971:
case 3507:
case 3110:
case 1926:
case 496:
case 3683:
case 1468:
case 1990:
case 1083:
case 2103:
case 793:
case 656:
case 2984:
case 3403:
case 1157:
case 4017:
case 1212:
case 3909:
case 1358:
case 1528:
case 958:
case 3600:
case 1194:
case 2017:
case 765:
case 1259:
case 2021:
case 1230:
case 3914:
case 75:
case 2544:
case 3099:
case 3741:
case 1271:
case 1144:
case 729:
case 3676:
case 2675:
case 3132:
case 1856:
case 2134:
case 3480:
case 2613:
case 3428:
case 2311:
case 296:
case 3049:
case 2594:
case 2290:
case 322:
case 2180:
case 3966:
case 3434:
case 2979:
case 2218:
case 1177:
case 2415:
case 1260:
case 69:
case 418:
case 2473:
case 3302:
case 2304:
case 199:
case 2669:
case 3173:
case 899:
case 2935:
case 1516:
case 1945:
case 3787:
case 293:
case 2951:
case 1783:
case 2164:
case 3162:
case 3887:
case 2577:
case 4063:
case 1893:
case 414:
case 2922:
case 2011:
case 693:
case 1793:
case 3262:
case 1300:
case 2560:
case 1518:
case 1277:
case 916:
case 3747:
case 1160:
case 2833:
case 2118:
case 1843:
case 419:
case 2317:
case 641:
case 4072:
case 428:
case 453:
case 2733:
case 2321:
case 1743:
case 3273:
case 719:
case 548:
case 1171:
case 3509:
case 954:
case 242:
case 1758:
case 1540:
case 3232:
case 667:
case 3678:
case 2584:
case 1602:
case 3874:
case 2872:
case 753:
case 1654:
case 2425:
case 92:
case 2190:
case 4033:
case 3054:
case 3440:
case 1590:
case 959:
case 1409:
case 2004:
case 1078:
case 1184:
case 3002:
case 2763:
case 560:
case 1294:
case 714:
case 1526:
case 2863:
case 3089:
case 1482:
case 913:
case 2203:
case 1356:
case 3992:
case 256:
case 2827:
case 3643:
case 2711:
case 1112:
case 3097:
case 511:
case 2033:
case 2944:
case 2512:
case 816:
case 3514:
case 1697:
case 79:
case 1934:
case 3210:
case 1043:
case 3047:
case 3693:
case 1165:
case 1928:
case 3286:
case 349:
case 154:
case 2977:
case 3196:
case 2488:
case 3501:
case 1383:
case 629:
case 854:
case 228:
case 3188:
case 2072:
case 12:
case 2496:
case 3495:
case 2667:
case 3387:
case 3536:
case 1135:
case 1401:
case 4027:
case 3789:
case 3802:
case 159:
case 1964:
case 65:
case 113:
case 3248:
case 3702:
case 1778:
case 3081:
case 1595:
case 3445:
case 2579:
case 2063:
case 1240:
case 3770:
case 924:
case 2534:
case 1829:
case 2076:
case 3494:
case 2230:
case 95:
case 2580:
case 1639:
case 2528:
case 965:
case 1650:
case 1017:
case 3192:
case 3706:
case 3444:
case 1327:
case 426:
case 2442:
case 1432:
case 2000:
case 3039:
case 3831:
case 867:
case 591:
case 2699:
case 2144:
case 896:
case 700:
case 2805:
case 71:
case 3621:
case 2856:
case 3855:
case 1226:
case 141:
case 3988:
case 546:
case 726:
case 2177:
case 2995:
case 3996:
case 1979:
case 2564:
case 41:
case 1951:
case 193:
case 893:
case 351:
case 535:
case 2883:
case 1462:
case 423:
case 2945:
case 3946:
case 2516:
case 3515:
case 3422:
case 1655:
case 1029:
case 2251:
case 3586:
case 124:
case 3875:
case 3201:
case 165:
case 3070:
case 1333:
case 552:
case 1631:
case 494:
case 85:
case 3124:
case 2122:
case 1817:
case 3775:
case 613:
case 1448:
case 387:
case 2343:
case 21:
case 118:
case 200:
case 1486:
case 770:
case 1670:
case 305:
case 829:
case 967:
case 654:
case 818:
case 2800:
case 1522:
case 3750:
case 1960:
case 1498:
case 2279:
case 34:
case 2918:
case 1319:
case 3739:
case 3055:
case 2700:
case 3553:
case 1410:
case 941:
case 470:
case 2468:
case 392:
case 799:
case 3367:
case 1971:
case 480:
case 226:
case 3168:
case 2926:
case 537:
case 1959:
case 1453:
case 2358:
case 1930:
case 3214:
case 993:
case 2212:
case 3869:
case 3061:
case 1103:
case 630:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744902001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,];
var gg_b = "1744902001/";

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
