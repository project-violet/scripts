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
case 1182:
case 3019:
case 147:
case 2898:
case 4030:
case 2675:
case 1352:
case 255:
case 289:
case 1419:
case 2171:
case 2607:
case 1095:
case 2520:
case 1547:
case 3928:
case 2016:
case 2711:
case 3652:
case 239:
case 1852:
case 1592:
case 2398:
case 2192:
case 362:
case 3280:
case 3409:
case 1888:
case 3688:
case 2817:
case 1350:
case 3952:
case 3220:
case 368:
case 1537:
case 503:
case 1828:
case 1759:
case 2085:
case 1180:
case 2567:
case 2451:
case 325:
case 2434:
case 3573:
case 2406:
case 4018:
case 3650:
case 1850:
case 1590:
case 1388:
case 4040:
case 1571:
case 3258:
case 2784:
case 115:
case 2522:
case 401:
case 997:
case 3175:
case 806:
case 2449:
case 1871:
case 3298:
case 691:
case 1890:
case 1550:
case 3107:
case 1414:
case 2882:
case 2093:
case 2470:
case 1198:
case 2491:
case 630:
case 1275:
case 902:
case 3947:
case 680:
case 1799:
case 3637:
case 3446:
case 1837:
case 1390:
case 4068:
case 2517:
case 1588:
case 1371:
case 3715:
case 2152:
case 1731:
case 3786:
case 3217:
case 3483:
case 2358:
case 2472:
case 3081:
case 1004:
case 2880:
case 3069:
case 1892:
case 235:
case 1083:
case 212:
case 3692:
case 3726:
case 4057:
case 3404:
case 3436:
case 1847:
case 3733:
case 3647:
case 1347:
case 2320:
case 1055:
case 2789:
case 624:
case 2066:
case 3455:
case 2729:
case 967:
case 2439:
case 434:
case 2883:
case 2125:
case 1020:
case 1516:
case 1264:
case 811:
case 2823:
case 939:
case 2804:
case 1080:
case 2185:
case 513:
case 3420:
case 1991:
case 761:
case 2336:
case 2304:
case 3544:
case 3666:
case 1866:
case 1970:
case 1708:
case 2206:
case 877:
case 2234:
case 2914:
case 3742:
case 170:
case 2595:
case 2855:
case 3372:
case 2383:
case 105:
case 724:
case 3839:
case 1639:
case 1939:
case 1649:
case 127:
case 3693:
case 3849:
case 1082:
case 1893:
case 1553:
case 730:
case 2071:
case 3870:
case 2090:
case 3506:
case 1195:
case 2776:
case 820:
case 3551:
case 2473:
case 3534:
case 3391:
case 581:
case 2846:
case 514:
case 371:
case 883:
case 3370:
case 4065:
case 2921:
case 1585:
case 1393:
case 2969:
case 2509:
case 3349:
case 1221:
case 208:
case 2809:
case 1123:
case 1269:
case 1104:
case 3283:
case 536:
case 1885:
case 750:
case 796:
case 3916:
case 3181:
case 2028:
case 3169:
case 1183:
case 853:
case 3223:
case 3306:
case 551:
case 3334:
case 2088:
case 3121:
case 644:
case 1944:
case 1606:
case 4015:
case 3806:
case 2050:
case 81:
case 3570:
case 3768:
case 2239:
case 376:
case 586:
case 1385:
case 297:
case 2309:
case 3549:
case 1853:
case 1593:
case 3255:
case 4043:
case 3757:
case 1214:
case 678:
case 454:
case 3539:
case 4033:
case 3498:
case 2555:
case 2895:
case 267:
case 1316:
case 4026:
case 58:
case 1475:
case 2678:
case 2619:
case 672:
case 37:
case 2193:
case 1644:
case 643:
case 3844:
case 985:
case 3114:
case 1407:
case 1098:
case 1934:
case 3774:
case 912:
case 935:
case 2964:
case 854:
case 79:
case 3616:
case 766:
case 918:
case 2583:
case 2911:
case 2186:
case 1365:
case 3438:
case 4093:
case 103:
case 3728:
case 1659:
case 582:
case 1515:
case 3541:
case 2254:
case 343:
case 3788:
case 1163:
case 3189:
case 3750:
case 91:
case 1012:
case 2068:
case 2684:
case 2596:
case 2856:
case 3000:
case 3359:
case 1400:
case 3161:
case 2624:
case 798:
case 538:
case 2924:
case 3505:
case 2345:
case 435:
case 2903:
case 762:
case 3394:
case 2984:
case 20:
case 547:
case 2313:
case 418:
case 2143:
case 2813:
case 1402:
case 2241:
case 812:
case 1048:
case 3531:
case 3894:
case 725:
case 1959:
case 818:
case 1533:
case 3752:
case 2611:
case 2845:
case 3448:
case 1826:
case 3792:
case 489:
case 3747:
case 3235:
case 3633:
case 3377:
case 984:
case 3854:
case 3686:
case 1631:
case 1654:
case 3915:
case 1941:
case 2513:
case 617:
case 3103:
case 671:
case 3256:
case 3201:
case 889:
case 855:
case 2661:
case 3354:
case 934:
case 1386:
case 2165:
case 1060:
case 3124:
case 1333:
case 439:
case 4016:
case 1605:
case 1156:
case 1565:
case 4085:
case 1977:
case 2989:
case 519:
case 2556:
case 3341:
case 2961:
case 2929:
case 920:
case 3487:
case 3213:
case 1641:
case 1815:
case 2396:
case 1931:
case 3986:
case 2040:
case 1954:
case 3111:
case 3643:
case 3245:
case 3559:
case 3899:
case 1113:
case 3427:
case 2079:
case 2018:
case 1087:
case 3926:
case 897:
case 2327:
case 1096:
case 906:
case 2157:
case 4088:
case 2676:
case 1791:
case 131:
case 3496:
case 1318:
case 1379:
case 2387:
case 527:
case 190:
case 2362:
case 156:
case 1832:
case 1332:
case 802:
case 3210:
case 2174:
case 1818:
case 1879:
case 3618:
case 1202:
case 2441:
case 1148:
case 181:
case 808:
case 3248:
case 361:
case 114:
case 1840:
case 3640:
case 4050:
case 3308:
case 3630:
case 1830:
case 2360:
case 2086:
case 3238:
case 391:
case 2510:
case 2431:
case 323:
case 2769:
case 1397:
case 3918:
case 629:
case 1342:
case 254:
case 2033:
case 1772:
case 570:
case 4052:
case 1429:
case 90:
case 1112:
case 1842:
case 160:
case 1461:
case 3100:
case 3697:
case 2168:
case 3766:
case 3463:
case 1489:
case 2976:
case 771:
case 3029:
case 2405:
case 3808:
case 867:
case 1608:
case 36:
case 2348:
case 3508:
case 2560:
case 662:
case 1276:
case 1374:
case 1744:
case 2310:
case 509:
case 3657:
case 668:
case 1597:
case 3176:
case 1542:
case 396:
case 350:
case 4092:
case 211:
case 776:
case 3716:
case 3287:
case 625:
case 3413:
case 284:
case 1127:
case 2140:
case 3262:
case 1357:
case 1013:
case 1162:
case 13:
case 3445:
case 1368:
case 749:
case 4090:
case 3435:
case 2459:
case 2764:
case 151:
case 2130:
case 1035:
case 901:
case 2587:
case 1518:
case 2562:
case 3785:
case 1532:
case 233:
case 3003:
case 698:
case 3957:
case 2065:
case 3024:
case 3456:
case 3753:
case 1484:
case 1403:
case 1751:
case 2142:
case 3260:
case 2338:
case 2600:
case 692:
case 1056:
case 1424:
case 3668:
case 3845:
case 3115:
case 1935:
case 2752:
case 991:
case 923:
case 1613:
case 3143:
case 3074:
case 2554:
case 2894:
case 930:
case 2531:
case 2410:
case 1901:
case 2394:
case 602:
case 179:
case 4021:
case 1311:
case 569:
case 2505:
case 3345:
case 2965:
case 3903:
case 1589:
case 3205:
case 1803:
case 2359:
case 599:
case 1824:
case 1468:
case 2263:
case 3624:
case 2750:
case 2189:
case 3856:
case 1884:
case 1601:
case 3301:
case 272:
case 3126:
case 243:
case 924:
case 3254:
case 1913:
case 1233:
case 961:
case 4014:
case 1131:
case 755:
case 1945:
case 3911:
case 2599:
case 2728:
case 2859:
case 1226:
case 862:
case 2899:
case 2245:
case 2643:
case 1194:
case 785:
case 759:
case 2427:
case 3535:
case 3294:
case 2111:
case 3040:
case 1418:
case 2213:
case 2615:
case 1722:
case 4064:
case 825:
case 966:
case 3556:
case 2076:
case 1432:
case 462:
case 712:
case 735:
case 595:
case 1524:
case 1963:
case 99:
case 468:
case 96:
case 3689:
case 3863:
case 3042:
case 2805:
case 3408:
case 565:
case 1442:
case 2201:
case 1758:
case 2103:
case 3165:
case 1996:
case 950:
case 2354:
case 3661:
case 807:
case 1008:
case 2915:
case 2831:
case 2594:
case 2854:
case 4078:
case 4019:
case 1329:
case 522:
case 1780:
case 3545:
case 2305:
case 1430:
case 528:
case 2377:
case 3363:
case 1720:
case 2235:
case 2029:
case 316:
case 2766:
case 1268:
case 2212:
case 2808:
case 3405:
case 1077:
case 280:
case 557:
case 849:
case 2932:
case 1755:
case 3168:
case 126:
case 1987:
case 944:
case 3454:
case 4007:
case 223:
case 3510:
case 4075:
case 3721:
case 1502:
case 1962:
case 230:
case 3360:
case 1031:
case 2940:
case 3548:
case 449:
case 1736:
case 3781:
case 2102:
case 2248:
case 1746:
case 2930:
case 1041:
case 3538:
case 1627:
case 1274:
case 3043:
case 972:
case 2210:
case 685:
case 3441:
case 224:
case 1415:
case 2496:
case 3362:
case 618:
case 3327:
case 3676:
case 1612:
case 3208:
case 471:
case 1800:
case 3338:
case 1297:
case 2753:
case 817:
case 2456:
case 1108:
case 3065:
case 320:
case 639:
case 655:
case 3587:
case 871:
case 163:
case 383:
case 767:
case 3902:
case 573:
case 1059:
case 1638:
case 2435:
case 548:
case 1948:
case 2725:
case 3459:
case 3764:
case 1230:
case 2974:
case 2227:
case 2445:
case 1938:
case 1094:
case 3118:
case 384:
case 1802:
case 3602:
case 164:
case 311:
case 3810:
case 3494:
case 2262:
case 2657:
case 708:
case 3310:
case 2176:
case 587:
case 296:
case 334:
case 702:
case 3560:
case 3900:
case 2968:
case 26:
case 3132:
case 1998:
case 2650:
case 1701:
case 1453:
case 1756:
case 2258:
case 3406:
case 2573:
case 225:
case 3907:
case 3451:
case 5:
case 3975:
case 3053:
case 199:
case 3582:
case 2220:
case 2952:
case 1735:
case 634:
case 1292:
case 677:
case 70:
case 4076:
case 2280:
case 3192:
case 3025:
case 3147:
case 2064:
case 3817:
case 1617:
case 1485:
case 3137:
case 2988:
case 3398:
case 1713:
case 3016:
case 3520:
case 298:
case 1745:
case 3171:
case 54:
case 2267:
case 169:
case 3190:
case 207:
case 3444:
case 2078:
case 1044:
case 2950:
case 3558:
case 3898:
case 2495:
case 1698:
case 1658:
case 3858:
case 3729:
case 3380:
case 444:
case 2971:
case 3789:
case 1763:
case 653:
case 97:
case 3150:
case 3320:
case 1507:
case 165:
case 1575:
case 1039:
case 1228:
case 2726:
case 2692:
case 844:
case 335:
case 2069:
case 2436:
case 3820:
case 2404:
case 2021:
case 3188:
case 2937:
case 2483:
case 2217:
case 1288:
case 318:
case 3880:
case 2081:
case 3128:
case 3358:
case 3517:
case 4000:
case 1980:
case 2446:
case 2637:
case 3367:
case 2947:
case 1920:
case 1252:
case 843:
case 3882:
case 195:
case 3093:
case 1682:
case 3491:
case 654:
case 2873:
case 2014:
case 2298:
case 3449:
case 976:
case 2671:
case 1493:
case 2175:
case 1622:
case 3822:
case 1958:
case 1091:
case 3037:
case 3921:
case 1314:
case 4003:
case 3969:
case 2349:
case 1646:
case 271:
case 716:
case 3846:
case 968:
case 4084:
case 3981:
case 640:
case 2370:
case 925:
case 3071:
case 2891:
case 2467:
case 3776:
case 3090:
case 2966:
case 2506:
case 3346:
case 2693:
case 754:
case 1073:
case 1955:
case 89:
case 2732:
case 3855:
case 1655:
case 1151:
case 4011:
case 1134:
case 2839:
case 3383:
case 1369:
case 2666:
case 601:
case 245:
case 3234:
case 1760:
case 3206:
case 3323:
case 3153:
case 1225:
case 2730:
case 1623:
case 3836:
case 3681:
case 1946:
case 3185:
case 998:
case 1285:
case 3669:
case 3092:
case 71:
case 450:
case 3621:
case 1821:
case 2872:
case 3355:
case 3125:
case 2209:
case 3047:
case 564:
case 606:
case 137:
case 3395:
case 2572:
case 1521:
case 733:
case 2616:
case 3702:
case 174:
case 4089:
case 480:
case 3583:
case 1710:
case 720:
case 3964:
case 4061:
case 823:
case 1581:
case 3536:
case 4029:
case 1319:
case 830:
case 1748:
case 2246:
case 491:
case 27:
case 3619:
case 3291:
case 2114:
case 2953:
case 783:
case 367:
case 1695:
case 1293:
case 3555:
case 187:
case 784:
case 3166:
case 276:
case 711:
case 3239:
case 1450:
case 2653:
case 2255:
case 3309:
case 2549:
case 510:
case 2806:
case 3919:
case 3978:
case 3700:
case 1139:
case 1266:
case 461:
case 2570:
case 302:
case 2204:
case 2169:
case 2236:
case 1738:
case 2351:
case 3088:
case 2334:
case 3546:
case 2306:
case 2625:
case 308:
case 3028:
case 2916:
case 563:
case 594:
case 2685:
case 2417:
case 2760:
case 2519:
case 2381:
case 1544:
case 1666:
case 969:
case 305:
case 2369:
case 1839:
case 3639:
case 464:
case 2134:
case 370:
case 2151:
case 1372:
case 2106:
case 257:
case 1458:
case 1164:
case 3672:
case 1209:
case 530:
case 756:
case 3516:
case 2821:
case 523:
case 2683:
case 3366:
case 2604:
case 731:
case 864:
case 2492:
case 3109:
case 1730:
case 893:
case 1370:
case 410:
case 2727:
case 1391:
case 2936:
case 561:
case 2437:
case 2564:
case 2904:
case 171:
case 3525:
case 524:
case 1349:
case 1718:
case 2314:
case 2762:
case 3585:
case 760:
case 1732:
case 3067:
case 2144:
case 1178:
case 1119:
case 3939:
case 4059:
case 2471:
case 3649:
case 3082:
case 1849:
case 1506:
case 3195:
case 1966:
case 999:
case 1467:
case 3278:
case 1534:
case 1482:
case 1870:
case 1570:
case 2266:
case 2139:
case 73:
case 995:
case 2712:
case 2364:
case 3944:
case 1806:
case 3593:
case 1549:
case 82:
case 1255:
case 2450:
case 604:
case 566:
case 1283:
case 3104:
case 2488:
case 3885:
case 1916:
case 3136:
case 2864:
case 1306:
case 2172:
case 3281:
case 1236:
case 3183:
case 1169:
case 2748:
case 1344:
case 922:
case 2710:
case 2909:
case 3816:
case 2521:
case 1572:
case 237:
case 596:
case 287:
case 550:
case 1498:
case 2695:
case 2191:
case 1539:
case 2170:
case 309:
case 1075:
case 965:
case 3644:
case 1844:
case 3951:
case 1114:
case 4054:
case 149:
case 2819:
case 2878:
case 56:
case 2237:
case 2745:
case 2375:
case 198:
case 3592:
case 3852:
case 2307:
case 1928:
case 3794:
case 2713:
case 4008:
case 544:
case 1988:
case 2271:
case 347:
case 1495:
case 1950:
case 1222:
case 2173:
case 875:
case 957:
case 2290:
case 3182:
case 800:
case 703:
case 107:
case 3095:
case 1282:
case 2807:
case 1267:
case 3419:
case 3478:
case 3352:
case 2875:
case 441:
case 1765:
case 299:
case 125:
case 704:
case 3158:
case 63:
case 3571:
case 332:
case 1650:
case 3590:
case 2006:
case 2998:
case 2051:
case 2485:
case 1688:
case 3120:
case 543:
case 3350:
case 1280:
case 68:
case 841:
case 1409:
case 3537:
case 1628:
case 3759:
case 3828:
case 3464:
case 388:
case 1952:
case 3009:
case 2735:
case 168:
case 358:
case 1992:
case 1743:
case 3799:
case 4:
case 1446:
case 3371:
case 65:
case 446:
case 1715:
case 973:
case 3046:
case 942:
case 3588:
case 2091:
case 2958:
case 3890:
case 3550:
case 3414:
case 2622:
case 1671:
case 2796:
case 3871:
case 1298:
case 1014:
case 3337:
case 3198:
case 2667:
case 129:
case 3275:
case 3673:
case 2682:
case 2049:
case 2039:
case 2575:
case 2982:
case 265:
case 2967:
case 3347:
case 3055:
case 3973:
case 2466:
case 3777:
case 2763:
case 1971:
case 987:
case 2250:
case 614:
case 1990:
case 1455:
case 681:
case 3036:
case 3421:
case 3731:
case 1217:
case 3469:
case 3117:
case 3847:
case 1436:
case 3481:
case 2072:
case 1647:
case 1733:
case 3892:
case 1069:
case 1692:
case 1423:
case 1726:
case 2415:
case 705:
case 124:
case 1618:
case 3148:
case 1210:
case 2662:
case 1640:
case 2041:
case 873:
case 381:
case 2443:
case 161:
case 571:
case 842:
case 314:
case 1102:
case 2876:
case 3791:
case 22:
case 3770:
case 3568:
case 3096:
case 3340:
case 2257:
case 356:
case 1942:
case 1632:
case 946:
case 1496:
case 3379:
case 3318:
case 658:
case 3897:
case 3739:
case 474:
case 437:
case 3112:
case 3842:
case 180:
case 1642:
case 652:
case 545:
case 1212:
case 1061:
case 3489:
case 1463:
case 3200:
case 2736:
case 2433:
case 313:
case 191:
case 2723:
case 837:
case 3830:
case 619:
case 2927:
case 1940:
case 2031:
case 2962:
case 130:
case 3772:
case 123:
case 487:
case 3397:
case 2987:
case 727:
case 1918:
case 1979:
case 3045:
case 638:
case 1262:
case 293:
case 2218:
case 1716:
case 1413:
case 2938:
case 615:
case 3411:
case 3530:
case 2648:
case 1445:
case 33:
case 3013:
case 2240:
case 1227:
case 1674:
case 3162:
case 3744:
case 975:
case 1968:
case 38:
case 549:
case 682:
case 57:
case 900:
case 3542:
case 196:
case 2232:
case 1657:
case 3597:
case 3857:
case 688:
case 1456:
case 3484:
case 1003:
case 386:
case 1084:
case 2800:
case 3868:
case 1668:
case 3001:
case 2576:
case 3751:
case 1260:
case 1974:
case 647:
case 351:
case 1725:
case 2230:
case 2300:
case 3540:
case 2059:
case 1785:
case 263:
case 2910:
case 3035:
case 709:
case 3518:
case 3579:
case 3163:
case 2177:
case 1750:
case 246:
case 895:
case 3261:
case 92:
case 3400:
case 1263:
case 2468:
case 2824:
case 1359:
case 1129:
case 4049:
case 303:
case 1859:
case 1728:
case 2303:
case 3543:
case 568:
case 2324:
case 3365:
case 2233:
case 1438:
case 4070:
case 2913:
case 1788:
case 143:
case 2286:
case 3994:
case 2384:
case 3038:
case 4091:
case 172:
case 3515:
case 3586:
case 3694:
case 1531:
case 715:
case 1554:
case 2215:
case 2613:
case 2141:
case 3010:
case 822:
case 1448:
case 598:
case 3526:
case 2243:
case 2645:
case 3959:
case 4039:
case 1002:
case 304:
case 465:
case 1505:
case 24:
case 2311:
case 279:
case 1296:
case 2798:
case 2956:
case 782:
case 1394:
case 2901:
case 422:
case 752:
case 1354:
case 1124:
case 2996:
case 1331:
case 3386:
case 3284:
case 1103:
case 2829:
case 869:
case 2442:
case 1201:
case 275:
case 3101:
case 1184:
case 3326:
case 1805:
case 3156:
case 3677:
case 2889:
case 2663:
case 1877:
case 2265:
case 3833:
case 1633:
case 921:
case 2389:
case 1943:
case 2511:
case 627:
case 1305:
case 1792:
case 2780:
case 2159:
case 1686:
case 3631:
case 1594:
case 1831:
case 3886:
case 964:
case 993:
case 3941:
case 3135:
case 963:
case 1841:
case 1487:
case 2418:
case 2479:
case 3815:
case 3641:
case 1986:
case 3931:
case 4034:
case 1462:
case 2440:
case 605:
case 2194:
case 3211:
case 241:
case 3113:
case 3476:
case 3773:
case 1399:
case 3905:
case 3565:
case 910:
case 2782:
case 899:
case 1076:
case 2696:
case 1341:
case 2772:
case 409:
case 1721:
case 3962:
case 2342:
case 3486:
case 1431:
case 1510:
case 3433:
case 1781:
case 3736:
case 3031:
case 1360:
case 3927:
case 3054:
case 3426:
case 1548:
case 2608:
case 1405:
case 25:
case 1860:
case 3660:
case 809:
case 2489:
case 1477:
case 3005:
case 2557:
case 260:
case 3077:
case 3755:
case 2832:
case 256:
case 1714:
case 628:
case 2379:
case 11:
case 2749:
case 231:
case 2791:
case 3876:
case 1676:
case 2096:
case 2908:
case 2568:
case 903:
case 3627:
case 2840:
case 3274:
case 1827:
case 3376:
case 3746:
case 281:
case 1441:
case 2818:
case 3415:
case 665:
case 1862:
case 757:
case 1043:
case 3662:
case 2332:
case 363:
case 3059:
case 394:
case 2518:
case 669:
case 2035:
case 1130:
case 3910:
case 3230:
case 251:
case 1312:
case 3638:
case 1838:
case 3948:
case 2368:
case 2001:
case 3465:
case 2424:
case 3800:
case 2056:
case 1197:
case 1600:
case 3576:
case 827:
case 1065:
case 2160:
case 597:
case 3297:
case 774:
case 2532:
case 3795:
case 177:
case 134:
case 773:
case 567:
case 1310:
case 4020:
case 742:
case 1132:
case 2374:
case 870:
case 1719:
case 1778:
case 1560:
case 748:
case 28:
case 1348:
case 3648:
case 2530:
case 2187:
case 3094:
case 4058:
case 3938:
case 1179:
case 1118:
case 2874:
case 3240:
case 1494:
case 3610:
case 699:
case 2045:
case 470:
case 1140:
case 3802:
case 184:
case 3218:
case 3279:
case 1602:
case 4023:
case 3901:
case 648:
case 1984:
case 960:
case 4036:
case 1563:
case 673:
case 642:
case 1775:
case 1924:
case 34:
case 555:
case 2196:
case 1299:
case 3243:
case 539:
case 913:
case 2010:
case 3935:
case 3141:
case 204:
case 2959:
case 2048:
case 3613:
case 3215:
case 2402:
case 1813:
case 3199:
case 1074:
case 3286:
case 1231:
case 1254:
case 3913:
case 1133:
case 419:
case 1301:
case 2515:
case 2038:
case 1126:
case 3384:
case 687:
case 2659:
case 3226:
case 981:
case 3945:
case 3131:
case 2365:
case 3154:
case 1911:
case 3824:
case 1277:
case 1624:
case 931:
case 2400:
case 819:
case 674:
case 458:
case 637:
case 106:
case 3105:
case 1856:
case 3656:
case 3884:
case 990:
case 1801:
case 3601:
case 2012:
case 452:
case 2163:
case 722:
case 1929:
case 482:
case 2315:
case 3722:
case 1961:
case 1501:
case 3584:
case 3696:
case 986:
case 1896:
case 1556:
case 1989:
case 2343:
case 3503:
case 3963:
case 2977:
case 832:
case 488:
case 815:
case 2476:
case 3782:
case 2905:
case 2087:
case 1079:
case 1535:
case 438:
case 2843:
case 2211:
case 2699:
case 936:
case 2027:
case 1040:
case 2145:
case 2641:
case 3479:
case 432:
case 1294:
case 3329:
case 3159:
case 3780:
case 2941:
case 1030:
case 2886:
case 518:
case 3389:
case 3720:
case 93:
case 4095:
case 1545:
case 3430:
case 3511:
case 1408:
case 559:
case 585:
case 2156:
case 2203:
case 1097:
case 2101:
case 375:
case 3265:
case 1689:
case 3663:
case 1042:
case 1863:
case 300:
case 3996:
case 3861:
case 3008:
case 1661:
case 3442:
case 140:
case 3829:
case 1776:
case 2219:
case 2278:
case 938:
case 1090:
case 1244:
case 2670:
case 2022:
case 886:
case 2067:
case 3955:
case 3073:
case 2553:
case 2893:
case 3471:
case 436:
case 3787:
case 675:
case 3983:
case 1969:
case 726:
case 600:
case 1037:
case 3314:
case 836:
case 988:
case 3564:
case 3437:
case 1846:
case 1116:
case 3936:
case 1981:
case 4056:
case 3881:
case 1836:
case 1681:
case 3604:
case 1185:
case 2366:
case 3946:
case 2080:
case 48:
case 1804:
case 1823:
case 2109:
case 2264:
case 3225:
case 3821:
case 2516:
case 554:
case 83:
case 2020:
case 1125:
case 1669:
case 1092:
case 3869:
case 2639:
case 3369:
case 205:
case 88:
case 3106:
case 1595:
case 1855:
case 641:
case 3151:
case 270:
case 4045:
case 3578:
case 1251:
case 3760:
case 1234:
case 1323:
case 4013:
case 1206:
case 1153:
case 2970:
case 1304:
case 1336:
case 2991:
case 2058:
case 2098:
case 2407:
case 1270:
case 2644:
case 1193:
case 413:
case 1619:
case 860:
case 3819:
case 1291:
case 3191:
case 3293:
case 3695:
case 167:
case 387:
case 1895:
case 1555:
case 3170:
case 209:
case 460:
case 6:
case 3569:
case 3710:
case 1395:
case 584:
case 2816:
case 374:
case 1702:
case 3452:
case 3319:
case 3378:
case 3748:
case 1504:
case 1964:
case 710:
case 2017:
case 3172:
case 1664:
case 2825:
case 3428:
case 3864:
case 102:
case 431:
case 2183:
case 2136:
case 583:
case 1028:
case 952:
case 373:
case 3488:
case 3609:
case 64:
case 108:
case 881:
case 1809:
case 814:
case 490:
case 456:
case 2221:
case 520:
case 831:
case 2593:
case 2385:
case 197:
case 3995:
case 919:
case 764:
case 3514:
case 3450:
case 1239:
case 1919:
case 856:
case 3139:
case 414:
case 481:
case 3266:
case 2944:
case 2634:
case 2651:
case 2180:
case 2759:
case 3425:
case 2537:
case 779:
case 3247:
case 2009:
case 288:
case 1147:
case 1025:
case 2120:
case 1817:
case 2888:
case 3617:
case 3485:
case 1522:
case 3701:
case 3453:
case 3756:
case 3051:
case 4027:
case 1317:
case 2388:
case 927:
case 2590:
case 1582:
case 1053:
case 238:
case 4062:
case 1724:
case 1703:
case 2328:
case 2158:
case 1434:
case 694:
case 3807:
case 1607:
case 663:
case 155:
case 369:
case 3044:
case 2167:
case 3271:
case 1898:
case 970:
case 50:
case 2182:
case 3290:
case 2794:
case 746:
case 4060:
case 2852:
case 139:
case 7:
case 3237:
case 1016:
case 1520:
case 3307:
case 2547:
case 3620:
case 1820:
case 135:
case 322:
case 1880:
case 3680:
case 62:
case 1472:
case 3288:
case 2023:
case 118:
case 3922:
case 1761:
case 3658:
case 540:
case 1858:
case 1380:
case 1066:
case 4048:
case 365:
case 2392:
case 3982:
case 3039:
case 3763:
case 1789:
case 2777:
case 3466:
case 2055:
case 741:
case 2973:
case 3507:
case 2347:
case 1320:
case 2275:
case 3667:
case 2198:
case 1470:
case 395:
case 2207:
case 2550:
case 2890:
case 3958:
case 3091:
case 2871:
case 1449:
case 3622:
case 219:
case 3070:
case 1822:
case 1152:
case 2741:
case 803:
case 252:
case 4012:
case 1322:
case 1517:
case 626:
case 258:
case 775:
case 2799:
case 3920:
case 1367:
case 700:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758099602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,];
var gg_b = "1758099602/";

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
