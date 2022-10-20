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
case 3154:
case 3589:
case 1611:
case 816:
case 2342:
case 551:
case 3616:
case 3721:
case 690:
case 3209:
case 404:
case 1219:
case 422:
case 3805:
case 3143:
case 924:
case 2182:
case 702:
case 713:
case 1852:
case 230:
case 969:
case 2934:
case 1526:
case 3553:
case 3380:
case 1879:
case 409:
case 223:
case 2492:
case 1377:
case 3219:
case 333:
case 652:
case 3569:
case 2494:
case 2884:
case 1985:
case 1663:
case 2200:
case 3114:
case 3825:
case 2243:
case 3487:
case 2926:
case 3853:
case 1293:
case 3705:
case 1565:
case 3808:
case 3535:
case 2045:
case 2839:
case 2154:
case 2225:
case 1739:
case 2754:
case 2058:
case 132:
case 1625:
case 4036:
case 905:
case 1777:
case 2150:
case 1323:
case 2966:
case 588:
case 2648:
case 258:
case 2278:
case 3275:
case 2857:
case 501:
case 17:
case 1188:
case 2669:
case 1299:
case 3575:
case 3954:
case 34:
case 1954:
case 1258:
case 1887:
case 891:
case 3193:
case 684:
case 2973:
case 520:
case 3997:
case 66:
case 862:
case 3877:
case 117:
case 1499:
case 2976:
case 384:
case 3836:
case 423:
case 183:
case 2582:
case 266:
case 1465:
case 1749:
case 113:
case 2769:
case 331:
case 3528:
case 158:
case 295:
case 2923:
case 1857:
case 3974:
case 2773:
case 3957:
case 2508:
case 3573:
case 730:
case 692:
case 1931:
case 2286:
case 440:
case 1732:
case 3673:
case 3857:
case 3855:
case 1583:
case 2544:
case 3257:
case 564:
case 1603:
case 190:
case 3441:
case 1520:
case 2270:
case 3728:
case 4050:
case 1839:
case 512:
case 3197:
case 3331:
case 4073:
case 3103:
case 2699:
case 271:
case 1010:
case 91:
case 2017:
case 2703:
case 1720:
case 1204:
case 2930:
case 70:
case 1234:
case 3661:
case 2304:
case 2316:
case 803:
case 1450:
case 1453:
case 2905:
case 4079:
case 3101:
case 2367:
case 3358:
case 2609:
case 797:
case 911:
case 3774:
case 2914:
case 2372:
case 296:
case 3273:
case 3377:
case 3375:
case 1878:
case 2958:
case 3186:
case 3020:
case 2747:
case 510:
case 1034:
case 425:
case 421:
case 2862:
case 3671:
case 790:
case 635:
case 3967:
case 2481:
case 3319:
case 3216:
case 1649:
case 3236:
case 3062:
case 3942:
case 1728:
case 2909:
case 729:
case 145:
case 2711:
case 3690:
case 945:
case 2283:
case 1998:
case 1180:
case 574:
case 2743:
case 3171:
case 15:
case 211:
case 218:
case 1864:
case 1001:
case 516:
case 883:
case 3641:
case 2915:
case 1593:
case 852:
case 1084:
case 1290:
case 1865:
case 2942:
case 2916:
case 2224:
case 2490:
case 439:
case 2320:
case 1771:
case 815:
case 2611:
case 114:
case 1019:
case 377:
case 2495:
case 2626:
case 3338:
case 1630:
case 100:
case 441:
case 459:
case 2044:
case 2859:
case 488:
case 2920:
case 1361:
case 1458:
case 1815:
case 1569:
case 1820:
case 251:
case 2180:
case 2586:
case 1554:
case 2400:
case 3851:
case 2004:
case 3820:
case 1311:
case 2849:
case 3059:
case 263:
case 3434:
case 3591:
case 261:
case 2233:
case 712:
case 857:
case 1099:
case 1187:
case 372:
case 2608:
case 2545:
case 1483:
case 2883:
case 1336:
case 2116:
case 3436:
case 720:
case 2935:
case 855:
case 3907:
case 3474:
case 3148:
case 1379:
case 1265:
case 1373:
case 3785:
case 2625:
case 1227:
case 824:
case 3600:
case 3920:
case 2713:
case 779:
case 914:
case 2683:
case 2020:
case 3335:
case 2752:
case 1409:
case 1955:
case 2051:
case 1452:
case 403:
case 3745:
case 204:
case 2123:
case 2565:
case 2628:
case 177:
case 2261:
case 582:
case 54:
case 3702:
case 3704:
case 664:
case 2436:
case 3102:
case 1243:
case 2221:
case 2768:
case 2599:
case 1411:
case 3717:
case 1072:
case 2858:
case 1046:
case 3300:
case 3890:
case 1633:
case 62:
case 662:
case 1973:
case 3726:
case 3472:
case 2594:
case 1825:
case 3042:
case 262:
case 548:
case 2767:
case 1629:
case 568:
case 814:
case 1344:
case 3981:
case 3078:
case 1900:
case 826:
case 2820:
case 2435:
case 2343:
case 3811:
case 523:
case 1503:
case 3071:
case 3956:
case 3635:
case 3976:
case 587:
case 351:
case 2259:
case 1602:
case 3840:
case 71:
case 2083:
case 2949:
case 1870:
case 1552:
case 307:
case 626:
case 4005:
case 2124:
case 4046:
case 2588:
case 3975:
case 1668:
case 2149:
case 1316:
case 3730:
case 3527:
case 3736:
case 3888:
case 2512:
case 549:
case 628:
case 2380:
case 3684:
case 215:
case 191:
case 108:
case 2229:
case 2241:
case 3387:
case 1935:
case 1154:
case 2067:
case 3163:
case 3716:
case 2433:
case 2569:
case 1266:
case 3592:
case 1538:
case 2484:
case 3686:
case 133:
case 256:
case 205:
case 3412:
case 982:
case 1671:
case 1332:
case 2188:
case 2204:
case 2814:
case 2791:
case 2816:
case 3762:
case 1456:
case 772:
case 1310:
case 1564:
case 1507:
case 2431:
case 386:
case 2672:
case 2759:
case 3708:
case 3392:
case 2861:
case 2076:
case 3727:
case 32:
case 2093:
case 3461:
case 2882:
case 1116:
case 2434:
case 2516:
case 1650:
case 596:
case 3712:
case 220:
case 581:
case 1014:
case 2841:
case 894:
case 3212:
case 2867:
case 445:
case 2353:
case 1753:
case 1220:
case 2742:
case 2193:
case 1205:
case 2652:
case 908:
case 546:
case 232:
case 2252:
case 603:
case 1833:
case 1636:
case 1655:
case 2570:
case 1651:
case 214:
case 1872:
case 1606:
case 1356:
case 539:
case 1056:
case 1991:
case 3339:
case 3008:
case 2636:
case 3999:
case 2038:
case 1086:
case 802:
case 774:
case 1793:
case 1002:
case 1685:
case 2388:
case 3086:
case 1418:
case 3371:
case 2212:
case 415:
case 2641:
case 3159:
case 629:
case 3304:
case 1111:
case 1627:
case 909:
case 1324:
case 2878:
case 1665:
case 3359:
case 1417:
case 3244:
case 4044:
case 2528:
case 1123:
case 3583:
case 432:
case 3258:
case 1514:
case 1476:
case 1550:
case 1786:
case 685:
case 580:
case 2688:
case 3500:
case 3584:
case 2385:
case 2520:
case 837:
case 3431:
case 916:
case 1103:
case 3669:
case 3096:
case 1403:
case 1359:
case 3858:
case 1008:
case 1112:
case 2555:
case 1353:
case 1979:
case 1883:
case 838:
case 253:
case 4017:
case 1773:
case 60:
case 3046:
case 3879:
case 2518:
case 3586:
case 3648:
case 1830:
case 2144:
case 323:
case 3393:
case 2015:
case 1827:
case 361:
case 2016:
case 2666:
case 3675:
case 3470:
case 3655:
case 165:
case 3595:
case 2201:
case 224:
case 850:
case 1924:
case 1215:
case 1886:
case 761:
case 728:
case 889:
case 1759:
case 414:
case 3012:
case 2829:
case 1666:
case 456:
case 3649:
case 640:
case 2998:
case 715:
case 3876:
case 3222:
case 389:
case 139:
case 555:
case 3790:
case 1260:
case 3009:
case 572:
case 1498:
case 1245:
case 2832:
case 1892:
case 2593:
case 2601:
case 2080:
case 398:
case 1209:
case 3952:
case 1680:
case 3211:
case 2501:
case 3445:
case 400:
case 800:
case 299:
case 2344:
case 1638:
case 1669:
case 2309:
case 3501:
case 1477:
case 1960:
case 3526:
case 1511:
case 620:
case 686:
case 3985:
case 3614:
case 4083:
case 1667:
case 3095:
case 2198:
case 20:
case 2581:
case 641:
case 2417:
case 83:
case 235:
case 3132:
case 2868:
case 1888:
case 1645:
case 2409:
case 950:
case 1570:
case 2087:
case 4:
case 2003:
case 1652:
case 646:
case 1940:
case 3991:
case 3590:
case 4060:
case 2:
case 1737:
case 1342:
case 904:
case 745:
case 3384:
case 2368:
case 617:
case 2325:
case 2171:
case 1347:
case 2834:
case 3374:
case 2189:
case 315:
case 2677:
case 4089:
case 1169:
case 53:
case 2142:
case 2507:
case 1431:
case 1197:
case 3558:
case 1238:
case 3250:
case 1100:
case 2732:
case 339:
case 4042:
case 3521:
case 2442:
case 1537:
case 2943:
case 3453:
case 3770:
case 1459:
case 3019:
case 1412:
case 1230:
case 732:
case 1322:
case 3146:
case 1274:
case 1716:
case 2197:
case 3325:
case 2376:
case 1880:
case 3541:
case 274:
case 610:
case 1715:
case 1734:
case 2660:
case 2153:
case 4031:
case 2663:
case 1048:
case 758:
case 3069:
case 1927:
case 744:
case 888:
case 2779:
case 3779:
case 3194:
case 330:
case 2345:
case 3622:
case 454:
case 513:
case 3706:
case 213:
case 2764:
case 1378:
case 939:
case 919:
case 2192:
case 2654:
case 19:
case 1251:
case 2707:
case 3465:
case 3922:
case 3752:
case 1471:
case 711:
case 1052:
case 872:
case 3366:
case 3773:
case 2843:
case 2610:
case 2265:
case 1423:
case 3961:
case 2129:
case 3771:
case 2541:
case 808:
case 659:
case 1054:
case 3234:
case 1639:
case 3484:
case 918:
case 2539:
case 3488:
case 955:
case 2710:
case 922:
case 3308:
case 3839:
case 1079:
case 1591:
case 2680:
case 134:
case 3996:
case 3962:
case 2939:
case 2206:
case 781:
case 3756:
case 833:
case 396:
case 962:
case 633:
case 4040:
case 1406:
case 1199:
case 200:
case 1903:
case 489:
case 349:
case 1429:
case 3107:
case 2751:
case 3191:
case 1414:
case 1695:
case 3486:
case 550:
case 1703:
case 58:
case 3122:
case 2821:
case 2006:
case 3385:
case 227:
case 1133:
case 2359:
case 2788:
case 2695:
case 1028:
case 2808:
case 2911:
case 279:
case 2585:
case 1549:
case 3491:
case 3898:
case 3144:
case 1806:
case 3449:
case 3247:
case 3810:
case 1345:
case 3567:
case 2850:
case 3402:
case 921:
case 1516:
case 1772:
case 1106:
case 2687:
case 1426:
case 1987:
case 1250:
case 990:
case 2647:
case 1004:
case 3404:
case 988:
case 3882:
case 35:
case 1829:
case 3350:
case 147:
case 3345:
case 2078:
case 3430:
case 631:
case 2071:
case 913:
case 1978:
case 3637:
case 2738:
case 2025:
case 843:
case 291:
case 2670:
case 3149:
case 1702:
case 4076:
case 3129:
case 2675:
case 3370:
case 90:
case 1071:
case 599:
case 381:
case 2347:
case 3379:
case 861:
case 923:
case 2131:
case 4052:
case 39:
case 2365:
case 2266:
case 624:
case 1066:
case 2746:
case 4014:
case 1582:
case 3315:
case 1110:
case 1367:
case 1281:
case 2604:
case 974:
case 3082:
case 1694:
case 1270:
case 319:
case 2979:
case 3334:
case 1118:
case 2438:
case 2264:
case 531:
case 3235:
case 2448:
case 3108:
case 1832:
case 2223:
case 43:
case 418:
case 775:
case 1428:
case 2348:
case 3881:
case 3862:
case 3772:
case 1300:
case 927:
case 1744:
case 542:
case 602:
case 3157:
case 388:
case 278:
case 1355:
case 375:
case 2162:
case 395:
case 1202:
case 3119:
case 2227:
case 1813:
case 1155:
case 3444:
case 3282:
case 1508:
case 1920:
case 3520:
case 1184:
case 2439:
case 1268:
case 1653:
case 3507:
case 1088:
case 3220:
case 3873:
case 1558:
case 1478:
case 3928:
case 795:
case 600:
case 869:
case 3320:
case 28:
case 661:
case 3694:
case 3878:
case 895:
case 3611:
case 49:
case 3391:
case 2423:
case 2163:
case 2328:
case 2470:
case 2458:
case 1608:
case 2895:
case 1422:
case 1800:
case 1867:
case 3696:
case 2780:
case 2053:
case 762:
case 866:
case 3864:
case 1531:
case 1577:
case 3254:
case 1113:
case 653:
case 1289:
case 1189:
case 1442:
case 3093:
case 1295:
case 556:
case 1990:
case 2070:
case 666:
case 3036:
case 787:
case 3758:
case 965:
case 2642:
case 3111:
case 694:
case 1107:
case 1162:
case 2404:
case 2000:
case 946:
case 1916:
case 3373:
case 1267:
case 1416:
case 1784:
case 1164:
case 1594:
case 637:
case 2960:
case 2119:
case 2256:
case 1882:
case 2640:
case 3809:
case 1065:
case 1275:
case 2553:
case 2615:
case 571:
case 3548:
case 401:
case 281:
case 2766:
case 2772:
case 3185:
case 3546:
case 265:
case 812:
case 3015:
case 0:
case 1067:
case 1818:
case 442:
case 105:
case 2313:
case 2655:
case 2606:
case 2651:
case 1038:
case 514:
case 840:
case 1333:
case 3072:
case 22:
case 851:
case 1425:
case 3104:
case 2846:
case 236:
case 2099:
case 1604:
case 4002:
case 1372:
case 2159:
case 2977:
case 1862:
case 2173:
case 3435:
case 1093:
case 1229:
case 615:
case 311:
case 677:
case 3054:
case 2421:
case 1226:
case 2392:
case 2548:
case 2132:
case 847:
case 3776:
case 503:
case 1013:
case 4010:
case 3261:
case 1329:
case 643:
case 2377:
case 3460:
case 867:
case 3047:
case 3653:
case 743:
case 55:
case 1989:
case 2232:
case 611:
case 1819:
case 2597:
case 1284:
case 2940:
case 2873:
case 785:
case 622:
case 2258:
case 757:
case 1845:
case 2168:
case 3652:
case 1241:
case 3407:
case 3984:
case 2008:
case 3383:
case 1125:
case 3884:
case 3599:
case 906:
case 3782:
case 110:
case 3368:
case 41:
case 2340:
case 27:
case 1646:
case 4006:
case 2591:
case 2845:
case 2758:
case 2529:
case 412:
case 1487:
case 1080:
case 832:
case 2443:
case 2922:
case 2990:
case 476:
case 2140:
case 2081:
case 958:
case 61:
case 538:
case 859:
case 1221:
case 1740:
case 2471:
case 1530:
case 749:
case 1539:
case 1869:
case 316:
case 1334:
case 2337:
case 4087:
case 1617:
case 272:
case 1053:
case 2012:
case 3336:
case 3048:
case 679:
case 2702:
case 217:
case 606:
case 285:
case 699:
case 1835:
case 2701:
case 2167:
case 2469:
case 2650:
case 394:
case 3550:
case 1657:
case 193:
case 2239:
case 3875:
case 1708:
case 3299:
case 3765:
case 4019:
case 3328:
case 2842:
case 1816:
case 2559:
case 2887:
case 1224:
case 2106:
case 1127:
case 3294:
case 1315:
case 2267:
case 3090:
case 3532:
case 1982:
case 2624:
case 3190:
case 609:
case 1047:
case 2210:
case 1082:
case 1631:
case 195:
case 2177:
case 1733:
case 827:
case 1659:
case 3109:
case 527:
case 80:
case 3303:
case 2951:
case 2605:
case 996:
case 226:
case 3657:
case 2665:
case 3972:
case 3682:
case 416:
case 4077:
case 1691:
case 1436:
case 3947:
case 3074:
case 1626:
case 751:
case 1313:
case 1501:
case 3274:
case 2525:
case 3848:
case 860:
case 521:
case 1151:
case 1643:
case 1546:
case 1074:
case 2860:
case 2864:
case 2571:
case 2098:
case 79:
case 829:
case 875:
case 2094:
case 710:
case 695:
case 1885:
case 2114:
case 910:
case 130:
case 1742:
case 1774:
case 40:
case 197:
case 2352:
case 2903:
case 3631:
case 3783:
case 638:
case 2557:
case 1692:
case 3028:
case 427:
case 1031:
case 3939:
case 3040:
case 3087:
case 3938:
case 2262:
case 2064:
case 3208:
case 461:
case 2279:
case 1518:
case 269:
case 8:
case 2036:
case 678:
case 994:
case 788:
case 3901:
case 1371:
case 3593:
case 173:
case 2115:
case 786:
case 3066:
case 853:
case 3215:
case 2503:
case 433:
case 2584:
case 1039:
case 3229:
case 1468:
case 2326:
case 981:
case 3723:
case 1141:
case 3498:
case 3953:
case 1101:
case 2056:
case 767:
case 1235:
case 376:
case 3179:
case 575:
case 31:
case 3903:
case 2876:
case 96:
case 1533:
case 884:
case 3451:
case 874:
case 3917:
case 3812:
case 116:
case 2879:
case 298:
case 3919:
case 3713:
case 3759:
case 960:
case 1253:
case 131:
case 174:
case 1474:
case 106:
case 4066:
case 1285:
case 2630:
case 1482:
case 1736:
case 1868:
case 2965:
case 2398:
case 188:
case 1404:
case 1366:
case 3187:
case 3607:
case 3750:
case 2684:
case 1362:
case 397:
case 3579:
case 1:
case 3515:
case 2865:
case 1059:
case 3031:
case 3409:
case 3663:
case 3022:
case 490:
case 3965:
case 882:
case 44:
case 1208:
case 696:
case 742:
case 1390:
case 928:
case 3929:
case 2301:
case 2327:
case 518:
case 3537:
case 3869:
case 9:
case 2579:
case 318:
case 3346:
case 2061:
case 3971:
case 1893:
case 1635:
case 2228:
case 4024:
case 2645:
case 1871:
case 2954:
case 336:
case 2959:
case 1410:
case 1237:
case 2251:
case 379:
case 189:
case 578:
case 2455:
case 1656:
case 2590:
case 973:
case 2475:
case 1568:
case 1551:
case 819:
case 3659:
case 3915:
case 3196:
case 1963:
case 2105:
case 1775:
case 3904:
case 621:
case 2537:
case 2546:
case 45:
case 817:
case 1439:
case 231:
case 3977:
case 3937:
case 2298:
case 94:
case 1122:
case 3766:
case 2761:
case 693:
case 2527:
case 1231:
case 2956:
case 1724:
case 3914:
case 3828:
case 2420:
case 2504:
case 3253:
case 1138:
case 3081:
case 2646:
case 667:
case 2799:
case 3838:
case 4069:
case 3238:
case 1077:
case 467:
case 2894:
case 2411:
case 1294:
case 2774:
case 3483:
case 1988:
case 966:
case 663:
case 3615:
case 4008:
case 3562:
case 3034:
case 3807:
case 102:
case 1286:
case 858:
case 2897:
case 849:
case 3613:
case 3064:
case 533:
case 1918:
case 563:
case 3230:
case 3832:
case 3645:
case 3865:
case 3979:
case 3450:
case 1996:
case 1212:
case 1352:
case 3181:
case 284:
case 2995:
case 498:
case 766:
case 391:
case 834:
case 3169:
case 3124:
case 530:
case 1962:
case 839:
case 1851:
case 399:
case 2933:
case 1976:
case 1330:
case 2899:
case 726:
case 3120:
case 155:
case 1060:
case 3950:
case 4013:
case 1420:
case 1168:
case 2639:
case 2907:
case 1842:
case 3729:
case 3106:
case 2161:
case 2486:
case 997:
case 367:
case 3439:
case 706:
case 3252:
case 1163:
case 1914:
case 4054:
case 3983:
case 2489:
case 340:
case 3057:
case 2892:
case 3863:
case 3198:
case 68:
case 1203:
case 2989:
case 2560:
case 3913:
case 2968:
case 233:
case 3139:
case 648:
case 2418:
case 2722:
case 1760:
case 4021:
case 2988:
case 3177:
case 2158:
case 2511:
case 2374:
case 1584:
case 2720:
case 3121:
case 2633:
case 124:
case 3356:
case 2480:
case 144:
case 3536:
case 1714:
case 1314:
case 3918:
case 2125:
case 3539:
case 835:
case 2509:
case 1214:
case 2823:
case 2836:
case 3733:
case 228:
case 2692:
case 3738:
case 326:
case 3714:
case 2549:
case 313:
case 2602:
case 1087:
case 2712:
case 2089:
case 2146:
case 2042:
case 3382:
case 371:
case 451:
case 2147:
case 2317:
case 3559:
case 2215:
case 1585:
case 2128:
case 3689:
case 2336:
case 3897:
case 3403:
case 1600:
case 1305:
case 1675:
case 3693:
case 2247:
case 3683:
case 3608:
case 2165:
case 314:
case 3692:
case 3969:
case 2450:
case 2983:
case 3133:
case 3092:
case 3737:
case 3789:
case 938:
case 374:
case 1108:
case 1497:
case 2397:
case 2135:
case 3352:
case 2043:
case 2427:
case 3351:
case 4084:
case 2485:
case 1713:
case 2657:
case 2103:
case 1922:
case 246:
case 1768:
case 2793:
case 3448:
case 2363:
case 359:
case 1910:
case 1877:
case 426:
case 1696:
case 967:
case 2220:
case 1687:
case 1027:
case 7:
case 2837:
case 3598:
case 1799:
case 4071:
case 3158:
case 1094:
case 341:
case 1647:
case 2255:
case 754:
case 2996:
case 1193:
case 2130:
case 2737:
case 3554:
case 2338:
case 2775:
case 1846:
case 989:
case 2034:
case 3418:
case 3651:
case 3644:
case 2800:
case 1644:
case 3775:
case 2638:
case 2910:
case 1642:
case 3605:
case 4045:
case 2727:
case 2510:
case 2679:
case 3643:
case 2321:
case 2753:
case 478:
case 243:
case 2866:
case 1279:
case 168:
case 434:
case 1083:
case 277:
case 593:
case 92:
case 3471:
case 3755:
case 1566:
case 2658:
case 3357:
case 1228:
case 863:
case 956:
case 1492:
case 2733:
case 2771:
case 1035:
case 940:
case 4055:
case 2852:
case 2118:
case 604:
case 3777:
case 586:
case 3523:
case 1178:
case 2245:
case 1033:
case 1682:
case 154:
case 302:
case 737:
case 2749:
case 3025:
case 30:
case 1528:
case 2577:
case 4048:
case 2002:
case 1730:
case 4043:
case 736:
case 1836:
case 1391:
case 3662:
case 1484:
case 3455:
case 1894:
case 828:
case 2919:
case 3797:
case 3035:
case 3837:
case 2031:
case 4058:
case 2848:
case 3841:
case 107:
case 2972:
case 2807:
case 1693:
case 500:
case 1970:
case 3388:
case 3534:
case 3347:
case 3906:
case 877:
case 2355:
case 2369:
case 3313:
case 3239:
case 1912:
case 1394:
case 1515:
case 436:
case 3508:
case 162:
case 1115:
case 2607:
case 3289:
case 373:
case 2830:
case 3757:
case 3741:
case 1622:
case 3560:
case 983:
case 2924:
case 1612:
case 3968:
case 1368:
case 69:
case 3545:
case 2723:
case 2831:
case 3424:
case 2390:
case 2986:
case 2048:
case 1811:
case 2872:
case 2750:
case 947:
case 3041:
case 1430:
case 357:
case 649:
case 3639:
case 2195:
case 2088:
case 896:
case 1934:
case 2621:
case 4081:
case 529:
case 876:
case 3602:
case 2190:
case 3309:
case 2686:
case 156:
case 4029:
case 1952:
case 10:
case 1621:
case 985:
case 3959:
case 1802:
case 856:
case 2306:
case 1096:
case 3192:
case 1938:
case 1401:
case 1969:
case 75:
case 2809:
case 2021:
case 2535:
case 3856:
case 4072:
case 811:
case 3305:
case 1889:
case 2595:
case 1105:
case 968:
case 508:
case 3786:
case 3769:
case 605:
case 1506:
case 1721:
case 746:
case 254:
case 3753:
case 2506:
case 3629:
case 1240:
case 645:
case 2237:
case 4028:
case 4092:
case 3891:
case 544:
case 1319:
case 793:
case 2671:
case 545:
case 2796:
case 3522:
case 3021:
case 2635:
case 1658:
case 1407:
case 2416:
case 3632:
case 2552:
case 3499:
case 477:
case 1907:
case 3481:
case 438:
case 18:
case 2694:
case 1206:
case 1256:
case 1493:
case 1712:
case 2281:
case 1349:
case 3314:
case 3670:
case 4091:
case 2108:
case 159:
case 2074:
case 769:
case 3948:
case 2364:
case 1798:
case 3153:
case 88:
case 1437:
case 3679:
case 562:
case 2379:
case 1006:
case 2269:
case 2230:
case 2136:
case 3224:
case 2430:
case 1337:
case 987:
case 2452:
case 332:
case 3276:
case 902:
case 2547:
case 2362:
case 486:
case 348:
case 320:
case 1729:
case 3242:
case 2428:
case 1699:
case 3395:
case 3691:
case 3068:
case 1765:
case 1011:
case 249:
case 3155:
case 3660:
case 1486:
case 3620:
case 3426:
case 419:
case 1255:
case 1395:
case 2886:
case 844:
case 1921:
case 76:
case 2014:
case 2181:
case 3174:
case 2254:
case 1676:
case 2395:
case 2299:
case 1012:
case 957:
case 2329:
case 887:
case 971:
case 2468:
case 2847:
case 1689:
case 3697:
case 4034:
case 358:
case 153:
case 1198:
case 3910:
case 1481:
case 1858:
case 999:
case 46:
case 2980:
case 912:
case 1809:
case 3966:
case 753:
case 4025:
case 2659:
case 1719:
case 2776:
case 3080:
case 1543:
case 2682:
case 3568:
case 760:
case 1463:
case 1257:
case 1092:
case 33:
case 2844:
case 2787:
case 1009:
case 2238:
case 1801:
case 1278:
case 3768:
case 722:
case 2982:
case 558:
case 3017:
case 3285:
case 1388:
case 1673:
case 1762:
case 2532:
case 2260:
case 672:
case 3228:
case 1472:
case 2277:
case 98:
case 4047:
case 3263:
case 283:
case 3340:
case 157:
case 1557:
case 2160:
case 3792:
case 3654:
case 2975:
case 1763:
case 2391:
case 2784:
case 929:
case 410:
case 1761:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1666303201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,];
var gg_b = "1666303201/";

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
