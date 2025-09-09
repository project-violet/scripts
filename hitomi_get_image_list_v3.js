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
case 2789:
case 3682:
case 11:
case 3048:
case 2358:
case 3877:
case 797:
case 1183:
case 2744:
case 3543:
case 1097:
case 1145:
case 2968:
case 3585:
case 907:
case 1860:
case 375:
case 803:
case 3822:
case 999:
case 2040:
case 3286:
case 936:
case 3095:
case 2383:
case 1158:
case 2821:
case 2697:
case 1909:
case 2404:
case 3906:
case 709:
case 2417:
case 1813:
case 1244:
case 810:
case 3390:
case 2345:
case 3055:
case 1289:
case 3960:
case 494:
case 1295:
case 1086:
case 3901:
case 2394:
case 55:
case 1469:
case 2748:
case 801:
case 3044:
case 3281:
case 832:
case 1255:
case 4065:
case 3933:
case 1424:
case 169:
case 4023:
case 2755:
case 297:
case 647:
case 2408:
case 1833:
case 4070:
case 2686:
case 1154:
case 2795:
case 141:
case 851:
case 1792:
case 2656:
case 3544:
case 540:
case 3979:
case 780:
case 2743:
case 392:
case 1752:
case 2785:
case 410:
case 1976:
case 664:
case 3146:
case 3287:
case 1838:
case 1285:
case 2403:
case 1879:
case 3059:
case 182:
case 574:
case 1096:
case 403:
case 1814:
case 3099:
case 1056:
case 957:
case 3871:
case 1051:
case 853:
case 2687:
case 1597:
case 998:
case 2963:
case 3296:
case 4069:
case 3043:
case 876:
case 1299:
case 920:
case 708:
case 3934:
case 2910:
case 2827:
case 4024:
case 1193:
case 280:
case 1971:
case 3555:
case 1423:
case 2142:
case 1818:
case 596:
case 2799:
case 378:
case 3412:
case 755:
case 2759:
case 432:
case 3652:
case 535:
case 2388:
case 1470:
case 2540:
case 1153:
case 3595:
case 401:
case 2651:
case 1468:
case 1680:
case 791:
case 3920:
case 2152:
case 3545:
case 2590:
case 35:
case 2641:
case 3583:
case 3088:
case 534:
case 3862:
case 3191:
case 3804:
case 3973:
case 932:
case 3421:
case 498:
case 3093:
case 1820:
case 3598:
case 1284:
case 2928:
case 420:
case 643:
case 3187:
case 1873:
case 2409:
case 1904:
case 1962:
case 3053:
case 2080:
case 3246:
case 1392:
case 1547:
case 3808:
case 472:
case 2242:
case 3049:
case 3084:
case 2788:
case 2969:
case 903:
case 338:
case 807:
case 3935:
case 1253:
case 836:
case 669:
case 1908:
case 4025:
case 2753:
case 3780:
case 899:
case 2866:
case 3196:
case 254:
case 1288:
case 3156:
case 910:
case 3594:
case 641:
case 1742:
case 953:
case 3831:
case 2476:
case 4068:
case 1546:
case 3247:
case 3919:
case 3186:
case 668:
case 2832:
case 27:
case 976:
case 2783:
case 3750:
case 1298:
case 1189:
case 3803:
case 1931:
case 1819:
case 204:
case 12:
case 682:
case 578:
case 339:
case 1245:
case 3054:
case 1874:
case 2812:
case 3978:
case 3157:
case 30:
case 1148:
case 2395:
case 951:
case 3811:
case 3340:
case 436:
case 3197:
case 3045:
case 2090:
case 994:
case 1382:
case 340:
case 2647:
case 1425:
case 2754:
case 2580:
case 1047:
case 3058:
case 1839:
case 1690:
case 1911:
case 872:
case 2923:
case 374:
case 1650:
case 4029:
case 1541:
case 3836:
case 2471:
case 1410:
case 2794:
case 3472:
case 1110:
case 1567:
case 2993:
case 875:
case 1673:
case 2363:
case 938:
case 3172:
case 1455:
case 2482:
case 2724:
case 1061:
case 1125:
case 507:
case 1620:
case 1708:
case 1269:
case 310:
case 756:
case 2769:
case 3127:
case 536:
case 3497:
case 3604:
case 121:
case 1371:
case 2237:
case 2841:
case 2539:
case 1224:
case 3565:
case 2988:
case 2325:
case 595:
case 492:
case 1448:
case 3457:
case 1704:
case 332:
case 1762:
case 3379:
case 1130:
case 256:
case 2728:
case 3024:
case 478:
case 1376:
case 1717:
case 689:
case 3314:
case 1066:
case 1228:
case 1000:
case 1489:
case 2984:
case 3720:
case 2519:
case 2262:
case 3456:
case 1674:
case 3616:
case 3301:
case 4055:
case 611:
case 394:
case 1265:
case 351:
case 4095:
case 2770:
case 206:
case 892:
case 2954:
case 3569:
case 2535:
case 572:
case 1102:
case 2329:
case 974:
case 1500:
case 3739:
case 1223:
case 2632:
case 1566:
case 3778:
case 3267:
case 557:
case 1012:
case 737:
case 1703:
case 2177:
case 1561:
case 3070:
case 1322:
case 2109:
case 1850:
case 3375:
case 3528:
case 1639:
case 1890:
case 3313:
case 2368:
case 1731:
case 2998:
case 7:
case 1309:
case 1716:
case 2122:
case 3774:
case 4044:
case 2231:
case 29:
case 3121:
case 2983:
case 996:
case 3491:
case 939:
case 3065:
case 3611:
case 1168:
case 878:
case 706:
case 2612:
case 1485:
case 2203:
case 64:
case 3306:
case 2452:
case 3719:
case 3112:
case 3339:
case 1613:
case 1202:
case 2857:
case 1453:
case 2111:
case 4094:
case 1123:
case 2897:
case 501:
case 1493:
case 3510:
case 277:
case 2955:
case 435:
case 2060:
case 1488:
case 1660:
case 127:
case 1311:
case 1840:
case 2370:
case 1606:
case 1165:
case 621:
case 3563:
case 2518:
case 0:
case 3226:
case 150:
case 1527:
case 2075:
case 3701:
case 2886:
case 474:
case 185:
case 3221:
case 1777:
case 4058:
case 503:
case 979:
case 1601:
case 1026:
case 2103:
case 189:
case 4045:
case 2514:
case 2209:
case 2768:
case 2277:
case 1331:
case 3064:
case 2944:
case 777:
case 252:
case 336:
case 2116:
case 2033:
case 399:
case 510:
case 320:
case 3227:
case 2137:
case 3676:
case 2959:
case 3030:
case 2725:
case 3335:
case 2999:
case 4093:
case 3529:
case 1638:
case 1771:
case 357:
case 4088:
case 2533:
case 3734:
case 1337:
case 3605:
case 2038:
case 3100:
case 666:
case 1308:
case 2007:
case 202:
case 896:
case 835:
case 2856:
case 188:
case 3564:
case 1169:
case 2324:
case 3010:
case 1705:
case 1634:
case 2560:
case 2506:
case 3161:
case 992:
case 2276:
case 2730:
case 2627:
case 3315:
case 100:
case 3063:
case 1230:
case 1317:
case 874:
case 233:
case 3568:
case 438:
case 2513:
case 4049:
case 1521:
case 1992:
case 3707:
case 1304:
case 372:
case 2205:
case 1483:
case 542:
case 519:
case 1436:
case 461:
case 3810:
case 3341:
case 782:
case 3927:
case 1393:
case 2259:
case 3052:
case 1963:
case 2597:
case 3825:
case 88:
case 515:
case 2465:
case 970:
case 1142:
case 1910:
case 2971:
case 2193:
case 3756:
case 3972:
case 826:
case 3863:
case 1799:
case 3643:
case 4008:
case 2834:
case 1388:
case 1540:
case 2149:
case 3791:
case 1416:
case 2184:
case 3699:
case 1743:
case 1656:
case 2792:
case 3474:
case 2976:
case 922:
case 2752:
case 3419:
case 524:
case 155:
case 2838:
case 3787:
case 1384:
case 4004:
case 1930:
case 2096:
case 2807:
case 2285:
case 2879:
case 1403:
case 604:
case 1292:
case 3346:
case 4017:
case 430:
case 105:
case 387:
case 1902:
case 2469:
case 3435:
case 1394:
case 1748:
case 743:
case 1282:
case 109:
case 1826:
case 2255:
case 583:
case 197:
case 1755:
case 2194:
case 71:
case 691:
case 3781:
case 2596:
case 849:
case 2154:
case 1437:
case 241:
case 3415:
case 1789:
case 2591:
case 3473:
case 1681:
case 769:
case 3150:
case 4016:
case 2057:
case 3921:
case 3190:
case 581:
case 830:
case 3420:
case 741:
case 2806:
case 1398:
case 3552:
case 2640:
case 2860:
case 2551:
case 3695:
case 693:
case 967:
case 325:
case 1462:
case 2909:
case 518:
case 4003:
case 2813:
case 3868:
case 1657:
case 3648:
case 4031:
case 1417:
case 2081:
case 243:
case 1345:
case 2289:
case 2875:
case 329:
case 3082:
case 1812:
case 2294:
case 2148:
case 1395:
case 2936:
case 3823:
case 822:
case 2463:
case 948:
case 1647:
case 3658:
case 2195:
case 1580:
case 1754:
case 2878:
case 3912:
case 3357:
case 2425:
case 680:
case 416:
case 1970:
case 2839:
case 2690:
case 1471:
case 3683:
case 2650:
case 3542:
case 1182:
case 764:
case 3967:
case 2546:
case 2258:
case 1745:
case 286:
case 264:
case 1783:
case 2144:
case 590:
case 319:
case 342:
case 2916:
case 2931:
case 926:
case 1405:
case 2283:
case 3932:
case 104:
case 1389:
case 3966:
case 2293:
case 605:
case 3396:
case 1242:
case 816:
case 3900:
case 3824:
case 930:
case 2464:
case 1969:
case 3356:
case 2046:
case 529:
case 1866:
case 963:
case 2908:
case 867:
case 2937:
case 2159:
case 1800:
case 4071:
case 1924:
case 2429:
case 3684:
case 525:
case 2742:
case 422:
case 2835:
case 1793:
case 3413:
case 3746:
case 2680:
case 1152:
case 3475:
case 1550:
case 2143:
case 3387:
case 1192:
case 1861:
case 747:
case 587:
case 2917:
case 2820:
case 63:
case 3406:
case 2249:
case 3351:
case 1928:
case 945:
case 444:
case 3460:
case 2284:
case 949:
case 514:
case 2815:
case 2547:
case 2392:
case 2904:
case 2873:
case 1409:
case 1343:
case 2012:
case 942:
case 3321:
case 2703:
case 544:
case 3219:
case 2322:
case 3011:
case 2850:
case 828:
case 2890:
case 3732:
case 3845:
case 414:
case 2678:
case 890:
case 915:
case 3858:
case 1492:
case 2309:
case 2716:
case 3623:
case 633:
case 1983:
case 3036:
case 326:
case 3898:
case 1520:
case 1452:
case 1612:
case 2129:
case 1364:
case 3278:
case 2674:
case 348:
case 429:
case 1723:
case 2032:
case 2711:
case 924:
case 3712:
case 3003:
case 2619:
case 1535:
case 3894:
case 3101:
case 602:
case 1329:
case 2736:
case 137:
case 1211:
case 1765:
case 1632:
case 3326:
case 1074:
case 846:
case 3133:
case 3503:
case 2704:
case 2635:
case 3008:
case 3761:
case 1728:
case 3215:
case 173:
case 3273:
case 1846:
case 983:
case 2066:
case 428:
case 1949:
case 2444:
case 223:
case 3516:
case 1330:
case 2489:
case 2000:
case 2228:
case 349:
case 3179:
case 361:
case 345:
case 3946:
case 1363:
case 2110:
case 1171:
case 3941:
case 2615:
case 1724:
case 330:
case 1482:
case 3888:
case 2125:
case 171:
case 2061:
case 2737:
case 2495:
case 2269:
case 3235:
case 2620:
case 567:
case 1020:
case 1769:
case 1237:
case 3536:
case 1661:
case 1310:
case 1841:
case 918:
case 1988:
case 2224:
case 1539:
case 3134:
case 2880:
case 2448:
case 1073:
case 213:
case 3238:
case 3071:
case 3279:
case 3885:
case 2498:
case 2072:
case 3207:
case 322:
case 1506:
case 1730:
case 3663:
case 3843:
case 3577:
case 1627:
case 788:
case 1104:
case 1162:
case 2445:
case 711:
case 200:
case 1328:
case 2027:
case 3951:
case 1985:
case 86:
case 3625:
case 2952:
case 133:
case 1018:
case 2317:
case 1672:
case 3115:
case 946:
case 1034:
case 2483:
case 762:
case 24:
case 3361:
case 1887:
case 3173:
case 3522:
case 2526:
case 3300:
case 842:
case 6:
case 3218:
case 1725:
case 2614:
case 3366:
case 1959:
case 606:
case 2679:
case 74:
case 3772:
case 1999:
case 2607:
case 990:
case 815:
case 344:
case 3005:
case 2638:
case 3234:
case 131:
case 1271:
case 1038:
case 2308:
case 3859:
case 1079:
case 1856:
case 1014:
case 1763:
case 483:
case 2225:
case 3135:
case 1501:
case 1324:
case 2169:
case 370:
case 3727:
case 1886:
case 1222:
case 656:
case 3664:
case 3844:
case 530:
case 3602:
case 881:
case 673:
case 3275:
case 3889:
case 3119:
case 3986:
case 3332:
case 1626:
case 1277:
case 1768:
case 3576:
case 152:
case 3721:
case 1579:
case 424:
case 367:
case 2484:
case 1989:
case 3726:
case 1995:
case 1365:
case 2675:
case 3009:
case 3077:
case 2202:
case 1857:
case 3480:
case 2123:
case 2572:
case 3981:
case 1955:
case 3233:
case 883:
case 2982:
case 2336:
case 987:
case 3895:
case 2840:
case 2660:
case 2488:
case 1370:
case 442:
case 2021:
case 1948:
case 561:
case 3139:
case 3367:
case 914:
case 1013:
case 549:
case 415:
case 1881:
case 512:
case 1518:
case 1075:
case 1323:
case 2527:
case 3087:
case 3153:
case 1595:
case 2180:
case 674:
case 2685:
case 1652:
case 3818:
case 2643:
case 988:
case 178:
case 1467:
case 2756:
case 2582:
case 3193:
case 1555:
case 3465:
case 3091:
case 4000:
case 1934:
case 3557:
case 1548:
case 1256:
case 2825:
case 1043:
case 3188:
case 3299:
case 2052:
case 586:
case 60:
case 1918:
case 962:
case 3259:
case 1871:
case 2341:
case 2810:
case 3051:
case 2927:
case 3905:
case 900:
case 1291:
case 1432:
case 866:
case 639:
case 3243:
case 884:
case 3814:
case 1876:
case 3056:
case 3285:
case 3879:
case 635:
case 382:
case 3096:
case 2787:
case 421:
case 1146:
case 2751:
case 817:
case 2419:
case 1914:
case 3976:
case 1544:
case 1907:
case 2830:
case 192:
case 3149:
case 2926:
case 3154:
case 927:
case 341:
case 4012:
case 1559:
case 1297:
case 3596:
case 1599:
case 3248:
case 2802:
case 3424:
case 2689:
case 3255:
case 638:
case 1089:
case 2757:
case 1044:
case 1466:
case 729:
case 2797:
case 2435:
case 725:
case 3469:
case 3295:
case 2829:
case 134:
case 2240:
case 229:
case 2082:
case 1390:
case 1055:
case 1960:
case 3875:
case 417:
case 3081:
case 343:
case 821:
case 787:
case 3587:
case 1822:
case 225:
case 1350:
case 3158:
case 1147:
case 175:
case 3640:
case 1975:
case 3860:
case 2420:
case 3097:
case 2552:
case 65:
case 3145:
case 2190:
case 1913:
case 2592:
case 1048:
case 3183:
case 1809:
case 1543:
case 2150:
case 2655:
case 3922:
case 714:
case 2415:
case 800:
case 2967:
case 3155:
case 1472:
case 2542:
case 1098:
case 582:
case 174:
case 1181:
case 1836:
case 984:
case 3541:
case 3410:
case 26:
case 3839:
case 2645:
case 2865:
case 678:
case 2912:
case 2357:
case 84:
case 3047:
case 3254:
case 2418:
case 3463:
case 1197:
case 1045:
case 568:
case 10:
case 3294:
case 1978:
case 3430:
case 1054:
case 3874:
case 196:
case 3245:
case 2250:
case 2386:
case 135:
case 3283:
case 724:
case 3931:
case 3819:
case 1094:
case 242:
case 2407:
case 1803:
case 4021:
case 219:
case 2438:
case 3144:
case 427:
case 1584:
case 364:
case 1750:
case 3546:
case 1831:
case 3258:
case 1919:
case 2414:
case 2869:
case 1594:
case 3835:
case 413:
case 347:
case 3199:
case 2741:
case 3937:
case 783:
case 1196:
case 1780:
case 3464:
case 2280:
case 3046:
case 3402:
case 138:
case 885:
case 2401:
case 2824:
case 4027:
case 2900:
case 1241:
case 281:
case 1808:
case 1049:
case 3293:
case 889:
case 634:
case 827:
case 3873:
case 3547:
case 3392:
case 569:
case 2961:
case 3815:
case 2460:
case 2351:
case 850:
case 3249:
case 541:
case 1093:
case 781:
case 3917:
case 462:
case 3820:
case 2042:
case 1973:
case 1191:
case 2693:
case 1421:
case 1583:
case 3143:
case 2828:
case 488:
case 3468:
case 1151:
case 1817:
case 1306:
case 2175:
case 1719:
case 1360:
case 92:
case 226:
case 672:
case 2113:
case 748:
case 1065:
case 3309:
case 3443:
case 3716:
case 3377:
case 3678:
case 2274:
case 153:
case 1023:
case 2732:
case 511:
case 3890:
case 469:
case 3561:
case 562:
case 2011:
case 3850:
case 176:
case 2504:
case 3012:
case 2947:
case 2321:
case 2133:
case 500:
case 4057:
case 41:
case 3566:
case 2326:
case 882:
case 366:
case 384:
case 3270:
case 3736:
case 1569:
case 1603:
case 1212:
case 78:
case 2712:
case 3459:
case 2003:
case 1333:
case 1301:
case 194:
case 2031:
case 2767:
case 3674:
case 3499:
case 443:
case 1069:
case 636:
case 869:
case 245:
case 3305:
case 4051:
case 261:
case 3000:
case 1715:
case 249:
case 2107:
case 4091:
case 212:
case 730:
case 323:
case 1773:
case 3444:
case 550:
case 2138:
case 841:
case 3376:
case 2531:
case 101:
case 1338:
case 4087:
case 3130:
case 1307:
case 3635:
case 2220:
case 2008:
case 2849:
case 2853:
case 1617:
case 2134:
case 2766:
case 2628:
case 3163:
case 947:
case 110:
case 1662:
case 1842:
case 1735:
case 2372:
case 2235:
case 2004:
case 585:
case 2062:
case 3708:
case 1980:
case 3269:
case 3512:
case 81:
case 3737:
case 2440:
case 3125:
case 2511:
case 1523:
case 1172:
case 1200:
case 2327:
case 3110:
case 1481:
case 749:
case 3942:
case 2173:
case 2522:
case 1671:
case 2361:
case 2115:
case 982:
case 744:
case 1779:
case 1707:
case 3362:
case 566:
case 1714:
case 2625:
case 3230:
case 1063:
case 2490:
case 3445:
case 517:
case 2577:
case 3458:
case 1373:
case 2663:
case 2509:
case 3498:
case 2207:
case 222:
case 3128:
case 2885:
case 1010:
case 2071:
case 2238:
case 313:
case 447:
case 3169:
case 2727:
case 1502:
case 82:
case 1564:
case 388:
case 1100:
case 2859:
case 1272:
case 1734:
case 3210:
case 1605:
case 3337:
case 2005:
case 4041:
case 1529:
case 3771:
case 244:
case 362:
case 2772:
case 651:
case 3494:
case 1335:
case 3607:
case 198:
case 694:
case 1676:
case 3263:
case 886:
case 864:
case 2996:
case 1227:
case 3722:
case 3484:
case 2174:
case 2629:
case 2721:
case 3449:
case 847:
case 3331:
case 1002:
case 1713:
case 943:
case 195:
case 2119:
case 2986:
case 3601:
case 2889:
case 3026:
case 2844:
case 2602:
case 2213:
case 3709:
case 601:
case 1221:
case 2505:
case 385:
case 1226:
case 3527:
case 1882:
case 2855:
case 1563:
case 2997:
case 2367:
case 1068:
case 464:
case 327:
case 486:
case 3660:
case 3488:
case 2895:
case 1510:
case 3982:
case 1622:
case 3572:
case 3123:
case 3493:
case 3202:
case 1378:
case 2668:
case 3170:
case 3453:
case 2009:
case 1339:
case 2726:
case 2055:
case 2960:
case 2390:
case 591:
case 1648:
case 3657:
case 3417:
case 554:
case 734:
case 2095:
case 2147:
case 125:
case 406:
case 2975:
case 275:
case 1786:
case 1695:
case 2913:
case 1552:
case 3398:
case 1420:
case 1150:
case 3681:
case 1921:
case 2877:
case 279:
case 1415:
case 1655:
case 593:
case 2297:
case 618:
case 2559:
case 358:
case 2257:
case 779:
case 1781:
case 114:
case 3755:
case 3929:
case 49:
case 2400:
case 2933:
case 2089:
case 856:
case 1757:
case 2466:
case 3902:
case 3964:
case 681:
case 1797:
case 2901:
case 1829:
case 2432:
case 2291:
case 2876:
case 3431:
case 1346:
case 837:
case 3349:
case 2059:
case 146:
case 619:
case 2805:
case 1751:
case 642:
case 1659:
case 3785:
case 8:
case 2914:
case 1419:
case 4020:
case 2907:
case 1699:
case 3416:
case 806:
case 2544:
case 1474:
case 4015:
case 2938:
case 2589:
case 1791:
case 778:
case 1180:
case 3411:
case 3540:
case 931:
case 3925:
case 902:
case 1685:
case 3759:
case 2467:
case 2692:
case 473:
case 1972:
case 3799:
case 1863:
case 1582:
case 792:
case 3827:
case 380:
case 1825:
case 2548:
case 1092:
case 128:
case 2085:
case 3393:
case 624:
case 1052:
case 2296:
case 2871:
case 1341:
case 2246:
case 3477:
case 629:
case 738:
case 1391:
case 558:
case 2093:
case 625:
case 3749:
case 2421:
case 4079:
case 4007:
case 2642:
case 505:
case 2191:
case 402:
case 3422:
case 3784:
case 2915:
case 2583:
case 4038:
case 956:
case 1828:
case 1475:
case 2545:
case 4014:
case 183:
case 2920:
case 1746:
case 2594:
case 53:
case 3924:
case 354:
case 852:
case 391:
case 3866:
case 2935:
case 4018:
case 3969:
case 1280:
case 3788:
case 4034:
case 2241:
case 1900:
case 181:
case 1966:
case 2049:
case 3359:
case 1396:
case 3242:
case 2054:
case 3344:
case 1747:
case 3758:
case 831:
case 99:
case 296:
case 239:
case 1932:
case 1386:
case 4060:
case 4006:
case 2549:
case 142:
case 2750:
case 1438:
case 3783:
case 2790:
case 4075:
case 3832:
case 1414:
case 1654:
case 2593:
case 16:
case 2181:
case 3970:
case 1645:
case 1912:
case 3580:
case 1140:
case 1381:
case 559:
case 796:
case 3867:
case 3647:
case 2427:
case 240:
case 2197:
case 2045:
case 1823:
case 3355:
case 2811:
case 124:
case 2588:
case 906:
case 3395:
case 3812:
case 1698:
case 555:
case 690:
case 452:
case 1134:
case 2457:
case 1853:
case 163:
case 2617:
case 3988:
case 3015:
case 1700:
case 732:
case 3841:
case 3310:
case 455:
case 1118:
case 2842:
case 2735:
case 3020:
case 210:
case 3953:
case 2570:
case 1440:
case 1511:
case 371:
case 2334:
case 1941:
case 2200:
case 1327:
case 3724:
case 2172:
case 2523:
case 1017:
case 2266:
case 3171:
case 3204:
case 3519:
case 993:
case 2069:
case 667:
case 858:
case 161:
case 2637:
case 145:
case 3984:
case 1107:
case 2715:
case 1624:
case 149:
case 3574:
case 1138:
case 1516:
case 373:
case 3105:
case 1531:
case 3666:
case 480:
case 1037:
case 1761:
case 2338:
case 1849:
case 577:
case 1008:
case 2307:
case 2778:
case 1016:
case 533:
case 3632:
case 3765:
case 1326:
case 753:
case 808:
case 3329:
case 3211:
case 3535:
case 1101:
case 2212:
case 776:
case 1712:
case 2496:
case 1508:
case 3770:
case 306:
case 4040:
case 251:
case 1537:
case 3236:
case 2524:
case 3:
case 294:
case 855:
case 2616:
case 560:
case 3302:
case 1898:
case 3452:
case 751:
case 880:
case 2451:
case 2990:
case 1036:
case 1113:
case 2611:
case 405:
case 2360:
case 1670:
case 2950:
case 2491:
case 1623:
case 2065:
case 2121:
case 3515:
case 3983:
case 3667:
case 2774:
case 3847:
case 3078:
case 3231:
case 3492:
case 3122:
case 3573:
case 253:
case 3998:
case 2313:
case 1274:
case 2528:
case 1845:
case 2023:
case 2375:
case 1106:
case 276:
case 3109:
case 2487:
case 1011:
case 1883:
case 2636:
case 3958:
case 1321:
case 1562:
case 2701:
case 3323:
case 2226:
case 3702:
case 2068:
case 2677:
case 1997:
case 3881:
case 958:
case 2609:
case 3518:
case 1957:
case 707:
case 3534:
case 1178:
case 1895:
case 3370:
case 3955:
case 404:
case 1233:
case 3060:
case 1571:
case 2167:
case 3621:
case 556:
case 1981:
case 3006:
case 630:
case 2525:
case 2378:
case 1077:
case 1848:
case 3857:
case 1480:
case 795:
case 2112:
case 909:
case 2940:
case 299:
case 1629:
case 3538:
case 4050:
case 1206:
case 352:
case 891:
case 645:
case 1721:
case 3944:
case 612:
case 3277:
case 2002:
case 2064:
case 649:
case 3514:
case 295:
case 1119:
case 1986:
case 116:
case 1213:
case 2374:
case 571:
case 2319:
case 2706:
case 207:
case 3222:
case 1135:
case 980:
case 1727:
case 2502:
case 2564:
case 3763:
case 3014:
case 2718:
case 2272:
case 302:
case 1859:
case 2734:
case 3038:
case 3271:
case 331:
case 3533:
case 2529:
case 772:
case 3710:
case 1005:
case 3369:
case 1956:
case 2335:
case 3999:
case 2030:
case 1996:
case 1218:
case 3137:
case 87:
case 1300:
case 648:
case 3108:
case 1361:
case 1522:
case 1173:
case 1450:
case 272:
case 537:
case 3672:
case 3985:
case 908:
case 3018:
case 333:
case 1120:
case 1951:
case 3328:
case 3627:
case 491:
case 2315:
case 3104:
case 959:
case 3162:
case 1843:
case 1509:
case 2161:
case 2447:
case 3276:
case 2892:
case 1885:
case 3506:
case 122:
case 3117:
case 3560:
case 454:
case 3851:
case 955:
case 2010:
case 1238:
case 1071:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757383202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,];
var gg_b = "1757383202/";

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
