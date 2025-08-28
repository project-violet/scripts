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
case 2818:
case 580:
case 1161:
case 448:
case 3127:
case 2070:
case 788:
case 2163:
case 2764:
case 802:
case 61:
case 3928:
case 1456:
case 1436:
case 2058:
case 2671:
case 1946:
case 2434:
case 3962:
case 1571:
case 4072:
case 1673:
case 3197:
case 156:
case 3558:
case 3160:
case 4037:
case 3998:
case 809:
case 386:
case 2062:
case 2973:
case 3846:
case 2544:
case 2358:
case 3189:
case 4027:
case 12:
case 2646:
case 3958:
case 839:
case 467:
case 1971:
case 3562:
case 3157:
case 627:
case 3373:
case 1240:
case 3598:
case 2424:
case 721:
case 1403:
case 2028:
case 3705:
case 3938:
case 803:
case 1496:
case 521:
case 1318:
case 1828:
case 2370:
case 2494:
case 4015:
case 2288:
case 2261:
case 2468:
case 3859:
case 2607:
case 2687:
case 512:
case 1559:
case 1263:
case 3887:
case 1475:
case 1507:
case 712:
case 3174:
case 3773:
case 969:
case 1587:
case 2659:
case 3807:
case 2866:
case 2639:
case 3385:
case 1619:
case 3042:
case 1864:
case 2422:
case 519:
case 4043:
case 1642:
case 3235:
case 2738:
case 2905:
case 1718:
case 2064:
case 3666:
case 2770:
case 341:
case 719:
case 962:
case 1066:
case 2542:
case 3005:
case 1529:
case 1605:
case 3342:
case 21:
case 3964:
case 1685:
case 3085:
case 3829:
case 3319:
case 715:
case 2140:
case 2505:
case 2477:
case 284:
case 2364:
case 3225:
case 2942:
case 1412:
case 2798:
case 1959:
case 49:
case 3143:
case 2699:
case 1188:
case 666:
case 3295:
case 875:
case 877:
case 4016:
case 3793:
case 3194:
case 3181:
case 2720:
case 2947:
case 756:
case 229:
case 3786:
case 2148:
case 2645:
case 2767:
case 3249:
case 200:
case 222:
case 1100:
case 358:
case 2409:
case 188:
case 2489:
case 350:
case 517:
case 121:
case 2497:
case 2750:
case 223:
case 3711:
case 1582:
case 2415:
case 3802:
case 574:
case 398:
case 1435:
case 3134:
case 1502:
case 596:
case 2427:
case 1647:
case 3154:
case 3753:
case 814:
case 3463:
case 72:
case 796:
case 4024:
case 2778:
case 2547:
case 3879:
case 225:
case 2730:
case 2443:
case 3023:
case 451:
case 1521:
case 1623:
case 2933:
case 3296:
case 2067:
case 3311:
case 1441:
case 3152:
case 638:
case 3283:
case 534:
case 463:
case 1890:
case 3333:
case 3203:
case 630:
case 119:
case 1591:
case 2506:
case 2020:
case 1365:
case 1584:
case 625:
case 3353:
case 1951:
case 465:
case 3226:
case 807:
case 3884:
case 2593:
case 3520:
case 3006:
case 2280:
case 2604:
case 112:
case 3086:
case 2330:
case 1820:
case 1310:
case 3530:
case 2269:
case 1878:
case 1991:
case 469:
case 1065:
case 1830:
case 629:
case 1551:
case 1904:
case 2320:
case 3665:
case 1010:
case 2865:
case 3236:
case 2651:
case 2553:
case 2078:
case 2631:
case 2533:
case 1921:
case 3011:
case 3256:
case 1611:
case 1513:
case 491:
case 2367:
case 2050:
case 2923:
case 4032:
case 1531:
case 115:
case 2511:
case 3990:
case 3033:
case 608:
case 3550:
case 1055:
case 3138:
case 1561:
case 4062:
case 2027:
case 387:
case 3170:
case 3937:
case 929:
case 3861:
case 2337:
case 2207:
case 267:
case 1317:
case 65:
case 1827:
case 2563:
case 2661:
case 2855:
case 3527:
case 2060:
case 2835:
case 1815:
case 3989:
case 922:
case 2173:
case 4028:
case 3266:
case 1897:
case 900:
case 1219:
case 2239:
case 116:
case 3635:
case 3597:
case 1171:
case 1860:
case 1035:
case 2057:
case 3589:
case 2229:
case 1809:
case 2743:
case 3915:
case 1025:
case 1889:
case 3625:
case 248:
case 938:
case 1335:
case 1205:
case 3198:
case 3557:
case 1285:
case 1857:
case 923:
case 466:
case 3572:
case 1837:
case 925:
case 3740:
case 2327:
case 4058:
case 2299:
case 197:
case 1872:
case 626:
case 3363:
case 1355:
case 3128:
case 2963:
case 3927:
case 2037:
case 3617:
case 2074:
case 2797:
case 2450:
case 1159:
case 552:
case 3411:
case 3676:
case 544:
case 1735:
case 1341:
case 593:
case 752:
case 1107:
case 868:
case 1988:
case 1874:
case 640:
case 1465:
case 559:
case 3164:
case 3763:
case 226:
case 2142:
case 2119:
case 1139:
case 2430:
case 1795:
case 427:
case 599:
case 3040:
case 2420:
case 667:
case 555:
case 3493:
case 1640:
case 3486:
case 911:
case 1717:
case 16:
case 755:
case 592:
case 2467:
case 1376:
case 561:
case 2841:
case 2608:
case 2043:
case 2757:
case 2374:
case 2490:
case 1199:
case 792:
case 3974:
case 4064:
case 1508:
case 1843:
case 1041:
case 3543:
case 3808:
case 3641:
case 3581:
case 3683:
case 1801:
case 843:
case 2896:
case 1003:
case 1881:
case 516:
case 663:
case 3501:
case 438:
case 2354:
case 1223:
case 2777:
case 2094:
case 1749:
case 2548:
case 2081:
case 2803:
case 651:
case 2001:
case 716:
case 2883:
case 3696:
case 3524:
case 757:
case 2284:
case 2316:
case 1336:
case 2752:
case 2462:
case 1314:
case 1286:
case 2334:
case 665:
case 1580:
case 3444:
case 1293:
case 2024:
case 318:
case 1026:
case 1500:
case 3916:
case 966:
case 3210:
case 3924:
case 2458:
case 1036:
case 2792:
case 2251:
case 3636:
case 1775:
case 1102:
case 2669:
case 849:
case 2836:
case 1900:
case 3265:
case 2814:
case 1253:
case 2324:
case 3516:
case 1834:
case 669:
case 3994:
case 408:
case 1303:
case 1233:
case 3901:
case 2856:
case 400:
case 3348:
case 2948:
case 1418:
case 1056:
case 422:
case 2301:
case 2147:
case 691:
case 371:
case 269:
case 2368:
case 2392:
case 411:
case 1375:
case 1726:
case 3992:
case 195:
case 2123:
case 3190:
case 291:
case 144:
case 2186:
case 193:
case 1104:
case 1703:
case 3577:
case 1783:
case 2812:
case 1191:
case 2322:
case 3612:
case 1796:
case 2701:
case 1049:
case 382:
case 2794:
case 331:
case 470:
case 3442:
case 2022:
case 1151:
case 383:
case 3419:
case 478:
case 984:
case 192:
case 263:
case 2377:
case 161:
case 1349:
case 1466:
case 2332:
case 1822:
case 2464:
case 91:
case 2092:
case 2352:
case 2068:
case 1113:
case 1714:
case 3592:
case 1247:
case 385:
case 199:
case 1868:
case 836:
case 3568:
case 155:
case 1075:
case 1131:
case 1332:
case 1464:
case 904:
case 163:
case 292:
case 3165:
case 1754:
case 1282:
case 261:
case 2349:
case 303:
case 2466:
case 3110:
case 3949:
case 332:
case 3439:
case 253:
case 3912:
case 2151:
case 1022:
case 151:
case 3622:
case 1111:
case 2075:
case 255:
case 412:
case 2131:
case 1279:
case 299:
case 3407:
case 305:
case 2714:
case 1068:
case 1734:
case 1133:
case 3487:
case 1092:
case 1123:
case 1724:
case 59:
case 2726:
case 726:
case 2121:
case 1392:
case 169:
case 1368:
case 3700:
case 335:
case 886:
case 3677:
case 3429:
case 333:
case 934:
case 1077:
case 1193:
case 1794:
case 3632:
case 1245:
case 2012:
case 2796:
case 415:
case 328:
case 1701:
case 2783:
case 1106:
case 1812:
case 1322:
case 2191:
case 244:
case 2877:
case 191:
case 1186:
case 3512:
case 293:
case 162:
case 1849:
case 2104:
case 2703:
case 2253:
case 2182:
case 2834:
case 3536:
case 3514:
case 2816:
case 1669:
case 2036:
case 996:
case 1016:
case 3278:
case 1768:
case 2014:
case 3300:
case 375:
case 2569:
case 3230:
case 3903:
case 693:
case 1381:
case 1147:
case 1470:
case 974:
case 2179:
case 644:
case 488:
case 1054:
case 548:
case 1394:
case 1948:
case 2211:
case 480:
case 2056:
case 3983:
case 1231:
case 2383:
case 1722:
case 2233:
case 2303:
case 2096:
case 3267:
case 3601:
case 3848:
case 3503:
case 1094:
case 2223:
case 1354:
case 1548:
case 3694:
case 2749:
case 661:
case 3596:
case 1428:
case 1221:
case 2083:
case 2145:
case 2500:
case 2026:
case 3369:
case 3446:
case 3624:
case 1024:
case 2293:
case 699:
case 2824:
case 379:
case 2314:
case 1600:
case 567:
case 1680:
case 2969:
case 1826:
case 3080:
case 2336:
case 1291:
case 1772:
case 3484:
case 1105:
case 3298:
case 657:
case 314:
case 2717:
case 15:
case 2129:
case 1420:
case 2244:
case 1246:
case 2588:
case 4066:
case 763:
case 1709:
case 2843:
case 1688:
case 1043:
case 915:
case 1490:
case 3643:
case 3541:
case 3088:
case 3008:
case 563:
case 1841:
case 2725:
case 751:
case 2376:
case 2107:
case 3413:
case 2988:
case 3576:
case 2874:
case 2908:
case 2735:
case 1876:
case 2341:
case 2187:
case 2076:
case 3308:
case 1797:
case 1450:
case 3270:
case 850:
case 3674:
case 1940:
case 3761:
case 2139:
case 3258:
case 1142:
case 569:
case 1271:
case 19:
case 769:
case 1727:
case 1009:
case 2285:
case 2857:
case 3689:
case 2335:
case 1825:
case 1315:
case 3445:
case 417:
case 2025:
case 3935:
case 1360:
case 1397:
case 1057:
case 3595:
case 337:
case 3361:
case 456:
case 1895:
case 1963:
case 1072:
case 2872:
case 3517:
case 297:
case 3995:
case 3863:
case 1287:
case 1207:
case 3061:
case 167:
case 2317:
case 3555:
case 1563:
case 1259:
case 3917:
case 84:
case 2395:
case 2055:
case 257:
case 66:
case 2663:
case 2561:
case 216:
case 2242:
case 1015:
case 2035:
case 1309:
case 1239:
case 1173:
case 1774:
case 1357:
case 1835:
case 1060:
case 3264:
case 3678:
case 1553:
case 3384:
case 3216:
case 1078:
case 3630:
case 1993:
case 459:
case 1865:
case 1030:
case 2830:
case 111:
case 87:
case 2551:
case 2653:
case 213:
case 2878:
case 96:
case 2984:
case 1906:
case 3811:
case 4049:
case 2531:
case 3013:
case 1511:
case 784:
case 3782:
case 1474:
case 1050:
case 3650:
case 3254:
case 1533:
case 1631:
case 824:
case 2476:
case 584:
case 2513:
case 3175:
case 2611:
case 1367:
case 688:
case 444:
case 3031:
case 3702:
case 3823:
case 1911:
case 3021:
case 461:
case 2248:
case 1621:
case 1523:
case 2867:
case 2931:
case 1067:
case 3745:
case 3667:
case 1443:
case 3690:
case 2623:
case 1090:
case 170:
case 1350:
case 1330:
case 3965:
case 2820:
case 2686:
case 2310:
case 3004:
case 1691:
case 3084:
case 2606:
case 499:
case 1280:
case 3351:
case 3149:
case 1020:
case 1506:
case 2365:
case 3886:
case 2584:
case 2502:
case 3713:
case 1415:
case 8:
case 138:
case 1460:
case 3002:
case 3731:
case 1602:
case 3345:
case 4083:
case 1497:
case 3082:
case 130:
case 3268:
case 4026:
case 3847:
case 2710:
case 997:
case 2579:
case 1547:
case 3292:
case 3751:
case 1679:
case 2765:
case 80:
case 612:
case 957:
case 3252:
case 1472:
case 3183:
case 3784:
case 2417:
case 3704:
case 1437:
case 3379:
case 4036:
case 4014:
case 3196:
case 2180:
case 1409:
case 4056:
case 2100:
case 122:
case 280:
case 1457:
case 100:
case 615:
case 3277:
case 916:
case 3045:
case 2425:
case 368:
case 3126:
case 108:
case 3232:
case 3302:
case 953:
case 1364:
case 1585:
case 1942:
case 3805:
case 354:
case 1432:
case 1140:
case 3257:
case 2449:
case 3029:
case 2366:
case 3885:
case 1629:
case 2939:
case 1477:
case 184:
case 3339:
case 961:
case 4076:
case 3966:
case 1728:
case 2605:
case 2987:
case 2907:
case 2188:
case 2959:
case 3237:
case 1762:
case 3387:
case 2587:
case 46:
case 2263:
case 2475:
case 3771:
case 1687:
case 2559:
case 696:
case 995:
case 1261:
case 345:
case 2999:
case 127:
case 944:
case 674:
case 3819:
case 1542:
case 2066:
case 1985:
case 3260:
case 2539:
case 3664:
case 570:
case 1064:
case 3842:
case 2864:
case 952:
case 2642:
case 1639:
case 234:
case 770:
case 2240:
case 2644:
case 2862:
case 1646:
case 2898:
case 2426:
case 2971:
case 3046:
case 525:
case 1544:
case 3698:
case 3480:
case 22:
case 2546:
case 1062:
case 3844:
case 3662:
case 1370:
case 3243:
case 634:
case 416:
case 1208:
case 1338:
case 1401:
case 3195:
case 801:
case 2483:
case 3628:
case 2403:
case 2018:
case 3155:
case 3274:
case 2766:
case 604:
case 1070:
case 1454:
case 2161:
case 2870:
case 217:
case 4025:
case 522:
case 1328:
case 882:
case 831:
case 4017:
case 256:
case 1434:
case 1362:
case 3707:
case 2414:
case 497:
case 2436:
case 1058:
case 1671:
case 1416:
case 3071:
case 2946:
case 3135:
case 668:
case 2321:
case 420:
case 433:
case 840:
case 1033:
case 848:
case 1990:
case 315:
case 1168:
case 2013:
case 660:
case 2254:
case 2650:
case 764:
case 2782:
case 2031:
case 2175:
case 3476:
case 3921:
case 2565:
case 2216:
case 2384:
case 2391:
case 1122:
case 2678:
case 98:
case 1386:
case 1610:
case 2234:
case 1920:
case 2630:
case 3904:
case 3551:
case 1393:
case 914:
case 3830:
case 3065:
case 3991:
case 2510:
case 3984:
case 3878:
case 409:
case 3820:
case 2965:
case 2091:
case 2351:
case 1006:
case 1132:
case 1884:
case 439:
case 2806:
case 3951:
case 1891:
case 1177:
case 2620:
case 2886:
case 1930:
case 647:
case 2149:
case 977:
case 2910:
case 3591:
case 1804:
case 319:
case 1567:
case 2823:
case 1283:
case 3931:
case 2021:
case 403:
case 1590:
case 1311:
case 2331:
case 2201:
case 541:
case 2408:
case 2488:
case 2294:
case 1023:
case 2690:
case 3913:
case 3710:
case 2268:
case 2292:
case 2156:
case 3455:
case 1753:
case 2079:
case 3647:
case 1047:
case 937:
case 3502:
case 1134:
case 1882:
case 190:
case 198:
case 3582:
case 3945:
case 2136:
case 2345:
case 2002:
case 3169:
case 472:
case 2082:
case 1845:
case 3180:
case 388:
case 3902:
case 3545:
case 3982:
case 380:
case 158:
case 3100:
case 1723:
case 1124:
case 260:
case 1249:
case 3425:
case 268:
case 1212:
case 786:
case 2784:
case 2791:
case 2252:
case 89:
case 2704:
case 2103:
case 586:
case 907:
case 1793:
case 2379:
case 1101:
case 2196:
case 1295:
case 2746:
case 2099:
case 2359:
case 939:
case 1744:
case 249:
case 1899:
case 2387:
case 2141:
case 3599:
case 254:
case 2805:
case 3939:
case 3366:
case 2885:
case 3449:
case 1319:
case 1085:
case 3685:
case 3605:
case 2289:
case 1342:
case 3529:
case 3066:
case 2297:
case 902:
case 1666:
case 3539:
case 2260:
case 1305:
case 2215:
case 4088:
case 3619:
case 933:
case 1019:
case 920:
case 1385:
case 3929:
case 935:
case 2059:
case 2399:
case 1174:
case 414:
case 3475:
case 74:
case 276:
case 3559:
case 2771:
case 48:
case 54:
case 3999:
case 1528:
case 2729:
case 851:
case 3318:
case 798:
case 3496:
case 1938:
case 1705:
case 2628:
case 3483:
case 1172:
case 1448:
case 863:
case 1137:
case 374:
case 3862:
case 1598:
case 3644:
case 2799:
case 3240:
case 3971:
case 2046:
case 3426:
case 865:
case 1958:
case 396:
case 946:
case 2480:
case 2371:
case 2662:
case 2400:
case 2844:
case 1998:
case 437:
case 1160:
case 2469:
case 869:
case 356:
case 3571:
case 3673:
case 979:
case 1344:
case 3414:
case 2873:
case 2135:
case 2658:
case 3946:
case 2787:
case 1115:
case 206:
case 3436:
case 1618:
case 750:
case 2638:
case 1276:
case 2155:
case 891:
case 972:
case 2670:
case 2274:
case 3870:
case 3838:
case 654:
case 558:
case 70:
case 1952:
case 4004:
case 4084:
case 679:
case 185:
case 3247:
case 2459:
case 1592:
case 50:
case 2668:
case 239:
case 205:
case 2692:
case 3756:
case 3466:
case 1522:
case 2165:
case 281:
case 2110:
case 1419:
case 183:
case 1178:
case 954:
case 1932:
case 1442:
case 2912:
case 131:
case 182:
case 220:
case 1120:
case 233:
case 3049:
case 352:
case 1612:
case 3012:
case 1922:
case 2549:
case 1577:
case 673:
case 994:
case 344:
case 4031:
case 1190:
case 866:
case 4051:
case 1552:
case 675:
case 189:
case 1968:
case 1992:
case 1167:
case 3726:
case 359:
case 3121:
case 2780:
case 2700:
case 235:
case 3179:
case 2250:
case 3211:
case 884:
case 460:
case 2996:
case 628:
case 1981:
case 4045:
case 3303:
case 1994:
case 1473:
case 3182:
case 609:
case 3253:
case 3900:
case 1265:
case 1534:
case 936:
case 3102:
case 3326:
case 2069:
case 3775:
case 77:
case 2514:
case 2471:
case 3036:
case 246:
case 275:
case 2300:
case 57:
case 2446:
case 827:
case 3500:
case 118:
case 1880:
case 2936:
case 1626:
case 605:
case 639:
case 2914:
case 1800:
case 1444:
case 1934:
case 279:
case 3824:
case 3336:
case 4079:
case 3712:
case 2503:
case 2601:
case 2267:
case 3356:
case 3749:
case 2583:
case 2681:
case 1603:
case 3003:
case 1048:
case 1581:
case 4082:
case 823:
case 1641:
case 830:
case 494:
case 583:
case 3588:
case 3041:
case 2976:
case 3508:
case 701:
case 1888:
case 3199:
case 783:
case 3725:
case 2008:
case 501:
case 4039:
case 2491:
case 4059:
case 2262:
case 1493:
case 3244:
case 476:
case 1040:
case 4087:
case 607:
case 585:
case 4007:
case 445:
case 3795:
case 28:
case 3139:
case 2761:
case 2258:
case 829:
case 449:
case 2166:
case 3273:
case 637:
case 1453:
case 782:
case 731:
case 808:
case 2576:
case 2413:
case 1943:
case 3187:
case 3341:
case 800:
case 2431:
case 442:
case 1676:
case 3076:
case 1411:
case 822:
case 1218:
case 2674:
case 2270:
case 3159:
case 2361:
case 2637:
case 2595:
case 237:
case 2672:
case 1128:
case 2955:
case 3355:
case 2517:
case 1363:
case 1537:
case 397:
case 406:
case 947:
case 3837:
case 4071:
case 2609:
case 1162:
case 1557:
case 3741:
case 3205:
case 3146:
case 1625:
case 3889:
case 3025:
case 2445:
case 3809:
case 1589:
case 3035:
case 870:
case 3171:
case 968:
case 1597:
case 1635:
case 1158:
case 316:
case 1957:
case 1266:
case 1515:
case 2697:
case 1909:
case 2535:
case 1989:
case 3776:
case 718:
case 68:
case 3317:
case 2061:
case 4046:
case 1861:
case 614:
case 187:
case 1447:
case 3561:
case 3663:
case 1138:
case 3055:
case 1063:
case 819:
case 1660:
case 1264:
case 1402:
case 2266:
case 3774:
case 1482:
case 772:
case 958:
case 1697:
case 1535:
case 2560:
case 3239:
case 6:
case 3309:
case 572:
case 3015:
case 2597:
case 812:
case 1118:
case 2861:
case 2170:
case 1479:
case 1917:
case 287:
case 3259:
case 3027:
case 3661:
case 3563:
case 3207:
case 1863:
case 3287:
case 1995:
case 4044:
case 3372:
case 579:
case 775:
case 1517:
case 63:
case 2695:
case 575:
case 4073:
case 1955:
case 3895:
case 2128:
case 2617:
case 2927:
case 546:
case 1637:
case 137:
case 486:
case 1595:
case 340:
case 3229:
case 3057:
case 3397:
case 998:
case 2625:
case 3360:
case 348:
case 1935:
case 573:
case 1445:
case 3315:
case 3825:
case 1609:
case 2162:
case 224:
case 1166:
case 2340:
case 735:
case 2453:
case 94:
case 2763:
case 2164:
case 3271:
case 535:
case 509:
case 23:
case 3142:
case 1761:
case 1674:
case 528:
case 624:
case 3343:
case 4005:
case 3450:
case 1388:
case 702:
case 3797:
case 3760:
case 1238:
case 2676:
case 2411:
case 1941:
case 2218:
case 520:
case 533:
case 3715:
case 3876:
case 502:
case 2943:
case 3608:
case 3841:
case 503:
case 1643:
case 3490:
case 1541:
case 2:
case 2423:
case 3043:
case 703:
case 2974:
case 2808:
case 1228:
case 3789:
case 1976:
case 2493:
case 2040:
case 1404:
case 3185:
case 114:
case 3737:
case 3540:
case 1491:
case 1298:
case 2406:
case 3772:
case 1484:
case 505:
case 507:
case 3752:
case 1080:
case 3498:
case 3826:
case 3680:
case 3284:
case 3600:
case 1000:
case 1526:
case 685:
case 3462:
case 707:
case 2800:
case 1914:
case 1220:
case 210:
case 1624:
case 218:
case 3896:
case 1956:
case 2683:
case 2048:
case 3428:
case 1596:
case 2501:
case 2954:
case 1290:
case 1694:
case 3777:
case 1583:
case 490:
case 1601:
case 1848:
case 1503:
case 834:
case 3883:
case 3001:
case 3732:
case 2981:
case 3213:
case 631:
case 1556:
case 2994:
case 682:
case 2348:
case 3856:
case 1996:
case 2554:
case 3231:
case 3301:
case 3438:
case 458:
case 3948:
case 804:
case 3054:
case 271:
case 450:
case 173:
case 1903:
case 1230:
case 3768:
case 1634:
case 2614:
case 1926:
case 1278:
case 1616:
case 3251:
case 3458:
case 3836:
case 2534:
case 1069:
case 2473:
case 2265:
case 3814:
case 3849:
case 362:
case 4011:
case 671:
case 941:
case 391:
case 1549:
case 3322:
case 2748:
case 3106:
case 2577:
case 3032:
case 817:
case 1632:
case 3794:
case 3193:
case 2649:
case 1429:
case 120:
case 3781:
case 135:
case 1700:
case 369:
case 1975:
case 856:
case 1652:
case 4053:
case 3052:
case 577:
case 2167:
case 2190:
case 3724:
case 2968:
case 289:
case 1487:
case 3352:
case 514:
case 1692:
case 4093:
case 3716:
case 618:
case 610:
case 3734:
case 3133:
case 1668:
case 105:
case 1575:
case 3068:
case 139:
case 1407:
case 1459:
case 714:
case 4006:
case 44:
case 2592:
case 1769:
case 4086:
case 2568:
case 2675:
case 4023:
case 2932:
case 3022:
case 1912:
case 2130:
case 132:
case 181:
case 2977:
case 283:
case 964:
case 3377:
case 3754:
case 363:
case 3202:
case 1658:
case 1071:
case 918:
case 2115:
case 3058:
case 3398:
case 3944:
case 3362:
case 1873:
case 859:
case 1759:
case 2558:
case 47:
case 2197:
case 2073:
case 2962:
case 2344:
case 1346:
case 1469:
case 3818:
case 2742:
case 2570:
case 768:
case 2719:
case 852:
case 2538:
case 1739:
case 3070:
case 1670:
case 664:
case 2127:
case 1274:
case 568:
case 560:
case 2618:
case 1155:
case 2276:
case 1638:
case 641:
case 971:
case 1628:
case 2705:
case 861:
case 2172:
case 3028:
case 2241:
case 1195:
case 3401:
case 3208:
case 2528:
case 3481:
case 3494:
case 1662:
case 3973:
case 2109:
case 1400:
case 3062:
case 547:
case 3098:
case 899:
case 136:
case 487:
case 1698:
case 2846:
case 1046:
case 1125:
case 2958:
case 3646:
case 3424:
case 747:
case 1799:
case 2598:
case 2373:
case 931:
case 982:
case 2019:
case 2385:
case 4:
case 2042:
case 3519:
case 3738:
case 1260:
case 3905:
case 143:
case 3542:
case 1297:
case 241:
case 2666:
case 3770:
case 3607:
case 327:
case 145:
case 3261:
case 1087:
case 4040:
case 2255:
case 1176:
case 2807:
case 3659:
case 1399:
case 1059:
case 2773:
case 1227:
case 1387:
case 686:
case 3452:
case 3798:
case 149:
case 1307:
case 1237:
case 3762:
case 985:
case 2217:
case 43:
case 2295:
case 3728:
case 2342:
case 1289:
case 2005:
case 2319:
case 2085:
case 1966:
case 2829:
case 142:
case 3477:
case 3505:
case 1029:
case 1257:
case 3140:
case 3432:
case 2225:
case 3942:
case 1302:
case 308:
case 2212:
case 168:
case 1045:
case 2124:
case 2723:
case 1277:
case 300:
case 1382:
case 2249:
case 3457:
case 322:
case 1721:
case 250:
case 3489:
case 471:
case 2101:
case 2181:
case 1379:
case 2786:
case 3437:
case 987:
case 1704:
case 1103:
case 506:
case 1784:
case 3472:
case 3148:
case 1252:
case 2706:
case 2154:
case 1079:
case 2047:
case 2275:
case 97:
case 2463:
case 1751:
case 3547:
case 325:
case 1268:
case 3497:
case 924:
case 3602:
case 1345:
case 1002:
case 3460:
case 2116:
case 2802:
case 1136:
case 1114:
case 2134:
case 2733:
case 2093:
case 2177:
case 2353:
case 2930:
case 1886:
case 3506:
case 2440:
case 1910:
case 745:
case 2978:
case 2891:
case 1351:
case 3684:
case 2520:
case 3280:
case 485:
case 3378:
case 3593:
case 3691:
case 1084:
case 1004:
case 3200:
case 2086:
case 857:
case 1965:
case 3330:
case 3953:
case 370:
case 3350:
case 1488:
case 3090:
case 690:
case 1281:
case 3933:
case 2023:
case 816:
case 3443:
case 1690:
case 483:
case 543:
case 1745:
case 1201:
case 1331:
case 1408:
case 2296:
case 594:
case 378:
case 401:
case 3523:
case 2590:
case 3911:
case 1313:
case 1823:
case 794:
case 1031:
case 2256:
case 1175:
case 2011:
case 3533:
case 650:
case 658:
case 2323:
case 1254:
case 554:
case 2813:
case 1650:
case 3390:
case 1782:
case 3474:
case 742:
case 1833:
case 3511:
case 3613:
case 2990:
case 1013:
case 9:
case 1321:
case 2192:
case 1811:
case 482:
case 2967:
case 431:
case 90:
case 1510:
case 2530:
case 3320:
case 2747:
case 749:
case 311:
case 3986:
case 2578:
case 3865:
case 3030:
case 2610:
case 1630:
case 2920:
case 489:
case 897:
case 1565:
case 3078:
case 3553:
case 3651:
case 2122:
case 1391:
case 2306:
case 1678:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756360801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,];
var gg_b = "1756360801/";

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
