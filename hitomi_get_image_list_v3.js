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
case 4034:
case 3013:
case 646:
case 874:
case 3:
case 1815:
case 1164:
case 2024:
case 2981:
case 276:
case 439:
case 2336:
case 2221:
case 1401:
case 1641:
case 916:
case 2534:
case 1513:
case 3170:
case 1465:
case 3300:
case 1242:
case 179:
case 58:
case 1387:
case 454:
case 1506:
case 721:
case 2098:
case 1174:
case 1078:
case 2520:
case 3783:
case 2958:
case 535:
case 647:
case 690:
case 3739:
case 3482:
case 3842:
case 2845:
case 806:
case 3006:
case 2517:
case 1905:
case 2543:
case 1748:
case 1363:
case 3160:
case 2850:
case 663:
case 204:
case 1961:
case 2377:
case 1397:
case 3318:
case 2030:
case 2184:
case 1651:
case 3987:
case 869:
case 1810:
case 3474:
case 558:
case 3210:
case 3416:
case 2159:
case 1182:
case 3963:
case 2244:
case 2302:
case 2668:
case 1266:
case 1460:
case 3057:
case 3175:
case 2771:
case 3997:
case 3634:
case 3361:
case 875:
case 868:
case 3227:
case 1808:
case 2286:
case 2480:
case 2438:
case 205:
case 891:
case 2553:
case 3879:
case 1630:
case 1758:
case 1688:
case 2299:
case 140:
case 2525:
case 3464:
case 3620:
case 283:
case 299:
case 197:
case 730:
case 4053:
case 3101:
case 2035:
case 717:
case 1252:
case 455:
case 298:
case 3371:
case 1214:
case 3814:
case 1470:
case 2296:
case 3403:
case 2490:
case 3165:
case 2162:
case 4025:
case 3973:
case 1698:
case 3643:
case 3617:
case 534:
case 1900:
case 2948:
case 522:
case 583:
case 3309:
case 2140:
case 1004:
case 1087:
case 306:
case 412:
case 626:
case 3415:
case 213:
case 1518:
case 3691:
case 2747:
case 1063:
case 3306:
case 3801:
case 3681:
case 3751:
case 3504:
case 2123:
case 3176:
case 1097:
case 3018:
case 3865:
case 2862:
case 2155:
case 3152:
case 2421:
case 2330:
case 2285:
case 3313:
case 3282:
case 561:
case 495:
case 258:
case 627:
case 1110:
case 3798:
case 3573:
case 1717:
case 741:
case 3911:
case 1500:
case 409:
case 1882:
case 307:
case 2709:
case 1442:
case 1127:
case 1932:
case 3658:
case 2872:
case 851:
case 2067:
case 259:
case 1275:
case 2295:
case 2856:
case 3292:
case 374:
case 2351:
case 3166:
case 157:
case 1073:
case 2925:
case 837:
case 3000:
case 1677:
case 1947:
case 2934:
case 42:
case 3410:
case 3216:
case 1874:
case 1469:
case 1311:
case 577:
case 2663:
case 28:
case 3332:
case 3427:
case 3219:
case 3860:
case 3071:
case 4091:
case 2604:
case 2581:
case 2757:
case 987:
case 1466:
case 1260:
case 773:
case 504:
case 2444:
case 1909:
case 1505:
case 3626:
case 941:
case 576:
case 1693:
case 2499:
case 1115:
case 380:
case 443:
case 1636:
case 4058:
case 1864:
case 2486:
case 375:
case 1667:
case 1906:
case 3005:
case 2131:
case 2920:
case 2496:
case 1476:
case 1270:
case 494:
case 2433:
case 3061:
case 1639:
case 650:
case 3870:
case 1452:
case 2489:
case 2849:
case 1683:
case 1753:
case 3735:
case 3072:
case 144:
case 188:
case 1095:
case 3836:
case 3664:
case 3226:
case 3331:
case 160:
case 713:
case 1293:
case 1488:
case 3893:
case 2800:
case 1321:
case 1826:
case 1430:
case 3585:
case 3056:
case 1955:
case 2582:
case 2680:
case 3933:
case 328:
case 3417:
case 392:
case 3443:
case 3742:
case 2745:
case 1572:
case 3603:
case 2690:
case 3229:
case 2908:
case 3839:
case 530:
case 427:
case 1556:
case 3986:
case 1085:
case 189:
case 57:
case 1312:
case 193:
case 609:
case 3059:
case 1354:
case 3350:
case 2297:
case 46:
case 2001:
case 2132:
case 3616:
case 1153:
case 3944:
case 2263:
case 849:
case 3062:
case 671:
case 1451:
case 2910:
case 315:
case 3434:
case 1562:
case 2204:
case 426:
case 2468:
case 516:
case 3682:
case 3714:
case 1950:
case 694:
case 667:
case 3453:
case 2805:
case 78:
case 2564:
case 450:
case 1344:
case 2422:
case 2337:
case 1090:
case 2723:
case 1546:
case 4003:
case 2366:
case 2861:
case 2070:
case 1038:
case 2503:
case 1675:
case 3046:
case 1945:
case 3692:
case 1708:
case 3124:
case 2740:
case 2411:
case 200:
case 1549:
case 562:
case 314:
case 1396:
case 3323:
case 2871:
case 2574:
case 885:
case 2106:
case 1389:
case 666:
case 15:
case 3921:
case 3188:
case 3130:
case 3007:
case 4019:
case 1333:
case 3355:
case 803:
case 3291:
case 2379:
case 4074:
case 132:
case 1117:
case 3340:
case 852:
case 2109:
case 1665:
case 62:
case 959:
case 1881:
case 1584:
case 333:
case 2915:
case 1507:
case 2686:
case 1191:
case 1467:
case 776:
case 1820:
case 1436:
case 1230:
case 2806:
case 815:
case 1288:
case 3448:
case 961:
case 1679:
case 2903:
case 3990:
case 2772:
case 3775:
case 3362:
case 1817:
case 1483:
case 3898:
case 1652:
case 1782:
case 2633:
case 3980:
case 1614:
case 1550:
case 1676:
case 3429:
case 3045:
case 1181:
case 1928:
case 1298:
case 3217:
case 490:
case 905:
case 2762:
case 3372:
case 2375:
case 829:
case 71:
case 638:
case 3102:
case 983:
case 3610:
case 221:
case 1907:
case 2515:
case 1477:
case 2161:
case 777:
case 2644:
case 1994:
case 2268:
case 2847:
case 998:
case 2813:
case 1224:
case 1834:
case 1666:
case 2404:
case 1385:
case 704:
case 639:
case 19:
case 3359:
case 1054:
case 1158:
case 3627:
case 1972:
case 2076:
case 2360:
case 2508:
case 3995:
case 2222:
case 3835:
case 2832:
case 761:
case 3599:
case 352:
case 1402:
case 2749:
case 3307:
case 3253:
case 153:
case 1089:
case 3384:
case 833:
case 3055:
case 3586:
case 3177:
case 2052:
case 976:
case 1033:
case 80:
case 3394:
case 1764:
case 1099:
case 1523:
case 2728:
case 3596:
case 2982:
case 1086:
case 586:
case 1959:
case 3589:
case 1719:
case 3167:
case 2857:
case 977:
case 2510:
case 3136:
case 3615:
case 2612:
case 783:
case 4027:
case 1148:
case 3193:
case 3349:
case 2037:
case 1126:
case 1962:
case 2370:
case 3760:
case 705:
case 27:
case 2621:
case 4010:
case 1716:
case 2527:
case 1241:
case 1380:
case 904:
case 1338:
case 3139:
case 3328:
case 3841:
case 3481:
case 119:
case 1774:
case 3544:
case 230:
case 2069:
case 689:
case 2573:
case 1605:
case 1885:
case 207:
case 1445:
case 3709:
case 693:
case 1029:
case 2347:
case 2313:
case 914:
case 358:
case 1259:
case 3295:
case 3856:
case 457:
case 3351:
case 4073:
case 3925:
case 876:
case 3706:
case 2137:
case 3093:
case 1048:
case 1144:
case 1583:
case 644:
case 431:
case 2658:
case 688:
case 1895:
case 1450:
case 1256:
case 3872:
case 108:
case 3067:
case 3412:
case 1671:
case 3713:
case 2691:
case 1577:
case 2309:
case 2724:
case 728:
case 206:
case 2563:
case 2179:
case 804:
case 112:
case 1317:
case 1343:
case 2018:
case 2114:
case 3388:
case 1189:
case 792:
case 3421:
case 3330:
case 1320:
case 1431:
case 2306:
case 2801:
case 2751:
case 334:
case 2587:
case 1112:
case 280:
case 1154:
case 3238:
case 3486:
case 3280:
case 3341:
case 3846:
case 551:
case 2408:
case 1440:
case 1880:
case 1228:
case 1838:
case 510:
case 1502:
case 2626:
case 3917:
case 3673:
case 1600:
case 2648:
case 3499:
case 1711:
case 3433:
case 2061:
case 2870:
case 3489:
case 1930:
case 3849:
case 3131:
case 70:
case 2005:
case 1722:
case 3920:
case 1249:
case 733:
case 3496:
case 2629:
case 194:
case 1423:
case 38:
case 536:
case 2142:
case 1618:
case 335:
case 2741:
case 3591:
case 898:
case 12:
case 2410:
case 2216:
case 3604:
case 883:
case 822:
case 1951:
case 166:
case 3807:
case 1325:
case 2427:
case 1284:
case 1353:
case 1207:
case 3150:
case 2219:
case 2860:
case 2071:
case 929:
case 1091:
case 2783:
case 1530:
case 3958:
case 1588:
case 1632:
case 2739:
case 3485:
case 2482:
case 154:
case 2009:
case 1017:
case 3098:
case 3194:
case 834:
case 1250:
case 478:
case 3107:
case 3030:
case 624:
case 2736:
case 1902:
case 3543:
case 1020:
case 3700:
case 2578:
case 3611:
case 2160:
case 2492:
case 304:
case 210:
case 1812:
case 2:
case 1854:
case 4068:
case 3128:
case 784:
case 748:
case 237:
case 1329:
case 3981:
case 1551:
case 1787:
case 1657:
case 376:
case 3146:
case 3339:
case 1138:
case 3254:
case 575:
case 952:
case 3383:
case 2215:
case 1524:
case 3051:
case 1462:
case 1190:
case 3393:
case 2568:
case 1821:
case 569:
case 1326:
case 858:
case 3336:
case 3831:
case 401:
case 3221:
case 3718:
case 3367:
case 749:
case 985:
case 3534:
case 625:
case 3299:
case 506:
case 3525:
case 322:
case 399:
case 1428:
case 464:
case 1886:
case 2208:
case 1240:
case 1381:
case 1939:
case 3480:
case 305:
case 123:
case 2879:
case 3553:
case 1899:
case 1833:
case 88:
case 2403:
case 3855:
case 2852:
case 1609:
case 653:
case 1889:
case 2973:
case 2617:
case 1025:
case 3926:
case 1449:
case 2702:
case 3948:
case 835:
case 1936:
case 3035:
case 3289:
case 1896:
case 1255:
case 2876:
case 398:
case 2869:
case 2416:
case 3159:
case 361:
case 2987:
case 507:
case 1494:
case 3771:
case 949:
case 2866:
case 1613:
case 1977:
case 2419:
case 770:
case 1484:
case 574:
case 2963:
case 703:
case 3244:
case 1195:
case 2057:
case 842:
case 2701:
case 2610:
case 2554:
case 321:
case 3497:
case 1418:
case 1392:
case 3762:
case 3375:
case 1960:
case 3463:
case 2031:
case 2102:
case 2824:
case 1213:
case 2521:
case 4012:
case 2627:
case 3974:
case 3268:
case 3813:
case 3487:
case 146:
case 3404:
case 665:
case 751:
case 2888:
case 1206:
case 1400:
case 2448:
case 2426:
case 3903:
case 2362:
case 424:
case 2608:
case 1640:
case 1970:
case 284:
case 3756:
case 248:
case 2050:
case 710:
case 7:
case 1623:
case 2045:
case 147:
case 249:
case 1209:
case 2243:
case 3278:
case 679:
case 2938:
case 841:
case 1785:
case 3633:
case 50:
case 2980:
case 2193:
case 3100:
case 1965:
case 800:
case 3370:
case 1303:
case 3857:
case 418:
case 3654:
case 3510:
case 1901:
case 2136:
case 528:
case 3612:
case 317:
case 2346:
case 330:
case 1537:
case 529:
case 3069:
case 3794:
case 1364:
case 1010:
case 37:
case 2307:
case 4089:
case 2384:
case 1822:
case 2177:
case 3052:
case 3118:
case 937:
case 1461:
case 1975:
case 3076:
case 1790:
case 2770:
case 3992:
case 3222:
case 2225:
case 1579:
case 1405:
case 1163:
case 2985:
case 1738:
case 4086:
case 1650:
case 1780:
case 640:
case 425:
case 1811:
case 697:
case 203:
case 664:
case 1316:
case 515:
case 1374:
case 3211:
case 402:
case 1576:
case 3746:
case 1187:
case 285:
case 3728:
case 2040:
case 2674:
case 3263:
case 980:
case 1694:
case 3065:
case 1966:
case 2062:
case 968:
case 2877:
case 1897:
case 2350:
case 707:
case 656:
case 2135:
case 3001:
case 3927:
case 341:
case 570:
case 1111:
case 1969:
case 585:
case 1684:
case 3910:
case 1501:
case 1712:
case 215:
case 386:
case 1413:
case 53:
case 969:
case 503:
case 774:
case 2893:
case 1873:
case 2989:
case 2585:
case 3750:
case 3680:
case 1914:
case 228:
case 2072:
case 3157:
case 631:
case 1976:
case 1628:
case 4095:
case 1092:
case 2996:
case 2226:
case 2331:
case 3273:
case 2248:
case 460:
case 2986:
case 821:
case 489:
case 493:
case 1315:
case 3478:
case 1649:
case 292:
case 991:
case 1409:
case 2742:
case 2603:
case 3690:
case 2229:
case 127:
case 3592:
case 2921:
case 45:
case 2130:
case 548:
case 3516:
case 2007:
case 1271:
case 3314:
case 907:
case 1019:
case 3352:
case 2291:
case 214:
case 775:
case 3376:
case 3871:
case 780:
case 974:
case 20:
case 1016:
case 233:
case 3379:
case 1178:
case 1074:
case 549:
case 2769:
case 2281:
case 1560:
case 817:
case 3723:
case 1003:
case 830:
case 3366:
case 1796:
case 3861:
case 906:
case 1261:
case 3685:
case 2752:
case 2682:
case 2580:
case 2714:
case 1733:
case 1327:
case 2453:
case 3805:
case 2590:
case 2046:
case 3695:
case 2692:
case 2028:
case 3740:
case 3369:
case 1064:
case 2779:
case 300:
case 373:
case 620:
case 445:
case 3113:
case 1786:
case 1656:
case 3147:
case 4080:
case 491:
case 578:
case 1335:
case 614:
case 3207:
case 3353:
case 4071:
case 1150:
case 882:
case 989:
case 3951:
case 1581:
case 2819:
case 2466:
case 1687:
case 366:
case 2437:
case 3325:
case 1884:
case 993:
case 2571:
case 1934:
case 944:
case 988:
case 2947:
case 960:
case 32:
case 1894:
case 2874:
case 1663:
case 2311:
case 2469:
case 3294:
case 18:
case 579:
case 3081:
case 633:
case 1145:
case 60:
case 1002:
case 2906:
case 3249:
case 1920:
case 1290:
case 3423:
case 367:
case 2270:
case 2476:
case 84:
case 2414:
case 1433:
case 4061:
case 3455:
case 2452:
case 2683:
case 1849:
case 1489:
case 3121:
case 1558:
case 3880:
case 3440:
case 3246:
case 3838:
case 3228:
case 1673:
case 3998:
case 1943:
case 75:
case 1917:
case 3711:
case 2693:
case 3600:
case 2115:
case 2636:
case 3154:
case 468:
case 1341:
case 1280:
case 3431:
case 2063:
case 2265:
case 3196:
case 134:
case 789:
case 945:
case 3133:
case 371:
case 2201:
case 1388:
case 1330:
case 1421:
case 1140:
case 2087:
case 406:
case 540:
case 312:
case 564:
case 1398:
case 615:
case 3317:
case 3199:
case 788:
case 2518:
case 3941:
case 744:
case 3577:
case 2734:
case 2127:
case 1953:
case 932:
case 231:
case 3935:
case 3895:
case 3256:
case 3450:
case 2892:
case 1067:
case 3272:
case 159:
case 257:
case 1351:
case 1529:
case 1295:
case 474:
case 839:
case 3026:
case 1706:
case 1093:
case 3144:
case 3048:
case 2720:
case 4000:
case 1285:
case 3661:
case 692:
case 3567:
case 158:
case 1083:
case 3259:
case 3536:
case 1526:
case 3605:
case 2717:
case 1859:
case 2743:
case 3593:
case 2500:
case 95:
case 1548:
case 1709:
case 2442:
case 3445:
case 3885:
case 1324:
case 2882:
case 557:
case 2237:
case 2827:
case 1668:
case 1302:
case 2266:
case 3195:
case 4057:
case 531:
case 843:
case 3647:
case 3613:
case 3484:
case 702:
case 2557:
case 753:
case 3494:
case 2810:
case 161:
case 34:
case 1041:
case 924:
case 2182:
case 3053:
case 1035:
case 3896:
case 1761:
case 2214:
case 82:
case 2276:
case 2470:
case 3833:
case 3609:
case 1855:
case 1296:
case 3449:
case 2022:
case 1926:
case 3025:
case 2698:
case 556:
case 1948:
case 3993:
case 2900:
case 1286:
case 1480:
case 2808:
case 3939:
case 1840:
case 105:
case 2630:
case 323:
case 1553:
case 2758:
case 3606:
case 240:
case 1299:
case 2279:
case 122:
case 3428:
case 63:
case 718:
case 3381:
case 603:
case 297:
case 3886:
case 1831:
case 1336:
case 201:
case 3797:
case 2971:
case 2641:
case 1367:
case 338:
case 1718:
case 2513:
case 1991:
case 1051:
case 2103:
case 3190:
case 3348:
case 1149:
case 2373:
case 3821:
case 3180:
case 724:
case 1339:
case 808:
case 1212:
case 410:
case 2815:
case 4:
case 3854:
case 2164:
case 2068:
case 520:
case 1024:
case 1128:
case 3657:
case 3598:
case 3902:
case 648:
case 2363:
case 3020:
case 2748:
case 3472:
case 2475:
case 104:
case 812:
case 2509:
case 1377:
case 2961:
case 2397:
case 2119:
case 1088:
case 1184:
case 279:
case 2242:
case 436:
case 2304:
case 2729:
case 177:
case 3043:
case 2078:
case 3530:
case 649:
case 3459:
case 2635:
case 11:
case 3632:
case 3588:
case 1958:
case 1845:
case 2764:
case 3374:
case 1211:
case 202:
case 3187:
case 4040:
case 3008:
case 3104:
case 3514:
case 3780:
case 225:
case 3790:
case 1076:
case 3645:
case 2540:
case 1222:
case 3405:
case 2853:
case 253:
case 2235:
case 3232:
case 4055:
case 2956:
case 3197:
case 3319:
case 796:
case 1118:
case 3010:
case 2716:
case 2338:
case 965:
case 978:
case 2129:
case 117:
case 130:
case 2774:
case 1794:
case 1069:
case 218:
case 2719:
case 797:
case 764:
case 3471:
case 979:
case 740:
case 1784:
case 1707:
case 2148:
case 544:
case 3173:
case 2126:
case 1370:
case 2962:
case 3965:
case 872:
case 3303:
case 3878:
case 1759:
case 636:
case 2817:
case 3785:
case 3655:
case 2614:
case 2439:
case 1042:
case 2676:
case 532:
case 449:
case 2928:
case 1964:
case 2298:
case 390:
case 1278:
case 2467:
case 1686:
case 1756:
case 448:
case 996:
case 1171:
case 4050:
case 2436:
case 2820:
case 363:
case 2288:
case 3400:
case 2493:
case 3206:
case 2679:
case 1473:
case 3542:
case 2545:
case 1903:
case 224:
case 1365:
case 2792:
case 1644:
case 2224:
case 1404:
case 651:
case 765:
case 778:
case 6:
case 2385:
case 2158:
case 3868:
case 29:
case 3015:
case 637:
case 545:
case 1762:
case 2251:
case 3960:
case 1105:
case 381:
case 121:
case 2021:
case 1919:
case 2477:
case 3418:
case 1497:
case 173:
case 3310:
case 3786:
case 1147:
case 2038:
case 956:
case 2134:
case 59:
case 2675:
case 3942:
case 4046:
case 2708:
case 1369:
case 675:
case 3799:
case 1411:
case 2549:
case 1685:
case 1755:
case 2435:
case 3432:
case 3327:
case 311:
case 3659:
case 1805:
case 1564:
case 2202:
case 1337:
case 1422:
case 350:
case 4049:
case 2344:
case 2090:
case 1070:
case 2528:
case 3796:
case 931:
case 1379:
case 2117:
case 2399:
case 2665:
case 3662:
case 957:
case 2441:
case 3016:
case 433:
case 3457:
case 2891:
case 2120:
case 3744:
case 524:
case 1106:
case 2594:
case 2727:
case 720:
case 2333:
case 1478:
case 3649:
case 1690:
case 2572:
case 1745:
case 3575:
case 3409:
case 1592:
case 327:
case 2670:
case 2829:
case 187:
case 756:
case 3315:
case 293:
case 2354:
case 2923:
case 4072:
case 288:
case 1075:
case 244:
case 3646:
case 3092:
case 1273:
case 3406:
case 846:
case 1800:
case 2848:
case 2488:
case 2430:
case 2236:
case 2826:
case 518:
case 3873:
case 2321:
case 2559:
case 4056:
case 3952:
case 3914:
case 1750:
case 3501:
case 525:
case 1910:
case 2715:
case 3607:
case 3712:
case 3413:
case 415:
case 186:
case 3804:
case 757:
case 502:
case 3565:
case 1204:
case 1342:
case 2424:
case 326:
case 3111:
case 1468:
case 3969:
case 731:
case 2277:
case 1132:
case 920:
case 36:
case 1001:
case 2153:
case 141:
case 3863:
case 1927:
case 3937:
case 1263:
case 3694:
case 2125:
case 1731:
case 1065:
case 3966:
case 1818:
case 3897:
case 3276:
case 2223:
case 1814:
case 2609:
case 1852:
case 1403:
case 3022:
case 1702:
case 2025:
case 1617:
case 3698:
case 1973:
case 1101:
case 2936:
case 2255:
case 3214:
case 2967:
case 946:
case 1876:
case 498:
case 2606:
case 1522:
case 340:
case 1620:
case 3011:
case 483:
case 499:
case 2381:
case 512:
case 3808:
case 405:
case 3630:
case 2983:
case 1879:
case 223:
case 3758:
case 3688:
case 616:
case 2541:
case 3791:
case 1419:
case 2977:
case 990:
case 1227:
case 1837:
case 2844:
case 3237:
case 3827:
case 1305:
case 3266:
case 3624:
case 3192:
case 1210:
case 1416:
case 461:
case 1869:
case 2358:
case 24:
case 630:
case 2185:
case 3182:
case 1904:
case 1987:
case 67:
case 2494:
case 963:
case 3269:
case 509:
case 3810:
case 3961:
case 1318:
case 2250:
case 365:
case 1767:
case 3119:
case 378:
case 4030:
case 566:
case 2902:
case 3726:
case 1006:
case 1793:
case 2020:
case 3748:
case 1160:
case 404:
case 3509:
case 3116:
case 2632:
case 2588:
case 41:
case 1739:
case 1842:
case 52:
case 379:
case 3304:
case 1625:
case 3506:
case 2017:
case 3078:
case 3174:
case 4051:
case 3465:
case 2462:
case 567:
case 1300:
case 2348:
case 2326:
case 2231:
case 1568:
case 301:
case 747:
case 3513:
case 1777:
case 3547:
case 3815:
case 763:
case 137:
case 2704:
case 2657:
case 239:
case 2180:
case 543:
case 2034:
case 1013:
case 151:
case 1215:
case 1870:
case 926:
case 3639:
case 3414:
case 2890:
case 2455:
case 538:
case 4002:
case 2722:
case 2249:
case 1357:
case 2423:
case 3270:
case 1629:
case 180:
case 3636:
case 3864:
case 243:
case 175:
case 2440:
case 1408:
case 2838:
case 2228:
case 539:
case 442:
case 2502:
case 2711:
case 1648:
case 2600:
case 96:
case 2951:
case 3819:
case 840:
case 3260:
case 266:
case 897:
case 864:
case 3437:
case 3322:
case 2325:
case 1332:
case 1427:
case 191:
case 772:
case 2207:
case 2091:
case 3816:
case 3311:
case 711:
case 2294:
case 48:
case 2081:
case 2924:
case 1142:
case 3913:
case 3947:
case 750:
case 3874:
case 2272:
case 3275:
case 174:
case 2144:
case 3720:
case 1000:
case 1137:
case 4093:
case 1788:
case 2450:
case 2895:
case 2539:
case 208:
case 1875:
case 2605:
case 1169:
case 3500:
case 2029:
case 2445:
case 2885:
case 3882:
case 4039:
case 2334:
case 54:
case 2661:
case 1347:
case 801:
case 2567:
case 295:
case 458:
case 4083:
case 3110:
case 2259:
case 2133:
case 1114:
case 1018:
case 3097:
case 1865:
case 727:
case 2189:
case 3201:
case 555:
case 972:
case 1801:
case 879:
case 1306:
case 1504:
case 2196:
case 641:
case 1751:
case 3957:
case 1587:
case 356:
case 878:
case 865:
case 950:
case 413:
case 3518:
case 2941:
case 2671:
case 523:
case 3734:
case 3004:
case 911:
case 1563:
case 686:
case 68:
case 794:
case 3441:
case 3710:
case 3601:
case 133:
case 2016:
case 1912:
case 1769:
case 547:
case 1198:
case 3143:
case 3665:
case 2662:
case 2560:
case 35:
case 1921:
case 2019:
case 3333:
case 2271:
case 909:
case 563:
case 1355:
case 3396:
case 3891:
case 995:
case 3120:
case 2744:
case 743:
case 3931:
case 3594:
case 3945:
case 2942:
case 1590:
case 1124:
case 1028:
case 1692:
case 2064:
case 3549:
case 1779:
case 971:
case 546:
case 1258:
case 2656:
case 3134:
case 3080:
case 3202:
case 1425:
case 3090:
case 2003:
case 2796:
case 1752:
case 2261:
case 1714:
case 3435:
case 2327:
case 2789:
case 2659:
case 211:
case 3562:
case 1345:
case 3660:
case 226:
case 2111:
case 824:
case 2501:
case 2754:
case 3715:
case 2712:
case 486:
case 2447:
case 1674:
case 943:
case 1944:
case 2694:
case 2122:
case 4065:
case 2966:
case 3451:
case 795:
case 2897:
case 1350:
case 3277:
case 4001:
case 3153:
case 966:
case 3239:
case 3085:
case 1141:
case 389:
case 393:
case 2315:
case 3312:
case 3354:
case 1059:
case 658:
case 1999:
case 1443:
case 1417:
case 1603:
case 1742:
case 2409:
case 227:
case 1839:
case 3848:
case 1893:
case 3826:
case 2873:
case 3955:
case 89:
case 3267:
case 4075:
case 3923:
case 1867:
case 388:
case 2976:
case 1996:
case 3095:
case 2628:
case 1226:
case 1836:
case 1664:
case 3293:
case 2406:
case 2200:
case 92:
case 417:
case 1346:
case 1481:
case 1841:
case 527:
case 2364:
case 4069:
case 2631:
case 47:
case 2010:
case 3716:
case 3380:
case 3241:
case 1139:
case 1349:
case 782:
case 3044:
case 3148:
case 4037:
case 1193:
case 2173:
case 2965:
case 2303:
case 954:
case 3719:
case 318:
case 2471:
case 1136:
case 2901:
case 1615:
case 2027:
case 2738:
case 1985:
case 3086:
case 3555:
case 85:
case 2780:
case 2650:
case 325:
case 2316:
case 103:
case 2811:
case 1458:
case 13:
case 1589:
case 605:
case 526:
case 3099:
case 3764:
case 1394:
case 2187:
case 3235:
case 1384:
case 3089:
case 939:
case 1586:
case 1055:
case 2319:
case 4076:
case 1023:
case 3703:
case 2975:
case 3642:
case 3972:
case 3096:
case 832:
case 1770:
case 698:
case 1225:
case 2163:
case 3853:
case 2405:
case 1234:
case 2382:
case 3054:
case 676:
case 1359:
case 2868:
case 1627:
case 3012:
case 844:
case 888:
case 3834:
case 3666:
case 246:
case 955:
case 3021:
case 1701:
case 1512:
case 3907:
case 511:
case 2418:
case 1851:
case 1356:
case 3395:
case 1765:
case 550:
case 2960:
case 1372:
case 923:
case 982:
case 3669:
case 281:
case 738:
case 1045:
case 247:
case 2623:
case 4042:
case 3928:
case 149:
case 3298:
case 1243:
case 290:
case 2785:
case 1938:
case 1980:
case 3614:
case 3550:
case 3439:
case 1448:
case 3493:
case 2206:
case 1775:
case 2542:
case 3545:
case 2970:
case 2795:
case 3191:
case 3467:
case 184:
case 739:
case 263:
case 3288:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747980001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,];
var gg_b = "1747980001/";

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
