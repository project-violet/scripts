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
case 2589:
case 1539:
case 2470:
case 1827:
case 1160:
case 1949:
case 3506:
case 2218:
case 3027:
case 705:
case 2658:
case 439:
case 556:
case 1155:
case 2672:
case 2488:
case 320:
case 2637:
case 1687:
case 3522:
case 4035:
case 624:
case 1094:
case 1516:
case 148:
case 243:
case 337:
case 3595:
case 3466:
case 2513:
case 3346:
case 1079:
case 3664:
case 1525:
case 1433:
case 2483:
case 1049:
case 3376:
case 1824:
case 3295:
case 2213:
case 3810:
case 1592:
case 2704:
case 3024:
case 2436:
case 3927:
case 3759:
case 4029:
case 1239:
case 2289:
case 1097:
case 749:
case 3206:
case 2720:
case 2518:
case 3180:
case 2440:
case 3178:
case 1800:
case 2360:
case 630:
case 1979:
case 350:
case 2030:
case 4081:
case 2221:
case 3566:
case 3878:
case 3197:
case 1286:
case 1614:
case 2767:
case 3422:
case 4023:
case 158:
case 550:
case 1078:
case 1948:
case 546:
case 2240:
case 3843:
case 2219:
case 2046:
case 3149:
case 2588:
case 207:
case 3641:
case 3604:
case 1043:
case 807:
case 2570:
case 3955:
case 2659:
case 3406:
case 1257:
case 2519:
case 2540:
case 2288:
case 1238:
case 2930:
case 1980:
case 1351:
case 759:
case 471:
case 537:
case 2270:
case 3179:
case 1952:
case 3671:
case 297:
case 823:
case 1492:
case 2946:
case 2521:
case 141:
case 2536:
case 1586:
case 1554:
case 1533:
case 3055:
case 636:
case 3607:
case 223:
case 520:
case 3848:
case 3737:
case 3772:
case 918:
case 1302:
case 736:
case 900:
case 571:
case 71:
case 744:
case 1047:
case 2885:
case 825:
case 2625:
case 225:
case 772:
case 1553:
case 3847:
case 3608:
case 3874:
case 1331:
case 1237:
case 659:
case 1326:
case 378:
case 1272:
case 2763:
case 87:
case 3575:
case 2115:
case 1977:
case 812:
case 27:
case 3911:
case 1074:
case 56:
case 2982:
case 1618:
case 3161:
case 1542:
case 981:
case 450:
case 1044:
case 3733:
case 3603:
case 2587:
case 1537:
case 629:
case 3275:
case 1572:
case 3801:
case 1181:
case 2131:
case 3935:
case 3396:
case 3545:
case 3786:
case 1242:
case 132:
case 2284:
case 1234:
case 3305:
case 2256:
case 1999:
case 3877:
case 3198:
case 2328:
case 3832:
case 2768:
case 933:
case 2414:
case 2065:
case 255:
case 2082:
case 434:
case 1974:
case 1253:
case 1032:
case 2616:
case 1795:
case 1098:
case 730:
case 1385:
case 2802:
case 2517:
case 1259:
case 1722:
case 1993:
case 3177:
case 1111:
case 3898:
case 3716:
case 649:
case 1683:
case 695:
case 2214:
case 2590:
case 2831:
case 1881:
case 809:
case 426:
case 727:
case 3144:
case 3023:
case 2905:
case 209:
case 2686:
case 1636:
case 2654:
case 2012:
case 3691:
case 245:
case 2514:
case 911:
case 3199:
case 2096:
case 2329:
case 996:
case 2290:
case 539:
case 456:
case 170:
case 4055:
case 268:
case 4060:
case 36:
case 282:
case 1061:
case 724:
case 3174:
case 2769:
case 1093:
case 1670:
case 962:
case 3147:
case 3792:
case 3382:
case 3445:
case 605:
case 3365:
case 371:
case 1458:
case 3725:
case 3028:
case 440:
case 1135:
case 1472:
case 2005:
case 2708:
case 2162:
case 1688:
case 299:
case 1217:
case 1311:
case 1487:
case 1162:
case 1708:
case 475:
case 983:
case 3926:
case 1185:
case 710:
case 484:
case 2458:
case 1912:
case 1657:
case 573:
case 2998:
case 168:
case 263:
case 302:
case 3015:
case 2093:
case 863:
case 3896:
case 3666:
case 3507:
case 2453:
case 3374:
case 3812:
case 1214:
case 389:
case 2683:
case 1703:
case 3031:
case 99:
case 2636:
case 3220:
case 1654:
case 519:
case 1484:
case 2434:
case 3026:
case 3789:
case 109:
case 2362:
case 1517:
case 2259:
case 1802:
case 3571:
case 1996:
case 2385:
case 3204:
case 487:
case 2098:
case 2795:
case 3150:
case 3241:
case 3467:
case 2722:
case 2619:
case 2993:
case 3347:
case 2640:
case 1050:
case 1328:
case 4051:
case 3564:
case 592:
case 3865:
case 3695:
case 2999:
case 2234:
case 667:
case 1256:
case 73:
case 1616:
case 417:
case 2974:
case 716:
case 3719:
case 155:
case 791:
case 3740:
case 1065:
case 3441:
case 2537:
case 1587:
case 832:
case 2044:
case 3783:
case 3267:
case 2123:
case 2947:
case 3393:
case 2315:
case 319:
case 3606:
case 2242:
case 232:
case 1126:
case 2459:
case 876:
case 3985:
case 1639:
case 3721:
case 3112:
case 112:
case 1287:
case 2326:
case 373:
case 2099:
case 1791:
case 502:
case 3567:
case 1381:
case 2542:
case 1965:
case 2618:
case 701:
case 2766:
case 1982:
case 2074:
case 1115:
case 2977:
case 780:
case 1885:
case 3264:
case 44:
case 3770:
case 1556:
case 1584:
case 913:
case 3398:
case 2128:
case 3085:
case 3407:
case 2901:
case 664:
case 3062:
case 2048:
case 764:
case 3509:
case 4015:
case 2492:
case 32:
case 1521:
case 2690:
case 2860:
case 3397:
case 2943:
case 3263:
case 1300:
case 402:
case 228:
case 3408:
case 1583:
case 3291:
case 2425:
case 2980:
case 384:
case 1288:
case 2257:
case 1519:
case 601:
case 375:
case 3568:
case 3349:
case 514:
case 1270:
case 2978:
case 3379:
case 4002:
case 517:
case 3268:
case 2948:
case 387:
case 2439:
case 1570:
case 952:
case 2124:
case 2043:
case 2973:
case 1327:
case 691:
case 4031:
case 3209:
case 63:
case 858:
case 767:
case 3563:
case 2775:
case 153:
case 1976:
case 3830:
case 977:
case 1642:
case 1355:
case 1720:
case 419:
case 2239:
case 686:
case 3468:
case 3714:
case 3203:
case 1440:
case 3348:
case 2800:
case 698:
case 2216:
case 1741:
case 1851:
case 2010:
case 1483:
case 587:
case 251:
case 3373:
case 2454:
case 1704:
case 2656:
case 2684:
case 1213:
case 2592:
case 143:
case 248:
case 2997:
case 2516:
case 3463:
case 4062:
case 821:
case 575:
case 4085:
case 265:
case 3717:
case 865:
case 1771:
case 2079:
case 848:
case 610:
case 3352:
case 2949:
case 2910:
case 52:
case 2539:
case 1488:
case 3951:
case 2438:
case 1707:
case 2687:
case 1637:
case 2155:
case 3790:
case 974:
case 460:
case 1658:
case 3503:
case 1411:
case 1223:
case 3477:
case 619:
case 2971:
case 252:
case 3175:
case 2231:
case 469:
case 787:
case 3593:
case 4054:
case 3700:
case 3561:
case 2226:
case 3630:
case 2337:
case 2372:
case 1429:
case 2156:
case 2184:
case 3401:
case 2907:
case 3646:
case 2202:
case 1859:
case 1710:
case 1153:
case 3364:
case 1528:
case 928:
case 364:
case 2353:
case 3598:
case 815:
case 1356:
case 1384:
case 2334:
case 4038:
case 1228:
case 1523:
case 2485:
case 1435:
case 410:
case 1158:
case 2187:
case 1137:
case 2655:
case 775:
case 3293:
case 2890:
case 2531:
case 3367:
case 3447:
case 822:
case 2526:
case 3261:
case 3145:
case 673:
case 3934:
case 2190:
case 1428:
case 3320:
case 2627:
case 1748:
case 1045:
case 948:
case 1314:
case 3760:
case 3953:
case 965:
case 2967:
case 274:
case 2064:
case 3493:
case 2776:
case 2117:
case 3461:
case 1975:
case 285:
case 2285:
case 874:
case 2359:
case 1853:
case 1481:
case 3958:
case 2431:
case 3937:
case 1651:
case 877:
case 277:
case 3277:
case 567:
case 2746:
case 1535:
case 1423:
case 1211:
case 3053:
case 3232:
case 1834:
case 2562:
case 2402:
case 951:
case 491:
case 717:
case 2964:
case 1752:
case 416:
case 43:
case 3042:
case 689:
case 1229:
case 3875:
case 3201:
case 1390:
case 3574:
case 3498:
case 3307:
case 2600:
case 2392:
case 1732:
case 29:
case 1602:
case 1966:
case 2765:
case 467:
case 2325:
case 2750:
case 3195:
case 2991:
case 398:
case 4059:
case 3497:
case 89:
case 3308:
case 2819:
case 2963:
case 3086:
case 792:
case 3957:
case 1631:
case 2681:
case 1560:
case 3612:
case 3938:
case 2451:
case 369:
case 3106:
case 2009:
case 3280:
case 1833:
case 53:
case 516:
case 1854:
case 2836:
case 591:
case 3369:
case 3252:
case 3449:
case 2821:
case 1318:
case 106:
case 3410:
case 2968:
case 580:
case 283:
case 3248:
case 3303:
case 1615:
case 20:
case 2118:
case 3580:
case 3578:
case 2063:
case 308:
case 310:
case 3696:
case 1313:
case 64:
case 2909:
case 3605:
case 3057:
case 1427:
case 3954:
case 3273:
case 1838:
case 196:
case 1192:
case 760:
case 2705:
case 773:
case 2008:
case 1157:
case 181:
case 1906:
case 1662:
case 1892:
case 1138:
case 2188:
case 1455:
case 2903:
case 3368:
case 1319:
case 3448:
case 2170:
case 1524:
case 684:
case 2551:
case 813:
case 1922:
case 1793:
case 2333:
case 380:
case 1500:
case 3916:
case 1761:
case 3597:
case 3309:
case 4072:
case 3473:
case 118:
case 213:
case 2386:
case 1336:
case 1227:
case 2354:
case 2712:
case 3925:
case 1006:
case 4042:
case 1200:
case 3363:
case 3039:
case 1186:
case 1154:
case 569:
case 586:
case 65:
case 316:
case 1133:
case 1839:
case 2889:
case 391:
case 3682:
case 3594:
case 3016:
case 3478:
case 3665:
case 3210:
case 687:
case 4053:
case 1816:
case 1224:
case 3650:
case 3579:
case 3480:
case 1388:
case 2338:
case 2251:
case 1798:
case 598:
case 190:
case 1969:
case 2370:
case 890:
case 1119:
case 1140:
case 1611:
case 3702:
case 3013:
case 3430:
case 2224:
case 2816:
case 449:
case 495:
case 179:
case 1136:
case 1908:
case 3803:
case 233:
case 530:
case 2200:
case 2006:
case 3109:
case 2527:
case 2839:
case 3366:
case 925:
case 800:
case 2500:
case 2761:
case 1333:
case 31:
case 344:
case 2383:
case 1069:
case 656:
case 3018:
case 4087:
case 2336:
case 372:
case 113:
case 1796:
case 218:
case 3191:
case 2321:
case 1818:
case 2995:
case 3869:
case 3913:
case 961:
case 3699:
case 2455:
case 2906:
case 2892:
case 2662:
case 2138:
case 739:
case 557:
case 2685:
case 1635:
case 405:
case 3989:
case 1008:
case 2825:
case 2319:
case 2460:
case 3762:
case 3936:
case 1870:
case 2427:
case 3785:
case 3088:
case 637:
case 1909:
case 357:
case 2313:
case 2857:
case 211:
case 945:
case 4017:
case 1316:
case 3276:
case 3983:
case 2838:
case 324:
case 1888:
case 3322:
case 2192:
case 1118:
case 3891:
case 2774:
case 2260:
case 3940:
case 771:
case 2615:
case 3693:
case 999:
case 3863:
case 3919:
case 288:
case 51:
case 4090:
case 572:
case 1091:
case 2255:
case 3306:
case 888:
case 2799:
case 2626:
case 330:
case 2833:
case 1883:
case 1451:
case 650:
case 1009:
case 2701:
case 2560:
case 806:
case 2424:
case 3036:
case 1189:
case 206:
case 1821:
case 2318:
case 2744:
case 3970:
case 1836:
case 2886:
case 4014:
case 3040:
case 3019:
case 3246:
case 1392:
case 1840:
case 1819:
case 1963:
case 2400:
case 3698:
case 3868:
case 1991:
case 1325:
case 646:
case 1750:
case 354:
case 1113:
case 1067:
case 1964:
case 734:
case 1402:
case 2778:
case 2390:
case 4089:
case 395:
case 3084:
case 2743:
case 2481:
case 3104:
case 4013:
case 3250:
case 1624:
case 2853:
case 3610:
case 1562:
case 1884:
case 3141:
case 2535:
case 3282:
case 177:
case 3679:
case 1117:
case 3171:
case 1415:
case 1064:
case 1967:
case 174:
case 3550:
case 3565:
case 3496:
case 1359:
case 305:
case 2511:
case 3582:
case 720:
case 1285:
case 3864:
case 3107:
case 2428:
case 1627:
case 3087:
case 472:
case 3956:
case 2858:
case 436:
case 2872:
case 2529:
case 2748:
case 2172:
case 1462:
case 904:
case 3090:
case 1904:
case 2435:
case 740:
case 1007:
case 359:
case 3375:
case 1941:
case 1531:
case 2581:
case 3512:
case 2779:
case 424:
case 3164:
case 4070:
case 2228:
case 505:
case 997:
case 3673:
case 3205:
case 1334:
case 2384:
case 549:
case 3751:
case 994:
case 454:
case 3990:
case 2429:
case 493:
case 3841:
case 2134:
case 3804:
case 2153:
case 2749:
case 2859:
case 1202:
case 4040:
case 4019:
case 3505:
case 152:
case 3014:
case 3465:
case 1971:
case 3820:
case 3167:
case 4083:
case 2142:
case 2797:
case 1814:
case 1372:
case 1226:
case 3450:
case 3212:
case 595:
case 1515:
case 2368:
case 1647:
case 1808:
case 485:
case 474:
case 3551:
case 2092:
case 4064:
case 3008:
case 2939:
case 2294:
case 2549:
case 801:
case 2025:
case 2728:
case 1913:
case 2309:
case 1191:
case 3796:
case 313:
case 2473:
case 641:
case 172:
case 1163:
case 880:
case 1476:
case 280:
case 2166:
case 3069:
case 11:
case 3333:
case 2916:
case 628:
case 216:
case 1446:
case 2992:
case 2806:
case 2723:
case 3183:
case 291:
case 3712:
case 3629:
case 1731:
case 2781:
case 1601:
case 3121:
case 891:
case 816:
case 1803:
case 658:
case 3908:
case 83:
case 2297:
case 379:
case 1089:
case 3357:
case 732:
case 3338:
case 3611:
case 3140:
case 2478:
case 2016:
case 2594:
case 776:
case 2210:
case 3813:
case 2452:
case 154:
case 3750:
case 2195:
case 3991:
case 1576:
case 2497:
case 298:
case 1868:
case 1698:
case 989:
case 3963:
case 3819:
case 2243:
case 3840:
case 3392:
case 127:
case 3782:
case 2711:
case 1040:
case 2573:
case 2278:
case 869:
case 1103:
case 1970:
case 3836:
case 452:
case 1083:
case 2033:
case 2369:
case 2449:
case 2548:
case 2054:
case 2729:
case 579:
case 1021:
case 4020:
case 538:
case 2280:
case 2494:
case 2578:
case 103:
case 208:
case 4007:
case 1306:
case 2552:
case 2696:
case 210:
case 2303:
case 3968:
case 1863:
case 810:
case 1169:
case 1530:
case 1891:
case 2580:
case 3888:
case 124:
case 1276:
case 3316:
case 4071:
case 2543:
case 763:
case 3909:
case 2038:
case 770:
case 1546:
case 1785:
case 621:
case 2057:
case 3870:
case 415:
case 1762:
case 3887:
case 2501:
case 2274:
case 663:
case 670:
case 4069:
case 2845:
case 748:
case 2037:
case 522:
case 3627:
case 765:
case 2544:
case 94:
case 2755:
case 3190:
case 1107:
case 2577:
case 1864:
case 4008:
case 105:
case 3262:
case 3359:
case 1496:
case 1565:
case 2247:
case 3967:
case 3776:
case 2493:
case 3415:
case 1171:
case 385:
case 1679:
case 2277:
case 2053:
case 2232:
case 1141:
case 3884:
case 2371:
case 1610:
case 2547:
case 1250:
case 1104:
case 3431:
case 149:
case 1987:
case 1056:
case 1084:
case 2042:
case 2201:
case 195:
case 1120:
case 2574:
case 917:
case 1867:
case 3730:
case 3600:
case 2307:
case 3402:
case 4003:
case 2244:
case 552:
case 3964:
case 2593:
case 3515:
case 3358:
case 676:
case 3020:
case 1450:
case 3226:
case 2630:
case 2700:
case 3372:
case 129:
case 1482:
case 1167:
case 1820:
case 2477:
case 1596:
case 1014:
case 2175:
case 1917:
case 758:
case 1505:
case 2646:
case 577:
case 3041:
case 267:
case 49:
case 2444:
case 2401:
case 3184:
case 3156:
case 1751:
case 3502:
case 728:
case 1205:
case 3817:
case 1673:
case 542:
case 92:
case 1017:
case 3071:
case 1914:
case 2474:
case 2598:
case 3660:
case 984:
case 1648:
case 1807:
case 3941:
case 3526:
case 159:
case 4091:
case 3904:
case 3187:
case 1296:
case 3342:
case 2959:
case 322:
case 3655:
case 2375:
case 259:
case 488:
case 2807:
case 1447:
case 704:
case 2512:
case 4066:
case 3581:
case 1293:
case 1727:
case 1959:
case 3137:
case 2296:
case 859:
case 3158:
case 3435:
case 462:
case 3523:
case 3228:
case 2871:
case 723:
case 1474:
case 956:
case 797:
case 2164:
case 496:
case 1676:
case 3528:
case 1444:
case 1364:
case 3749:
case 3153:
case 794:
case 167:
case 1646:
case 1298:
case 2751:
case 2990:
case 335:
case 1401:
case 655:
case 3134:
case 3429:
case 3142:
case 3387:
case 1561:
case 1700:
case 2450:
case 2212:
case 1175:
case 2917:
case 2596:
case 406:
case 2678:
case 2482:
case 2167:
case 946:
case 934:
case 1498:
case 1574:
case 2867:
case 2697:
case 1201:
case 295:
case 3229:
case 895:
case 1244:
case 3842:
case 1599:
case 3778:
case 3945:
case 2265:
case 3317:
case 1371:
case 1232:
case 3211:
case 4022:
case 3423:
case 849:
case 2056:
case 3159:
case 1034:
case 3743:
case 2084:
case 3651:
case 950:
case 1958:
case 535:
case 1942:
case 3773:
case 2496:
case 2565:
case 205:
case 3235:
case 2582:
case 1532:
case 1304:
case 2694:
case 2864:
case 3975:
case 1341:
case 2171:
case 920:
case 805:
case 3858:
case 668:
case 1274:
case 3529:
case 1760:
case 1501:
case 645:
case 3314:
case 3748:
case 1544:
case 400:
case 3428:
case 1845:
case 1037:
case 2956:
case 418:
case 2984:
case 682:
case 782:
case 3857:
case 643:
case 1933:
case 3747:
case 396:
case 3838:
case 224:
case 2936:
case 1273:
case 1954:
case 745:
case 1057:
case 1038:
case 2785:
case 2546:
case 1735:
case 3313:
case 257:
case 1696:
case 1866:
case 518:
case 971:
case 203:
case 3389:
case 1494:
case 1578:
case 2661:
case 1479:
case 2169:
case 3774:
case 2693:
case 3615:
case 2940:
case 3260:
case 1410:
case 306:
case 1252:
case 2083:
case 3744:
case 1369:
case 2970:
case 1278:
case 2103:
case 533:
case 3626:
case 2230:
case 1106:
case 2021:
case 169:
case 1957:
case 3139:
case 2036:
case 3424:
case 1054:
case 435:
case 3:
case 1308:
case 709:
case 590:
case 198:
case 2698:
case 827:
case 1195:
case 1573:
case 3966:
case 3602:
case 2246:
case 1711:
case 893:
case 227:
case 3777:
case 1122:
case 3798:
case 3388:
case 1822:
case 1480:
case 3224:
case 3816:
case 1452:
case 2918:
case 1478:
case 1594:
case 3370:
case 1682:
case 2644:
case 3839:
case 3133:
case 2446:
case 1992:
case 1806:
case 1723:
case 3154:
case 2089:
case 3186:
case 1039:
case 1443:
case 333:
case 2726:
case 2803:
case 694:
case 1781:
case 2601:
case 81:
case 272:
case 2163:
case 725:
case 562:
case 3227:
case 3336:
case 318:
case 3321:
case 697:
case 1309:
case 2191:
case 3995:
case 623:
case 2674:
case 1597:
case 4045:
case 1916:
case 3500:
case 588:
case 180:
case 244:
case 3922:
case 2476:
case 3825:
case 2647:
case 3524:
case 3340:
case 101:
case 1368:
case 3460:
case 3455:
case 3892:
case 3662:
case 1510:
case 3906:
case 381:
case 1294:
case 2989:
case 1347:
case 1915:
case 407:
case 706:
case 1182:
case 2475:
case 1165:
case 1002:
case 1713:
case 1150:
case 3996:
case 1571:
case 3802:
case 3517:
case 192:
case 309:
case 2609:
case 1026:
case 2101:
case 7:
case 1399:
case 3654:
case 3686:
case 1220:
case 2928:
case 3012:
case 1031:
case 2081:
case 3703:
case 3826:
case 993:
case 166:
case 3214:
case 2144:
case 494:
case 1374:
case 57:
case 1666:
case 26:
case 711:
case 1520:
case 796:
case 957:
case 345:
case 102:
case 2861:
case 3096:
case 1301:
case 3514:
case 2663:
case 2893:
case 512:
case 3657:
case 525:
case 762:
case 2725:
case 2981:
case 1931:
case 871:
case 1541:
case 399:
case 3638:
case 3005:
case 3162:
case 2147:
case 2923:
case 4076:
case 1377:
case 98:
case 3311:
case 1332:
case 1271:
case 1805:
case 788:
case 3217:
case 903:
case 2365:
case 271:
case 1062:
case 1105:
case 718:
case 2757:
case 3625:
case 325:
case 443:
case 2929:
case 1407:
case 2035:
case 2738:
case 700:
case 936:
case 2847:
case 944:
case 91:
case 3584:
case 3556:
case 1264:
case 3885:
case 2193:
case 582:
case 3115:
case 878:
case 3323:
case 3982:
case 2911:
case 37:
case 2161:
case 2899:
case 1471:
case 2669:
case 2245:
case 3965:
case 3381:
case 2312:
case 1567:
case 3791:
case 568:
case 312:
case 239:
case 1112:
case 3131:
case 2844:
case 1985:
case 2935:
case 1962:
case 1606:
case 2786:
case 1736:
case 1267:
case 2603:
case 1783:
case 2733:
case 1361:
case 2801:
case 1441:
case 2275:
case 3768:
case 3065:
case 3414:
case 1719:
case 2011:
case 733:
case 1865:
case 2877:
case 1882:
case 2832:
case 3328:
case 1420:
case 3050:
case 3767:
case 226:
case 394:
case 1830:
case 2852:
case 3030:
case 15:
case 826:
case 2878:
case 3236:
case 3327:
case 735:
case 2742:
case 2734:
case 1756:
case 2604:
case 3489:
case 3570:
case 2955:
case 187:
case 2406:
case 1268:
case 929:
case 3219:
case 2843:
case 3240:
case 1403:
case 2960:
case 3046:
case 3588:
case 2110:
case 3270:
case 2873:
case 1349:
case 3764:
case 3418:
case 1310:
case 1469:
case 2671:
case 175:
case 3519:
case 4005:
case 959:
case 2194:
case 240:
case 468:
case 2055:
case 1408:
case 1787:
case 323:
case 2848:
case 2607:
case 445:
case 3300:
case 2266:
case 3521:
case 3946:
case 1509:
case 2060:
case 618:
case 482:
case 1503:
case 3658:
case 2924:
case 688:
case 1380:
case 2330:
case 523:
case 3707:
case 3589:
case 3470:
case 2148:
case 905:
case 1378:
case 597:
case 820:
case 2506:
case 1269:
case 1352:
case 3218:
case 662:
case 2466:
case 114:
case 14:
case 2595:
case 1176:
case 1717:
case 2879:
case 1491:
case 837:
case 611:
case 1208:
case 2173:
case 1343:
case 343:
case 2810:
case 3213:
case 3421:
case 1051:
case 2295:
case 3704:
case 4050:
case 3436:
case 2024:
case 846:
case 4082:
case 2222:
case 2376:
case 246:
case 3851:
case 1146:
case 4065:
case 6:
case 995:
case 3419:
case 949:
case 2178:
case 3440:
case 2897:
case 2667:
case 1675:
case 250:
case 3289:
case 850:
case 3720:
case 606:
case 3642:
case 2206:
case 3518:
case 558:
case 476:
case 2675:
case 3979:
case 777:
case 1897:
case 2714:
case 3800:
case 2203:
case 2130:
case 2569:
case 1206:
case 4001:
case 3239:
case 1927:
case 1143:
case 3684:
case 69:
case 1810:
case 2508:
case 3010:
case 146:
case 3049:
case 134:
case 4032:
case 3433:
case 1222:
case 3525:
case 217:
case 1894:
case 1664:
case 2717:
case 4047:
case 1346:
case 1595:
case 214:
case 3292:
case 3997:
case 348:
case 1900:
case 3094:
case 814:
case 365:
case 1879:
case 60:
case 3687:
case 3438:
case 3155:
case 2503:
case 1027:
case 3457:
case 4074:
case 3910:
case 2645:
case 2269:
case 2352:
case 3160:
case 3827:
case 3539:
case 1148:
case 2378:
case 3127:
case 715:
case 3943:
case 1772:
case 2397:
case 3860:
case 463:
case 3533:
case 3745:
case 3048:
case 4061:
case 1060:
case 1266:
case 22:
case 3492:
case 2509:
case 1671:
case 875:
case 2349:
case 3952:
case 2310:
case 1179:
case 1873:
case 3978:
case 884:
case 3351:
case 548:
case 722:
case 1194:
case 3257:
case 565:
case 3073:
case 2846:
case 287:
case 551:
case 3439:
case 3043:
case 2784:
case 2756:
case 3538:
case 1149:
case 1110:
case 3557:
case 1843:
case 752:
case 1960:
case 2403:
case 3948:
case 887:
case 3775:
case 638:
case 358:
case 3233:
case 1422:
case 2830:
case 2591:
case 1880:
case 126:
case 3614:
case 3286:
case 3973:
case 967:
case 1878:
case 1566:
case 25:
case 3080:
case 4049:
case 3974:
case 1011:
case 2740:
case 2719:
case 2882:
case 93:
case 1198:
case 916:
case 2564:
case 991:
case 451:
case 1305:
case 2962:
case 2606:
case 3242:
case 2736:
case 1545:
case 1396:
case 652:
case 2985:
case 2404:
case 3181:
case 3829:
case 3537:
case 819:
case 1733:
case 3315:
case 2393:
case 1669:
case 1899:
case 3542:
case 3074:
case 3766:
case 3977:
case 873:
case 139:
case 3272:
case 570:
case 2196:
case 3237:
case 260:
case 1312:
case 2567:
case 3128:
case 980:
case 2398:
case 2085:
case 1035:
case 1608:
case 3901:
case 1757:
case 448:
case 713:
case 4094:
case 3835:
case 3047:
case 3944:
case 2264:
case 421:
case 615:
case 3437:
case 2541:
case 2926:
case 685:
case 3472:
case 674:
case 1350:
case 1028:
case 1981:
case 3559:
case 642:
case 2271:
case 2805:
case 2504:
case 910:
case 1792:
case 1147:
case 1923:
case 2377:
case 3093:
case 2015:
case 2464:
case 2520:
case 802:
case 1174:
case 441:
case 2896:
case 2666:
case 363:
case 1199:
case 428:
case 202:
case 889:
case 1928:
case 866:
case 1081:
case 2031:
case 3706:
case 3636:
case 3129:
case 1101:
case 3434:
case 2789:
case 3621:
case 1739:
case 3453:
case 2507:
case 1144:
case 2812:
case 3881:
case 266:
case 4078:
case 731:
case 458:
case 998:
case 1716:
case 1898:
case 1668:
case 892:
case 2182:
case 1132:
case 2467:
case 3640:
case 2347:
case 986:
case 3619:
case 969:
case 3993:
case 3722:
case 292:
case 3385:
case 677:
case 2713:
case 3098:
case 3795:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747105202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,];
var gg_b = "1747105202/";

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
