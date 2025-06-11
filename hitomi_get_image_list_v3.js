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
case 615:
case 660:
case 4003:
case 3139:
case 1999:
case 3395:
case 1223:
case 1408:
case 3044:
case 2993:
case 2806:
case 880:
case 3018:
case 983:
case 2085:
case 2437:
case 2757:
case 2229:
case 355:
case 334:
case 3899:
case 3397:
case 1065:
case 102:
case 1532:
case 2822:
case 2435:
case 2481:
case 2755:
case 966:
case 2740:
case 638:
case 919:
case 1245:
case 2696:
case 4057:
case 3191:
case 1356:
case 1709:
case 1250:
case 2166:
case 1093:
case 3661:
case 592:
case 3277:
case 3022:
case 2317:
case 3913:
case 3885:
case 4040:
case 2457:
case 794:
case 2051:
case 2098:
case 1247:
case 1987:
case 4055:
case 985:
case 3006:
case 129:
case 1761:
case 787:
case 2510:
case 1416:
case 3275:
case 3858:
case 1113:
case 2038:
case 3187:
case 123:
case 2866:
case 2624:
case 3417:
case 3011:
case 1959:
case 938:
case 1468:
case 4072:
case 772:
case 2489:
case 2584:
case 1020:
case 3986:
case 666:
case 2636:
case 1958:
case 2118:
case 3415:
case 1276:
case 960:
case 2144:
case 717:
case 3859:
case 567:
case 1005:
case 3547:
case 1886:
case 2763:
case 685:
case 251:
case 2907:
case 2920:
case 2772:
case 1592:
case 2788:
case 3523:
case 3198:
case 2495:
case 3151:
case 2656:
case 1938:
case 865:
case 810:
case 3668:
case 1290:
case 742:
case 3199:
case 1768:
case 1939:
case 1615:
case 3381:
case 2905:
case 1701:
case 2811:
case 71:
case 901:
case 1783:
case 56:
case 125:
case 989:
case 2058:
case 2497:
case 2091:
case 1895:
case 44:
case 3433:
case 3753:
case 1137:
case 328:
case 3069:
case 961:
case 50:
case 624:
case 698:
case 3666:
case 3405:
case 2658:
case 1541:
case 2108:
case 878:
case 1017:
case 1135:
case 1181:
case 1766:
case 3083:
case 2294:
case 477:
case 197:
case 753:
case 3001:
case 1653:
case 4086:
case 3707:
case 3720:
case 2262:
case 2868:
case 550:
case 755:
case 1889:
case 3313:
case 2915:
case 3248:
case 1711:
case 1140:
case 2374:
case 957:
case 2365:
case 232:
case 2639:
case 3214:
case 1466:
case 3249:
case 532:
case 1385:
case 3611:
case 2024:
case 1331:
case 1278:
case 811:
case 2869:
case 3453:
case 1942:
case 19:
case 3733:
case 1888:
case 250:
case 1607:
case 1970:
case 1514:
case 342:
case 3156:
case 1722:
case 1548:
case 2651:
case 2101:
case 3142:
case 31:
case 3009:
case 2183:
case 1855:
case 3957:
case 3008:
case 881:
case 1693:
case 2816:
case 3582:
case 3578:
case 3386:
case 65:
case 1188:
case 1706:
case 2169:
case 924:
case 661:
case 1549:
case 2305:
case 3935:
case 1195:
case 1744:
case 3619:
case 1339:
case 2500:
case 482:
case 759:
case 3124:
case 3016:
case 158:
case 2687:
case 2861:
case 556:
case 3896:
case 3903:
case 2202:
case 3493:
case 1835:
case 2226:
case 2713:
case 114:
case 2307:
case 3937:
case 2809:
case 372:
case 3765:
case 1719:
case 3644:
case 3774:
case 657:
case 1996:
case 2631:
case 2685:
case 3136:
case 1338:
case 1271:
case 1422:
case 2432:
case 563:
case 430:
case 3610:
case 2404:
case 1330:
case 694:
case 628:
case 1073:
case 1062:
case 867:
case 3171:
case 1323:
case 3596:
case 3043:
case 2561:
case 2994:
case 2082:
case 1537:
case 2800:
case 127:
case 1849:
case 139:
case 210:
case 1557:
case 2962:
case 4046:
case 738:
case 2312:
case 68:
case 3878:
case 3272:
case 3375:
case 3882:
case 3948:
case 3364:
case 851:
case 3914:
case 1979:
case 1180:
case 86:
case 4052:
case 2690:
case 306:
case 917:
case 1555:
case 1978:
case 1345:
case 1242:
case 1848:
case 1094:
case 2452:
case 2732:
case 2217:
case 760:
case 3377:
case 280:
case 1149:
case 1002:
case 1376:
case 2569:
case 4077:
case 436:
case 2143:
case 1034:
case 1880:
case 642:
case 3729:
case 3257:
case 1629:
case 987:
case 133:
case 4075:
case 361:
case 2071:
case 3352:
case 3728:
case 3255:
case 3346:
case 2501:
case 785:
case 1589:
case 3980:
case 3179:
case 928:
case 2954:
case 994:
case 3281:
case 3235:
case 3536:
case 4092:
case 2647:
case 154:
case 269:
case 216:
case 3332:
case 1612:
case 2902:
case 3428:
case 3203:
case 766:
case 1054:
case 1841:
case 98:
case 3712:
case 892:
case 3524:
case 3429:
case 3237:
case 719:
case 1390:
case 2775:
case 1299:
case 2:
case 959:
case 1923:
case 2511:
case 509:
case 2050:
case 3992:
case 3084:
case 1132:
case 2293:
case 3830:
case 2045:
case 4041:
case 449:
case 490:
case 3402:
case 2928:
case 3823:
case 1251:
case 3660:
case 2441:
case 2047:
case 5:
case 281:
case 634:
case 1012:
case 3190:
case 2741:
case 301:
case 1029:
case 1231:
case 1945:
case 1285:
case 3349:
case 389:
case 3559:
case 3454:
case 3977:
case 1382:
case 1875:
case 1864:
case 2267:
case 1152:
case 2373:
case 2912:
case 199:
case 479:
case 3850:
case 3314:
case 222:
case 2566:
case 2265:
case 2274:
case 1028:
case 1877:
case 3558:
case 2253:
case 4014:
case 3625:
case 1443:
case 366:
case 473:
case 445:
case 757:
case 2810:
case 2449:
case 3380:
case 934:
case 1259:
case 2354:
case 1164:
case 505:
case 2518:
case 3286:
case 3585:
case 3946:
case 3145:
case 205:
case 1291:
case 1852:
case 1258:
case 2414:
case 3600:
case 3627:
case 3150:
case 2519:
case 2184:
case 659:
case 3794:
case 1177:
case 3462:
case 80:
case 1725:
case 2921:
case 548:
case 3773:
case 3643:
case 75:
case 1425:
case 408:
case 1238:
case 1832:
case 2522:
case 3599:
case 1239:
case 2334:
case 1427:
case 1400:
case 2679:
case 2749:
case 3123:
case 3598:
case 3341:
case 2506:
case 1673:
case 2302:
case 2233:
case 3010:
case 248:
case 3890:
case 807:
case 443:
case 195:
case 1630:
case 2149:
case 2002:
case 837:
case 3723:
case 926:
case 2376:
case 1569:
case 3515:
case 2628:
case 4084:
case 2034:
case 349:
case 271:
case 415:
case 2629:
case 390:
case 1071:
case 438:
case 571:
case 3173:
case 1623:
case 3445:
case 2589:
case 2484:
case 620:
case 1568:
case 3730:
case 401:
case 3209:
case 1934:
case 83:
case 489:
case 3194:
case 2784:
case 1647:
case 1777:
case 254:
case 116:
case 1492:
case 2841:
case 1926:
case 3080:
case 241:
case 535:
case 3261:
case 1127:
case 1100:
case 3208:
case 1764:
case 1775:
case 1645:
case 829:
case 1432:
case 466:
case 3126:
case 2621:
case 419:
case 3894:
case 3048:
case 527:
case 3900:
case 1404:
case 2330:
case 588:
case 920:
case 186:
case 2236:
case 2581:
case 2141:
case 1508:
case 626:
case 2323:
case 3646:
case 3776:
case 3134:
case 2710:
case 483:
case 331:
case 163:
case 1827:
case 1329:
case 227:
case 239:
case 2849:
case 2347:
case 110:
case 165:
case 52:
case 1215:
case 1516:
case 308:
case 3269:
case 3154:
case 2410:
case 485:
case 2979:
case 1690:
case 1704:
case 2555:
case 2978:
case 2345:
case 22:
case 2242:
case 2982:
case 4010:
case 3943:
case 1732:
case 1217:
case 343:
case 375:
case 791:
case 3112:
case 779:
case 330:
case 1544:
case 2259:
case 1354:
case 2727:
case 2164:
case 2175:
case 64:
case 897:
case 2976:
case 2291:
case 2852:
case 2258:
case 3360:
case 1414:
case 3266:
case 352:
case 1184:
case 921:
case 4043:
case 664:
case 593:
case 2177:
case 2725:
case 884:
case 3004:
case 1921:
case 3046:
case 1207:
case 595:
case 790:
case 4000:
case 1682:
case 3593:
case 1326:
case 3128:
case 246:
case 2832:
case 2238:
case 1522:
case 3211:
case 103:
case 3052:
case 3649:
case 647:
case 2021:
case 2239:
case 2427:
case 3614:
case 982:
case 4025:
case 89:
case 1679:
case 1749:
case 3778:
case 3648:
case 67:
case 2673:
case 2743:
case 1233:
case 546:
case 148:
case 111:
case 1076:
case 2662:
case 1394:
case 3680:
case 1:
case 2104:
case 977:
case 2654:
case 3077:
case 1511:
case 1050:
case 3325:
case 1293:
case 3520:
case 391:
case 3075:
case 1928:
case 3533:
case 2892:
case 2251:
case 708:
case 109:
case 3505:
case 1441:
case 1047:
case 3829:
case 181:
case 2930:
case 3327:
case 3300:
case 1780:
case 3218:
case 1671:
case 858:
case 2231:
case 2285:
case 2586:
case 1480:
case 2950:
case 1110:
case 731:
case 2382:
case 3553:
case 796:
case 2875:
case 862:
case 2626:
case 2152:
case 1373:
case 2602:
case 1912:
case 1884:
case 540:
case 745:
case 947:
case 1274:
case 2028:
case 814:
case 2146:
case 3771:
case 2113:
case 3442:
case 167:
case 2577:
case 4069:
case 1797:
case 1866:
case 223:
case 1624:
case 2959:
case 1119:
case 2468:
case 630:
case 3165:
case 312:
case 3174:
case 2020:
case 3695:
case 2401:
case 3736:
case 1636:
case 2469:
case 1118:
case 2564:
case 3853:
case 2276:
case 1488:
case 936:
case 827:
case 668:
case 2370:
case 991:
case 1144:
case 652:
case 2005:
case 3697:
case 1463:
case 523:
case 1221:
case 1472:
case 1039:
case 4068:
case 888:
case 720:
case 151:
case 3424:
case 3805:
case 1642:
case 1059:
case 1788:
case 3833:
case 3911:
case 839:
case 1656:
case 2938:
case 2769:
case 2053:
case 3361:
case 2290:
case 1789:
case 82:
case 3309:
case 3820:
case 3807:
case 2615:
case 1905:
case 3756:
case 1811:
case 3742:
case 3672:
case 3193:
case 3528:
case 225:
case 1058:
case 144:
case 1497:
case 691:
case 442:
case 3105:
case 871:
case 636:
case 3922:
case 41:
case 952:
case 237:
case 1085:
case 1437:
case 1031:
case 321:
case 3107:
case 202:
case 1403:
case 2532:
case 1822:
case 1435:
case 1087:
case 1755:
case 3906:
case 0:
case 2336:
case 2951:
case 704:
case 1111:
case 1670:
case 2409:
case 2504:
case 2931:
case 3301:
case 2985:
case 854:
case 2813:
case 1696:
case 1455:
case 835:
case 2250:
case 3368:
case 1440:
case 3284:
case 3874:
case 4016:
case 3865:
case 1317:
case 3383:
case 23:
case 1703:
case 3153:
case 3603:
case 1212:
case 1098:
case 2987:
case 229:
case 1974:
case 192:
case 1965:
case 1510:
case 472:
case 2708:
case 2416:
case 1315:
case 3867:
case 841:
case 2186:
case 2514:
case 3003:
case 2722:
case 2391:
case 2548:
case 1101:
case 2855:
case 77:
case 4018:
case 3081:
case 2840:
case 2163:
case 434:
case 320:
case 2693:
case 4019:
case 2172:
case 3037:
case 3751:
case 3431:
case 3115:
case 2418:
case 1169:
case 2359:
case 2857:
case 1699:
case 945:
case 2444:
case 2549:
case 2406:
case 2195:
case 3731:
case 3785:
case 975:
case 3909:
case 1234:
case 262:
case 2665:
case 1527:
case 514:
case 777:
case 4022:
case 1333:
case 1808:
case 74:
case 2835:
case 1525:
case 1713:
case 4006:
case 3055:
case 1809:
case 2719:
case 3961:
case 712:
case 2803:
case 2996:
case 1685:
case 3311:
case 3502:
case 4011:
case 2137:
case 2015:
case 990:
case 3200:
case 3072:
case 645:
case 2541:
case 3063:
case 2936:
case 2351:
case 3686:
case 2135:
case 2181:
case 696:
case 876:
case 631:
case 1109:
case 10:
case 949:
case 2897:
case 2399:
case 1294:
case 1056:
case 459:
case 2924:
case 1393:
case 2103:
case 1868:
case 2387:
case 1036:
case 608:
case 1883:
case 3969:
case 304:
case 2155:
case 2605:
case 3491:
case 2711:
case 1374:
case 2279:
case 1365:
case 979:
case 3739:
case 643:
case 675:
case 2863:
case 2580:
case 2331:
case 1486:
case 895:
case 1638:
case 2956:
case 107:
case 3318:
case 1116:
case 3243:
case 1869:
case 2942:
case 2888:
case 3095:
case 150:
case 1917:
case 2620:
case 3548:
case 3722:
case 1606:
case 3419:
case 2366:
case 2003:
case 836:
case 671:
case 1474:
case 3189:
case 3970:
case 1579:
case 3840:
case 2081:
case 2035:
case 4031:
case 1957:
case 3855:
case 1793:
case 1142:
case 3172:
case 1582:
case 1467:
case 220:
case 1008:
case 1870:
case 3549:
case 3444:
case 633:
case 3857:
case 3359:
case 3706:
case 1955:
case 2115:
case 2798:
case 1578:
case 3665:
case 362:
case 3339:
case 2909:
case 1619:
case 654:
case 3744:
case 3674:
case 2498:
case 2785:
case 3195:
case 2057:
case 92:
case 3406:
case 1241:
case 1935:
case 1896:
case 2613:
case 358:
case 117:
case 1124:
case 4051:
case 1937:
case 314:
case 3197:
case 3881:
case 3422:
case 1136:
case 3338:
case 1618:
case 3996:
case 3803:
case 1774:
case 1644:
case 2594:
case 939:
case 172:
case 467:
case 474:
case 3015:
case 1069:
case 2502:
case 1753:
case 3895:
case 1196:
case 2306:
case 3541:
case 1824:
case 2072:
case 2439:
case 2200:
case 2227:
case 933:
case 384:
case 3399:
case 971:
case 1083:
case 3181:
case 2322:
case 3135:
case 2791:
case 1571:
case 868:
case 2686:
case 73:
case 2089:
case 2526:
case 2225:
case 1001:
case 3924:
case 1420:
case 688:
case 1856:
case 4059:
case 3889:
case 1963:
case 3387:
case 1720:
case 3466:
case 918:
case 2817:
case 3279:
case 3140:
case 639:
case 1842:
case 1248:
case 18:
case 1988:
case 3605:
case 3155:
case 2738:
case 504:
case 3331:
case 2901:
case 62:
case 3580:
case 1249:
case 1989:
case 3863:
case 2554:
case 954:
case 2459:
case 2739:
case 737:
case 4058:
case 4091:
case 1733:
case 3282:
case 3942:
case 1453:
case 2243:
case 2815:
case 1011:
case 564:
case 577:
case 1187:
case 2442:
case 1858:
case 1891:
case 2456:
case 1246:
case 3401:
case 3020:
case 2174:
case 970:
case 212:
case 3468:
case 3959:
case 2966:
case 3033:
case 4042:
case 762:
case 3370:
case 3575:
case 831:
case 3991:
case 2316:
case 3469:
case 3958:
case 2512:
case 1547:
case 277:
case 2697:
case 4056:
case 1859:
case 3592:
case 2805:
case 2086:
case 2424:
case 3617:
case 808:
case 1337:
case 4036:
case 2361:
case 3053:
case 2308:
case 3938:
case 2911:
case 1198:
case 3396:
case 2833:
case 2436:
case 3615:
case 843:
case 1381:
case 1335:
case 875:
case 407:
case 2820:
case 1204:
case 3939:
case 940:
case 2663:
case 1717:
case 325:
case 1232:
case 1066:
case 2672:
case 2922:
case 2105:
case 3408:
case 1395:
case 976:
case 2640:
case 3461:
case 221:
case 3324:
case 1018:
case 337:
case 1851:
case 1898:
case 1292:
case 2133:
case 79:
case 1019:
case 1397:
case 1899:
case 521:
case 2657:
case 155:
case 670:
case 3230:
case 3998:
case 3951:
case 890:
case 1661:
case 1389:
case 3356:
case 1608:
case 2918:
case 3546:
case 3342:
case 4070:
case 282:
case 2637:
case 797:
case 2865:
case 1022:
case 2874:
case 1363:
case 3987:
case 2521:
case 1885:
case 1913:
case 2603:
case 1372:
case 2153:
case 879:
case 3186:
case 1388:
case 2796:
case 2867:
case 3416:
case 1159:
case 2919:
case 741:
case 4079:
case 166:
case 1952:
case 2567:
case 2112:
case 1625:
case 1876:
case 3175:
case 1585:
case 2478:
case 902:
case 3727:
case 1380:
case 3694:
case 552:
case 1794:
case 2479:
case 4082:
case 826:
case 252:
case 183:
case 937:
case 2360:
case 3258:
case 3852:
case 3291:
case 3976:
case 1145:
case 2004:
case 376:
case 1473:
case 1462:
case 3177:
case 530:
case 2128:
case 2593:
case 804:
case 465:
case 2046:
case 3804:
case 1130:
case 929:
case 185:
case 2779:
case 2211:
case 3371:
case 1341:
case 93:
case 1598:
case 1123:
case 2778:
case 3427:
case 2614:
case 3239:
case 625:
case 3662:
case 771:
case 1010:
case 2782:
case 3192:
case 1932:
case 3923:
case 1538:
case 2828:
case 2471:
case 480:
case 2680:
case 1830:
case 160:
case 2507:
case 2325:
case 3132:
case 1084:
case 72:
case 1823:
case 591:
case 923:
case 3012:
case 2327:
case 1754:
case 1434:
case 2505:
case 2206:
case 3251:
case 602:
case 3892:
case 2092:
case 1454:
case 1349:
case 189:
case 63:
case 3586:
case 3285:
case 3029:
case 1176:
case 3378:
case 2218:
case 3626:
case 416:
case 2343:
case 1702:
case 3875:
case 2553:
case 469:
case 1977:
case 727:
case 399:
case 1213:
case 1726:
case 3460:
case 1964:
case 1558:
case 2771:
case 3146:
case 1975:
case 3877:
case 2219:
case 1314:
case 2960:
case 821:
case 1178:
case 3270:
case 997:
case 1257:
case 1729:
case 3563:
case 2041:
case 3880:
case 249:
case 3034:
case 1182:
case 3572:
case 3628:
case 746:
case 15:
case 2692:
case 549:
case 161:
case 333:
case 2162:
case 3629:
case 2730:
case 3114:
case 3484:
case 1179:
case 3589:
case 3148:
case 409:
case 1556:
case 1255:
case 3784:
case 658:
case 2194:
case 2430:
case 1235:
case 1536:
case 2826:
case 2664:
case 882:
case 2675:
case 1203:
case 3612:
case 1332:
case 335:
case 157:
case 2677:
case 279:
case 1237:
case 1429:
case 1524:
case 341:
case 2834:
case 1712:
case 3841:
case 3054:
case 4030:
case 2423:
case 2802:
case 2208:
case 3971:
case 422:
case 2261:
case 273:
case 531:
case 198:
case 124:
case 2894:
case 1297:
case 478:
case 3621:
case 596:
case 4090:
case 1171:
case 3236:
case 3062:
case 3073:
case 3330:
case 2900:
case 2927:
case 3710:
case 697:
case 2490:
case 388:
case 2776:
case 1596:
case 2652:
case 2925:
case 2102:
case 1392:
case 327:
case 573:
case 3224:
case 231:
case 1272:
case 1421:
case 3347:
case 770:
case 575:
case 1570:
case 3180:
case 2604:
case 914:
case 1364:
case 2476:
case 1882:
case 1288:
case 1375:
case 847:
case 3345:
case 2201:
case 69:
case 2873:
case 3256:
case 2268:
case 958:
case 106:
case 1289:
case 2384:
case 3540:
case 1879:
case 962:
case 243:
case 3982:
case 3848:
case 32:
case 3511:
case 1077:
case 1471:
case 1222:
case 81:
case 3045:
case 2830:
case 3293:
case 1325:
case 2084:
case 4034:
case 1533:
case 3928:
case 1075:
case 238:
case 765:
case 1206:
case 309:
case 1505:
case 3110:
case 2734:
case 2559:
case 289:
case 2349:
case 2847:
case 817:
case 3671:
case 3267:
case 1343:
case 1553:
case 454:
case 3023:
case 441:
case 213:
case 692:
case 3884:
case 2213:
case 4054:
case 3912:
case 872:
case 501:
case 2964:
case 2558:
case 786:
case 3274:
case 3566:
case 322:
case 1219:
case 2314:
case 219:
case 130:
case 3090:
case 266:
case 2952:
case 2625:
case 2876:
case 1482:
case 894:
case 828:
case 2531:
case 2946:
case 1821:
case 2286:
case 3518:
case 3354:
case 583:
case 674:
case 4073:
case 488:
case 1574:
case 3184:
case 152:
case 2150:
case 3414:
case 2627:
case 1266:
case 283:
case 305:
case 3448:
case 2145:
case 566:
case 1004:
case 716:
case 769:
case 2462:
case 168:
case 2587:
case 88:
case 3220:
case 3207:
case 1046:
case 3714:
case 651:
case 285:
case 1052:
case 3506:
case 1778:
case 1648:
case 3749:
case 780:
case 1614:
case 3076:
case 1129:
case 2890:
case 348:
case 4094:
case 493:
case 298:
case 2297:
case 1014:
case 1126:
case 3328:
case 3752:
case 3432:
case 2171:
case 3746:
case 2610:
case 1927:
case 1900:
case 3509:
case 3082:
case 3994:
case 1490:
case 1776:
case 1646:
case 859:
case 3508:
case 1652:
case 196:
case 1925:
case 476:
case 2392:
case 60:
case 3329:
case 363:
case 3800:
case 3827:
case 131:
case 598:
case 2000:
case 365:
case 310:
case 2263:
case 2570:
case 1790:
case 506:
case 1154:
case 1269:
case 956:
case 3704:
case 1268:
case 7:
case 4021:
case 175:
case 143:
case 3217:
case 1943:
case 1960:
case 1515:
case 3475:
case 1310:
case 3630:
case 380:
case 2257:
case 748:
case 1041:
case 3792:
case 2182:
case 2352:
case 1692:
case 3477:
case 3071:
case 261:
case 470:
case 1730:
case 2980:
case 2179:
case 3623:
case 3501:
case 2346:
case 2255:
case 703:
case 2556:
case 1194:
case 950:
case 1430:
case 1750:
case 2941:
case 1664:
case 1745:
case 4029:
case 316:
case 440:
case 557:
case 2060:
case 3647:
case 1747:
case 499:
case 2237:
case 2429:
case 1080:
case 2712:
case 3926:
case 200:
case 3645:
case 3764:
case 1208:
case 1261:
case 4028:
case 2069:
case 1088:
case 1502:
case 686:
case 2753:
case 2196:
case 4007:
case 3786:
case 1306:
case 3658:
case 1534:
case 1072:
case 2666:
case 287:
case 2083:
case 3042:
case 30:
case 587:
case 3659:
case 663:
case 1322:
case 1791:
case 1758:
case 2571:
case 2068:
case 126:
case 2836:
case 1089:
case 1526:
case 3393:
case 528:
case 2001:
case 2407:
case 2420:
case 4005:
case 885:
case 2856:
case 3273:
case 2972:
case 2313:
case 3036:
case 3868:
case 332:
case 665:
case 610:
case 28:
case 2988:
case 1491:
case 1458:
case 104:
case 3883:
case 1969:
case 3116:
case 307:
case 58:
case 3486:
case 2249:
case 2170:
case 1554:
case 1739:
case 969:
case 350:
case 3869:
case 3367:
case 1815:
case 3101:
case 3651:
case 3698:
case 860:
case 2606:
case 1916:
case 2465:
case 4067:
case 2474:
case 963:
case 2579:
case 437:
case 2957:
case 680:
case 744:
case 1573:
case 2793:
case 3183:
case 2142:
case 3413:
case 986:
case 3353:
case 2582:
case 120:
case 751:
case 542:
case 2940:
case 3699:
case 3169:
case 1115:
case 2386:
case 1431:
case 2578:
case 1751:
case 1037:
case 3234:
case 1909:
case 2619:
case 1731:
case 2241:
case 616:
case 2767:
case 2903:
case 43:
case 2124:
case 3809:
case 774:
case 3320:
case 3307:
case 1787:
case 3713:
case 3525:
case 2493:
case 813:
case 2136:
case 1908:
case 3685:
case 1499:
case 910:
case 1594:
case 2765:
case 1922:
case 1105:
case 2395:
case 1496:
case 1770:
case 2590:
case 2139:
case 534:
case 6:
case 750:
case 2898:
case 2292:
case 1133:
case 905:
case 3806:
case 3993:
case 2044:
case 609:
case 2397:
case 234:
case 2899:
case 1120:
case 978:
case 1013:
case 732:
case 3481:
case 861:
case 2661:
case 2389:
case 1944:
case 948:
case 3166:
case 1918:
case 2191:
case 3781:
case 3455:
case 1301:
case 3703:
case 3967:
case 182:
case 1865:
case 253:
case 3317:
case 3819:
case 458:
case 2006:
case 3844:
case 553:
case 414:
case 3051:
case 3737:
case 3457:
case 3212:
case 3818:
case 2831:
case 1521:
case 2913:
case 1603:
case 2275:
case 857:
case 3315:
case 1867:
case 2264:
case 1919:
case 3510:
case 3974:
case 559:
case 3624:
case 2417:
case 3797:
case 374:
case 1442:
case 2252:
case 2891:
case 1456:
case 2246:
case 2545:
case 824:
case 898:
case 3584:
case 3489:
case 1174:
case 2550:
case 1210:
case 2131:
case 2185:
case 4017:
case 3488:
case 2415:
case 1512:
case 1167:
case 605:
case 3472:
case 2547:
case 3463:
case 2859:
case 1724:
case 603:
case 3059:
case 36:
case 2683:
case 2839:
case 3907:
case 3763:
case 922:
case 2668:
case 2715:
case 3106:
case 1308:
case 2151:
case 3495:
case 2601:
case 2198:
case 3788:
case 1756:
case 3905:
case 2381:
case 1807:
case 1309:
case 3789:
case 3091:
case 3058:
case 2232:
case 1193:
case 2066:
case 2303:
case 1742:
case 806:
case 49:
case 3811:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749618008/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,];
var gg_b = "1749618008/";

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
