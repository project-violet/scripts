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
case 800:
case 1388:
case 2336:
case 998:
case 1471:
case 695:
case 587:
case 848:
case 2700:
case 1648:
case 2081:
case 2160:
case 143:
case 2630:
case 4085:
case 2401:
case 2268:
case 1698:
case 1512:
case 3616:
case 678:
case 621:
case 3310:
case 342:
case 480:
case 2533:
case 1835:
case 1928:
case 3953:
case 1742:
case 2222:
case 3684:
case 1684:
case 2254:
case 3742:
case 2620:
case 3928:
case 1278:
case 2299:
case 3835:
case 142:
case 1669:
case 1344:
case 787:
case 445:
case 3512:
case 2990:
case 3698:
case 1142:
case 88:
case 1902:
case 2326:
case 933:
case 3129:
case 3574:
case 2523:
case 2100:
case 343:
case 3648:
case 2914:
case 3792:
case 2760:
case 1170:
case 2037:
case 281:
case 1729:
case 2851:
case 2249:
case 3388:
case 1242:
case 502:
case 2108:
case 1582:
case 3640:
case 703:
case 2303:
case 3686:
case 24:
case 2199:
case 628:
case 654:
case 925:
case 3593:
case 2909:
case 659:
case 2877:
case 2149:
case 956:
case 3672:
case 3543:
case 3396:
case 3283:
case 3920:
case 1097:
case 2998:
case 3690:
case 2334:
case 2662:
case 2132:
case 3867:
case 1807:
case 1979:
case 4015:
case 2566:
case 1229:
case 2916:
case 2260:
case 1713:
case 3097:
case 1920:
case 2984:
case 1283:
case 1396:
case 1672:
case 702:
case 2653:
case 3576:
case 288:
case 1457:
case 3239:
case 1346:
case 2895:
case 1380:
case 3373:
case 1686:
case 3930:
case 2799:
case 244:
case 1778:
case 2550:
case 4001:
case 3582:
case 2485:
case 772:
case 361:
case 3797:
case 2111:
case 2237:
case 2049:
case 467:
case 1078:
case 1907:
case 3175:
case 855:
case 2898:
case 1301:
case 2705:
case 2488:
case 2977:
case 2809:
case 2635:
case 4080:
case 3747:
case 512:
case 2008:
case 981:
case 2869:
case 760:
case 4073:
case 2591:
case 1747:
case 2105:
case 1820:
case 3775:
case 2884:
case 2494:
case 3301:
case 2765:
case 3907:
case 2022:
case 1967:
case 820:
case 2625:
case 2711:
case 1426:
case 3013:
case 566:
case 1651:
case 2541:
case 424:
case 161:
case 3039:
case 646:
case 3247:
case 3587:
case 1434:
case 949:
case 3925:
case 3695:
case 2056:
case 862:
case 419:
case 3042:
case 1029:
case 1828:
case 1452:
case 2060:
case 2181:
case 1677:
case 490:
case 3070:
case 944:
case 2607:
case 3385:
case 47:
case 4094:
case 3802:
case 1403:
case 4059:
case 523:
case 334:
case 816:
case 134:
case 3403:
case 89:
case 33:
case 94:
case 797:
case 1385:
case 1297:
case 474:
case 2781:
case 1521:
case 4088:
case 2000:
case 41:
case 3935:
case 225:
case 3677:
case 2446:
case 496:
case 2555:
case 3452:
case 1424:
case 2872:
case 2480:
case 522:
case 291:
case 1042:
case 256:
case 2496:
case 2265:
case 3531:
case 1925:
case 3275:
case 2840:
case 905:
case 2727:
case 357:
case 1587:
case 1838:
case 2409:
case 2064:
case 1121:
case 4072:
case 331:
case 2888:
case 2023:
case 263:
case 437:
case 177:
case 3787:
case 3661:
case 29:
case 1430:
case 317:
case 825:
case 3731:
case 730:
case 2033:
case 565:
case 3430:
case 210:
case 1787:
case 2291:
case 1721:
case 428:
case 2581:
case 2859:
case 536:
case 1420:
case 1351:
case 131:
case 2484:
case 2755:
case 471:
case 3121:
case 2004:
case 262:
case 1803:
case 3402:
case 369:
case 984:
case 3395:
case 3547:
case 1428:
case 1575:
case 3453:
case 4069:
case 3345:
case 2019:
case 900:
case 553:
case 338:
case 0:
case 16:
case 418:
case 2141:
case 255:
case 3834:
case 2511:
case 1685:
case 2367:
case 2440:
case 609:
case 138:
case 2414:
case 1076:
case 2896:
case 1221:
case 3852:
case 1453:
case 815:
case 2472:
case 3575:
case 3428:
case 4009:
case 2657:
case 192:
case 3117:
case 1547:
case 1395:
case 2846:
case 3093:
case 1082:
case 552:
case 226:
case 3462:
case 2915:
case 2490:
case 1402:
case 3231:
case 2041:
case 1688:
case 3743:
case 1952:
case 2973:
case 976:
case 2166:
case 4045:
case 679:
case 1435:
case 2119:
case 1348:
case 3659:
case 2204:
case 2330:
case 3513:
case 3963:
case 696:
case 651:
case 2801:
case 1398:
case 849:
case 183:
case 1782:
case 2150:
case 3793:
case 888:
case 1309:
case 2091:
case 962:
case 1871:
case 674:
case 2996:
case 241:
case 2451:
case 3309:
case 3212:
case 1610:
case 1644:
case 3782:
case 3017:
case 2554:
case 1578:
case 1316:
case 3398:
case 690:
case 3934:
case 2861:
case 2626:
case 614:
case 1513:
case 2264:
case 3143:
case 2815:
case 619:
case 747:
case 99:
case 1659:
case 485:
case 2549:
case 3348:
case 3435:
case 182:
case 446:
case 2946:
case 3274:
case 1743:
case 3952:
case 4077:
case 3688:
case 3467:
case 3340:
case 658:
case 955:
case 1087:
case 3386:
case 1539:
case 2652:
case 1673:
case 1282:
case 1936:
case 2477:
case 3314:
case 2500:
case 2123:
case 3174:
case 1592:
case 2704:
case 3696:
case 2055:
case 2206:
case 2634:
case 1276:
case 28:
case 1774:
case 3243:
case 3583:
case 1570:
case 2758:
case 3570:
case 2104:
case 2944:
case 2885:
case 1583:
case 2723:
case 2219:
case 2302:
case 284:
case 2266:
case 667:
case 1372:
case 1696:
case 2158:
case 2560:
case 2495:
case 3618:
case 3592:
case 1031:
case 1646:
case 1314:
case 1857:
case 248:
case 2250:
case 200:
case 1680:
case 1112:
case 2624:
case 3539:
case 2994:
case 2663:
case 3712:
case 289:
case 1467:
case 2010:
case 3691:
case 450:
case 2833:
case 3757:
case 123:
case 3921:
case 1157:
case 3478:
case 2059:
case 859:
case 2858:
case 2422:
case 641:
case 2094:
case 322:
case 3036:
case 290:
case 3641:
case 4060:
case 557:
case 214:
case 1337:
case 2468:
case 2804:
case 2185:
case 2408:
case 2215:
case 539:
case 251:
case 2088:
case 2551:
case 1987:
case 397:
case 837:
case 2454:
case 1381:
case 1478:
case 73:
case 757:
case 1921:
case 3271:
case 1413:
case 3812:
case 3026:
case 85:
case 534:
case 323:
case 2955:
case 2432:
case 3535:
case 1757:
case 1691:
case 3034:
case 895:
case 335:
case 1439:
case 3311:
case 2806:
case 3917:
case 945:
case 648:
case 372:
case 689:
case 761:
case 1876:
case 986:
case 2096:
case 4032:
case 2375:
case 1771:
case 2161:
case 4008:
case 878:
case 1492:
case 2046:
case 2631:
case 821:
case 1882:
case 3483:
case 90:
case 3257:
case 1063:
case 2701:
case 3365:
case 1305:
case 3171:
case 3003:
case 4022:
case 2761:
case 1365:
case 561:
case 1257:
case 2850:
case 3470:
case 1483:
case 3882:
case 2595:
case 2460:
case 2347:
case 113:
case 360:
case 2941:
case 3771:
case 1429:
case 68:
case 1052:
case 3024:
case 2073:
case 4068:
case 166:
case 432:
case 2285:
case 2545:
case 1843:
case 3442:
case 2456:
case 2018:
case 2819:
case 2991:
case 1917:
case 606:
case 3439:
case 135:
case 2715:
case 2437:
case 1752:
case 3520:
case 1633:
case 699:
case 3226:
case 1368:
case 1322:
case 2906:
case 3354:
case 2146:
case 1124:
case 3152:
case 1703:
case 2180:
case 2061:
case 979:
case 2015:
case 676:
case 1530:
case 3623:
case 2674:
case 4011:
case 1658:
case 405:
case 2548:
case 3349:
case 2288:
case 3664:
case 102:
case 2718:
case 1604:
case 3993:
case 610:
case 3134:
case 3689:
case 488:
case 2796:
case 1134:
case 69:
case 3604:
case 1332:
case 1664:
case 2118:
case 3236:
case 1623:
case 3982:
case 449:
case 670:
case 3734:
case 2427:
case 2210:
case 1763:
case 3124:
case 2173:
case 1399:
case 2516:
case 444:
case 2569:
case 2919:
case 3976:
case 2891:
case 3633:
case 808:
case 3163:
case 2244:
case 3752:
case 2584:
case 1606:
case 3136:
case 3502:
case 2788:
case 1475:
case 2159:
case 626:
case 3360:
case 2933:
case 1300:
case 929:
case 3356:
case 1203:
case 3263:
case 543:
case 280:
case 958:
case 924:
case 3497:
case 1126:
case 2342:
case 2339:
case 3887:
case 4027:
case 2273:
case 2682:
case 3224:
case 3252:
case 1224:
case 2280:
case 1887:
case 245:
case 2586:
case 1538:
case 286:
case 92:
case 3126:
case 1263:
case 2514:
case 3057:
case 3203:
case 1356:
case 2710:
case 1447:
case 620:
case 1360:
case 481:
case 4037:
case 3475:
case 2643:
case 3528:
case 2465:
case 2188:
case 2794:
case 2383:
case 2296:
case 1666:
case 967:
case 1821:
case 1138:
case 978:
case 2186:
case 675:
case 2298:
case 3035:
case 1992:
case 2114:
case 1622:
case 3220:
case 3738:
case 921:
case 80:
case 845:
case 1153:
case 1762:
case 1939:
case 3417:
case 3323:
case 48:
case 1358:
case 698:
case 3632:
case 1230:
case 1304:
case 3753:
case 1942:
case 2190:
case 201:
case 886:
case 2051:
case 2248:
case 2588:
case 3389:
case 3536:
case 507:
case 1162:
case 1753:
case 3942:
case 3230:
case 3304:
case 2491:
case 809:
case 484:
case 1128:
case 3939:
case 2613:
case 1526:
case 2269:
case 2786:
case 1738:
case 918:
case 1699:
case 1220:
case 3970:
case 2678:
case 1983:
case 2544:
case 3622:
case 3668:
case 400:
case 3279:
case 2216:
case 3138:
case 2441:
case 2748:
case 3007:
case 2670:
case 1228:
case 1306:
case 1067:
case 691:
case 3487:
case 240:
case 3130:
case 3897:
case 2045:
case 3660:
case 3202:
case 2376:
case 1600:
case 583:
case 3238:
case 971:
case 3847:
case 7:
case 2709:
case 4091:
case 2573:
case 2642:
case 3524:
case 2639:
case 2805:
case 1120:
case 3913:
case 2798:
case 3350:
case 625:
case 928:
case 2169:
case 95:
case 2109:
case 2949:
case 911:
case 1563:
case 2214:
case 2784:
case 3552:
case 2198:
case 1720:
case 1847:
case 2286:
case 2546:
case 1238:
case 441:
case 2769:
case 1656:
case 2077:
case 2290:
case 2908:
case 3262:
case 2596:
case 2629:
case 1897:
case 347:
case 3534:
case 285:
case 2999:
case 3730:
case 2811:
case 2954:
case 1253:
case 3306:
case 1978:
case 1366:
case 3228:
case 1007:
case 937:
case 2069:
case 3391:
case 593:
case 1571:
case 681:
case 2501:
case 420:
case 1235:
case 4050:
case 2195:
case 3878:
case 3079:
case 1474:
case 218:
case 2905:
case 3030:
case 4066:
case 3813:
case 2145:
case 829:
case 3341:
case 4019:
case 1975:
case 3225:
case 3107:
case 352:
case 2433:
case 3947:
case 3167:
case 569:
case 1225:
case 1341:
case 2965:
case 3412:
case 793:
case 867:
case 2177:
case 1767:
case 221:
case 592:
case 3707:
case 1681:
case 2048:
case 76:
case 2849:
case 2317:
case 2423:
case 2854:
case 2899:
case 3235:
case 1627:
case 727:
case 3020:
case 1997:
case 2808:
case 2009:
case 2795:
case 82:
case 3062:
case 365:
case 2277:
case 1002:
case 3725:
case 3883:
case 1870:
case 4089:
case 731:
case 2072:
case 1053:
case 577:
case 644:
case 1207:
case 4064:
case 851:
case 3443:
case 1842:
case 81:
case 1735:
case 2014:
case 717:
case 649:
case 1476:
case 49:
case 688:
case 985:
case 416:
case 2040:
case 874:
case 1839:
case 1038:
case 2086:
case 87:
case 3839:
case 3605:
case 2387:
case 531:
case 259:
case 2981:
case 1135:
case 777:
case 2419:
case 3735:
case 4033:
case 3842:
case 1028:
case 462:
case 1829:
case 271:
case 3053:
case 1355:
case 2860:
case 2450:
case 3482:
case 1883:
case 1725:
case 3002:
case 1611:
case 165:
case 2927:
case 1062:
case 3098:
case 1501:
case 395:
case 835:
case 3899:
case 3911:
case 253:
case 1195:
case 3009:
case 3808:
case 1868:
case 1069:
case 3795:
case 1084:
case 4093:
case 3489:
case 427:
case 2020:
case 3745:
case 866:
case 1777:
case 3832:
case 1433:
case 118:
case 321:
case 755:
case 3177:
case 3849:
case 2707:
case 3515:
case 1145:
case 3965:
case 493:
case 2030:
case 3905:
case 2813:
case 2681:
case 1048:
case 1177:
case 121:
case 2767:
case 3433:
case 2947:
case 1832:
case 252:
case 3777:
case 438:
case 2341:
case 860:
case 1745:
case 4076:
case 492:
case 1489:
case 3868:
case 643:
case 1464:
case 1009:
case 2391:
case 3458:
case 2878:
case 3195:
case 3822:
case 812:
case 4082:
case 720:
case 195:
case 2627:
case 1899:
case 1098:
case 1800:
case 3751:
case 59:
case 516:
case 1072:
case 762:
case 1151:
case 2002:
case 328:
case 111:
case 1277:
case 3450:
case 3321:
case 3585:
case 710:
case 477:
case 3981:
case 359:
case 2605:
case 3295:
case 2839:
case 2038:
case 137:
case 1675:
case 1937:
case 776:
case 1014:
case 2735:
case 3647:
case 2557:
case 3014:
case 1856:
case 599:
case 3331:
case 1419:
case 3937:
case 2443:
case 1387:
case 2665:
case 1295:
case 562:
case 159:
case 1981:
case 2883:
case 1585:
case 2725:
case 1450:
case 3277:
case 576:
case 265:
case 1927:
case 2062:
case 128:
case 2611:
case 35:
case 4074:
case 3151:
case 2267:
case 171:
case 2355:
case 823:
case 594:
case 2028:
case 510:
case 1751:
case 1697:
case 2829:
case 3800:
case 2970:
case 3544:
case 2622:
case 1114:
case 1209:
case 1312:
case 952:
case 2279:
case 3216:
case 700:
case 3960:
case 1140:
case 2992:
case 3956:
case 2304:
case 3491:
case 1051:
case 1588:
case 2536:
case 1248:
case 101:
case 1837:
case 2942:
case 4021:
case 506:
case 1172:
case 3790:
case 2762:
case 2153:
case 2358:
case 3881:
case 1374:
case 548:
case 3374:
case 2323:
case 2417:
case 1559:
case 887:
case 3172:
case 1613:
case 2128:
case 1772:
case 2753:
case 3248:
case 3051:
case 2632:
case 2364:
case 589:
case 1956:
case 706:
case 3298:
case 2929:
case 1441:
case 3209:
case 2699:
case 2654:
case 3114:
case 1544:
case 1678:
case 2220:
case 1740:
case 3596:
case 346:
case 1045:
case 2262:
case 2600:
case 639:
case 3077:
case 1518:
case 1376:
case 1968:
case 3683:
case 1922:
case 2067:
case 2228:
case 1670:
case 3999:
case 2534:
case 247:
case 3865:
case 3214:
case 4017:
case 483:
case 2120:
case 2503:
case 1382:
case 3109:
case 2779:
case 3949:
case 3932:
case 1709:
case 1095:
case 1116:
case 3286:
case 3546:
case 2875:
case 3784:
case 2552:
case 634:
case 1580:
case 1455:
case 63:
case 1198:
case 2238:
case 1546:
case 1286:
case 2656:
case 3095:
case 4:
case 1932:
case 1949:
case 2350:
case 2421:
case 1109:
case 3382:
case 1865:
case 1214:
case 2487:
case 2366:
case 2978:
case 3748:
case 2007:
case 2253:
case 1954:
case 1683:
case 3692:
case 2202:
case 3376:
case 1077:
case 930:
case 1290:
case 1908:
case 2897:
case 2130:
case 1629:
case 3045:
case 1596:
case 1343:
case 3481:
case 3966:
case 3378:
case 3516:
case 1146:
case 1906:
case 2703:
case 1612:
case 1598:
case 2163:
case 3244:
case 2752:
case 3584:
case 2976:
case 3569:
case 3891:
case 2604:
case 3841:
case 788:
case 3796:
case 617:
case 1196:
case 3313:
case 1015:
case 3950:
case 1288:
case 2982:
case 705:
case 2623:
case 3288:
case 1950:
case 1313:
case 1427:
case 2134:
case 1259:
case 2664:
case 2332:
case 2993:
case 1294:
case 923:
case 3718:
case 1569:
case 4075:
case 1244:
case 3437:
case 2103:
case 2520:
case 1001:
case 2399:
case 588:
case 203:
case 2817:
case 74:
case 3146:
case 997:
case 3643:
case 2475:
case 1788:
case 913:
case 2528:
case 3329:
case 669:
case 2300:
case 2234:
case 966:
case 1392:
case 3296:
case 1085:
case 1370:
case 3759:
case 2562:
case 3590:
case 104:
case 1405:
case 287:
case 1682:
case 1958:
case 109:
case 3280:
case 1110:
case 3514:
case 1342:
case 2126:
case 664:
case 1989:
case 380:
case 3342:
case 1693:
case 1710:
case 1964:
case 1514:
case 2263:
case 3144:
case 309:
case 3110:
case 1280:
case 3958:
case 1923:
case 3273:
case 3339:
case 2726:
case 912:
case 581:
case 1188:
case 3405:
case 1465:
case 2666:
case 2821:
case 2360:
case 960:
case 3194:
case 2553:
case 865:
case 2812:
case 379:
case 2271:
case 756:
case 1833:
case 3261:
case 3955:
case 836:
case 114:
case 396:
case 2337:
case 3889:
case 190:
case 4029:
case 1468:
case 1804:
case 43:
case 2874:
case 1422:
case 1059:
case 374:
case 6:
case 4083:
case 550:
case 591:
case 556:
case 2381:
case 3858:
case 1785:
case 1454:
case 3468:
case 3804:
case 2036:
case 390:
case 4092:
case 314:
case 151:
case 1955:
case 3010:
case 750:
case 3833:
case 2691:
case 2921:
case 3044:
case 4039:
case 2413:
case 439:
case 3819:
case 12:
case 358:
case 1577:
case 2442:
case 3285:
case 732:
case 3545:
case 2439:
case 3715:
case 2507:
case 3866:
case 212:
case 775:
case 1806:
case 2470:
case 3850:
case 273:
case 3761:
case 167:
case 2063:
case 515:
case 3687:
case 2771:
case 329:
case 1080:
case 1161:
case 2024:
case 798:
case 2492:
case 1631:
case 1046:
case 852:
case 3400:
case 213:
case 3046:
case 3631:
case 1460:
case 2893:
case 3375:
case 1073:
case 129:
case 3701:
case 2365:
case 1687:
case 2171:
case 2003:
case 2483:
case 532:
case 1850:
case 2917:
case 598:
case 853:
case 1621:
case 987:
case 1866:
case 235:
case 1715:
case 2034:
case 2311:
case 2843:
case 1285:
case 3096:
case 3577:
case 158:
case 1456:
case 32:
case 1706:
case 785:
case 2348:
case 3289:
case 447:
case 1330:
case 2274:
case 2688:
case 1041:
case 3106:
case 746:
case 2435:
case 1166:
case 3946:
case 2776:
case 3719:
case 2212:
case 1091:
case 1918:
case 1150:
case 622:
case 2871:
case 2934:
case 540:
case 283:
case 508:
case 1379:
case 2578:
case 2316:
case 1750:
case 2644:
case 2425:
case 3233:
case 1599:
case 585:
case 1996:
case 2384:
case 2:
case 3568:
case 1508:
case 3091:
case 1719:
case 3166:
case 740:
case 1106:
case 282:
case 3258:
case 3636:
case 2924:
case 708:
case 3330:
case 2694:
case 2963:
case 1264:
case 2513:
case 4007:
case 2176:
case 3119:
case 1549:
case 300:
case 635:
case 938:
case 1652:
case 3445:
case 3624:
case 2282:
case 2542:
case 3556:
case 1733:
case 2407:
case 389:
case 964:
case 3959:
case 672:
case 3133:
case 3994:
case 1603:
case 2087:
case 2276:
case 3219:
case 4025:
case 969:
case 384:
case 1634:
case 1758:
case 2570:
case 613:
case 1164:
case 3885:
case 2618:
case 3495:
case 3158:
case 1704:
case 1328:
case 3266:
case 992:
case 1055:
case 1789:
case 927:
case 2174:
case 701:
case 3704:
case 1158:
case 1910:
case 1560:
case 3164:
case 2243:
case 2583:
case 1944:
case 660:
case 2390:
case 3634:
case 2926:
case 993:
case 1994:
case 2386:
case 2293:
case 3603:
case 1338:
case 2467:
case 843:
case 96:
case 189:
case 2314:
case 3477:
case 3733:
case 2857:
case 1556:
case 1445:
case 306:
case 2112:
case 1624:
case 3652:
case 2680:
case 1498:
case 1155:
case 839:
case 3859:
case 3241:
case 3581:
case 2479:
case 3416:
case 4002:
case 603:
case 9:
case 1409:
case 362:
case 1064:
case 1089:
case 2836:
case 1888:
case 3755:
case 1671:
case 55:
case 511:
case 868:
case 430:
case 3033:
case 163:
case 310:
case 759:
case 277:
case 3291:
case 394:
case 194:
case 2661:
case 83:
case 1844:
case 1985:
case 3448:
case 3335:
case 436:
case 2217:
case 3671:
case 231:
case 1484:
case 2351:
case 2420:
case 3888:
case 3089:
case 4028:
case 2957:
case 162:
case 1469:
case 3023:
case 2074:
case 465:
case 75:
case 4062:
case 1581:
case 199:
case 3498:
case 983:
case 2117:
case 227:
case 4020:
case 518:
case 3846:
case 2575:
case 3472:
case 2852:
case 861:
case 3880:
case 3565:
case 2231:
case 326:
case 1191:
case 120:
case 3367:
case 3255:
case 1066:
case 3440:
case 907:
case 721:
case 2834:
case 355:
case 1901:
case 26:
case 3741:
case 2377:
case 1818:
case 3818:
case 238:
case 2597:
case 1741:
case 2345:
case 595:
case 1896:
case 2438:
case 1486:
case 1961:
case 1006:
case 269:
case 320:
case 2082:
case 2717:
case 578:
case 2402:
case 4079:
case 1490:
case 1565:
case 2863:
case 1472:
case 1846:
case 1657:
case 2547:
case 412:
case 1049:
case 3625:
case 3444:
case 1032:
case 332:
case 942:
case 3541:
case 3281:
case 115:
case 758:
case 724:
case 1371:
case 1488:
case 3105:
case 4024:
case 3227:
case 1809:
case 1977:
case 1008:
case 838:
case 3816:
case 2147:
case 3022:
case 1705:
case 473:
case 864:
case 1099:
case 3099:
case 1765:
case 2175:
case 1494:
case 943:
case 2361:
case 893:
case 1022:
case 524:
case 2517:
case 3054:
case 2967:
case 1459:
case 3008:
case 1591:
case 1227:
case 1945:
case 3165:
case 3488:
case 1105:
case 261:
case 2651:
case 72:
case 3111:
case 1541:
case 827:
case 132:
case 1410:
case 1995:
case 3848:
case 3049:
case 4034:
case 175:
case 1711:
case 3814:
case 3357:
case 2531:
case 1418:
case 3496:
case 831:
case 150:
case 3951:
case 57:
case 2434:
case 257:
case 3727:
case 2275:
case 2083:
case 774:
case 519:
case 497:
case 3781:
case 2862:
case 3137:
case 2403:
case 3872:
case 1473:
case 817:
case 2677:
case 2935:
case 3000:
case 71:
case 579:
case 1446:
case 790:
case 3181:
case 3060:
case 1000:
case 4036:
case 125:
case 2853:
case 1555:
case 3473:
case 1872:
case 2645:
case 234:
case 877:
case 2463:
case 1137:
case 1781:
case 2297:
case 3607:
case 77:
case 2521:
case 2070:
case 1840:
case 2925:
case 1886:
case 51:
case 2039:
case 551:
case 1496:
case 574:
case 3056:
case 2695:
case 3205:
case 3418:
case 1265:
case 1160:
case 3940:
case 2648:
case 807:
case 3037:
case 1336:
case 2388:
case 3851:
case 1700:
case 3914:
case 1504:
case 3299:
case 2609:
case 3756:
case 504:
case 3972:
case 2512:
case 3990:
case 2962:
case 1268:
case 3326:
case 652:
case 1679:
case 3679:
case 2616:
case 2344:
case 3268:
case 2902:
case 2142:
case 1990:
case 2278:
case 1620:
case 2684:
case 3222:
case 2953:
case 2669:
case 1756:
case 653:
case 1914:
case 1564:
case 3700:
case 2729:
case 3336:
case 545:
case 1037:
case 1461:
case 2938:
case 1232:
case 586:
case 3558:
case 2359:
case 2192:
case 3081:
case 1940:
case 1100:
case 2825:
case 2783:
case 968:
case 665:
case 882:
case 3754:
case 2582:
case 1108:
case 2930:
case 3638:
case 14:
case 1065:
case 3799:
case 3602:
case 1011:
case 2292:
case 1662:
case 1200:
case 2979:
case 3916:
case 3566:
case 3749:
case 1132:
case 1149:
case 3519:
case 2576:
case 2318:
case 3732:
case 388:
case 2097:
case 8:
case 2113:
case 2396:
case 1984:
case 3628:
case 188:
case 1732:
case 1969:
case 1519:
case 3149:
case 3506:
case 149:
case 957:
case 1916:
case 2229:
case 3334:
case 630:
case 2713:
case 305:
case 3011:
case 1602:
case 144:
case 3065:
case 1256:
case 34:
case 3303:
case 403:
case 1638:
case 2686:
case 3108:
case 3722:
case 93:
case 2778:
case 2640:
case 4071:
case 1122:
case 1895:
case 1324:
case 3199:
case 2380:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762030802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,];
var gg_b = "1762030802/";

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
