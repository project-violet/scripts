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
case 3412:
case 1086:
case 854:
case 558:
case 4009:
case 2317:
case 3898:
case 1851:
case 3708:
case 161:
case 718:
case 2701:
case 3258:
case 2415:
case 3650:
case 3756:
case 602:
case 1890:
case 2282:
case 918:
case 3580:
case 3577:
case 3137:
case 3049:
case 2772:
case 4051:
case 0:
case 910:
case 2851:
case 255:
case 210:
case 323:
case 307:
case 267:
case 3441:
case 2656:
case 2729:
case 3455:
case 2069:
case 833:
case 3271:
case 3249:
case 663:
case 248:
case 403:
case 1563:
case 2127:
case 2000:
case 4058:
case 4008:
case 982:
case 623:
case 2693:
case 701:
case 1243:
case 145:
case 67:
case 716:
case 182:
case 2275:
case 1118:
case 3524:
case 2835:
case 2410:
case 100:
case 3107:
case 1947:
case 3583:
case 2708:
case 1600:
case 543:
case 2694:
case 3224:
case 2236:
case 4055:
case 2585:
case 555:
case 2803:
case 2467:
case 3072:
case 1198:
case 1810:
case 1897:
case 1610:
case 1400:
case 125:
case 2764:
case 1231:
case 2414:
case 18:
case 928:
case 3892:
case 2576:
case 852:
case 731:
case 2852:
case 169:
case 3666:
case 1048:
case 3902:
case 971:
case 3607:
case 2806:
case 3183:
case 708:
case 1693:
case 881:
case 2128:
case 492:
case 2568:
case 2778:
case 367:
case 3727:
case 78:
case 2247:
case 2342:
case 2072:
case 3884:
case 1077:
case 1622:
case 2512:
case 919:
case 3943:
case 3347:
case 4089:
case 3811:
case 240:
case 2533:
case 3164:
case 1759:
case 1911:
case 3404:
case 1074:
case 1826:
case 2456:
case 2041:
case 4066:
case 4003:
case 2830:
case 1487:
case 570:
case 386:
case 1353:
case 2424:
case 1029:
case 3624:
case 3837:
case 3216:
case 2724:
case 2994:
case 2690:
case 3871:
case 2745:
case 3267:
case 2191:
case 1834:
case 146:
case 3817:
case 1716:
case 2596:
case 1192:
case 1825:
case 616:
case 1149:
case 2847:
case 351:
case 1675:
case 3436:
case 2544:
case 1362:
case 757:
case 2598:
case 1182:
case 3845:
case 1035:
case 2944:
case 289:
case 2479:
case 422:
case 2290:
case 1180:
case 460:
case 575:
case 1719:
case 414:
case 4091:
case 3206:
case 2392:
case 3592:
case 3651:
case 3847:
case 1863:
case 2921:
case 1124:
case 1275:
case 3508:
case 514:
case 3520:
case 3321:
case 458:
case 489:
case 1499:
case 3407:
case 1923:
case 605:
case 1943:
case 2458:
case 3842:
case 1641:
case 2917:
case 1352:
case 3806:
case 1713:
case 1024:
case 791:
case 2067:
case 1337:
case 886:
case 109:
case 2936:
case 2447:
case 3810:
case 2899:
case 2198:
case 1586:
case 1224:
case 1404:
case 2844:
case 2381:
case 2528:
case 2552:
case 1382:
case 91:
case 2879:
case 2457:
case 3303:
case 2759:
case 2045:
case 3368:
case 2582:
case 1193:
case 3874:
case 1506:
case 3337:
case 1478:
case 464:
case 775:
case 3331:
case 402:
case 3944:
case 2955:
case 2437:
case 2574:
case 2757:
case 455:
case 2358:
case 338:
case 2930:
case 2530:
case 1158:
case 1083:
case 4072:
case 1991:
case 3772:
case 1909:
case 2265:
case 2904:
case 1147:
case 3493:
case 446:
case 705:
case 3093:
case 3158:
case 74:
case 1176:
case 3454:
case 417:
case 3946:
case 116:
case 41:
case 2441:
case 1921:
case 3304:
case 3298:
case 2976:
case 3198:
case 2658:
case 442:
case 939:
case 3586:
case 291:
case 909:
case 3531:
case 1777:
case 2872:
case 3815:
case 277:
case 1287:
case 1629:
case 3398:
case 388:
case 399:
case 3771:
case 501:
case 906:
case 1977:
case 350:
case 935:
case 2503:
case 1183:
case 2109:
case 434:
case 2233:
case 2557:
case 494:
case 508:
case 847:
case 3730:
case 700:
case 1253:
case 2095:
case 3323:
case 1780:
case 1028:
case 1055:
case 384:
case 1989:
case 1937:
case 1618:
case 2876:
case 3410:
case 2874:
case 3968:
case 515:
case 2543:
case 4086:
case 722:
case 2771:
case 4095:
case 3947:
case 849:
case 2966:
case 1056:
case 2039:
case 1270:
case 1084:
case 82:
case 3658:
case 2130:
case 424:
case 3134:
case 2068:
case 4020:
case 177:
case 3594:
case 1046:
case 108:
case 3015:
case 713:
case 3036:
case 3232:
case 676:
case 3204:
case 2583:
case 956:
case 1595:
case 363:
case 2009:
case 571:
case 1288:
case 1187:
case 2235:
case 2105:
case 4035:
case 1089:
case 325:
case 3333:
case 3008:
case 2897:
case 715:
case 3760:
case 998:
case 2664:
case 1715:
case 863:
case 4062:
case 3925:
case 1734:
case 206:
case 48:
case 2702:
case 1365:
case 454:
case 3130:
case 3773:
case 118:
case 180:
case 2637:
case 2209:
case 3262:
case 1465:
case 1497:
case 3011:
case 3355:
case 1050:
case 1679:
case 2507:
case 702:
case 293:
case 1786:
case 3916:
case 3602:
case 1276:
case 326:
case 2136:
case 1646:
case 3338:
case 3307:
case 975:
case 1458:
case 2660:
case 3192:
case 3250:
case 450:
case 3225:
case 3481:
case 2302:
case 2312:
case 3335:
case 1662:
case 733:
case 1119:
case 2586:
case 2908:
case 573:
case 2617:
case 2912:
case 366:
case 2986:
case 1988:
case 1892:
case 1425:
case 4044:
case 2465:
case 1644:
case 1325:
case 1530:
case 1098:
case 52:
case 1:
case 2438:
case 592:
case 2919:
case 2688:
case 1568:
case 1999:
case 1289:
case 3546:
case 2063:
case 1613:
case 778:
case 3789:
case 4000:
case 3270:
case 2361:
case 421:
case 830:
case 658:
case 1238:
case 955:
case 1558:
case 1844:
case 2584:
case 2866:
case 1880:
case 2420:
case 610:
case 60:
case 337:
case 1745:
case 3002:
case 4004:
case 133:
case 96:
case 3669:
case 3144:
case 1232:
case 246:
case 1373:
case 3186:
case 1505:
case 3497:
case 3938:
case 2501:
case 2604:
case 572:
case 2372:
case 3896:
case 891:
case 400:
case 3266:
case 43:
case 721:
case 2268:
case 1012:
case 4037:
case 2560:
case 1557:
case 541:
case 365:
case 2133:
case 132:
case 3340:
case 862:
case 2681:
case 1274:
case 1952:
case 3369:
case 2254:
case 1925:
case 897:
case 2707:
case 1013:
case 1953:
case 2150:
case 17:
case 1004:
case 3829:
case 647:
case 2600:
case 673:
case 2309:
case 3339:
case 1534:
case 2997:
case 3568:
case 4080:
case 3024:
case 4069:
case 851:
case 538:
case 1891:
case 2255:
case 799:
case 1186:
case 3987:
case 2019:
case 1047:
case 706:
case 986:
case 1315:
case 346:
case 1806:
case 192:
case 2270:
case 3971:
case 2169:
case 3537:
case 3483:
case 1888:
case 3779:
case 1218:
case 3780:
case 948:
case 546:
case 3723:
case 2612:
case 3145:
case 2323:
case 320:
case 3873:
case 397:
case 4007:
case 552:
case 1482:
case 685:
case 2194:
case 404:
case 3076:
case 1311:
case 379:
case 2834:
case 2905:
case 502:
case 1194:
case 3722:
case 1724:
case 536:
case 302:
case 3018:
case 107:
case 2347:
case 1914:
case 3157:
case 2722:
case 3906:
case 3162:
case 1069:
case 2178:
case 2753:
case 2085:
case 877:
case 537:
case 1292:
case 1512:
case 776:
case 2511:
case 3761:
case 3343:
case 3203:
case 3364:
case 1419:
case 1850:
case 1626:
case 1342:
case 634:
case 868:
case 1415:
case 2988:
case 1605:
case 3895:
case 2475:
case 2200:
case 1347:
case 2867:
case 809:
case 2084:
case 1374:
case 2186:
case 324:
case 2409:
case 2397:
case 4050:
case 3118:
case 3776:
case 1570:
case 3660:
case 2800:
case 355:
case 3552:
case 1907:
case 1961:
case 2763:
case 2820:
case 3151:
case 746:
case 2945:
case 2400:
case 3111:
case 1819:
case 3828:
case 2151:
case 635:
case 158:
case 3239:
case 581:
case 1148:
case 1787:
case 976:
case 1710:
case 131:
case 3356:
case 3415:
case 3931:
case 2495:
case 2854:
case 281:
case 3281:
case 2515:
case 25:
case 3128:
case 2167:
case 2357:
case 3142:
case 2443:
case 3764:
case 3682:
case 3800:
case 1020:
case 1446:
case 3786:
case 1746:
case 3360:
case 3762:
case 3136:
case 1625:
case 1273:
case 3951:
case 669:
case 1940:
case 2843:
case 2590:
case 141:
case 3450:
case 1332:
case 1807:
case 1451:
case 1087:
case 3579:
case 2551:
case 1079:
case 1517:
case 1768:
case 3133:
case 3856:
case 140:
case 1215:
case 2249:
case 3056:
case 3609:
case 1732:
case 1277:
case 1439:
case 801:
case 888:
case 2743:
case 1371:
case 2539:
case 3848:
case 629:
case 1590:
case 2060:
case 619:
case 2260:
case 1226:
case 3325:
case 2706:
case 2573:
case 499:
case 1283:
case 3050:
case 2021:
case 3528:
case 622:
case 631:
case 162:
case 1070:
case 476:
case 1493:
case 1601:
case 637:
case 1852:
case 2931:
case 2239:
case 3435:
case 2563:
case 282:
case 3439:
case 318:
case 521:
case 835:
case 2137:
case 3095:
case 1437:
case 2034:
case 952:
case 850:
case 1546:
case 3019:
case 3978:
case 285:
case 2553:
case 15:
case 2751:
case 1860:
case 1424:
case 2326:
case 1264:
case 3989:
case 2298:
case 2172:
case 2716:
case 190:
case 1155:
case 606:
case 2621:
case 1653:
case 114:
case 2602:
case 3904:
case 3781:
case 3406:
case 978:
case 3207:
case 3261:
case 765:
case 2655:
case 2287:
case 1573:
case 2245:
case 1608:
case 1839:
case 3691:
case 617:
case 2522:
case 1377:
case 2953:
case 4031:
case 2502:
case 1121:
case 2240:
case 3446:
case 2463:
case 1252:
case 2293:
case 2046:
case 1438:
case 2909:
case 3630:
case 2332:
case 175:
case 4082:
case 3852:
case 2454:
case 2922:
case 1455:
case 2436:
case 1480:
case 2330:
case 3866:
case 1052:
case 4022:
case 4061:
case 1658:
case 3334:
case 1271:
case 233:
case 1950:
case 2846:
case 62:
case 1297:
case 1933:
case 3277:
case 2647:
case 2725:
case 2111:
case 2433:
case 2508:
case 418:
case 3148:
case 500:
case 2226:
case 2053:
case 3027:
case 3706:
case 3769:
case 1022:
case 270:
case 1236:
case 1284:
case 1412:
case 81:
case 196:
case 841:
case 1541:
case 2234:
case 3922:
case 820:
case 1714:
case 2643:
case 2564:
case 1486:
case 51:
case 3099:
case 781:
case 1647:
case 2645:
case 4001:
case 3680:
case 3534:
case 3973:
case 231:
case 628:
case 126:
case 3179:
case 1435:
case 2760:
case 2024:
case 2439:
case 999:
case 4043:
case 3958:
case 1944:
case 800:
case 1308:
case 213:
case 832:
case 373:
case 1992:
case 3674:
case 2315:
case 2174:
case 179:
case 3962:
case 3388:
case 737:
case 1481:
case 2780:
case 1223:
case 1383:
case 2571:
case 1240:
case 3543:
case 3768:
case 1550:
case 1974:
case 1687:
case 1918:
case 1784:
case 597:
case 1871:
case 237:
case 3645:
case 1700:
case 102:
case 2791:
case 4032:
case 130:
case 2135:
case 2709:
case 1000:
case 594:
case 142:
case 1553:
case 298:
case 3397:
case 2721:
case 86:
case 2642:
case 1842:
case 229:
case 1849:
case 954:
case 2140:
case 1620:
case 1317:
case 1484:
case 3556:
case 1228:
case 1808:
case 3766:
case 2012:
case 3213:
case 3713:
case 1138:
case 3054:
case 1023:
case 1062:
case 1386:
case 3014:
case 2271:
case 709:
case 2038:
case 2179:
case 3911:
case 2120:
case 2054:
case 3073:
case 611:
case 466:
case 3926:
case 582:
case 1772:
case 3655:
case 3908:
case 1040:
case 3615:
case 1704:
case 11:
case 2426:
case 92:
case 1939:
case 3964:
case 3801:
case 1103:
case 3621:
case 3211:
case 3604:
case 2094:
case 1908:
case 3836:
case 2491:
case 356:
case 4038:
case 256:
case 1895:
case 49:
case 3310:
case 2243:
case 2884:
case 1281:
case 1616:
case 1529:
case 1677:
case 1802:
case 1589:
case 2362:
case 2561:
case 1899:
case 1093:
case 969:
case 738:
case 902:
case 121:
case 1141:
case 2228:
case 3675:
case 2531:
case 1464:
case 664:
case 2075:
case 1984:
case 448:
case 3370:
case 1764:
case 1173:
case 1453:
case 2246:
case 3872:
case 3805:
case 2549:
case 3172:
case 1457:
case 2484:
case 482:
case 357:
case 1654:
case 995:
case 2698:
case 2184:
case 1958:
case 2366:
case 498:
case 3840:
case 1887:
case 646:
case 1407:
case 2995:
case 735:
case 4063:
case 1262:
case 1516:
case 751:
case 583:
case 3165:
case 53:
case 3175:
case 3501:
case 3707:
case 416:
case 3642:
case 3090:
case 3282:
case 372:
case 3226:
case 2349:
case 1299:
case 3371:
case 839:
case 2032:
case 843:
case 1509:
case 2010:
case 1941:
case 1627:
case 3818:
case 808:
case 1593:
case 1129:
case 3140:
case 1604:
case 1668:
case 2595:
case 2334:
case 3190:
case 667:
case 636:
case 22:
case 1321:
case 653:
case 817:
case 4033:
case 1088:
case 438:
case 155:
case 1576:
case 2555:
case 1928:
case 656:
case 1575:
case 2492:
case 2500:
case 1206:
case 3991:
case 2331:
case 2149:
case 3299:
case 3875:
case 13:
case 3141:
case 3881:
case 3313:
case 1416:
case 2673:
case 3034:
case 526:
case 766:
case 3476:
case 3314:
case 1154:
case 1749:
case 3336:
case 3498:
case 3555:
case 1778:
case 3569:
case 2165:
case 1265:
case 1237:
case 3126:
case 2657:
case 1661:
case 2947:
case 3887:
case 3351:
case 519:
case 2723:
case 3109:
case 1867:
case 2633:
case 3972:
case 378:
case 165:
case 1189:
case 2483:
case 3044:
case 2957:
case 4074:
case 674:
case 1528:
case 742:
case 2572:
case 3685:
case 937:
case 520:
case 2547:
case 762:
case 1682:
case 211:
case 1379:
case 655:
case 3499:
case 2014:
case 3341:
case 214:
case 2237:
case 2758:
case 2712:
case 2750:
case 3692:
case 949:
case 2161:
case 398:
case 848:
case 138:
case 2285:
case 437:
case 2666:
case 933:
case 3783:
case 764:
case 250:
case 2950:
case 1327:
case 1980:
case 3200:
case 3522:
case 916:
case 2566:
case 920:
case 3959:
case 124:
case 3029:
case 991:
case 3256:
case 1527:
case 1831:
case 1402:
case 1603:
case 1346:
case 1151:
case 603:
case 2118:
case 251:
case 408:
case 1423:
case 875:
case 2516:
case 2321:
case 2346:
case 3023:
case 2987:
case 2407:
case 3629:
case 1227:
case 3486:
case 1695:
case 2267:
case 4047:
case 2251:
case 306:
case 266:
case 3332:
case 4075:
case 2168:
case 1167:
case 2391:
case 1938:
case 37:
case 3617:
case 3171:
case 1650:
case 1551:
case 2680:
case 1665:
case 197:
case 1328:
case 648:
case 723:
case 2114:
case 316:
case 2093:
case 1635:
case 2390:
case 3273:
case 3016:
case 1188:
case 352:
case 3656:
case 1859:
case 3551:
case 2592:
case 3526:
case 2711:
case 2946:
case 845:
case 1579:
case 2827:
case 2926:
case 659:
case 2073:
case 1733:
case 588:
case 2615:
case 2814:
case 319:
case 1210:
case 1333:
case 3625:
case 3038:
case 1304:
case 1975:
case 3519:
case 2537:
case 2384:
case 1983:
case 1178:
case 119:
case 1432:
case 1027:
case 872:
case 280:
case 844:
case 3135:
case 968:
case 3243:
case 3396:
case 1368:
case 714:
case 1866:
case 3970:
case 3350:
case 3244:
case 2049:
case 2368:
case 1561:
case 532:
case 2682:
case 88:
case 2672:
case 202:
case 239:
case 3505:
case 2892:
case 1841:
case 2363:
case 2408:
case 1078:
case 1766:
case 461:
case 1104:
case 39:
case 580:
case 1433:
case 2205:
case 2196:
case 1117:
case 3040:
case 3361:
case 1171:
case 1832:
case 2623:
case 2601:
case 2369:
case 921:
case 300:
case 626:
case 1316:
case 2455:
case 1717:
case 3854:
case 1737:
case 2374:
case 2215:
case 1848:
case 4002:
case 3595:
case 1518:
case 110:
case 3477:
case 1964:
case 2783:
case 1877:
case 3940:
case 2162:
case 1549:
case 1018:
case 431:
case 2081:
case 871:
case 80:
case 21:
case 2911:
case 2303:
case 219:
case 819:
case 2670:
case 3478:
case 420:
case 2952:
case 3345:
case 127:
case 3163:
case 2964:
case 2951:
case 2434:
case 813:
case 3475:
case 1673:
case 2545:
case 3695:
case 2695:
case 3981:
case 913:
case 471:
case 166:
case 2360:
case 2889:
case 3117:
case 1639:
case 1494:
case 2990:
case 3491:
case 1994:
case 3998:
case 3905:
case 3597:
case 2152:
case 662:
case 2496:
case 946:
case 3739:
case 774:
case 3236:
case 2231:
case 2364:
case 1063:
case 34:
case 3042:
case 1931:
case 2692:
case 1957:
case 3809:
case 1344:
case 1071:
case 3573:
case 4064:
case 3110:
case 2297:
case 2116:
case 374:
case 2736:
case 1246:
case 3638:
case 1037:
case 618:
case 2472:
case 3278:
case 3108:
case 1110:
case 2378:
case 1684:
case 2470:
case 2214:
case 1414:
case 2478:
case 3694:
case 2468:
case 3114:
case 3622:
case 2429:
case 1266:
case 802:
case 1720:
case 1571:
case 3960:
case 3471:
case 2565:
case 1798:
case 2147:
case 2842:
case 2506:
case 297:
case 2217:
case 2395:
case 3438:
case 3746:
case 1771:
case 504:
case 3934:
case 1523:
case 1855:
case 1143:
case 3903:
case 681:
case 3705:
case 2841:
case 557:
case 317:
case 3086:
case 1788:
case 2440:
case 2790:
case 758:
case 63:
case 516:
case 478:
case 157:
case 2524:
case 795:
case 590:
case 3864:
case 1466:
case 2051:
case 3897:
case 3060:
case 2916:
case 2403:
case 966:
case 3712:
case 903:
case 3986:
case 3152:
case 1709:
case 3647:
case 2739:
case 3611:
case 1066:
case 2421:
case 2002:
case 2311:
case 857:
case 2129:
case 3132:
case 64:
case 3909:
case 3859:
case 2943:
case 1862:
case 1730:
case 2101:
case 3201:
case 3125:
case 3774:
case 2003:
case 1813:
case 4023:
case 2016:
case 1073:
case 2339:
case 1954:
case 3785:
case 1133:
case 4028:
case 601:
case 2542:
case 2638:
case 1910:
case 2734:
case 923:
case 1378:
case 613:
case 2556:
case 1829:
case 1801:
case 890:
case 3689:
case 3824:
case 465:
case 3081:
case 1369:
case 4065:
case 3046:
case 2628:
case 3385:
case 1962:
case 574:
case 703:
case 3825:
case 4092:
case 1578:
case 412:
case 2991:
case 1773:
case 7:
case 1258:
case 1214:
case 3373:
case 2813:
case 1222:
case 2230:
case 1131:
case 12:
case 413:
case 3575:
case 1886:
case 3394:
case 2148:
case 1009:
case 1343:
case 3593:
case 1736:
case 2676:
case 2181:
case 3315:
case 2804:
case 3297:
case 1596:
case 2961:
case 3413:
case 1727:
case 1804:
case 1818:
case 3087:
case 2619:
case 1513:
case 1870:
case 3833:
case 470:
case 3096:
case 3004:
case 892:
case 2494:
case 3047:
case 2509:
case 1145:
case 3793:
case 2375:
case 2272:
case 359:
case 2432:
case 2684:
case 696:
case 3738:
case 2018:
case 4040:
case 3401:
case 3918:
case 3433:
case 469:
case 215:
case 3576:
case 3548:
case 974:
case 3122:
case 3488:
case 3208:
case 1177:
case 362:
case 2188:
case 2925:
case 831:
case 1208:
case 1652:
case 695:
case 1411:
case 2452:
case 3227:
case 457:
case 3242:
case 2562:
case 836:
case 2418:
case 1993:
case 3173:
case 328:
case 2627:
case 4024:
case 2903:
case 1286:
case 3823:
case 296:
case 2883:
case 2380:
case 3378:
case 3590:
case 1320:
case 1689:
case 1405:
case 3870:
case 2417:
case 4088:
case 3640:
case 1643:
case 2344:
case 2679:
case 2970:
case 3214:
case 3276:
case 1318:
case 1002:
case 3643:
case 1967:
case 3189:
case 70:
case 3751:
case 1903:
case 2030:
case 479:
case 321:
case 1592:
case 1712:
case 2404:
case 2396:
case 612:
case 3357:
case 3283:
case 1698:
case 3742:
case 3021:
case 829:
case 3838:
case 428:
case 3677:
case 1585:
case 474:
case 507:
case 106:
case 3317:
case 3915:
case 347:
case 396:
case 3851:
case 1459:
case 2316:
case 3170:
case 322:
case 4090:
case 600:
case 2875:
case 794:
case 309:
case 485:
case 2387:
case 3948:
case 2359:
case 2253:
case 330:
case 879:
case 3389:
case 3744:
case 1792:
case 2040:
case 2858:
case 1345:
case 2308:
case 1471:
case 1096:
case 435:
case 1417:
case 4013:
case 3094:
case 2097:
case 3233:
case 840:
case 1205:
case 26:
case 93:
case 45:
case 1470:
case 1617:
case 1498:
case 2802:
case 1042:
case 579:
case 3426:
case 3275:
case 2314:
case 2819:
case 961:
case 3160:
case 2767:
case 1609:
case 76:
case 973:
case 2187:
case 3942:
case 1191:
case 1430:
case 3292:
case 3149:
case 3102:
case 3721:
case 4049:
case 3782:
case 3228:
case 2383:
case 393:
case 779:
case 2099:
case 481:
case 2998:
case 3328:
case 2242:
case 2427:
case 1602:
case 727:
case 1956:
case 1139:
case 548:
case 3749:
case 3344:
case 2979:
case 3626:
case 1758:
case 3210:
case 2079:
case 2295:
case 1739:
case 2675:
case 1293:
case 136:
case 1092:
case 3288:
case 1090:
case 496:
case 97:
case 3215:
case 824:
case 2288:
case 3194:
case 258:
case 198:
case 1564:
case 3425:
case 4078:
case 3474:
case 3757:
case 490:
case 1356:
case 1250:
case 630:
case 3431:
case 679:
case 2593:
case 154:
case 3430:
case 2066:
case 3349:
case 1199:
case 912:
case 3150:
case 3747:
case 341:
case 1565:
case 2913:
case 1775:
case 724:
case 2273:
case 782:
case 936:
case 3883:
case 1729:
case 870:
case 4011:
case 638:
case 3078:
case 3448:
case 3720:
case 1838:
case 2578:
case 2683:
case 2401:
case 405:
case 759:
case 2831:
case 1567:
case 1384:
case 4085:
case 2394:
case 2425:
case 1169:
case 1434:
case 1065:
case 475:
case 1827:
case 1817:
case 2924:
case 167:
case 884:
case 2134:
case 2809:
case 3933:
case 3865:
case 2845:
case 235:
case 2058:
case 1097:
case 1515:
case 2870:
case 2289:
case 19:
case 3733:
case 3928:
case 4057:
case 3515:
case 245:
case 3907:
case 1520:
case 1041:
case 3596:
case 1948:
case 1301:
case 2662:
case 3429:
case 1449:
case 2738:
case 1809:
case 3954:
case 1823:
case 1310:
case 644:
case 3718:
case 2256:
case 1109:
case 10:
case 3876:
case 771:
case 2170:
case 3979:
case 3889:
case 3860:
case 4014:
case 3327:
case 2773:
case 3284:
case 1045:
case 1896:
case 2837:
case 1296:
case 77:
case 32:
case 2761:
case 1692:
case 2124:
case 4030:
case 2173:
case 1454:
case 1731:
case 878:
case 1443:
case 1331:
case 3565:
case 1201:
case 2789:
case 2393:
case 3467:
case 2796:
case 1220:
case 3603:
case 327:
case 720:
case 1172:
case 1789:
case 1134:
case 2279:
case 3154:
case 1930:
case 173:
case 3667:
case 4094:
case 3009:
case 3391:
case 3697:
case 3631:
case 3752:
case 381:
case 1128:
case 376:
case 2805:
case 3863:
case 447:
case 3161:
case 2807:
case 719:
case 3791:
case 3490:
case 2840:
case 1123:
case 1686:
case 2459:
case 3648:
case 4048:
case 2373:
case 2669:
case 3502:
case 3253:
case 4053:
case 304:
case 2203:
case 1153:
case 1302:
case 942:
case 2155:
case 1869:
case 149:
case 3963:
case 3098:
case 1942:
case 24:
case 2795:
case 675:
case 98:
case 2861:
case 2967:
case 3159:
case 643:
case 2981:
case 441:
case 1672:
case 3967:
case 3217:
case 294:
case 640:
case 3816:
case 2863:
case 846:
case 3386:
case 2941:
case 1126:
case 1244:
case 2428:
case 2887:
case 3223:
case 104:
case 3821:
case 443:
case 2490:
case 822:
case 564:
case 2474:
case 385:
case 3748:
case 243:
case 3129:
case 882:
case 2648:
case 4084:
case 3354:
case 2221:
case 680:
case 1456:
case 926:
case 1323:
case 99:
case 2218:
case 2968:
case 2031:
case 554:
case 2747:
case 275:
case 3714:
case 770:
case 65:
case 3070:
case 1390:
case 2853:
case 729:
case 893:
case 3043:
case 1996:
case 241:
case 3668:
case 2614:
case 565:
case 212:
case 2746:
case 3423:
case 1868:
case 3917:
case 2207:
case 3826:
case 3990:
case 1531:
case 2755:
case 979:
case 3051:
case 1894:
case 2497:
case 2262:
case 3598:
case 456:
case 2070:
case 625:
case 503:
case 3427:
case 409:
case 1122:
case 780:
case 1725:
case 990:
case 2313:
case 2534:
case 430:
case 3402:
case 2730:
case 3797:
case 3882:
case 4021:
case 3513:
case 3709:
case 2929:
case 4087:
case 2156:
case 1485:
case 522:
case 1462:
case 2027:
case 1683:
case 3737:
case 3032:
case 3516:
case 3939:
case 3698:
case 838:
case 2229:
case 1680:
case 2733:
case 3867:
case 2983:
case 3570:
case 184:
case 3067:
case 1556:
case 3456:
case 1039:
case 4041:
case 1314:
case 2821:
case 1812:
case 1552:
case 1770:
case 3464:
case 1902:
case 2305:
case 1924:
case 1521:
case 2104:
case 290:
case 2793:
case 3999:
case 2588:
case 3229:
case 2836:
case 2182:
case 873:
case 2382:
case 741:
case 2517:
case 2898:
case 3138:
case 3468:
case 2885:
case 3065:
case 2996:
case 1545:
case 40:
case 1197:
case 1572:
case 2102:
case 3265:
case 534:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1737201602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,];
var gg_b = "1737201602/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
