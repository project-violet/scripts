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
case 1568:
case 470:
case 2991:
case 3860:
case 73:
case 1063:
case 4045:
case 2497:
case 64:
case 2921:
case 1942:
case 2730:
case 2245:
case 326:
case 153:
case 1400:
case 1805:
case 3901:
case 3168:
case 4014:
case 436:
case 1793:
case 2511:
case 3279:
case 3080:
case 2143:
case 2214:
case 1259:
case 1035:
case 3333:
case 256:
case 1243:
case 2451:
case 2065:
case 3994:
case 446:
case 3027:
case 3893:
case 2054:
case 3823:
case 3924:
case 3211:
case 1145:
case 2885:
case 366:
case 517:
case 856:
case 2538:
case 2725:
case 2812:
case 2007:
case 3816:
case 3354:
case 2904:
case 2327:
case 3365:
case 74:
case 2803:
case 234:
case 1034:
case 1269:
case 4082:
case 1506:
case 1626:
case 1431:
case 1696:
case 3122:
case 2215:
case 3881:
case 1985:
case 451:
case 1937:
case 241:
case 1139:
case 4015:
case 2282:
case 1912:
case 1178:
case 1602:
case 325:
case 2541:
case 1318:
case 2113:
case 1592:
case 2102:
case 127:
case 673:
case 3073:
case 1857:
case 492:
case 927:
case 3578:
case 3455:
case 3061:
case 3877:
case 3539:
case 499:
case 4044:
case 544:
case 3464:
case 2701:
case 2905:
case 3355:
case 3364:
case 3582:
case 831:
case 3757:
case 738:
case 2644:
case 365:
case 2983:
case 3515:
case 648:
case 2884:
case 1418:
case 773:
case 167:
case 3846:
case 2967:
case 697:
case 1182:
case 2842:
case 2682:
case 1891:
case 2461:
case 2055:
case 2239:
case 1781:
case 4039:
case 556:
case 817:
case 1669:
case 1296:
case 2169:
case 4078:
case 1331:
case 2615:
case 2769:
case 2681:
case 3009:
case 4046:
case 1892:
case 3466:
case 1822:
case 3310:
case 1858:
case 1332:
case 3577:
case 3839:
case 2246:
case 1557:
case 42:
case 1570:
case 1782:
case 3242:
case 2029:
case 1979:
case 3581:
case 80:
case 1744:
case 3284:
case 713:
case 277:
case 1806:
case 33:
case 1938:
case 2677:
case 666:
case 1694:
case 2650:
case 3157:
case 3170:
case 1150:
case 1624:
case 1177:
case 1504:
case 2250:
case 2277:
case 626:
case 2101:
case 2409:
case 2066:
case 613:
case 3706:
case 34:
case 3062:
case 2713:
case 4077:
case 4050:
case 3943:
case 1778:
case 1389:
case 1146:
case 2646:
case 3642:
case 3758:
case 3191:
case 508:
case 3815:
case 3722:
case 3429:
case 3792:
case 885:
case 1417:
case 1160:
case 3408:
case 348:
case 1505:
case 2195:
case 3203:
case 3167:
case 3212:
case 2125:
case 183:
case 665:
case 2216:
case 4016:
case 577:
case 1347:
case 983:
case 3969:
case 1230:
case 3340:
case 1583:
case 3237:
case 3285:
case 601:
case 2428:
case 3560:
case 2498:
case 2293:
case 995:
case 1868:
case 4093:
case 2040:
case 195:
case 484:
case 50:
case 2759:
case 2906:
case 886:
case 2838:
case 2743:
case 2585:
case 3814:
case 2623:
case 3768:
case 2503:
case 208:
case 3516:
case 1123:
case 2328:
case 2922:
case 3845:
case 585:
case 3926:
case 1630:
case 149:
case 3996:
case 1447:
case 2130:
case 3685:
case 3637:
case 2056:
case 942:
case 3028:
case 3603:
case 3523:
case 1225:
case 338:
case 3593:
case 3612:
case 3308:
case 2260:
case 335:
case 290:
case 579:
case 2344:
case 628:
case 3015:
case 1402:
case 137:
case 784:
case 564:
case 1549:
case 3082:
case 3655:
case 2086:
case 1675:
case 1369:
case 2717:
case 3947:
case 1496:
case 3044:
case 911:
case 506:
case 3441:
case 2732:
case 425:
case 2261:
case 610:
case 3736:
case 2478:
case 3486:
case 465:
case 710:
case 1173:
case 2339:
case 1836:
case 3153:
case 198:
case 221:
case 1326:
case 88:
case 1006:
case 2899:
case 524:
case 3039:
case 1553:
case 3561:
case 28:
case 147:
case 1618:
case 1956:
case 728:
case 3134:
case 3809:
case 1092:
case 684:
case 345:
case 1022:
case 2041:
case 3976:
case 3597:
case 888:
case 1600:
case 1519:
case 1590:
case 3527:
case 3898:
case 426:
case 2565:
case 354:
case 4051:
case 1443:
case 206:
case 370:
case 872:
case 3788:
case 1248:
case 505:
case 19:
case 879:
case 413:
case 1674:
case 288:
case 3932:
case 4080:
case 264:
case 2507:
case 3119:
case 2747:
case 3917:
case 2533:
case 806:
case 2038:
case 1999:
case 2345:
case 1180:
case 4027:
case 2680:
case 1571:
case 2297:
case 224:
case 3254:
case 1068:
case 3438:
case 1587:
case 1535:
case 3233:
case 1888:
case 2414:
case 2148:
case 180:
case 3580:
case 2011:
case 3163:
case 1151:
case 980:
case 103:
case 1728:
case 799:
case 1128:
case 2807:
case 258:
case 1751:
case 1198:
case 3763:
case 2508:
case 2003:
case 2748:
case 2652:
case 3918:
case 2085:
case 3656:
case 2953:
case 3827:
case 2854:
case 3093:
case 735:
case 1820:
case 3023:
case 3608:
case 3528:
case 858:
case 751:
case 122:
case 3735:
case 3787:
case 1247:
case 129:
case 3337:
case 651:
case 974:
case 219:
case 1588:
case 2147:
case 2774:
case 1797:
case 969:
case 745:
case 3412:
case 3719:
case 3720:
case 3403:
case 2360:
case 1005:
case 174:
case 950:
case 3208:
case 962:
case 55:
case 4028:
case 3188:
case 812:
case 2700:
case 2493:
case 1863:
case 1955:
case 3060:
case 2228:
case 1871:
case 692:
case 2718:
case 32:
case 2566:
case 2209:
case 3046:
case 4009:
case 2971:
case 1021:
case 736:
case 646:
case 1301:
case 2855:
case 1494:
case 1162:
case 2987:
case 3299:
case 3229:
case 3210:
case 2084:
case 2662:
case 1761:
case 3753:
case 381:
case 1232:
case 3342:
case 1773:
case 770:
case 1849:
case 3442:
case 1289:
case 2920:
case 3749:
case 1057:
case 44:
case 2446:
case 3974:
case 1853:
case 3077:
case 2132:
case 2990:
case 670:
case 3136:
case 1617:
case 971:
case 3:
case 3699:
case 3610:
case 3266:
case 3629:
case 3509:
case 25:
case 2377:
case 3900:
case 1401:
case 1324:
case 2775:
case 2599:
case 1109:
case 1933:
case 36:
case 2510:
case 22:
case 2562:
case 3209:
case 2734:
case 788:
case 2948:
case 3864:
case 3450:
case 2046:
case 881:
case 779:
case 40:
case 3042:
case 1875:
case 1980:
case 2229:
case 82:
case 3084:
case 3987:
case 3935:
case 1166:
case 2299:
case 1321:
case 706:
case 477:
case 1001:
case 2753:
case 281:
case 1404:
case 4010:
case 485:
case 606:
case 2136:
case 1304:
case 3990:
case 3919:
case 1421:
case 1636:
case 4066:
case 1024:
case 2974:
case 3446:
case 1997:
case 2610:
case 35:
case 3262:
case 86:
case 994:
case 2699:
case 1129:
case 3775:
case 1370:
case 1357:
case 1532:
case 2900:
case 3377:
case 679:
case 3350:
case 26:
case 688:
case 3529:
case 2081:
case 664:
case 724:
case 3599:
case 493:
case 3508:
case 358:
case 1405:
case 3003:
case 2771:
case 3323:
case 884:
case 2016:
case 3934:
case 1156:
case 1672:
case 3833:
case 2918:
case 3652:
case 3748:
case 1483:
case 2172:
case 3037:
case 3085:
case 621:
case 68:
case 790:
case 1973:
case 2528:
case 3460:
case 3865:
case 3953:
case 2598:
case 3854:
case 918:
case 3556:
case 2787:
case 2552:
case 3147:
case 810:
case 56:
case 2880:
case 4008:
case 2403:
case 1765:
case 228:
case 1367:
case 3949:
case 2719:
case 2412:
case 5:
case 1272:
case 1848:
case 159:
case 1383:
case 2188:
case 1547:
case 1688:
case 160:
case 152:
case 661:
case 721:
case 2256:
case 828:
case 960:
case 3228:
case 2975:
case 2060:
case 959:
case 486:
case 605:
case 1468:
case 254:
case 3251:
case 1263:
case 1107:
case 65:
case 836:
case 2338:
case 3856:
case 2045:
case 444:
case 270:
case 2633:
case 3627:
case 2665:
case 1690:
case 2120:
case 143:
case 551:
case 1619:
case 3697:
case 3808:
case 2932:
case 2411:
case 1740:
case 3079:
case 3280:
case 870:
case 372:
case 3533:
case 2917:
case 1059:
case 3747:
case 1287:
case 943:
case 1962:
case 2135:
case 978:
case 1635:
case 4054:
case 189:
case 1043:
case 2265:
case 1708:
case 2254:
case 1290:
case 1219:
case 1220:
case 3297:
case 3148:
case 434:
case 2479:
case 2580:
case 1756:
case 4007:
case 2438:
case 2171:
case 1663:
case 2207:
case 3651:
case 2163:
case 1368:
case 1671:
case 75:
case 1234:
case 1069:
case 899:
case 1531:
case 390:
case 235:
case 2015:
case 3344:
case 441:
case 251:
case 1155:
case 1164:
case 2664:
case 3086:
case 2655:
case 1422:
case 1729:
case 2441:
case 1799:
case 3866:
case 107:
case 3717:
case 2149:
case 1889:
case 2386:
case 851:
case 1253:
case 3439:
case 3732:
case 1458:
case 2736:
case 3339:
case 3673:
case 1832:
case 1358:
case 2486:
case 3661:
case 3378:
case 3789:
case 1392:
case 1766:
case 1002:
case 845:
case 3810:
case 1013:
case 3829:
case 1518:
case 1322:
case 1928:
case 2573:
case 2264:
case 2561:
case 1998:
case 455:
case 3041:
case 3972:
case 245:
case 1634:
case 4055:
case 1026:
case 3444:
case 1096:
case 38:
case 1952:
case 1306:
case 617:
case 1982:
case 2167:
case 3660:
case 4037:
case 2408:
case 3195:
case 2203:
case 1667:
case 2340:
case 897:
case 2285:
case 176:
case 2237:
case 458:
case 53:
case 4012:
case 2969:
case 655:
case 3293:
case 2105:
case 1605:
case 3223:
case 902:
case 848:
case 1683:
case 1738:
case 1047:
case 631:
case 1388:
case 1779:
case 2183:
case 3040:
case 641:
case 3879:
case 3743:
case 1488:
case 1372:
case 140:
case 3906:
case 1530:
case 1859:
case 3352:
case 755:
case 3693:
case 3328:
case 873:
case 3503:
case 3623:
case 3398:
case 308:
case 940:
case 3130:
case 2996:
case 3056:
case 2637:
case 1137:
case 1711:
case 1185:
case 2845:
case 386:
case 2926:
case 1076:
case 2308:
case 1103:
case 2612:
case 2593:
case 2098:
case 3616:
case 1978:
case 1112:
case 2523:
case 273:
case 2603:
case 2329:
case 3769:
case 30:
case 2399:
case 1896:
case 3246:
case 2878:
case 2242:
case 1291:
case 2104:
case 1594:
case 3309:
case 377:
case 1802:
case 744:
case 1813:
case 2581:
case 3010:
case 634:
case 1657:
case 975:
case 4084:
case 548:
case 3650:
case 3124:
case 2170:
case 2157:
case 3542:
case 1270:
case 1257:
case 987:
case 3277:
case 3968:
case 3101:
case 2844:
case 644:
case 3713:
case 385:
case 3066:
case 3409:
case 3702:
case 2062:
case 2191:
case 2758:
case 1436:
case 1142:
case 1691:
case 2882:
case 756:
case 2792:
case 2499:
case 3362:
case 2366:
case 3726:
case 2429:
case 3281:
case 2722:
case 2815:
case 3126:
case 1692:
case 1513:
case 1141:
case 2122:
case 825:
case 2192:
case 2930:
case 1658:
case 3282:
case 1742:
case 1449:
case 2721:
case 1916:
case 3639:
case 341:
case 1353:
case 2791:
case 2106:
case 1334:
case 3244:
case 225:
case 3541:
case 2877:
case 2539:
case 405:
case 2455:
case 1923:
case 2073:
case 1824:
case 2770:
case 2355:
case 915:
case 3905:
case 1801:
case 3794:
case 201:
case 3983:
case 2515:
case 317:
case 566:
case 1206:
case 3644:
case 1569:
case 1434:
case 3064:
case 1258:
case 3239:
case 2686:
case 1453:
case 1960:
case 3461:
case 2704:
case 3055:
case 3278:
case 957:
case 801:
case 1349:
case 3842:
case 3473:
case 48:
case 3169:
case 3615:
case 708:
case 1292:
case 865:
case 1222:
case 2241:
case 355:
case 3497:
case 1946:
case 213:
case 1825:
case 1712:
case 1419:
case 1895:
case 1490:
case 1703:
case 777:
case 685:
case 406:
case 344:
case 1543:
case 226:
case 1111:
case 525:
case 1335:
case 3351:
case 479:
case 813:
case 2901:
case 2407:
case 1668:
case 472:
case 2433:
case 464:
case 3143:
case 3214:
case 424:
case 2783:
case 2545:
case 1138:
case 2679:
case 1471:
case 2307:
case 3957:
case 1463:
case 3451:
case 3054:
case 2705:
case 2893:
case 1268:
case 3538:
case 923:
case 1435:
case 1559:
case 3480:
case 2211:
case 116:
case 3904:
case 1390:
case 334:
case 3803:
case 1000:
case 3795:
case 916:
case 3812:
case 123:
case 2767:
case 3725:
case 2816:
case 804:
case 3007:
case 785:
case 1320:
case 986:
case 3103:
case 2295:
case 1616:
case 452:
case 460:
case 2225:
case 4025:
case 2447:
case 3711:
case 4095:
case 249:
case 2123:
case 1328:
case 1512:
case 1398:
case 2193:
case 1623:
case 757:
case 1008:
case 108:
case 3283:
case 1879:
case 2376:
case 3488:
case 3372:
case 908:
case 3859:
case 1906:
case 3738:
case 3047:
case 302:
case 2476:
case 2714:
case 3944:
case 3472:
case 418:
case 295:
case 832:
case 3843:
case 2868:
case 3525:
case 1428:
case 3915:
case 239:
case 2583:
case 376:
case 2745:
case 232:
case 1660:
case 1216:
case 2625:
case 420:
case 1195:
case 993:
case 2417:
case 1796:
case 1726:
case 2911:
case 3741:
case 1281:
case 1646:
case 2432:
case 3204:
case 3621:
case 3501:
case 3691:
case 193:
case 3142:
case 2778:
case 2146:
case 3184:
case 723:
case 185:
case 4094:
case 549:
case 1409:
case 4024:
case 3257:
case 3270:
case 3089:
case 2521:
case 716:
case 2294:
case 1968:
case 3670:
case 2036:
case 3657:
case 2150:
case 2504:
case 977:
case 2694:
case 763:
case 532:
case 177:
case 2806:
case 1309:
case 1099:
case 500:
case 375:
case 539:
case 4001:
case 3914:
case 3604:
case 3524:
case 1246:
case 2782:
case 2570:
case 2489:
case 2332:
case 3594:
case 3336:
case 2822:
case 1841:
case 3826:
case 595:
case 3896:
case 1769:
case 1681:
case 2296:
case 357:
case 867:
case 3292:
case 1615:
case 2781:
case 2115:
case 2669:
case 609:
case 4026:
case 1064:
case 1461:
case 630:
case 3453:
case 1967:
case 602:
case 3075:
case 2213:
case 2418:
case 267:
case 3569:
case 1644:
case 3206:
case 117:
case 2202:
case 2375:
case 917:
case 2049:
case 3801:
case 676:
case 4013:
case 2750:
case 3894:
case 3993:
case 2558:
case 1701:
case 2857:
case 2870:
case 3824:
case 2592:
case 1102:
case 3596:
case 3526:
case 3606:
case 3784:
case 1244:
case 1541:
case 2602:
case 2318:
case 1113:
case 47:
case 3658:
case 709:
case 2746:
case 1639:
case 2178:
case 730:
case 2139:
case 2804:
case 3353:
case 1361:
case 2903:
case 702:
case 640:
case 827:
case 941:
case 2696:
case 2985:
case 2034:
case 1196:
case 675:
case 3390:
case 1904:
case 1327:
case 3000:
case 1803:
case 787:
case 134:
case 1397:
case 323:
case 1812:
case 1007:
case 1538:
case 1033:
case 3435:
case 3830:
case 316:
case 567:
case 2145:
case 1480:
case 3981:
case 1579:
case 2019:
case 3471:
case 2020:
case 3074:
case 1065:
case 3463:
case 956:
case 2090:
case 2448:
case 2243:
case 478:
case 3138:
case 1159:
case 2087:
case 2643:
case 2883:
case 2793:
case 4059:
case 2723:
case 3668:
case 1245:
case 3737:
case 1730:
case 3335:
case 527:
case 2716:
case 2474:
case 1497:
case 3419:
case 3420:
case 1921:
case 2568:
case 853:
case 3703:
case 363:
case 3490:
case 1991:
case 3895:
case 144:
case 1427:
case 2063:
case 3818:
case 1609:
case 550:
case 733:
case 1510:
case 2109:
case 569:
case 2933:
case 643:
case 3517:
case 789:
case 1775:
case 2907:
case 782:
case 2394:
case 1262:
case 15:
case 1117:
case 1381:
case 3129:
case 3110:
case 3927:
case 2954:
case 3491:
case 2289:
case 3636:
case 1920:
case 1919:
case 2057:
case 2632:
case 3997:
case 1446:
case 95:
case 3321:
case 4017:
case 2773:
case 2849:
case 2689:
case 2761:
case 475:
case 4032:
case 3980:
case 1481:
case 1084:
case 1935:
case 1987:
case 3166:
case 1864:
case 2091:
case 1477:
case 2301:
case 2494:
case 1855:
case 3951:
case 1450:
case 2424:
case 2021:
case 3470:
case 1971:
case 3457:
case 522:
case 633:
case 1566:
case 678:
case 874:
case 2871:
case 1423:
case 3095:
case 2964:
case 1493:
case 1298:
case 2863:
case 3305:
case 3272:
case 2276:
case 1252:
case 3688:
case 3547:
case 440:
case 1360:
case 3754:
case 919:
case 391:
case 2727:
case 1774:
case 3367:
case 1416:
case 2325:
case 67:
case 1949:
case 2835:
case 2430:
case 112:
case 2588:
case 262:
case 2330:
case 222:
case 2247:
case 4047:
case 3973:
case 1316:
case 402:
case 3874:
case 1953:
case 318:
case 3108:
case 1460:
case 3961:
case 1865:
case 1854:
case 2495:
case 409:
case 3672:
case 1934:
case 3030:
case 958:
case 1748:
case 822:
case 320:
case 1085:
case 1037:
case 3483:
case 2751:
case 158:
case 1393:
case 2198:
case 1508:
case 3405:
case 1323:
case 1807:
case 1698:
case 203:
case 1651:
case 3663:
case 416:
case 2151:
case 2798:
case 598:
case 2200:
case 1414:
case 2888:
case 2343:
case 1148:
case 2752:
case 2459:
case 2563:
case 3708:
case 1227:
case 124:
case 2068:
case 3220:
case 2571:
case 3219:
case 1297:
case 4074:
case 547:
case 1680:
case 3962:
case 3847:
case 3635:
case 3548:
case 3687:
case 924:
case 2180:
case 1445:
case 2929:
case 2910:
case 1345:
case 988:
case 179:
case 89:
case 964:
case 3235:
case 3059:
case 1533:
case 172:
case 2999:
case 164:
case 1507:
case 972:
case 343:
case 3690:
case 61:
case 3154:
case 3500:
case 3620:
case 188:
case 3165:
case 29:
case 3133:
case 1856:
case 3909:
case 2443:
case 694:
case 1314:
case 463:
case 2248:
case 3876:
case 1554:
case 2590:
case 511:
case 1100:
case 3263:
case 1251:
case 814:
case 3574:
case 3271:
case 2519:
case 3634:
case 618:
case 1041:
case 1444:
case 247:
case 3952:
case 2956:
case 2092:
case 98:
case 898:
case 2058:
case 2231:
case 3817:
case 2762:
case 3013:
case 1810:
case 580:
case 3322:
case 3518:
case 921:
case 1673:
case 1339:
case 298:
case 415:
case 3358:
case 121:
case 3249:
case 2173:
case 1789:
case 1482:
case 1378:
case 3889:
case 652:
case 720:
case 1273:
case 161:
case 1478:
case 1382:
case 1439:
case 211:
case 1555:
case 659:
case 2426:
case 2940:
case 105:
case 3422:
case 1866:
case 307:
case 2496:
case 3155:
case 3164:
case 2675:
case 514:
case 1175:
case 2549:
case 811:
case 1086:
case 718:
case 2709:
case 3234:
case 3406:
case 37:
case 3069:
case 1988:
case 190:
case 2413:
case 1344:
case 347:
case 3092:
case 1809:
case 582:
case 774:
case 589:
case 2634:
case 1976:
case 3313:
case 578:
case 1255:
case 1561:
case 2998:
case 1039:
case 2928:
case 1078:
case 1573:
case 622:
case 533:
case 762:
case 3275:
case 2013:
case 2518:
case 2322:
case 3762:
case 3006:
case 4049:
case 2766:
case 3396:
case 2249:
case 3836:
case 467:
case 3908:
case 2358:
case 311:
case 2253:
case 2458:
case 427:
case 1386:
case 2889:
case 992:
case 2799:
case 3369:
case 3496:
case 1862:
case 192:
case 3631:
case 199:
case 2710:
case 1664:
case 3549:
case 669:
case 729:
case 543:
case 151:
case 935:
case 3675:
case 2164:
case 650:
case 807:
case 3218:
case 0:
case 1015:
case 674:
case 2234:
case 337:
case 3402:
case 3709:
case 2069:
case 27:
case 2531:
case 3798:
case 1163:
case 833:
case 3200:
case 1171:
case 2663:
case 878:
case 2756:
case 1438:
case 3752:
case 3648:
case 882:
case 3888:
case 1989:
case 3274:
case 233:
case 1551:
case 1265:
case 3563:
case 3068:
case 946:
case 2290:
case 1254:
case 1311:
case 2043:
case 4020:
case 4019:
case 1135:
case 2059:
case 1917:
case 2235:
case 2287:
case 3999:
case 3929:
case 1014:
case 136:
case 2620:
case 2154:
case 1190:
case 2165:
case 1932:
case 3127:
case 936:
case 3674:
case 3197:
case 4087:
case 2690:
case 4035:
case 1120:
case 4063:
case 3443:
case 1379:
case 2876:
case 170:
case 1338:
case 4071:
case 1852:
case 39:
case 2909:
case 3359:
case 2574:
case 1597:
case 1828:
case 3519:
case 3600:
case 2468:
case 3590:
case 154:
case 1898:
case 1607:
case 449:
case 3964:
case 910:
case 1060:
case 3955:
case 3863:
case 4072:
case 3067:
case 442:
case 2025:
case 260:
case 798:
case 611:
case 1188:
case 3797:
case 2367:
case 1412:
case 3005:
case 2754:
case 1403:
case 747:
case 291:
case 2765:
case 374:
case 128:
case 3083:
case 1485:
case 1437:
case 362:
case 350:
case 852:
case 928:
case 3647:
case 3887:
case 51:
case 1640:
case 3330:
case 1787:
case 3247:
case 1735:
case 322:
case 820:
case 1385:
case 1337:
case 2576:
case 329:
case 3572:
case 1240:
case 737:
case 2961:
case 1303:
case 184:
case 495:
case 3890:
case 3820:
case 3425:
case 168:
case 2874:
case 1312:
case 1528:
case 1897:
case 1918:
case 220:
case 1656:
case 2483:
case 698:
case 2156:
case 483:
case 3676:
case 2030:
case 1771:
case 432:
case 3128:
case 1763:
case 439:
case 2405:
case 2800:
case 2517:
case 1484:
case 614:
case 1081:
case 2532:
case 96:
case 2755:
case 2764:
case 591:
case 3324:
case 1:
case 81:
case 3617:
case 703:
case 2110:
case 559:
case 2129:
case 1509:
case 1629:
case 552:
case 3057:
case 1873:
case 3070:
case 3289:
case 1749:
case 1974:
case 2997:
case 1050:
case 2094:
case 294:
case 2001:
case 79:
case 680:
case 3232:
case 2404:
case 1342:
case 3849:
case 3773:
case 3217:
case 603:
case 2831:
case 1210:
case 520:
case 1229:
case 981:
case 4036:
case 92:
case 1046:
case 2589:
case 2470:
case 3091:
case 518:
case 3494:
case 496:
case 1384:
case 12:
case 1562:
case 1734:
case 223:
case 2319:
case 3760:
case 2390:
case 1354:
case 2000:
case 1514:
case 216:
case 2830:
case 2435:
case 1027:
case 696:
case 3300:
case 2463:
case 1994:
case 1705:
case 1893:
case 2471:
case 3020:
case 1823:
case 2074:
case 1333:
case 557:
case 1679:
case 4068:
case 3659:
case 3243:
case 1783:
case 1638:
case 3984:
case 3087:
case 3035:
case 1238:
case 3643:
case 2371:
case 2668:
case 863:
case 3723:
case 3805:
case 1901:
case 2363:
case 913:
case 2543:
case 2737:
case 2111:
case 126:
case 2785:
case 2048:
case 1454:
case 926:
case 263:
case 2703:
case 1051:
case 1860:
case 2946:
case 113:
case 3071:
case 2712:
case 49:
case 3867:
case 3115:
case 1241:
case 3669:
case 4058:
case 1544:
case 3226:
case 257:
case 815:
case 2292:
case 4092:
case 1846:
case 2186:
case 1925:
case 3821:
case 447:
case 3182:
case 3891:
case 2453:
case 695:
case 4022:
case 2960:
case 1704:
case 2031:
case 165:
case 3213:
case 498:
case 3144:
case 367:
case 3418:
case 901:
case 742:
case 2801:
case 3777:
case 101:
case 632:
case 523:
case 1757:
case 749:
case 3049:
case 1582:
case 4006:
case 3857:
case 700:
case 1073:
case 2923:
case 739:
case 1877:
case 3053:
case 563:
case 1061:
case 2894:
case 1850:
case 732:
case 1464:
case 3558:
case 925:
case 2606:
case 2526:
case 3318:
case 125:
case 3613:
case 3592:
case 1106:
case 2334:
case 2596:
case 1791:
case 2353:
case 1158:
case 3912:
case 2658:
case 1721:
case 437:
case 1286:
case 2502:
case 2622:
case 1192:
case 3034:
case 3431:
case 3506:
case 3696:
case 3937:
case 1881:
case 2141:
case 1122:
case 887:
case 1429:
case 1722:
case 1815:
case 4004:
case 1499:
case 1366:
case 2142:
case 1121:
case 2204:
case 3432:
case 1191:
case 1642:
case 2436:
case 287:
case 1062:
case 1844:
case 3294:
case 3591:
case 3521:
case 2270:
case 2089:
case 94:
case 3224:
case 3694:
case 1170:
case 3201:
case 3177:
case 3150:
case 2032:
case 2813:
case 1581:
case 275:
case 1284:
case 3744:
case 1959:
case 2017:
case 3938:
case 13:
case 3332:
case 2291:
case 3858:
case 1104:
case 1577:
case 2594:
case 2524:
case 2604:
case 2221:
case 3570:
case 3557:
case 4021:
case 1399:
case 3317:
case 1466:
case 502:
case 3892:
case 1009:
case 3181:
case 509:
case 3822:
case 1310:
case 1329:
case 2826:
case 1028:
case 2112:
case 1523:
case 767:
case 3295:
case 1612:
case 138:
case 1098:
case 2939:
case 2711:
case 2137:
case 1440:
case 3941:
case 3072:
case 349:
case 3630:
case 1926:
case 2076:
case 840:
case 4067:
case 342:
case 1996:
case 587:
case 1685:
case 462:
case 1768:
case 3193:
case 4083:
case 1516:
case 469:
case 2859:
case 1356:
case 1902:
case 2283:
case 2488:
case 3476:
case 2843:
case 395:
case 2683:
case 1456:
case 202:
case 2605:
case 3567:
case 997:
case 1560:
case 2595:
case 3868:
case 1105:
case 332:
case 1969:
case 948:
case 3745:
case 2915:
case 339:
case 148:
case 3160:
case 727:
case 667:
case 383:
case 3986:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753261202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,];
var gg_b = "1753261202/";

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
