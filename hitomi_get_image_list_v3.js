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
case 3413:
case 1928:
case 1706:
case 1159:
case 1821:
case 2535:
case 3459:
case 2656:
case 1613:
case 3562:
case 1747:
case 1209:
case 2658:
case 1188:
case 1343:
case 2446:
case 1998:
case 1212:
case 3641:
case 1455:
case 1636:
case 2688:
case 3734:
case 2716:
case 3686:
case 1920:
case 700:
case 1342:
case 1365:
case 690:
case 2629:
case 3929:
case 901:
case 2172:
case 2610:
case 2642:
case 2655:
case 3238:
case 2062:
case 1374:
case 2614:
case 3293:
case 3081:
case 3899:
case 3716:
case 1231:
case 1012:
case 2635:
case 1165:
case 2594:
case 3985:
case 950:
case 2009:
case 3879:
case 2916:
case 818:
case 2980:
case 2254:
case 1590:
case 2802:
case 3077:
case 2626:
case 509:
case 1995:
case 3445:
case 1016:
case 3949:
case 1965:
case 1190:
case 2979:
case 2799:
case 1537:
case 3259:
case 1199:
case 1559:
case 1813:
case 1052:
case 1574:
case 1775:
case 195:
case 2259:
case 1154:
case 3122:
case 1241:
case 433:
case 1131:
case 533:
case 2397:
case 1554:
case 1619:
case 3381:
case 4007:
case 3336:
case 1758:
case 3954:
case 1527:
case 3786:
case 918:
case 3168:
case 1700:
case 1353:
case 3331:
case 136:
case 1373:
case 2363:
case 1806:
case 1594:
case 2256:
case 3829:
case 2740:
case 1874:
case 1432:
case 429:
case 1087:
case 3115:
case 3522:
case 394:
case 4068:
case 2285:
case 2144:
case 665:
case 3588:
case 1129:
case 42:
case 2104:
case 3926:
case 756:
case 3327:
case 146:
case 467:
case 3231:
case 1183:
case 1478:
case 2751:
case 2265:
case 605:
case 2512:
case 1158:
case 3508:
case 3121:
case 1672:
case 3837:
case 3521:
case 2997:
case 3239:
case 1771:
case 2984:
case 527:
case 4072:
case 3483:
case 1990:
case 4050:
case 493:
case 500:
case 4074:
case 2375:
case 1376:
case 3236:
case 4057:
case 3136:
case 83:
case 3387:
case 1746:
case 2347:
case 3182:
case 904:
case 2328:
case 1975:
case 472:
case 3112:
case 2370:
case 1748:
case 248:
case 3565:
case 1987:
case 3945:
case 2969:
case 1434:
case 1099:
case 823:
case 2684:
case 1798:
case 3724:
case 3625:
case 897:
case 1927:
case 1765:
case 3277:
case 125:
case 3673:
case 694:
case 3682:
case 972:
case 211:
case 2675:
case 2389:
case 2505:
case 3123:
case 1488:
case 4056:
case 3157:
case 457:
case 2267:
case 2185:
case 1743:
case 1944:
case 2109:
case 1198:
case 1072:
case 625:
case 684:
case 3264:
case 1642:
case 3842:
case 91:
case 3171:
case 2946:
case 2849:
case 2240:
case 3873:
case 2135:
case 1233:
case 3598:
case 865:
case 131:
case 3295:
case 804:
case 1886:
case 1587:
case 3921:
case 2645:
case 1040:
case 1780:
case 4041:
case 4039:
case 2286:
case 122:
case 1962:
case 2333:
case 1079:
case 262:
case 2269:
case 1838:
case 821:
case 1648:
case 1276:
case 575:
case 671:
case 3896:
case 857:
case 20:
case 568:
case 1504:
case 3396:
case 705:
case 104:
case 1711:
case 531:
case 1722:
case 158:
case 2386:
case 1956:
case 492:
case 2689:
case 1392:
case 566:
case 4020:
case 3217:
case 3304:
case 2016:
case 3260:
case 3419:
case 1588:
case 1082:
case 3687:
case 2873:
case 3563:
case 636:
case 563:
case 2814:
case 877:
case 541:
case 3506:
case 3347:
case 3216:
case 2366:
case 1600:
case 510:
case 3068:
case 186:
case 4086:
case 1266:
case 127:
case 1184:
case 768:
case 1960:
case 400:
case 916:
case 775:
case 979:
case 2967:
case 2324:
case 2588:
case 27:
case 4038:
case 3230:
case 1654:
case 503:
case 1783:
case 530:
case 3186:
case 2165:
case 3362:
case 1741:
case 361:
case 2320:
case 2714:
case 3811:
case 1321:
case 1274:
case 1943:
case 552:
case 3380:
case 2318:
case 539:
case 1499:
case 3972:
case 1976:
case 3920:
case 290:
case 440:
case 3524:
case 1210:
case 386:
case 449:
case 3798:
case 3287:
case 3348:
case 779:
case 4019:
case 18:
case 870:
case 1774:
case 4005:
case 2951:
case 3446:
case 1815:
case 2995:
case 4009:
case 1243:
case 31:
case 507:
case 1049:
case 1909:
case 1307:
case 2098:
case 352:
case 2097:
case 1250:
case 2747:
case 1568:
case 2854:
case 2900:
case 2250:
case 3340:
case 3766:
case 2315:
case 3915:
case 1569:
case 2513:
case 1282:
case 3235:
case 792:
case 3425:
case 1817:
case 551:
case 4060:
case 3576:
case 1661:
case 3742:
case 1628:
case 1005:
case 1871:
case 3460:
case 3200:
case 1173:
case 254:
case 867:
case 1525:
case 3996:
case 3990:
case 1023:
case 1311:
case 2687:
case 825:
case 40:
case 1692:
case 2518:
case 2438:
case 3843:
case 89:
case 1384:
case 2426:
case 3751:
case 4027:
case 2728:
case 1753:
case 1971:
case 1110:
case 2530:
case 3995:
case 1076:
case 3351:
case 339:
case 969:
case 1056:
case 2434:
case 2988:
case 1501:
case 3689:
case 1116:
case 3951:
case 3847:
case 634:
case 2987:
case 2480:
case 3391:
case 967:
case 1671:
case 3613:
case 2195:
case 1219:
case 2858:
case 2331:
case 1172:
case 3611:
case 1422:
case 454:
case 3629:
case 951:
case 1958:
case 3147:
case 3179:
case 1437:
case 1849:
case 3757:
case 678:
case 1917:
case 2018:
case 1294:
case 257:
case 4040:
case 1979:
case 782:
case 1262:
case 3853:
case 898:
case 895:
case 1292:
case 729:
case 2531:
case 1383:
case 1103:
case 2369:
case 2773:
case 2159:
case 3410:
case 2710:
case 379:
case 1766:
case 770:
case 1518:
case 256:
case 2648:
case 200:
case 1978:
case 3648:
case 367:
case 2169:
case 3819:
case 2128:
case 1039:
case 940:
case 168:
case 1419:
case 1565:
case 1483:
case 95:
case 443:
case 1245:
case 581:
case 3923:
case 1061:
case 1744:
case 1346:
case 1482:
case 48:
case 2067:
case 837:
case 3141:
case 1306:
case 2291:
case 1823:
case 1763:
case 1235:
case 3933:
case 281:
case 1637:
case 371:
case 4048:
case 2844:
case 513:
case 3850:
case 374:
case 483:
case 793:
case 1540:
case 2514:
case 819:
case 1498:
case 1396:
case 2175:
case 2670:
case 1832:
case 3166:
case 1961:
case 3977:
case 586:
case 437:
case 3240:
case 3553:
case 3809:
case 3763:
case 728:
case 3137:
case 1192:
case 3805:
case 1420:
case 657:
case 2956:
case 1577:
case 1398:
case 3407:
case 3550:
case 763:
case 3075:
case 2085:
case 1662:
case 3821:
case 3690:
case 3601:
case 1372:
case 2766:
case 3594:
case 3797:
case 3788:
case 3903:
case 3305:
case 2821:
case 2572:
case 3720:
case 1844:
case 3874:
case 3360:
case 560:
case 3128:
case 1093:
case 1952:
case 3639:
case 3548:
case 3962:
case 2422:
case 2720:
case 704:
case 778:
case 344:
case 3886:
case 3262:
case 1967:
case 3415:
case 3914:
case 1968:
case 3243:
case 3790:
case 2219:
case 3714:
case 2503:
case 441:
case 913:
case 357:
case 1227:
case 287:
case 1772:
case 1644:
case 1114:
case 2401:
case 2296:
case 3066:
case 1149:
case 746:
case 852:
case 3069:
case 3011:
case 745:
case 710:
case 1408:
case 785:
case 124:
case 4085:
case 1801:
case 2414:
case 1935:
case 3306:
case 1905:
case 1674:
case 2356:
case 2936:
case 2112:
case 1804:
case 137:
case 1059:
case 1902:
case 554:
case 25:
case 1869:
case 4049:
case 2892:
case 2591:
case 1564:
case 141:
case 2734:
case 1442:
case 261:
case 2092:
case 360:
case 3815:
case 1794:
case 4062:
case 2482:
case 2627:
case 3735:
case 3481:
case 2838:
case 3440:
case 3001:
case 734:
case 1203:
case 1424:
case 3770:
case 3969:
case 2836:
case 2625:
case 468:
case 742:
case 4082:
case 46:
case 1750:
case 928:
case 283:
case 1414:
case 458:
case 1894:
case 2273:
case 162:
case 1918:
case 3702:
case 1983:
case 959:
case 3643:
case 2761:
case 151:
case 2351:
case 594:
case 3663:
case 1974:
case 3476:
case 3004:
case 3368:
case 1901:
case 446:
case 1304:
case 1053:
case 3291:
case 3870:
case 3747:
case 3905:
case 2360:
case 1264:
case 2914:
case 3628:
case 974:
case 1463:
case 292:
case 3759:
case 3453:
case 1868:
case 1464:
case 3784:
case 4073:
case 2469:
case 3059:
case 2179:
case 3927:
case 1603:
case 3450:
case 2685:
case 479:
case 3525:
case 2971:
case 194:
case 2176:
case 3409:
case 3374:
case 1712:
case 2791:
case 1769:
case 75:
case 2818:
case 1854:
case 707:
case 2944:
case 3848:
case 226:
case 3196:
case 2650:
case 3458:
case 3132:
case 963:
case 1885:
case 3311:
case 456:
case 3393:
case 1802:
case 1618:
case 2121:
case 984:
case 489:
case 3753:
case 1441:
case 3538:
case 1799:
case 2046:
case 3755:
case 177:
case 1605:
case 2926:
case 917:
case 564:
case 2299:
case 2686:
case 1327:
case 2207:
case 3946:
case 3282:
case 3032:
case 3479:
case 661:
case 1309:
case 2972:
case 3726:
case 827:
case 1770:
case 179:
case 2986:
case 3871:
case 1226:
case 2069:
case 174:
case 2605:
case 2174:
case 2772:
case 1019:
case 3636:
case 835:
case 1043:
case 672:
case 3367:
case 908:
case 3889:
case 1071:
case 540:
case 2852:
case 2163:
case 1469:
case 2346:
case 1792:
case 978:
case 3258:
case 3620:
case 1876:
case 419:
case 2421:
case 632:
case 4075:
case 97:
case 3651:
case 3194:
case 3849:
case 1913:
case 1254:
case 1505:
case 529:
case 3719:
case 3124:
case 3669:
case 341:
case 3803:
case 3165:
case 3099:
case 1731:
case 1120:
case 1386:
case 909:
case 3500:
case 722:
case 1115:
case 2396:
case 3315:
case 1985:
case 439:
case 4044:
case 1736:
case 833:
case 526:
case 846:
case 3174:
case 3195:
case 1586:
case 3003:
case 3854:
case 1181:
case 4037:
case 2392:
case 3058:
case 1288:
case 2641:
case 4013:
case 16:
case 3210:
case 2717:
case 1558:
case 3341:
case 2602:
case 840:
case 237:
case 1704:
case 1200:
case 412:
case 2668:
case 2748:
case 1314:
case 3654:
case 1710:
case 2521:
case 2474:
case 603:
case 1836:
case 2532:
case 3412:
case 590:
case 3740:
case 1367:
case 3834:
case 1319:
case 1326:
case 1643:
case 781:
case 2832:
case 1850:
case 2435:
case 848:
case 873:
case 3644:
case 1980:
case 3880:
case 368:
case 547:
case 2050:
case 238:
case 3916:
case 346:
case 1101:
case 3649:
case 73:
case 2781:
case 1020:
case 3429:
case 1966:
case 1782:
case 1253:
case 2419:
case 1370:
case 3983:
case 4081:
case 409:
case 3617:
case 2487:
case 3153:
case 1694:
case 1781:
case 199:
case 1752:
case 2087:
case 760:
case 2443:
case 3517:
case 1714:
case 3255:
case 1008:
case 2709:
case 655:
case 4051:
case 2151:
case 769:
case 2248:
case 3042:
case 3040:
case 1410:
case 2581:
case 891:
case 1015:
case 2455:
case 2409:
case 3031:
case 2783:
case 713:
case 1255:
case 579:
case 1026:
case 3704:
case 235:
case 3746:
case 2881:
case 2225:
case 1617:
case 2768:
case 3207:
case 2885:
case 3418:
case 737:
case 3092:
case 3067:
case 1117:
case 432:
case 682:
case 1612:
case 1330:
case 702:
case 4053:
case 4061:
case 1516:
case 3600:
case 1571:
case 2253:
case 3175:
case 3782:
case 4010:
case 72:
case 2903:
case 1361:
case 3339:
case 1679:
case 937:
case 1725:
case 1693:
case 3758:
case 2061:
case 2461:
case 989:
case 1592:
case 3313:
case 3604:
case 2496:
case 985:
case 3014:
case 2957:
case 3047:
case 1379:
case 1102:
case 3197:
case 3941:
case 2278:
case 764:
case 2895:
case 3523:
case 1174:
case 2255:
case 884:
case 624:
case 272:
case 477:
case 855:
case 3661:
case 1161:
case 1982:
case 2451:
case 488:
case 727:
case 185:
case 2357:
case 1496:
case 578:
case 301:
case 3448:
case 153:
case 2757:
case 1529:
case 1833:
case 2432:
case 2942:
case 1430:
case 3159:
case 2076:
case 861:
case 3681:
case 3019:
case 3953:
case 3261:
case 3488:
case 3646:
case 2415:
case 3865:
case 205:
case 3211:
case 1275:
case 3864:
case 637:
case 3860:
case 314:
case 2524:
case 2678:
case 1659:
case 664:
case 167:
case 1351:
case 2872:
case 3442:
case 335:
case 1308:
case 3736:
case 2811:
case 3494:
case 2541:
case 1249:
case 2226:
case 453:
case 3642:
case 1268:
case 469:
case 2030:
case 3838:
case 1022:
case 1324:
case 2543:
case 375:
case 1465:
case 2390:
case 143:
case 553:
case 2755:
case 3591:
case 3645:
case 3866:
case 389:
case 3392:
case 1461:
case 3017:
case 1295:
case 3728:
case 3561:
case 976:
case 414:
case 964:
case 259:
case 180:
case 2355:
case 752:
case 1207:
case 1638:
case 2499:
case 2475:
case 3010:
case 3545:
case 62:
case 2137:
case 2342:
case 1027:
case 3232:
case 175:
case 2460:
case 1997:
case 3656:
case 703:
case 871:
case 3349:
case 2033:
case 845:
case 2283:
case 1394:
case 754:
case 3265:
case 3190:
case 905:
case 58:
case 2565:
case 2454:
case 277:
case 1438:
case 3527:
case 1526:
case 1305:
case 3247:
case 585:
case 299:
case 1362:
case 859:
case 2081:
case 431:
case 3206:
case 922:
case 3146:
case 1684:
case 3303:
case 3684:
case 2862:
case 2933:
case 1547:
case 460:
case 2786:
case 1078:
case 1197:
case 3189:
case 152:
case 3737:
case 298:
case 3180:
case 1650:
case 1472:
case 3470:
case 1938:
case 395:
case 2462:
case 2326:
case 3775:
case 2143:
case 2103:
case 812:
case 3495:
case 2607:
case 2111:
case 3411:
case 4059:
case 4095:
case 3353:
case 1244:
case 1703:
case 3307:
case 3256:
case 3134:
case 2654:
case 2289:
case 3379:
case 2319:
case 3226:
case 498:
case 2337:
case 604:
case 4092:
case 484:
case 3037:
case 2570:
case 3039:
case 1931:
case 1517:
case 2221:
case 465:
case 2579:
case 2896:
case 3551:
case 2520:
case 3909:
case 1622:
case 623:
case 2848:
case 2690:
case 1560:
case 519:
case 3478:
case 30:
case 2465:
case 2227:
case 1623:
case 698:
case 3727:
case 293:
case 949:
case 2724:
case 1359:
case 387:
case 1140:
case 518:
case 2827:
case 26:
case 382:
case 3371:
case 2746:
case 3922:
case 2920:
case 160:
case 1847:
case 3280:
case 13:
case 117:
case 12:
case 1014:
case 3113:
case 3246:
case 981:
case 295:
case 59:
case 1170:
case 434:
case 3482:
case 3514:
case 1169:
case 2209:
case 365:
case 1429:
case 2935:
case 2193:
case 921:
case 716:
case 2847:
case 53:
case 1287:
case 1368:
case 473:
case 451:
case 399:
case 1148:
case 220:
case 3434:
case 401:
case 2893:
case 3902:
case 3980:
case 2280:
case 2483:
case 3472:
case 383:
case 3038:
case 1942:
case 1010:
case 1402:
case 2774:
case 595:
case 3820:
case 1949:
case 2180:
case 126:
case 3817:
case 2898:
case 2765:
case 544:
case 2492:
case 1810:
case 66:
case 1297:
case 2060:
case 907:
case 3824:
case 3986:
case 506:
case 1729:
case 2187:
case 2142:
case 1033:
case 278:
case 1135:
case 3389:
case 2222:
case 1163:
case 504:
case 1048:
case 3840:
case 3158:
case 3901:
case 2545:
case 4067:
case 2057:
case 3468:
case 64:
case 2679:
case 2040:
case 2523:
case 2703:
case 1238:
case 3220:
case 2963:
case 3480:
case 3846:
case 3118:
case 607:
case 1996:
case 1391:
case 1879:
case 1840:
case 3745:
case 284:
case 2424:
case 2639:
case 1955:
case 1867:
case 3708:
case 3895:
case 2027:
case 2606:
case 1877:
case 3073:
case 2153:
case 1387:
case 315:
case 2865:
case 102:
case 2621:
case 3516:
case 1796:
case 1858:
case 2609:
case 3893:
case 2359:
case 740:
case 3723:
case 198:
case 1544:
case 3173:
case 1793:
case 3881:
case 3421:
case 3119:
case 2025:
case 1551:
case 998:
case 3535:
case 2894:
case 4077:
case 1431:
case 1303:
case 3250:
case 1325:
case 935:
case 19:
case 3493:
case 2216:
case 105:
case 849:
case 1228:
case 135:
case 3800:
case 505:
case 3626:
case 990:
case 3378:
case 164:
case 3343:
case 1819:
case 3988:
case 1596:
case 3546:
case 1630:
case 3967:
case 1910:
case 3008:
case 2152:
case 994:
case 2673:
case 3373:
case 4016:
case 3675:
case 3743:
case 2975:
case 2566:
case 3806:
case 145:
case 900:
case 618:
case 1247:
case 45:
case 2063:
case 2874:
case 1667:
case 1993:
case 1089:
case 2574:
case 2281:
case 3431:
case 2311:
case 645:
case 3050:
case 535:
case 1217:
case 3749:
case 890:
case 3993:
case 2343:
case 2598:
case 2608:
case 799:
case 2495:
case 225:
case 2600:
case 612:
case 2902:
case 3135:
case 2798:
case 1445:
case 1908:
case 3451:
case 626:
case 839:
case 1812:
case 1522:
case 1606:
case 2498:
case 1415:
case 947:
case 2161:
case 2631:
case 1705:
case 3070:
case 463:
case 408:
case 1898:
case 883:
case 2644:
case 676:
case 2028:
case 297:
case 3074:
case 15:
case 1685:
case 2134:
case 217:
case 697:
case 1757:
case 548:
case 396:
case 4093:
case 2727:
case 3918:
case 2525:
case 65:
case 853:
case 1797:
case 2841:
case 2036:
case 38:
case 2974:
case 84:
case 115:
case 3036:
case 2338:
case 2753:
case 2339:
case 2436:
case 794:
case 61:
case 2637:
case 1893:
case 2314:
case 3302:
case 2384:
case 2072:
case 1382:
case 3172:
case 3056:
case 1904:
case 3219:
case 2445:
case 2612:
case 1663:
case 3978:
case 310:
case 1691:
case 2976:
case 2308:
case 1144:
case 1122:
case 1500:
case 3618:
case 280:
case 3696:
case 2013:
case 108:
case 836:
case 1175:
case 1156:
case 4064:
case 1047:
case 2:
case 3120:
case 2083:
case 2939:
case 1809:
case 2770:
case 654:
case 1954:
case 219:
case 982:
case 1906:
case 1675:
case 1080:
case 1822:
case 2479:
case 772:
case 3422:
case 1655:
case 3033:
case 2206:
case 761:
case 647:
case 1270:
case 3222:
case 3984:
case 2905:
case 2477:
case 1329:
case 635:
case 2123:
case 2236:
case 1339:
case 3312:
case 3531:
case 2493:
case 222:
case 1128:
case 3575:
case 1539:
case 1193:
case 2065:
case 2697:
case 3333:
case 161:
case 3342:
case 3103:
case 1873:
case 2913:
case 22:
case 3384:
case 3888:
case 715:
case 2413:
case 952:
case 2949:
case 999:
case 1113:
case 1352:
case 3449:
case 3234:
case 2367:
case 2059:
case 2552:
case 416:
case 1407:
case 4015:
case 2680:
case 1651:
case 1155:
case 3801:
case 233:
case 874:
case 2659:
case 3399:
case 321:
case 3748:
case 2258:
case 1425:
case 687:
case 4045:
case 424:
case 1348:
case 2485:
case 641:
case 3354:
case 1779:
case 1575:
case 627:
case 2830:
case 744:
case 3405:
case 2706:
case 3908:
case 1177:
case 2542:
case 1994:
case 148:
case 2730:
case 938:
case 2229:
case 4046:
case 1151:
case 228:
case 2660:
case 1631:
case 650:
case 1077:
case 2880:
case 3296:
case 2095:
case 3224:
case 3227:
case 1855:
case 3877:
case 3223:
case 3503:
case 209:
case 1458:
case 571:
case 3366:
case 487:
case 2793:
case 1094:
case 3602:
case 3787:
case 318:
case 3167:
case 3637:
case 980:
case 1666:
case 652:
case 1581:
case 3970:
case 801:
case 3537:
case 3971:
case 2839:
case 3013:
case 343:
case 894:
case 1001:
case 2301:
case 1719:
case 1345:
case 1273:
case 2201:
case 1964:
case 2332:
case 223:
case 286:
case 831:
case 3026:
case 2305:
case 1180:
case 2578:
case 264:
case 2214:
case 2088:
case 600:
case 241:
case 3257:
case 1393:
case 1502:
case 1141:
case 3052:
case 1755:
case 1932:
case 1038:
case 3635:
case 2812:
case 2708:
case 2990:
case 1471:
case 3582:
case 2759:
case 2718:
case 3268:
case 2867:
case 338:
case 2204:
case 2294:
case 3872:
case 1470:
case 213:
case 2237:
case 2792:
case 528:
case 1152:
case 854:
case 2433:
case 1992:
case 2192:
case 735:
case 3530:
case 372:
case 3555:
case 1160:
case 98:
case 3573:
case 3633:
case 3559:
case 629:
case 670:
case 863:
case 1732:
case 3574:
case 2374:
case 406:
case 3208:
case 1317:
case 3513:
case 3706:
case 3718:
case 1530:
case 3780:
case 1252:
case 49:
case 593:
case 336:
case 1111:
case 1171:
case 1401:
case 1930:
case 2463:
case 474:
case 3568:
case 1423:
case 1919:
case 826:
case 662:
case 2536:
case 3572:
case 2943:
case 2022:
case 2702:
case 965:
case 3571:
case 2440:
case 3486:
case 1831:
case 816:
case 2509:
case 312:
case 1216:
case 4087:
case 2993:
case 381:
case 673:
case 3201:
case 499:
case 1546:
case 3845:
case 731:
case 651:
case 2191:
case 3791:
case 183:
case 2371:
case 1720:
case 2043:
case 2023:
case 447:
case 1585:
case 2277:
case 252:
case 2388:
case 3181:
case 3869:
case 415:
case 1939:
case 3509:
case 3697:
case 1481:
case 2953:
case 3184:
case 3959:
case 2223:
case 882:
case 644:
case 1337:
case 797:
case 3169:
case 428:
case 29:
case 74:
case 2762:
case 2470:
case 2141:
case 119:
case 4042:
case 3000:
case 2519:
case 3274:
case 1891:
case 2251:
case 2110:
case 4012:
case 3647:
case 1284:
case 1788:
case 923:
case 3795:
case 1358:
case 2622:
case 2693:
case 3960:
case 1467:
case 942:
case 1839:
case 2011:
case 1328:
case 3439:
case 3065:
case 2991:
case 2884:
case 2132:
case 1003:
case 2662:
case 1923:
case 2533:
case 686:
case 2959:
case 455:
case 879:
case 3094:
case 246:
case 1846:
case 807:
case 196:
case 2150:
case 448:
case 986:
case 2652:
case 51:
case 2796:
case 2784:
case 1625:
case 1668:
case 2871:
case 1136:
case 3882:
case 486:
case 461:
case 1921:
case 2362:
case 2653:
case 2694:
case 2754:
case 1890:
case 478:
case 2683:
case 3364:
case 1475:
case 2962:
case 10:
case 3497:
case 2168:
case 63:
case 2559:
case 3457:
case 2941:
case 3441:
case 2729:
case 1045:
case 202:
case 2816:
case 150:
case 975:
case 2666:
case 330:
case 3187:
case 273:
case 263:
case 1416:
case 919:
case 615:
case 4036:
case 2464:
case 1959:
case 3991:
case 3057:
case 3722:
case 2114:
case 1924:
case 2764:
case 2447:
case 3269:
case 542:
case 766:
case 1100:
case 1491:
case 1824:
case 3048:
case 3943:
case 3605:
case 2105:
case 2079:
case 1261:
case 2576:
case 1602:
case 2508:
case 1428:
case 2613:
case 4033:
case 1635:
case 2178:
case 87:
case 214:
case 305:
case 1534:
case 2945:
case 4034:
case 3705:
case 1263:
case 596:
case 255:
case 1963:
case 669:
case 50:
case 838:
case 2947:
case 364:
case 4070:
case 345:
case 327:
case 2119:
case 3416:
case 643:
case 176:
case 3973:
case 1286:
case 3892:
case 2911:
case 1542:
case 201:
case 2405:
case 3692:
case 442:
case 2723:
case 2260:
case 1969:
case 1331:
case 2617:
case 1881:
case 3144:
case 730:
case 3688:
case 1929:
case 3386:
case 3616:
case 356:
case 556:
case 1375:
case 184:
case 2906:
case 958:
case 2803:
case 2788:
case 2398:
case 2973:
case 2437:
case 753:
case 3937:
case 822:
case 1413:
case 2071:
case 289:
case 1:
case 2883:
case 2537:
case 3593:
case 3825:
case 3549:
case 154:
case 2182:
case 2699:
case 2335:
case 3793:
case 2909:
case 3346:
case 1084:
case 1842:
case 1191:
case 3125:
case 2646:
case 3193:
case 417:
case 52:
case 430:
case 2829:
case 2593:
case 1532:
case 103:
case 3511:
case 3539:
case 521:
case 1733:
case 2952:
case 3447:
case 1795:
case 1446:
case 2763:
case 743:
case 2383:
case 3968:
case 1853:
case 32:
case 1187:
case 550:
case 28:
case 1095:
case 613:
case 3518:
case 2700:
case 2817:
case 1242:
case 212:
case 123:
case 271:
case 1735:
case 1567:
case 1686:
case 3273:
case 2551:
case 2696:
case 3403:
case 1749:
case 2721:
case 2985:
case 2029:
case 3961:
case 1658:
case 3007:
case 1591:
case 1494:
case 2958:
case 1936:
case 1030:
case 1989:
case 3938:
case 1683:
case 886:
case 2917:
case 902:
case 3253:
case 3841:
case 3619:
case 2676:
case 2122:
case 2008:
case 3456:
case 3388:
case 2006:
case 1347:
case 2550:
case 3212:
case 2427:
case 2002:
case 3715:
case 1205:
case 2665:
case 3237:
case 2361:
case 1277:
case 3111:
case 1632:
case 3958:
case 113:
case 868:
case 2843:
case 144:
case 2340:
case 944:
case 2149:
case 3981:
case 1211:
case 2270:
case 3725:
case 1948:
case 3900:
case 3499:
case 3622:
case 410:
case 191:
case 4084:
case 3547:
case 602:
case 1892:
case 2794:
case 851:
case 1433:
case 3154:
case 1176:
case 1721:
case 1633:
case 3695:
case 3627:
case 2410:
case 133:
case 1289:
case 1454:
case 243:
case 3556:
case 370:
case 2489:
case 2801:
case 2313:
case 1186:
case 85:
case 1340:
case 3127:
case 2851:
case 1951:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1690570802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,];
var gg_b = "1690570802/";

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
