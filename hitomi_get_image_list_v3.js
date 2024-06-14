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
case 57:
case 174:
case 2005:
case 767:
case 46:
case 764:
case 2571:
case 2386:
case 3269:
case 455:
case 2635:
case 1348:
case 622:
case 3132:
case 2203:
case 68:
case 1509:
case 2065:
case 920:
case 3016:
case 918:
case 3206:
case 1505:
case 985:
case 3604:
case 208:
case 906:
case 869:
case 534:
case 330:
case 3519:
case 3445:
case 2333:
case 1753:
case 1482:
case 1001:
case 3010:
case 824:
case 863:
case 2830:
case 2309:
case 1520:
case 607:
case 3701:
case 987:
case 4005:
case 125:
case 3228:
case 4057:
case 3622:
case 3106:
case 2185:
case 3596:
case 3734:
case 3997:
case 2338:
case 2590:
case 2804:
case 2414:
case 3765:
case 2316:
case 3773:
case 3965:
case 90:
case 2608:
case 3333:
case 2899:
case 723:
case 176:
case 2470:
case 1917:
case 2263:
case 1176:
case 3777:
case 528:
case 3176:
case 573:
case 1942:
case 2182:
case 501:
case 3613:
case 3027:
case 502:
case 2211:
case 2188:
case 2909:
case 1978:
case 401:
case 2622:
case 1669:
case 3862:
case 891:
case 1386:
case 4032:
case 1792:
case 1377:
case 729:
case 2528:
case 3682:
case 763:
case 1172:
case 2474:
case 2807:
case 3372:
case 2106:
case 1894:
case 1618:
case 2594:
case 2781:
case 2621:
case 3962:
case 1915:
case 3298:
case 2352:
case 1731:
case 2242:
case 788:
case 3553:
case 2282:
case 3987:
case 336:
case 2973:
case 1250:
case 146:
case 1855:
case 3280:
case 1721:
case 1683:
case 1763:
case 2302:
case 77:
case 2279:
case 532:
case 2718:
case 254:
case 3524:
case 3141:
case 3830:
case 2003:
case 1028:
case 1547:
case 3829:
case 3886:
case 1605:
case 3161:
case 3447:
case 1659:
case 2306:
case 780:
case 1008:
case 3726:
case 2537:
case 3884:
case 3771:
case 3084:
case 3977:
case 4037:
case 1287:
case 3480:
case 741:
case 1662:
case 2409:
case 3433:
case 562:
case 2080:
case 1096:
case 695:
case 374:
case 1665:
case 2775:
case 378:
case 2560:
case 3289:
case 2858:
case 1684:
case 2639:
case 3736:
case 508:
case 1353:
case 2664:
case 3793:
case 2478:
case 2619:
case 3300:
case 1369:
case 1876:
case 2914:
case 248:
case 3379:
case 1822:
case 20:
case 3462:
case 1061:
case 1575:
case 1812:
case 2703:
case 81:
case 1214:
case 661:
case 1173:
case 1269:
case 1439:
case 1091:
case 1846:
case 4065:
case 485:
case 51:
case 54:
case 654:
case 3837:
case 2303:
case 408:
case 123:
case 1090:
case 1724:
case 1544:
case 3062:
case 2945:
case 3729:
case 342:
case 3828:
case 1932:
case 2118:
case 2661:
case 648:
case 3843:
case 3124:
case 153:
case 1346:
case 765:
case 2651:
case 3485:
case 4034:
case 2127:
case 1811:
case 755:
case 2447:
case 298:
case 3949:
case 406:
case 1681:
case 2582:
case 2811:
case 3869:
case 645:
case 922:
case 782:
case 3403:
case 1147:
case 3226:
case 2456:
case 3003:
case 1918:
case 312:
case 4047:
case 2919:
case 1284:
case 1657:
case 3231:
case 3936:
case 3022:
case 3858:
case 3601:
case 192:
case 1413:
case 1350:
case 3702:
case 2728:
case 1841:
case 2098:
case 1521:
case 145:
case 3554:
case 1513:
case 634:
case 2779:
case 928:
case 4035:
case 3490:
case 3390:
case 3813:
case 778:
case 217:
case 2734:
case 2679:
case 3081:
case 1290:
case 1404:
case 1849:
case 2552:
case 2208:
case 1447:
case 2990:
case 3401:
case 2852:
case 228:
case 1425:
case 4036:
case 2680:
case 1256:
case 3772:
case 4090:
case 3223:
case 822:
case 2577:
case 1044:
case 705:
case 3812:
case 1452:
case 2709:
case 2060:
case 3864:
case 2012:
case 175:
case 2426:
case 2847:
case 2283:
case 1950:
case 1316:
case 1080:
case 725:
case 2438:
case 379:
case 2020:
case 2322:
case 2843:
case 926:
case 625:
case 861:
case 3264:
case 409:
case 3854:
case 1011:
case 2213:
case 2237:
case 3364:
case 2323:
case 429:
case 3095:
case 2335:
case 1744:
case 276:
case 3870:
case 3041:
case 3929:
case 739:
case 3556:
case 1296:
case 1254:
case 2434:
case 3981:
case 206:
case 2248:
case 3919:
case 1828:
case 3436:
case 395:
case 1988:
case 2848:
case 706:
case 768:
case 445:
case 2893:
case 1656:
case 1880:
case 1919:
case 3408:
case 3743:
case 3634:
case 2548:
case 731:
case 2177:
case 2396:
case 1857:
case 3826:
case 2000:
case 671:
case 1134:
case 3442:
case 1431:
case 737:
case 2249:
case 1589:
case 2993:
case 437:
case 3375:
case 2683:
case 354:
case 1106:
case 2928:
case 3757:
case 2013:
case 3410:
case 3125:
case 932:
case 3046:
case 2832:
case 1764:
case 2343:
case 3149:
case 3805:
case 2221:
case 3194:
case 400:
case 2589:
case 1754:
case 2530:
case 3175:
case 2384:
case 1924:
case 2871:
case 959:
case 472:
case 934:
case 414:
case 3121:
case 797:
case 1410:
case 1980:
case 4003:
case 1646:
case 4000:
case 2696:
case 2699:
case 3945:
case 2630:
case 519:
case 4062:
case 4043:
case 750:
case 3349:
case 2762:
case 1837:
case 3430:
case 470:
case 1237:
case 3665:
case 1717:
case 1219:
case 2077:
case 2887:
case 3518:
case 3438:
case 300:
case 3748:
case 3049:
case 1691:
case 1920:
case 2911:
case 1992:
case 2932:
case 446:
case 3323:
case 3128:
case 2093:
case 3424:
case 3113:
case 3431:
case 2439:
case 2198:
case 3337:
case 1726:
case 1619:
case 237:
case 1360:
case 3641:
case 1652:
case 1128:
case 724:
case 1313:
case 2700:
case 3285:
case 586:
case 2370:
case 3301:
case 3155:
case 2151:
case 182:
case 1723:
case 2186:
case 2512:
case 282:
case 1283:
case 2810:
case 2987:
case 427:
case 2532:
case 1066:
case 3396:
case 4004:
case 1270:
case 582:
case 1311:
case 1654:
case 823:
case 450:
case 1507:
case 1334:
case 25:
case 1415:
case 1807:
case 2958:
case 2455:
case 961:
case 3894:
case 2429:
case 931:
case 832:
case 158:
case 2732:
case 3895:
case 1307:
case 2682:
case 3588:
case 3242:
case 3779:
case 1260:
case 1349:
case 266:
case 318:
case 1559:
case 3527:
case 2117:
case 3267:
case 4018:
case 627:
case 967:
case 944:
case 2207:
case 1259:
case 1987:
case 506:
case 1556:
case 397:
case 2669:
case 709:
case 2981:
case 2195:
case 2652:
case 1143:
case 1218:
case 2774:
case 734:
case 3387:
case 2347:
case 544:
case 1131:
case 1770:
case 1113:
case 2985:
case 1638:
case 3631:
case 2042:
case 3868:
case 1506:
case 424:
case 1243:
case 3036:
case 810:
case 3317:
case 2851:
case 1121:
case 3347:
case 1499:
case 1626:
case 3199:
case 299:
case 791:
case 1682:
case 252:
case 3845:
case 3756:
case 1013:
case 2332:
case 2948:
case 3867:
case 1676:
case 923:
case 1818:
case 2214:
case 3577:
case 674:
case 3371:
case 2567:
case 3018:
case 735:
case 1472:
case 3441:
case 115:
case 3550:
case 3312:
case 1766:
case 3213:
case 748:
case 3015:
case 1500:
case 3614:
case 56:
case 840:
case 344:
case 3623:
case 1280:
case 388:
case 3728:
case 3526:
case 1557:
case 129:
case 3562:
case 3402:
case 1474:
case 368:
case 1614:
case 3153:
case 3346:
case 2962:
case 3115:
case 972:
case 982:
case 2346:
case 3817:
case 805:
case 3585:
case 2935:
case 2882:
case 2539:
case 148:
case 337:
case 1642:
case 1518:
case 3646:
case 2212:
case 419:
case 3720:
case 53:
case 1279:
case 1760:
case 1631:
case 1049:
case 3415:
case 686:
case 304:
case 1863:
case 55:
case 565:
case 2273:
case 273:
case 1907:
case 2705:
case 447:
case 3469:
case 2036:
case 1875:
case 2394:
case 2515:
case 1529:
case 4075:
case 549:
case 516:
case 471:
case 526:
case 3611:
case 2088:
case 1960:
case 2942:
case 2454:
case 1274:
case 1623:
case 2588:
case 793:
case 787:
case 2049:
case 209:
case 238:
case 964:
case 1705:
case 542:
case 1729:
case 391:
case 1900:
case 3903:
case 2822:
case 1433:
case 3064:
case 3295:
case 2149:
case 756:
case 1310:
case 1933:
case 1847:
case 2769:
case 616:
case 3078:
case 1526:
case 651:
case 98:
case 3666:
case 292:
case 2784:
case 2407:
case 2662:
case 1457:
case 3419:
case 3873:
case 1468:
case 2768:
case 1156:
case 1337:
case 3567:
case 1042:
case 3669:
case 704:
case 647:
case 781:
case 2585:
case 3781:
case 2738:
case 1878:
case 942:
case 216:
case 3412:
case 2854:
case 2218:
case 2402:
case 608:
case 2641:
case 684:
case 1931:
case 4031:
case 911:
case 1477:
case 3201:
case 3045:
case 3546:
case 1309:
case 1058:
case 2564:
case 1496:
case 3001:
case 2090:
case 1162:
case 467:
case 690:
case 35:
case 1689:
case 2292:
case 3816:
case 1493:
case 995:
case 2972:
case 2336:
case 87:
case 646:
case 265:
case 2401:
case 1803:
case 3892:
case 769:
case 1743:
case 3184:
case 3166:
case 1266:
case 3076:
case 2461:
case 3794:
case 1163:
case 2318:
case 2291:
case 3056:
case 3975:
case 1201:
case 2412:
case 1016:
case 871:
case 3219:
case 3901:
case 3146:
case 3652:
case 3357:
case 1400:
case 1403:
case 513:
case 1567:
case 2740:
case 211:
case 3575:
case 2806:
case 1264:
case 1727:
case 3192:
case 102:
case 615:
case 4063:
case 979:
case 2850:
case 184:
case 1422:
case 1272:
case 1414:
case 3570:
case 1541:
case 2803:
case 2923:
case 504:
case 950:
case 2645:
case 3911:
case 1487:
case 2269:
case 943:
case 3993:
case 3857:
case 3382:
case 430:
case 2261:
case 1578:
case 3386:
case 856:
case 3750:
case 1441:
case 284:
case 332:
case 3599:
case 99:
case 37:
case 3150:
case 1882:
case 3005:
case 1543:
case 3521:
case 3120:
case 511:
case 1381:
case 3639:
case 2357:
case 524:
case 2491:
case 215:
case 2452:
case 3362:
case 3821:
case 1167:
case 1833:
case 3657:
case 1937:
case 872:
case 2586:
case 454:
case 2602:
case 1045:
case 1161:
case 3693:
case 3513:
case 200:
case 1553:
case 2992:
case 319:
case 1212:
case 3753:
case 3363:
case 1046:
case 1112:
case 3924:
case 3758:
case 262:
case 3215:
case 517:
case 2459:
case 1977:
case 3769:
case 407:
case 1492:
case 3023:
case 1664:
case 3304:
case 1220:
case 2252:
case 939:
case 1490:
case 1100:
case 1574:
case 3746:
case 2617:
case 301:
case 311:
case 699:
case 520:
case 580:
case 3636:
case 70:
case 543:
case 2353:
case 1633:
case 1210:
case 163:
case 4093:
case 500:
case 991:
case 785:
case 3266:
case 3926:
case 2359:
case 3934:
case 2821:
case 385:
case 1587:
case 11:
case 308:
case 624:
case 2934:
case 1436:
case 1395:
case 2354:
case 3057:
case 1456:
case 1072:
case 1966:
case 1872:
case 3205:
case 881:
case 3093:
case 2778:
case 770:
case 3100:
case 3284:
case 3080:
case 1879:
case 377:
case 3420:
case 2217:
case 3548:
case 497:
case 2691:
case 3391:
case 559:
case 1246:
case 885:
case 3985:
case 2677:
case 49:
case 2995:
case 161:
case 2498:
case 499:
case 4038:
case 1885:
case 94:
case 2365:
case 3240:
case 2463:
case 910:
case 1661:
case 3629:
case 3061:
case 1698:
case 3218:
case 2989:
case 2490:
case 1643:
case 3951:
case 3790:
case 4013:
case 4042:
case 2220:
case 3459:
case 2240:
case 898:
case 2097:
case 935:
case 2748:
case 3211:
case 14:
case 2971:
case 1081:
case 2760:
case 3694:
case 2632:
case 3708:
case 1869:
case 2472:
case 1794:
case 2684:
case 3030:
case 2494:
case 3467:
case 4053:
case 3653:
case 2756:
case 188:
case 4052:
case 1047:
case 2436:
case 2181:
case 2002:
case 3801:
case 2681:
case 836:
case 1735:
case 2159:
case 1018:
case 1532:
case 3055:
case 1871:
case 2520:
case 275:
case 3560:
case 1335:
case 4041:
case 2846:
case 1716:
case 3495:
case 1187:
case 2969:
case 3568:
case 88:
case 3491:
case 3237:
case 2276:
case 2244:
case 296:
case 416:
case 346:
case 21:
case 1108:
case 1446:
case 1865:
case 3450:
case 2132:
case 2604:
case 3942:
case 2156:
case 1449:
case 908:
case 2581:
case 3558:
case 2620:
case 3969:
case 2745:
case 3989:
case 2053:
case 72:
case 1041:
case 3589:
case 1711:
case 4072:
case 2755:
case 135:
case 3784:
case 483:
case 365:
case 4002:
case 3302:
case 482:
case 1190:
case 3544:
case 1221:
case 3590:
case 552:
case 131:
case 3006:
case 2111:
case 533:
case 2599:
case 564:
case 3139:
case 2446:
case 715:
case 3763:
case 399:
case 2600:
case 2348:
case 590:
case 3096:
case 557:
case 2375:
case 531:
case 732:
case 3818:
case 1677:
case 2469:
case 3197:
case 1622:
case 567:
case 1951:
case 1354:
case 1591:
case 1725:
case 2570:
case 1594:
case 3759:
case 3094:
case 669:
case 187:
case 3476:
case 257:
case 2672:
case 423:
case 2629:
case 1788:
case 1389:
case 2430:
case 1124:
case 1912:
case 1971:
case 2125:
case 1324:
case 3050:
case 2229:
case 747:
case 2791:
case 172:
case 2408:
case 1922:
case 962:
case 4010:
case 1997:
case 3180:
case 2051:
case 2870:
case 2927:
case 1527:
case 874:
case 1454:
case 3340:
case 1655:
case 3477:
case 677:
case 3714:
case 2660:
case 4021:
case 171:
case 1242:
case 356:
case 484:
case 3933:
case 121:
case 2957:
case 2835:
case 3722:
case 387:
case 2262:
case 2385:
case 270:
case 1291:
case 460:
case 672:
case 2235:
case 1945:
case 3434:
case 2180:
case 801:
case 2007:
case 568:
case 1522:
case 550:
case 3785:
case 713:
case 936:
case 897:
case 1830:
case 2689:
case 3571:
case 2457:
case 1475:
case 1853:
case 2120:
case 1245:
case 571:
case 1407:
case 3927:
case 1962:
case 3060:
case 2648:
case 794:
case 3090:
case 2951:
case 1986:
case 855:
case 2479:
case 1694:
case 4086:
case 1197:
case 3286:
case 1074:
case 2258:
case 1089:
case 3603:
case 1154:
case 2448:
case 143:
case 3123:
case 1498:
case 2341:
case 976:
case 1805:
case 574:
case 3039:
case 3423:
case 235:
case 992:
case 1396:
case 1650:
case 3564:
case 4001:
case 3353:
case 2317:
case 852:
case 1538:
case 2559:
case 973:
case 3169:
case 2611:
case 1141:
case 2083:
case 957:
case 1136:
case 981:
case 2739:
case 3035:
case 1902:
case 3820:
case 1067:
case 2376:
case 1946:
case 3520:
case 3138:
case 2081:
case 272:
case 3874:
case 2314:
case 2104:
case 3343:
case 306:
case 1319:
case 136:
case 659:
case 2961:
case 3389:
case 3727:
case 3953:
case 2301:
case 3330:
case 1405:
case 3307:
case 2897:
case 685:
case 489:
case 1428:
case 2164:
case 3770:
case 3255:
case 1736:
case 3233:
case 3308:
case 1510:
case 1069:
case 3361:
case 977:
case 2712:
case 1420:
case 3224:
case 2605:
case 2510:
case 2868:
case 469:
case 575:
case 2542:
case 4014:
case 2048:
case 867:
case 3254:
case 2616:
case 3644:
case 327:
case 179:
case 3685:
case 2099:
case 1758:
case 3996:
case 1211:
case 2054:
case 1469:
case 1232:
case 2458:
case 79:
case 2387:
case 1927:
case 3866:
case 2320:
case 1596:
case 2017:
case 1240:
case 2110:
case 2367:
case 512:
case 3479:
case 1399:
case 207:
case 3659:
case 222:
case 2798:
case 820:
case 3210:
case 1767:
case 620:
case 10:
case 1801:
case 165:
case 73:
case 4079:
case 3033:
case 2658:
case 2607:
case 2561:
case 3860:
case 829:
case 2959:
case 2733:
case 2789:
case 2501:
case 599:
case 1641:
case 3973:
case 3360:
case 1102:
case 113:
case 23:
case 3955:
case 3101:
case 2695:
case 244:
case 666:
case 3159:
case 2872:
case 3073:
case 1658:
case 3259:
case 1146:
case 3638:
case 452:
case 4028:
case 2334:
case 364:
case 1043:
case 1391:
case 1964:
case 610:
case 3152:
case 1867:
case 687:
case 3188:
case 1481:
case 3376:
case 2656:
case 152:
case 31:
case 757:
case 1236:
case 602:
case 816:
case 3448:
case 2147:
case 1373:
case 1368:
case 2395:
case 3290:
case 3565:
case 2107:
case 4045:
case 1203:
case 1512:
case 1809:
case 2433:
case 1775:
case 2949:
case 214:
case 3957:
case 3238:
case 2145:
case 2612:
case 297:
case 710:
case 3446:
case 3102:
case 2228:
case 2613:
case 650:
case 1722:
case 3404:
case 1926:
case 2516:
case 2043:
case 2450:
case 3187:
case 839:
case 2016:
case 181:
case 380:
case 3672:
case 2905:
case 1035:
case 3072:
case 1262:
case 1286:
case 3620:
case 3664:
case 538:
case 1696:
case 289:
case 1552:
case 436:
case 4025:
case 2795:
case 2440:
case 1565:
case 1995:
case 2019:
case 2834:
case 1155:
case 933:
case 1038:
case 2075:
case 2855:
case 1418:
case 106:
case 1800:
case 919:
case 2425:
case 3117:
case 1491:
case 76:
case 510:
case 4067:
case 2137:
case 3745:
case 2485:
case 3595:
case 1086:
case 858:
case 1911:
case 4066:
case 1548:
case 2468:
case 45:
case 1181:
case 2112:
case 3831:
case 2966:
case 2525:
case 89:
case 1393:
case 921:
case 3299:
case 1021:
case 2910:
case 505:
case 1539:
case 478:
case 523:
case 1466:
case 1909:
case 561:
case 376:
case 1265:
case 3507:
case 1408:
case 383:
case 1998:
case 3624:
case 4027:
case 2179:
case 277:
case 3695:
case 1199:
case 1208:
case 2857:
case 2750:
case 2074:
case 1609:
case 1845:
case 835:
case 2052:
case 1347:
case 2776:
case 3261:
case 1099:
case 1905:
case 2100:
case 1071:
case 2838:
case 1720:
case 1094:
case 907:
case 60:
case 3885:
case 2876:
case 1014:
case 389:
case 3200:
case 1719:
case 353:
case 711:
case 3610:
case 3464:
case 3038:
case 1903:
case 3982:
case 3645:
case 1328:
case 3407:
case 1445:
case 2236:
case 1480:
case 3647:
case 1701:
case 2238:
case 617:
case 197:
case 3792:
case 2254:
case 3900:
case 3054:
case 2399:
case 8:
case 1504:
case 966:
case 1443:
case 1586:
case 758:
case 850:
case 958:
case 1916:
case 830:
case 404:
case 2896:
case 1003:
case 1329:
case 1196:
case 1561:
case 1085:
case 2968:
case 514:
case 3086:
case 843:
case 2884:
case 3967:
case 2288:
case 3852:
case 1149:
case 3178:
case 2743:
case 579:
case 2833:
case 362:
case 555:
case 1380:
case 2046:
case 1649:
case 2215:
case 159:
case 44:
case 662:
case 2171:
case 117:
case 1634:
case 1315:
case 1004:
case 2251:
case 3426:
case 118:
case 1019:
case 3907:
case 2418:
case 1343:
case 681:
case 1075:
case 74:
case 2715:
case 2505:
case 3310:
case 2901:
case 177:
case 3398:
case 1300:
case 2596:
case 116:
case 3809:
case 703:
case 3079:
case 3251:
case 2057:
case 1531:
case 101:
case 3651:
case 3294:
case 1055:
case 2867:
case 456:
case 3165:
case 2518:
case 3661:
case 1617:
case 2783:
case 468:
case 1797:
case 1092:
case 1012:
case 1139:
case 2824:
case 698:
case 2170:
case 411:
case 2477:
case 652:
case 1057:
case 683:
case 338:
case 1620:
case 3486:
case 3724:
case 2187:
case 2310:
case 3221:
case 463:
case 3411:
case 3712:
case 1026:
case 2766:
case 775:
case 3912:
case 2545:
case 2754:
case 2014:
case 1996:
case 1671:
case 1239:
case 3859:
case 1448:
case 1892:
case 186:
case 1419:
case 3735:
case 3523:
case 1985:
case 3040:
case 577:
case 595:
case 1158:
case 3799:
case 3677:
case 4011:
case 1887:
case 2879:
case 3509:
case 2553:
case 3131:
case 2280:
case 2770:
case 818:
case 929:
case 3542:
case 1759:
case 2578:
case 989:
case 3172:
case 1555:
case 3454:
case 2831:
case 160:
case 609:
case 2534:
case 2722:
case 1327:
case 880:
case 3598:
case 2216:
case 2204:
case 1387:
case 1862:
case 749:
case 2115:
case 3940:
case 294:
case 2624:
case 3832:
case 2329:
case 2533:
case 1392:
case 1989:
case 3252:
case 2950:
case 1299:
case 1258:
case 3009:
case 2873:
case 3668:
case 1458:
case 2136:
case 1700:
case 1027:
case 1476:
case 3381:
case 3406:
case 2413:
case 1817:
case 3958:
case 969:
case 3385:
case 1502:
case 477:
case 740:
case 1009:
case 1621:
case 826:
case 271:
case 1580:
case 3216:
case 1029:
case 2360:
case 884:
case 2160:
case 1206:
case 3976:
case 3249:
case 52:
case 2163:
case 2092:
case 1799:
case 3458:
case 862:
case 1376:
case 3643:
case 3024:
case 951:
case 2076:
case 1285:
case 2059:
case 4081:
case 2039:
case 1020:
case 593:
case 465:
case 799:
case 1372:
case 1921:
case 1976:
case 717:
case 1495:
case 3890:
case 2091:
case 1114:
case 4039:
case 2940:
case 2138:
case 2157:
case 2363:
case 1263:
case 2547:
case 1936:
case 33:
case 588:
case 2864:
case 3861:
case 2638:
case 1344:
case 213:
case 1039:
case 2368:
case 3871:
case 1104:
case 2657:
case 1301:
case 2994:
case 1815:
case 3032:
case 381:
case 96:
case 2955:
case 2428:
case 1688:
case 355:
case 2967:
case 1577:
case 3185:
case 1703:
case 1737:
case 3703:
case 1611:
case 1434:
case 1702:
case 1050:
case 1430:
case 3841:
case 1616:
case 1774:
case 315:
case 3014:
case 2393:
case 2397:
case 1122:
case 290:
case 166:
case 3274:
case 887:
case 3384:
case 2374:
case 975:
case 2055:
case 3422:
case 80:
case 3262:
case 1174:
case 621:
case 2647:
case 1530:
case 1153:
case 536:
case 2380:
case 2355:
case 250:
case 1202:
case 321:
case 2563:
case 1388:
case 3314:
case 800:
case 3802:
case 114:
case 1730:
case 2321:
case 4015:
case 1489:
case 2818:
case 1573:
case 1680:
case 905:
case 2406:
case 371:
case 2502:
case 2079:
case 2241:
case 2513:
case 441:
case 3764:
case 1644:
case 2946:
case 3260:
case 916:
case 367:
case 132:
case 3463:
case 2496:
case 2517:
case 873:
case 1271:
case 493:
case 3905:
case 3740:
case 1267:
case 2535:
case 623:
case 133:
case 2665:
case 2462:
case 3535:
case 2421:
case 844:
case 69:
case 189:
case 41:
case 3207:
case 1157:
case 1859:
case 878:
case 3915:
case 2773:
case 2061:
case 3978:
case 3336:
case 22:
case 1639:
case 3699:
case 949:
case 2481:
case 2697:
case 2844:
case 3696:
case 2026:
case 2191:
case 2655:
case 287:
case 3783:
case 3878:
case 3840:
case 560:
case 1323:
case 3489:
case 937:
case 2866:
case 3707:
case 1127:
case 498:
case 3561:
case 120:
case 1079:
case 2924:
case 927:
case 2419:
case 3332:
case 1411:
case 1179:
case 1823:
case 3573:
case 443:
case 3272:
case 85:
case 3488:
case 762:
case 3443:
case 2095:
case 462:
case 2307:
case 3278:
case 3719:
case 1695:
case 104:
case 63:
case 3019:
case 3230:
case 3766:
case 3913:
case 479:
case 286:
case 398:
case 1460:
case 789:
case 451:
case 1438:
case 838:
case 3515:
case 3437:
case 1471:
case 1814:
case 3126:
case 3531:
case 2471:
case 3893:
case 2443:
case 773:
case 3271:
case 1958:
case 583:
case 1017:
case 2253:
case 3202:
case 3217:
case 854:
case 36:
case 1306:
case 328:
case 2234:
case 204:
case 2839:
case 1273:
case 679:
case 1693:
case 4073:
case 618:
case 1205:
case 1228:
case 1429:
case 2453:
case 3320:
case 1608:
case 2297:
case 3819:
case 1511:
case 3891:
case 3156:
case 264:
case 2603:
case 894:
case 1640:
case 707:
case 2719:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1718337601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,];
var gg_b = "1718337601/";

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
