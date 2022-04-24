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
var o = 1;
switch (g) {
case 12:
case 3960:
case 3997:
case 2274:
case 3201:
case 2478:
case 3624:
case 3013:
case 618:
case 129:
case 3677:
case 286:
case 3804:
case 3036:
case 2016:
case 3830:
case 3644:
case 827:
case 2784:
case 1209:
case 3505:
case 1611:
case 366:
case 256:
case 1652:
case 2816:
case 132:
case 3462:
case 562:
case 96:
case 1976:
case 3571:
case 1132:
case 3307:
case 2948:
case 1679:
case 2527:
case 3445:
case 953:
case 2751:
case 2515:
case 3243:
case 1746:
case 1894:
case 3291:
case 3388:
case 1659:
case 1839:
case 1927:
case 1391:
case 38:
case 1200:
case 3337:
case 3465:
case 3909:
case 1735:
case 3896:
case 2126:
case 2266:
case 259:
case 2873:
case 1983:
case 1433:
case 593:
case 2693:
case 255:
case 3788:
case 2042:
case 2210:
case 1891:
case 1764:
case 3319:
case 2436:
case 2410:
case 3277:
case 4044:
case 1349:
case 3118:
case 2253:
case 1160:
case 3371:
case 3810:
case 1061:
case 3236:
case 1873:
case 3409:
case 1648:
case 3631:
case 1095:
case 459:
case 329:
case 2549:
case 21:
case 1380:
case 1741:
case 2285:
case 3638:
case 3946:
case 224:
case 3968:
case 2855:
case 4085:
case 1867:
case 2247:
case 773:
case 706:
case 3318:
case 3668:
case 1869:
case 1393:
case 2959:
case 741:
case 2055:
case 3667:
case 1681:
case 702:
case 1490:
case 686:
case 2709:
case 403:
case 3560:
case 2835:
case 3499:
case 1201:
case 679:
case 838:
case 2186:
case 1313:
case 669:
case 609:
case 2272:
case 1558:
case 2241:
case 3159:
case 1673:
case 2563:
case 169:
case 4062:
case 537:
case 621:
case 3336:
case 1631:
case 81:
case 305:
case 1120:
case 2775:
case 1363:
case 162:
case 975:
case 514:
case 3047:
case 616:
case 1397:
case 1854:
case 142:
case 2734:
case 1763:
case 3111:
case 868:
case 3807:
case 2069:
case 736:
case 3365:
case 3181:
case 1725:
case 2271:
case 3500:
case 377:
case 1565:
case 3662:
case 826:
case 1507:
case 334:
case 3771:
case 3206:
case 1419:
case 1148:
case 2768:
case 996:
case 1851:
case 1591:
case 3302:
case 2771:
case 1569:
case 2893:
case 2230:
case 2905:
case 3048:
case 899:
case 2369:
case 3338:
case 3781:
case 492:
case 24:
case 1434:
case 1842:
case 3249:
case 1353:
case 2112:
case 2818:
case 2400:
case 2838:
case 1066:
case 4070:
case 184:
case 554:
case 2046:
case 656:
case 2950:
case 948:
case 680:
case 2639:
case 1041:
case 1456:
case 3693:
case 3617:
case 870:
case 2558:
case 2617:
case 615:
case 1861:
case 3060:
case 3995:
case 72:
case 1164:
case 1810:
case 3799:
case 3535:
case 902:
case 2102:
case 3756:
case 1143:
case 106:
case 2902:
case 2101:
case 84:
case 3325:
case 2485:
case 3086:
case 3776:
case 3392:
case 3646:
case 2163:
case 3614:
case 1188:
case 853:
case 3977:
case 3891:
case 2887:
case 740:
case 3344:
case 1479:
case 2015:
case 3145:
case 3004:
case 2368:
case 1102:
case 327:
case 1146:
case 1901:
case 3816:
case 3016:
case 825:
case 523:
case 3711:
case 3836:
case 2860:
case 3998:
case 2127:
case 3772:
case 2599:
case 3552:
case 2552:
case 589:
case 920:
case 1872:
case 3191:
case 3847:
case 2813:
case 613:
case 175:
case 496:
case 1429:
case 1495:
case 1753:
case 3178:
case 168:
case 847:
case 1389:
case 3379:
case 1469:
case 2025:
case 851:
case 3095:
case 2168:
case 1410:
case 1099:
case 599:
case 935:
case 3729:
case 2622:
case 1516:
case 328:
case 2524:
case 2808:
case 508:
case 3446:
case 943:
case 2115:
case 1402:
case 3553:
case 1062:
case 2064:
case 1796:
case 2463:
case 306:
case 2152:
case 1513:
case 1070:
case 770:
case 3603:
case 2453:
case 2357:
case 3257:
case 528:
case 3952:
case 1899:
case 280:
case 670:
case 332:
case 2776:
case 1260:
case 227:
case 1577:
case 1111:
case 1398:
case 1545:
case 3210:
case 1918:
case 4082:
case 3806:
case 928:
case 2728:
case 893:
case 1067:
case 3691:
case 2659:
case 128:
case 1134:
case 2284:
case 1963:
case 221:
case 950:
case 1373:
case 583:
case 981:
case 2548:
case 3014:
case 1519:
case 494:
case 1110:
case 2600:
case 2379:
case 1584:
case 1248:
case 1407:
case 2000:
case 2557:
case 754:
case 243:
case 1105:
case 2107:
case 3017:
case 1621:
case 3474:
case 1993:
case 689:
case 2476:
case 728:
case 1400:
case 426:
case 2999:
case 2316:
case 810:
case 94:
case 3653:
case 3248:
case 2047:
case 3868:
case 71:
case 2026:
case 994:
case 1156:
case 3304:
case 3731:
case 417:
case 854:
case 408:
case 2063:
case 960:
case 232:
case 2415:
case 3531:
case 2806:
case 3334:
case 4024:
case 2282:
case 3947:
case 3649:
case 1589:
case 1683:
case 4011:
case 2364:
case 1724:
case 3271:
case 238:
case 3120:
case 2236:
case 2215:
case 3573:
case 3645:
case 2687:
case 4033:
case 239:
case 107:
case 617:
case 141:
case 3239:
case 4095:
case 3733:
case 2928:
case 2772:
case 1087:
case 1021:
case 470:
case 2310:
case 450:
case 3797:
case 3293:
case 416:
case 36:
case 3347:
case 194:
case 468:
case 1237:
case 314:
case 3001:
case 503:
case 3448:
case 2142:
case 1215:
case 2108:
case 3657:
case 647:
case 1684:
case 2019:
case 2465:
case 1933:
case 1342:
case 1476:
case 2261:
case 986:
case 1154:
case 3361:
case 4081:
case 1291:
case 349:
case 2333:
case 3844:
case 2475:
case 1471:
case 91:
case 47:
case 1848:
case 453:
case 543:
case 3598:
case 2956:
case 2301:
case 174:
case 3984:
case 919:
case 1705:
case 1040:
case 1478:
case 1790:
case 2389:
case 1627:
case 2469:
case 360:
case 2380:
case 1904:
case 2822:
case 3846:
case 1464:
case 3641:
case 2615:
case 240:
case 1914:
case 10:
case 3554:
case 138:
case 2259:
case 2431:
case 1770:
case 1003:
case 2538:
case 803:
case 316:
case 814:
case 1535:
case 765:
case 1864:
case 3716:
case 3150:
case 526:
case 2670:
case 897:
case 2528:
case 1866:
case 104:
case 3438:
case 2044:
case 1670:
case 1979:
case 2451:
case 3348:
case 1426:
case 1023:
case 748:
case 3093:
case 2817:
case 3033:
case 3357:
case 3955:
case 2502:
case 2875:
case 602:
case 1000:
case 2262:
case 652:
case 2541:
case 3954:
case 3244:
case 3069:
case 1284:
case 3813:
case 3055:
case 1409:
case 2834:
case 1109:
case 1966:
case 901:
case 622:
case 3762:
case 3090:
case 2050:
case 57:
case 788:
case 2466:
case 633:
case 1934:
case 1757:
case 3585:
case 1564:
case 2971:
case 2745:
case 3489:
case 2618:
case 1913:
case 3089:
case 908:
case 1498:
case 1696:
case 2510:
case 1511:
case 3536:
case 1315:
case 1551:
case 1986:
case 995:
case 4058:
case 2572:
case 857:
case 2433:
case 3706:
case 3715:
case 2995:
case 1046:
case 197:
case 3188:
case 2458:
case 161:
case 3177:
case 2128:
case 1448:
case 3254:
case 3009:
case 2702:
case 2993:
case 3913:
case 3957:
case 2760:
case 2874:
case 3184:
case 1447:
case 949:
case 253:
case 662:
case 2953:
case 433:
case 2257:
case 1667:
case 4090:
case 3019:
case 3987:
case 441:
case 1880:
case 303:
case 4015:
case 586:
case 833:
case 1858:
case 37:
case 812:
case 540:
case 1247:
case 2011:
case 2927:
case 3116:
case 64:
case 1210:
case 2910:
case 1524:
case 3135:
case 3510:
case 1022:
case 3570:
case 26:
case 2604:
case 1982:
case 337:
case 3166:
case 3419:
case 2196:
case 1445:
case 3874:
case 2958:
case 2550:
case 1277:
case 163:
case 2317:
case 1467:
case 1211:
case 3501:
case 2525:
case 3533:
case 3124:
case 135:
case 3368:
case 3299:
case 934:
case 2590:
case 1270:
case 1836:
case 2116:
case 3253:
case 797:
case 1995:
case 3774:
case 3512:
case 1228:
case 144:
case 3286:
case 475:
case 177:
case 1161:
case 2076:
case 1307:
case 2141:
case 45:
case 2497:
case 1713:
case 782:
case 900:
case 1086:
case 2403:
case 727:
case 3515:
case 1576:
case 388:
case 2349:
case 1052:
case 1926:
case 2353:
case 3942:
case 2321:
case 829:
case 3351:
case 1303:
case 2781:
case 2340:
case 3269:
case 1056:
case 3084:
case 4056:
case 739:
case 3466:
case 2193:
case 2043:
case 3238:
case 3775:
case 4066:
case 1834:
case 808:
case 3398:
case 3151:
case 1820:
case 1597:
case 2120:
case 3605:
case 3010:
case 173:
case 711:
case 1186:
case 261:
case 1198:
case 2206:
case 3908:
case 671:
case 3282:
case 976:
case 1845:
case 2717:
case 1473:
case 2416:
case 3311:
case 231:
case 1289:
case 3655:
case 2682:
case 66:
case 1546:
case 3523:
case 3567:
case 19:
case 775:
case 1117:
case 172:
case 3833:
case 1123:
case 3687:
case 1875:
case 279:
case 68:
case 2471:
case 2954:
case 3247:
case 34:
case 611:
case 2955:
case 2441:
case 3885:
case 4010:
case 3579:
case 3113:
case 2912:
case 1821:
case 1815:
case 3812:
case 1325:
case 3110:
case 2203:
case 1897:
case 2325:
case 3297:
case 3983:
case 1072:
case 3:
case 3588:
case 2763:
case 2708:
case 3511:
case 2753:
case 1165:
case 688:
case 1174:
case 4050:
case 1263:
case 1653:
case 3870:
case 2975:
case 1333:
case 3607:
case 88:
case 3737:
case 2305:
case 998:
case 2758:
case 938:
case 987:
case 1599:
case 939:
case 557:
case 945:
case 534:
case 1969:
case 2212:
case 3208:
case 3939:
case 3809:
case 2896:
case 2824:
case 1626:
case 1242:
case 2057:
case 1293:
case 2516:
case 2491:
case 2085:
case 655:
case 1264:
case 957:
case 1141:
case 1965:
case 2588:
case 1427:
case 2300:
case 699:
case 2195:
case 802:
case 507:
case 929:
case 1324:
case 1411:
case 2240:
case 320:
case 3751:
case 1784:
case 2511:
case 592:
case 3878:
case 559:
case 302:
case 1960:
case 2006:
case 482:
case 2832:
case 1308:
case 3688:
case 3224:
case 3158:
case 1137:
case 785:
case 454:
case 1964:
case 363:
case 1090:
case 1942:
case 3346:
case 1452:
case 1159:
case 2711:
case 2079:
case 1512:
case 2413:
case 3678:
case 567:
case 157:
case 2012:
case 2256:
case 1877:
case 3168:
case 912:
case 211:
case 1978:
case 715:
case 1501:
case 2655:
case 2757:
case 3718:
case 398:
case 1091:
case 2503:
case 3314:
case 3843:
case 2679:
case 738:
case 2782:
case 1025:
case 2965:
case 2654:
case 2891:
case 2833:
case 1395:
case 1975:
case 649:
case 2030:
case 2553:
case 3901:
case 126:
case 701:
case 2707:
case 3498:
case 4077:
case 437:
case 1985:
case 539:
case 2744:
case 1088:
case 2691:
case 1923:
case 3292:
case 3023:
case 1727:
case 1690:
case 3330:
case 2217:
case 1108:
case 1793:
case 2429:
case 1900:
case 3698:
case 3153:
case 3708:
case 3139:
case 2391:
case 3439:
case 3391:
case 2647:
case 610:
case 3721:
case 41:
case 1406:
case 3654:
case 3412:
case 2920:
case 3340:
case 367:
case 3705:
case 1595:
case 3272:
case 2155:
case 2371:
case 166:
case 732:
case 145:
case 1643:
case 4023:
case 1853:
case 2903:
case 101:
case 186:
case 2205:
case 3783:
case 2663:
case 2949:
case 2190:
case 4076:
case 828:
case 3298:
case 2730:
case 1989:
case 871:
case 3000:
case 1379:
case 3220:
case 2059:
case 1618:
case 189:
case 3758:
case 843:
case 694:
case 858:
case 2968:
case 563:
case 2890:
case 1702:
case 3373:
case 3629:
case 325:
case 2913:
case 2280:
case 780:
case 3842:
case 924:
case 214:
case 571:
case 3129:
case 2370:
case 3513:
case 1878:
case 3509:
case 1249:
case 455:
case 2080:
case 3746:
case 3546:
case 2018:
case 1792:
case 1999:
case 2286:
case 1387:
case 2692:
case 58:
case 3563:
case 1073:
case 3761:
case 1543:
case 3889:
case 1743:
case 2737:
case 55:
case 2086:
case 2322:
case 2289:
case 2351:
case 958:
case 1731:
case 1261:
case 2526:
case 1175:
case 2997:
case 2815:
case 1781:
case 2919:
case 4067:
case 110:
case 3845:
case 235:
case 504:
case 1573:
case 2504:
case 3742:
case 3928:
case 1253:
case 3544:
case 2534:
case 2809:
case 3401:
case 3675:
case 2494:
case 820:
case 2648:
case 2756:
case 206:
case 3551:
case 585:
case 1604:
case 1423:
case 3665:
case 3565:
case 3317:
case 3427:
case 3080:
case 2565:
case 3965:
case 713:
case 531:
case 2060:
case 1039:
case 2430:
case 2544:
case 1919:
case 2635:
case 269:
case 3912:
case 487:
case 1493:
case 220:
case 278:
case 2935:
case 2166:
case 1744:
case 1617:
case 3964:
case 774:
case 1531:
case 1014:
case 1580:
case 446:
case 3982:
case 2211:
case 2072:
case 3266:
case 3327:
case 466:
case 1128:
case 2678:
case 1239:
case 2759:
case 77:
case 3613:
case 3862:
case 1639:
case 1221:
case 3576:
case 3415:
case 1173:
case 3128:
case 209:
case 2729:
case 3817:
case 136:
case 2543:
case 2742:
case 4008:
case 180:
case 3175:
case 375:
case 2419:
case 3436:
case 3971:
case 2973:
case 3557:
case 1076:
case 39:
case 3390:
case 1227:
case 3739:
case 1222:
case 3197:
case 449:
case 3467:
case 2533:
case 1762:
case 3856:
case 991:
case 872:
case 3626:
case 2258:
case 1455:
case 2605:
case 646:
case 697:
case 880:
case 3972:
case 1497:
case 2894:
case 1045:
case 1326:
case 598:
case 2653:
case 4046:
case 2569:
case 3934:
case 778:
case 3280:
case 566:
case 2022:
case 2189:
case 258:
case 500:
case 2683:
case 2270:
case 3720:
case 2223:
case 1775:
case 3418:
case 359:
case 3754:
case 1013:
case 1917:
case 1825:
case 3281:
case 3313:
case 1275:
case 3496:
case 580:
case 1204:
case 2589:
case 1991:
case 2192:
case 1910:
case 685:
case 1218:
case 1219:
case 1178:
case 3838:
case 424:
case 1672:
case 1769:
case 372:
case 2269:
case 1351:
case 558:
case 3352:
case 2438:
case 2904:
case 2278:
case 1633:
case 1579:
case 1214:
case 2723:
case 98:
case 2769:
case 3100:
case 3101:
case 1525:
case 1259:
case 990:
case 848:
case 766:
case 111:
case 1458:
case 673:
case 1827:
case 4086:
case 1789:
case 2473:
case 1103:
case 2916:
case 896:
case 4030:
case 440:
case 1826:
case 2733:
case 3642:
case 3226:
case 1906:
case 2624:
case 2522:
case 1691:
case 1924:
case 1150:
case 551:
case 568:
case 974:
case 3725:
case 512:
case 2121:
case 4020:
case 3063:
case 650:
case 1616:
case 3673:
case 1888:
case 887:
case 2218:
case 105:
case 605:
case 903:
case 124:
case 2137:
case 2160:
case 801:
case 13:
case 3024:
case 1002:
case 2602:
case 1889:
case 841:
case 4061:
case 3798:
case 4036:
case 1147:
case 3043:
case 3741:
case 2183:
case 358:
case 876:
case 696:
case 969:
case 3012:
case 3429:
case 149:
case 3765:
case 3749:
case 460:
case 1415:
case 1321:
case 1818:
case 569:
case 458:
case 3382:
case 404:
case 1206:
case 2694:
case 2291:
case 2732:
case 2421:
case 1470:
case 411:
case 2606:
case 2174:
case 2925:
case 3400:
case 1952:
case 913:
case 1997:
case 1685:
case 1620:
case 3259:
case 3115:
case 731:
case 831:
case 2297:
case 1885:
case 1181:
case 3517:
case 2977:
case 3608:
case 642:
case 1961:
case 2467:
case 2455:
case 3200:
case 22:
case 2644:
case 1936:
case 1058:
case 2831:
case 638:
case 2839:
case 2931:
case 1766:
case 3458:
case 3378:
case 3714:
case 1971:
case 1138:
case 2788:
case 2361:
case 1124:
case 869:
case 355:
case 2665:
case 745:
case 2440:
case 3332:
case 2972:
case 3719:
case 340:
case 2908:
case 3849:
case 561:
case 1017:
case 2811:
case 3532:
case 2991:
case 2296:
case 2487:
case 1563:
case 3305:
case 3584:
case 2329:
case 3747:
case 1004:
case 2790:
case 2324:
case 3155:
case 1808:
case 1939:
case 2267:
case 864:
case 2170:
case 2792:
case 3385:
case 716:
case 3683:
case 2562:
case 3703:
case 2418:
case 3502:
case 846:
case 1388:
case 498:
case 3078:
case 2428:
case 795:
case 672:
case 1485:
case 2513:
case 3973:
case 3609:
case 371:
case 1446:
case 4025:
case 2508:
case 2008:
case 1487:
case 1065:
case 230:
case 3839:
case 195:
case 1823:
case 1162:
case 3256:
case 1016:
case 535:
case 940:
case 665:
case 502:
case 2354:
case 1343:
case 1650:
case 2814:
case 44:
case 1097:
case 1205:
case 1946:
case 734:
case 70:
case 3526:
case 3146:
case 2575:
case 234:
case 2985:
case 777:
case 2603:
case 3740:
case 2326:
case 1805:
case 603:
case 147:
case 3728:
case 3504:
case 553:
case 936:
case 4069:
case 3929:
case 333:
case 2365:
case 3723:
case 1745:
case 3328:
case 2986:
case 2014:
case 3520:
case 2872:
case 1195:
case 1944:
case 3174:
case 338:
case 3367:
case 4084:
case 1265:
case 684:
case 1634:
case 2747:
case 3900:
case 1504:
case 2880:
case 1954:
case 2125:
case 1751:
case 3690:
case 506:
case 2182:
case 2978:
case 2540:
case 1007:
case 1183:
case 2187:
case 2633:
case 3622:
case 40:
case 992:
case 1636:
case 1785:
case 2293:
case 3295:
case 907:
case 1499:
case 361:
case 798:
case 1187:
case 2932:
case 1044:
case 3405:
case 3015:
case 3422:
case 2767:
case 1257:
case 1079:
case 1822:
case 790:
case 2292:
case 413:
case 3529:
case 3951:
case 709:
case 2053:
case 1167:
case 99:
case 3884:
case 1273:
case 3824:
case 3480:
case 1477:
case 2148:
case 3660:
case 2827:
case 2580:
case 1837:
case 1424:
case 3757:
case 2878:
case 379:
case 2862:
case 1994:
case 1460:
case 3996:
case 2414:
case 2495:
case 1666:
case 2842:
case 4087:
case 2923:
case 1250:
case 120:
case 262:
case 3589:
case 15:
case 3360:
case 2250:
case 481:
case 233:
case 3450:
case 3935:
case 2881:
case 1984:
case 3886:
case 660:
case 3199:
case 1779:
case 2227:
case 2641:
case 4017:
case 1777:
case 2721:
case 3923:
case 1980:
case 3454:
case 310:
case 3148:
case 2854:
case 3377:
case 2587:
case 146:
case 3133:
case 993:
case 3918:
case 1862:
case 2294:
case 3250:
case 3689:
case 1953:
case 2731:
case 1184:
case 2341:
case 3221:
case 421:
case 2111:
case 2226:
case 248:
case 1613:
case 707:
case 3231:
case 2298:
case 56:
case 2574:
case 821:
case 2066:
case 1126:
case 1676:
case 3514:
case 3865:
case 3767:
case 2754:
case 4057:
case 573:
case 2567:
case 297:
case 578:
case 3198:
case 3710:
case 319:
case 2825:
case 447:
case 743:
case 723:
case 3831:
case 2918:
case 2674:
case 2456:
case 1938:
case 2290:
case 3789:
case 2700:
case 3635:
case 1559:
case 3666:
case 223:
case 2021:
case 1945:
case 3618:
case 2795:
case 2559:
case 2568:
case 510:
case 909:
case 2480:
case 977:
case 3026:
case 3770:
case 1344:
case 402:
case 3707:
case 2331:
case 0:
case 308:
case 1655:
case 2909:
case 1450:
case 2506:
case 3374:
case 1832:
case 2998:
case 3855:
case 3072:
case 3020:
case 3345:
case 1337:
case 1689:
case 2336:
case 296:
case 139:
case 3037:
case 2091:
case 2861:
case 2892:
case 469:
case 3592:
case 2147:
case 636:
case 1051:
case 3246:
case 3147:
case 312:
case 29:
case 1207:
case 3938:
case 3917:
case 3564:
case 4021:
case 2929:
case 357:
case 2273:
case 3218:
case 265:
case 353:
case 695:
case 119:
case 1169:
case 3300:
case 2623:
case 753:
case 1345:
case 1967:
case 3217:
case 2584:
case 2857:
case 3326:
case 1682:
case 3932:
case 886:
case 1158:
case 1059:
case 148:
case 3425:
case 3162:
case 3005:
case 2035:
case 2220:
case 2153:
case 2657:
case 1707:
case 4049:
case 442:
case 1536:
case 2239:
case 444:
case 150:
case 3556:
case 309:
case 917:
case 1695:
case 2608:
case 2946:
case 1632:
case 1568:
case 125:
case 591:
case 1179:
case 2244:
case 3619:
case 2265:
case 1503:
case 2536:
case 3410:
case 121:
case 3216:
case 2690:
case 3851:
case 3290:
case 90:
case 108:
case 761:
case 2906:
case 2668:
case 352:
case 3358:
case 188:
case 3461:
case 2593:
case 2628:
case 1955:
case 384:
case 3890:
case 1859:
case 1439:
case 516:
case 1266:
case 1600:
case 2642:
case 2099:
case 3192:
case 9:
case 2930:
case 1168:
case 1100:
case 257:
case 1807:
case 3242:
case 3768:
case 2499:
case 140:
case 263:
case 491:
case 3791:
case 3386:
case 3399:
case 779:
case 999:
case 3627:
case 237:
case 3994:
case 2791:
case 1133:
case 14:
case 1494:
case 793:
case 2308:
case 3214:
case 2146:
case 1949:
case 3633:
case 423:
case 2245:
case 2347:
case 1358:
case 3582:
case 3171:
case 307:
case 726:
case 3727:
case 3793:
case 348:
case 1226:
case 380:
case 425:
case 511:
case 2151:
case 550:
case 3601:
case 2994:
case 1541:
case 2879:
case 2232:
case 3121:
case 2425:
case 2699:
case 2990:
case 1736:
case 4047:
case 881:
case 434:
case 2764:
case 122:
case 3575:
case 643:
case 117:
case 4083:
case 115:
case 284:
case 520:
case 651:
case 1726:
case 2140:
case 1941:
case 3516:
case 2703:
case 1895:
case 3185:
case 718:
case 2124:
case 362:
case 289:
case 1734:
case 301:
case 1010:
case 2585:
case 3366:
case 3223:
case 3648:
case 3867:
case 2675:
case 1922:
case 2339:
case 1465:
case 1129:
case 874:
case 3615:
case 3032:
case 867:
case 2786:
case 159:
case 2537:
case 304:
case 212:
case 1557:
case 1130:
case 2228:
case 2238:
case 1364:
case 3792:
case 1583:
case 190:
case 3487:
case 1252:
case 768:
case 3389:
case 80:
case 2045:
case 546:
case 942:
case 2765:
case 478:
case 1915:
case 2328:
case 3541:
case 2330:
case 1468:
case 4027:
case 3659:
case 1593:
case 1596:
case 1835:
case 1657:
case 2381:
case 2762:
case 937:
case 972:
case 2145:
case 877:
case 2672:
case 823:
case 3610:
case 2982:
case 1720:
case 3355:
case 1360:
case 2003:
case 2676:
case 2119:
case 2268:
case 103:
case 2555:
case 3861:
case 988:
case 4094:
case 3417:
case 710:
case 2037:
case 1302:
case 3442:
case 50:
case 3179:
case 746:
case 2652:
case 1094:
case 2094:
case 2651:
case 3744:
case 663:
case 1717:
case 341:
case 1122:
case 577:
case 2405:
case 1089:
case 86:
case 2779:
case 3763:
case 1212:
case 836:
case 2884:
case 3027:
case 2796:
case 883:
case 2332:
case 3640:
case 392:
case 2083:
case 3549:
case 2749:
case 3832:
case 51:
case 3364:
case 1592:
case 1562:
case 764:
case 2437:
case 1193:
case 3018:
case 133:
case 2078:
case 196:
case 645:
case 52:
case 915:
case 298:
case 3808:
case 167:
case 2387:
case 1544:
case 400:
case 2843:
case 54:
case 3581:
case 3222:
case 3906:
case 1908:
case 1601:
case 2302:
case 2966:
case 1149:
case 3748:
case 2358:
case 3674:
case 2613:
case 3383:
case 2934:
case 3916:
case 229:
case 1295:
case 89:
case 1194:
case 1371:
case 1977:
case 2570:
case 1047:
case 414:
case 2710:
case 1729:
case 3860:
case 1319:
case 3431:
case 2980:
case 1191:
case 2074:
case 2551:
case 3735:
case 1171:
case 2123:
case 1537:
case 3518:
case 2159:
case 2390:
case 2233:
case 2283:
case 787:
case 2393:
case 3490:
case 3882:
case 3125:
case 2383:
case 3943:
case 1801:
case 109:
case 3426:
case 2981:
case 3407:
case 1542:
case 548:
case 2871:
case 4002:
case 1693:
case 3263:
case 3795:
case 2412:
case 4045:
case 1506:
case 3574:
case 432:
case 552:
case 2246:
case 513:
case 4026:
case 1585:
case 623:
case 1370:
case 3114:
case 1791:
case 3294:
case 1425:
case 3904:
case 2716:
case 815:
case 3076:
case 721:
case 2637:
case 2095:
case 1027:
case 1243:
case 3993:
case 3958:
case 1418:
case 178:
case 2800:
case 2048:
case 1412:
case 1782:
case 989:
case 1703:
case 2394:
case 3976:
case 429:
case 160:
case 2061:
case 4009:
case 3478:
case 898:
case 3403:
case 247:
case 62:
case 2470:
case 879:
case 1145:
case 1331:
case 1232:
case 3195:
case 3434:
case 2343:
case 1754:
case 1879:
case 2888:
case 92:
case 931:
case 3251:
case 3479:
case 2446:
case 890:
case 712:
case 2028:
case 2243:
case 3087:
case 1721:
case 457:
case 2447:
case 282:
case 2058:
case 1451:
case 326:
case 3137:
case 471:
case 1375:
case 2704:
case 517:
case 383:
case 3213:
case 3811:
case 3672:
case 3451:
case 1881:
case 2129:
case 2133:
case 2067:
case 3131:
case 1686:
case 2424:
case 3966:
case 3472:
case 2209:
case 1432:
case 2849:
case 3823:
case 215:
case 3507:
case 1182:
case 2131:
case 3894:
case 2334:
case 4080:
case 69:
case 1180:
case 758:
case 1902:
case 1322:
case 1959:
case 1189:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1650812401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,];
var gg_b = "1650812401/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
